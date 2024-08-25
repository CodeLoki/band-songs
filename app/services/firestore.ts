import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import type Owner from '@ember/owner';

export default class FirestoreService extends Service {
    db: ReturnType<typeof getFirestore>;

    constructor(owner: Owner) {
        super(owner);

        const app = initializeApp({
            apiKey: 'AIzaSyDwM6boz8brLJte7j5vwwO4ropUwV07qBU',
            authDomain: 'band-songs-ccb11.firebaseapp.com',
            projectId: 'band-songs-ccb11',
            storageBucket: 'band-songs-ccb11.appspot.com',
            messagingSenderId: '309848194094',
            appId: '1:309848194094:web:955a4fdc2c3fcaffffb3bf',
            databaseURL:
                'https://console.cloud.google.com/firestore/databases/-default-/data/panel?authuser=0&hl=en&project=band-songs-ccb11'
        });

        this.db = getFirestore(app);
    }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:firestore')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('firestore') declare altName: FirestoreService;`.
declare module '@ember/service' {
    interface Registry {
        firestore: FirestoreService;
    }
}
