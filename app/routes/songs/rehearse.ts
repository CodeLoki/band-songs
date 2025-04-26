import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, getDoc } from 'firebase/firestore';
import { songConverter } from 'band-songs/utils/songs';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/utils/songs';

export default class SongsPracticeRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model({ song_id }: { song_id: string }): Promise<Song> {
        return (await getDoc(doc(this.firestore.db, 'songs', song_id).withConverter(songConverter))).data()!;
    }
}
