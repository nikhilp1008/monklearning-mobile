import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';

import { BoardPage } from '@/components/board-page';
import { buildBoardContent } from '@/lib/board-sections';
import { saveNote } from '@/lib/notes';

/**
 * A session is the class the student forgot to save: it holds for seven days,
 * then deletes itself. Saving turns it into a note, in place.
 *
 * Same page and same components as a note — see components/board-page.tsx for
 * the four differences the design defines.
 *
 * The board content is not fetchable yet. There is no endpoint that returns a
 * past session's board (confirmed against the API's full route table: a
 * drona_session is only ever written or read by id, never listed, and its
 * board is not exposed) — so a session reaching this screen from the Library
 * list carries only its title. Saving is real whenever a session_id is
 * present; the content fills in the moment the backend can serve it.
 */
export default function SessionBoardScreen() {
  const params = useLocalSearchParams<{
    sessionId?: string;
    title?: string;
    subject?: string;
    chapter?: string;
    daysLeft?: string;
  }>();

  const daysLeft = Number(params.daysLeft) || 7;

  const board = useMemo(
    () =>
      buildBoardContent({
        topic: params.title ?? 'This class',
        subject: params.subject ?? '',
        boardItems: null,
        content: null,
      }),
    [params.title, params.subject]
  );

  return (
    <>
      <StatusBar style="dark" />
      <BoardPage
        board={board}
        mode="session"
        daysLeft={daysLeft}
        onBack={() => router.back()}
        onSave={async () => {
          if (!params.sessionId) return false;
          try {
            await saveNote(params.sessionId);
            return true;
          } catch {
            return false;
          }
        }}
        onTalkToDrona={() =>
          router.push({
            pathname: '/entering-classroom',
            params: { chapterTitle: params.chapter ?? params.title ?? 'this class' },
          })
        }
        emptyNote="This class's board isn't available to reopen yet — saving it keeps it with your notes."
      />
    </>
  );
}
