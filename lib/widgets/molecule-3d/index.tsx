import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';

export type Representation = 'ball_and_stick' | 'space_filling' | 'wireframe' | 'cartoon';

export interface MoleculeParams {
  /** Cache key, never coordinates: 'pubchem:5957' | 'pdb:1BNA'. */
  structure_ref: string;
  label: string;
  representation: Representation;
  auto_rotate: boolean;
}

const REPRESENTATIONS: readonly Representation[] = [
  'ball_and_stick',
  'space_filling',
  'wireframe',
  'cartoon',
];

const REF_PATTERN = /^(pubchem|pdb):[A-Za-z0-9]{1,10}$/;

/* ------------------------------------------------------------------ validate */

function validate(raw: unknown): ValidationResult<MoleculeParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  if (typeof r.structure_ref !== 'string' || !REF_PATTERN.test(r.structure_ref)) {
    errors.push('structure_ref must match pubchem:<cid> or pdb:<id>');
  }
  if (typeof r.label !== 'string' || r.label.length === 0) {
    errors.push('label must be a non-empty string');
  }
  const rep = r.representation ?? 'ball_and_stick';
  if (typeof rep !== 'string' || !REPRESENTATIONS.includes(rep as Representation)) {
    errors.push(`representation must be one of ${REPRESENTATIONS.join(', ')}`);
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      structure_ref: r.structure_ref as string,
      label: r.label as string,
      representation: rep as Representation,
      auto_rotate: r.auto_rotate === true,
    },
  };
}

/* --------------------------------------------------------------- host bridge */

type Outbound =
  | { type: 'load'; sdf: string; representation: Representation; autoRotate: boolean }
  | { type: 'style'; representation: Representation }
  | { type: 'spin'; on: boolean }
  | { type: 'reset' };

type Inbound =
  | { type: 'ready' }
  | { type: 'rendered'; atoms: number }
  | { type: 'error'; message: string };

let hostHtmlCache: string | null = null;

async function loadHostHtml(): Promise<string> {
  if (hostHtmlCache) return hostHtmlCache;
  // 'html' is already in Metro's default assetExts — no metro.config.js change.
  const asset = Asset.fromModule(require('../../../assets/molecule-host.html'));
  await asset.downloadAsync();
  if (!asset.localUri) throw new Error('molecule-host.html has no localUri');
  hostHtmlCache = await FileSystem.readAsStringAsync(asset.localUri);
  return hostHtmlCache;
}

/* ----------------------------------------------------------------- component */

function Molecule3D({
  params,
  width,
  height,
  theme,
  services,
}: WidgetRenderProps<MoleculeParams>) {
  const webRef = useRef<WebView>(null);
  const [html, setHtml] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadHostHtml()
      .then((h) => !cancelled && setHtml(h))
      .catch((e: Error) => !cancelled && setFailed(e.message));
    return () => {
      cancelled = true;
    };
  }, []);

  const post = useCallback((msg: Outbound) => {
    webRef.current?.postMessage(JSON.stringify(msg));
  }, []);

  // Load structure once the host says it is ready, and whenever the ref changes.
  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    services
      .resolveStructure(params.structure_ref)
      .then((sdf) => {
        if (cancelled) return;
        post({
          type: 'load',
          sdf,
          representation: params.representation,
          autoRotate: params.auto_rotate,
        });
      })
      .catch((e: Error) => !cancelled && setFailed(e.message));
    return () => {
      cancelled = true;
    };
  }, [ready, params.structure_ref, params.representation, params.auto_rotate, post, services]);

  const onMessage = useCallback((e: WebViewMessageEvent) => {
    let msg: Inbound;
    try {
      msg = JSON.parse(e.nativeEvent.data) as Inbound;
    } catch {
      return;
    }
    if (msg.type === 'ready') setReady(true);
    if (msg.type === 'error') setFailed(msg.message);
  }, []);

  if (failed || html === null) {
    // Never an empty box mid-lesson: the caller renders the cached still instead.
    return <View style={[styles.fill, { width, height, backgroundColor: theme.surface }]} />;
  }

  return (
    <View style={{ width, height }} collapsable={false}>
      <WebView
        ref={webRef}
        // Required for an inline `html` source; default whitelist is http/https only.
        originWhitelist={['*']}
        source={{ html }}
        onMessage={onMessage}
        // The board is a diagram, not a browser.
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        javaScriptEnabled
        setSupportMultipleWindows={false}
        allowsInlineMediaPlayback
        // Keep the GL context alive across molecule changes.
        cacheEnabled
        style={[styles.fill, { backgroundColor: 'transparent' }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
});

/* -------------------------------------------------------------------- module */

export const molecule3d: WidgetModule<MoleculeParams> = {
  id: 'molecule_3d',
  version: 1,
  defaults: {
    structure_ref: 'pubchem:64689',
    label: 'beta-D-Glucose',
    representation: 'ball_and_stick',
    auto_rotate: false,
  },
  // Nothing tweens: 3D state lives inside the WebView, driven by postMessage.
  animatable: [],
  // No numeric quantities to name in a caption — a molecule's identity is the
  // whole payload (structure_ref), not a computed value. Also correctly
  // exempt from the render harness entirely; see SKIP in
  // lib/widgets/__tests__/render-trees.test.tsx.
  derived: [],
  computeDerived: () => ({}),
  derivedAliases: {},
  validate,
  Component: Molecule3D,
};
