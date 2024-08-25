import Route from '@ember/routing/route';
import { service } from '@ember/service';
// import { collection, getDocs } from 'firebase/firestore';

import type FirestoreService from 'band-songs/services/firestore';

export default class ApplicationRoute extends Route {
    @service declare firestore: FirestoreService;

    async model() {
        // const querySnapshot = await getDocs(collection(this.firestore.db, 'songs'));
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, doc.data());
        // });
        // return querySnapshot;
    }
}
