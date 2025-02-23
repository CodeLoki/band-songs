import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, DocumentSnapshot, getDoc } from 'firebase/firestore';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/utils/songs';
import type { ModelFrom } from 'band-songs/utils/general';
import type SongsRoute from '../../songs';

export default class SongsPracticeRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model({ song_id }: { song_id: string }): Promise<Song> {
        const song = ((await getDoc(doc(this.firestore.db, 'songs', song_id))) as DocumentSnapshot<Song>).data()!;

        (this.modelFor('songs') as ModelFrom<SongsRoute>).updateTitle(`Rehearse ${song.title}`);

        return song;
    }
}
