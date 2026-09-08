/**
 * Deciding whether the microphone can be opened at all — BEFORE anything
 * native is asked to open it.
 *
 * Why this exists, precisely
 * --------------------------
 * Entering the classroom killed the process. Not an exception, not a rejected
 * promise — SIGABRT, from
 * `~/Library/Logs/DiagnosticReports/MonkLearning-2026-09-05-212852.ips`:
 *
 *     thread queue: net.siteed.audiostudio.lifecycle   (TRIGGERED)
 *       libsystem_c            abort
 *       AudioToolboxCore       _ReportRPCTimeout(char const*, int)
 *       AudioToolboxCore       _CheckRPCError(char const*, int, int)
 *       libEmbeddedSystemAUs   AURemoteIO::Cleanup()
 *       AudioToolboxCore       -[AUAudioUnit deallocateRenderResources]
 *       AVFAudio               AVAudioIONodeImpl::GetInputFormat(unsigned long)
 *       AVFAudio               -[AVAudioNode inputFormatForBus:]
 *       AVFAudio               -[AVAudioEngine inputNode]
 *       MonkLearning           AudioStreamManager.installTapWithHardwareFormat(...)
 *       MonkLearning           AudioStreamManager.prepareRecording(settings:)
 *       MonkLearning           AudioStreamManager.startRecording(settings:)
 *       MonkLearning           closure #2 in ... AudioStudioModule.definition()
 *
 * Two facts in that stack settle the design:
 *
 *  1. The top frame is `abort()`. `_CheckRPCError` calls it directly when the
 *     audio server does not answer. An `abort()` is not an Objective-C
 *     exception and not a Swift error — nothing unwinds, so no `try/catch`
 *     anywhere above it can see it, in Swift or in JS.
 *  2. It runs on the dispatch queue `net.siteed.audiostudio.lifecycle`, not on
 *     the JS thread. `startRecording` is an Expo `AsyncFunction`, so by the
 *     time the abort happens the JS caller is already parked on an unresolved
 *     promise on another thread. Even a catchable failure there could not be
 *     routed back into the `await`.
 *
 * So the only fix available to JS is to NOT MAKE THE CALL. Everything below is
 * about deciding that beforehand, using APIs that never touch `AVAudioEngine`
 * (and therefore never reach `AURemoteIO`).
 *
 * The information-absence rule
 * ----------------------------
 * Every unknown here resolves to "unavailable", never to "available". That is
 * not defensive habit, it is the specific defect being avoided: audio-studio's
 * own JS wrapper, `audioDeviceManager.getAvailableDevices()`, catches its own
 * native failure and returns a FABRICATED device —
 *
 *     catch (error) { this.availableDevices = [DEFAULT_DEVICE]; ... }
 *
 * — where `DEFAULT_DEVICE` is `{ name: 'Default Microphone', isAvailable: true,
 * capabilities: { sampleRates: [16000, 44100, 48000] } }`. A probe that failed
 * comes back looking exactly like a healthy built-in mic. That wrapper must not
 * be used for this decision; the caller passes the raw native result instead,
 * and a failure arrives here as `null`.
 */

/** What the classroom knows about speaking, at any moment. */
export type MicStatus =
  /** The probe has not finished. Nothing has been started yet. */
  | 'checking'
  /** Permission granted and a usable input exists — safe to open the mic. */
  | 'available'
  /** The student refused the microphone. Settings can fix this. */
  | 'denied'
  /** Permission is fine but there is no input to record from. Settings cannot fix this. */
  | 'no-input'
  /** Anything unknown: module missing, probe threw, probe hung, malformed answer. */
  | 'unavailable';

/** The subset of expo-audio's `PermissionResponse` this decision uses. */
export interface MicPermissionLike {
  granted?: unknown;
  canAskAgain?: unknown;
}

/**
 * One entry of the RAW array from `AudioStudioModule.getAvailableInputDevices`.
 * Everything is optional on purpose — this is untrusted native data, and the
 * point of the exercise is to not invent the fields it omits.
 */
export interface RawInputDevice {
  id?: unknown;
  name?: unknown;
  isAvailable?: unknown;
  capabilities?: { sampleRates?: unknown } | null;
}

export interface MicDecisionInput {
  /** Did `require('@siteed/audio-studio')` succeed? */
  moduleLoaded: boolean;
  /** The permission answer, or `null` if the query itself failed. */
  permission: MicPermissionLike | null | undefined;
  /** The raw device array, or `null` if enumeration failed or timed out. */
  devices: RawInputDevice[] | null | undefined;
}

export interface MicDecision {
  status: MicStatus;
  /** Short, loggable explanation. Not student-facing copy. */
  reason: string;
}

/**
 * Is this entry an input we could actually record from?
 *
 * `capabilities.sampleRates` is the load-bearing field, and it is load-bearing
 * for a non-obvious reason. On iOS, audio-studio builds it as
 *
 *     [8000, 16000, 22050, 44100, 48000, 96000]
 *       .filter { session.isInputAvailable && format != nil }
 *
 * — every rate is gated on `AVAudioSession.isInputAvailable`, so the list is
 * either the full set (input present) or EMPTY (no input on this route). It is
 * the one place `isInputAvailable` reaches JS at all; expo-audio SDK 54 exposes
 * no equivalent (`getAvailableInputs()` lists ports and says nothing about
 * whether any of them can supply samples). On Android the field is the
 * `verifyAudioConfigurations` result, which is likewise empty only when nothing
 * verified.
 *
 * Both platforms in `@siteed/audio-studio@3.2.1` always emit the key for a real
 * port, so a healthy device always lands here with a non-empty array. An absent
 * key is therefore a genuine unknown and is refused, not defaulted.
 */
function isUsableInput(device: RawInputDevice | null | undefined): boolean {
  if (!device || typeof device !== 'object') return false;
  // Only an explicit `false` disqualifies; the field is advisory and often absent.
  if (device.isAvailable === false) return false;
  const rates = device.capabilities?.sampleRates;
  return Array.isArray(rates) && rates.length > 0;
}

/**
 * The whole decision, as a pure function of what we managed to learn.
 *
 * Kept separate from the probe so it can be exercised directly — including the
 * cases a simulator cannot be talked into producing.
 */
export function decideMicAvailability({
  moduleLoaded,
  permission,
  devices,
}: MicDecisionInput): MicDecision {
  if (moduleLoaded !== true) {
    return { status: 'unavailable', reason: 'audio-studio native module did not load' };
  }

  // A missing answer is not a granted one. `granted` must be a real boolean:
  // `undefined` from a malformed/short-circuited response reads as unknown.
  if (permission == null || typeof permission.granted !== 'boolean') {
    return { status: 'unavailable', reason: 'permission query returned nothing usable' };
  }
  if (permission.granted === false) {
    return { status: 'denied', reason: 'microphone permission not granted' };
  }

  // `null` here means the enumeration threw or timed out. On a wedged or absent
  // audio server that is the expected shape: audio-studio's
  // `getAvailableInputDevices` calls `try session.setActive(true)` and rejects
  // with DEVICE_DETECTION_ERROR rather than aborting, because it stays inside
  // AVAudioSession and never constructs an AVAudioEngine input node.
  if (!Array.isArray(devices)) {
    return { status: 'unavailable', reason: 'input device enumeration failed or timed out' };
  }
  if (devices.length === 0) {
    return { status: 'no-input', reason: 'no audio input devices reported' };
  }
  if (!devices.some(isUsableInput)) {
    return { status: 'no-input', reason: 'input devices reported but none can supply samples' };
  }

  return { status: 'available', reason: 'permission granted and a usable input exists' };
}

export interface MicProbeDeps {
  moduleLoaded: boolean;
  /** expo-audio's `getRecordingPermissionsAsync`. */
  getPermission: () => Promise<MicPermissionLike>;
  /** expo-audio's `requestRecordingPermissionsAsync`. */
  requestPermission: () => Promise<MicPermissionLike>;
  /**
   * The RAW `AudioStudioModule.getAvailableInputDevices(...)`. Must not be
   * `audioDeviceManager.getAvailableDevices()` — see the file header.
   */
  listInputDevices: () => Promise<unknown>;
  /** Overridable for tests. */
  timeoutMs?: number;
}

/**
 * Long enough for a cold AVAudioSession activation (`getAvailableInputDevices`
 * sleeps 100ms of its own to let Bluetooth settle), short enough that a hung
 * audio server does not hold the rail's mic affordance in limbo for the whole
 * lesson. A timeout is a "no", and the lesson carries on either way.
 */
export const MIC_PROBE_TIMEOUT_MS = 4000;

/** Resolves to `null` rather than rejecting, and rather than hanging. */
async function settleOrNull<T>(work: () => Promise<T>, timeoutMs: number): Promise<T | null> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  try {
    return await Promise.race([
      work(),
      new Promise<null>((resolve) => {
        timer = setTimeout(() => resolve(null), timeoutMs);
      }),
    ]);
  } catch {
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/**
 * Ask the two questions, then decide. Never throws, never hangs.
 *
 * Permission is requested only when it can be — `canAskAgain === false` means
 * the OS will not show a prompt, so asking would silently resolve to the same
 * denial and burn a round trip.
 */
export async function probeMicAvailability(deps: MicProbeDeps): Promise<MicDecision> {
  const timeoutMs = deps.timeoutMs ?? MIC_PROBE_TIMEOUT_MS;

  if (deps.moduleLoaded !== true) {
    return decideMicAvailability({ moduleLoaded: false, permission: null, devices: null });
  }

  let permission = await settleOrNull(deps.getPermission, timeoutMs);
  if (permission && permission.granted !== true && permission.canAskAgain !== false) {
    const asked = await settleOrNull(deps.requestPermission, timeoutMs);
    // A failed request leaves the earlier answer standing; it is the more
    // informative of the two, and it is never more permissive.
    if (asked) permission = asked;
  }

  // Not gated on `permission.granted`: the decision below owns that, and the
  // early return keeps the two failure shapes from collapsing into one.
  if (!permission || permission.granted !== true) {
    return decideMicAvailability({ moduleLoaded: true, permission, devices: null });
  }

  const raw = await settleOrNull(deps.listInputDevices, timeoutMs);
  const devices = Array.isArray(raw) ? (raw as RawInputDevice[]) : null;

  return decideMicAvailability({ moduleLoaded: true, permission, devices });
}
