import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import ENV from 'band-songs/config/environment';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    browserSessionPersistence,
    onAuthStateChanged,
    type User
} from 'firebase/auth';

import type Owner from '@ember/owner';

export default class FirestoreService extends Service {
    db: ReturnType<typeof getFirestore>;

    private app?: ReturnType<typeof initializeApp>;
    auth?: ReturnType<typeof getAuth>;

    constructor(owner: Owner) {
        super(owner);

        this.app = initializeApp({
            apiKey: ENV.firebaseApiKey,
            authDomain: 'band-songs-ccb11.firebaseapp.com',
            projectId: 'band-songs-ccb11',
            storageBucket: 'band-songs-ccb11.appspot.com',
            messagingSenderId: '309848194094',
            appId: '1:309848194094:web:955a4fdc2c3fcaffffb3bf',
            databaseURL:
                'https://console.cloud.google.com/firestore/databases/-default-/data/panel?authuser=0&hl=en&project=band-songs-ccb11'
        });

        this.db = getFirestore(this.app);
    }

    @tracked _user: User | null = null;
    set user(v: User | null) {
        this._user = v;
    }
    get user(): User | null {
        return this._user;
    }

    @action logout(): void {
        this.auth?.signOut();
        this.user = null;
        this.auth = undefined;
    }

    @action async login(): Promise<void> {
        try {
            this.auth = getAuth(this.app);
            onAuthStateChanged(this.auth, (user) => {
                this.user = user;
            });
            await (this.auth = getAuth(this.app)).setPersistence(browserSessionPersistence);

            const result = await signInWithPopup(getAuth(this.app), new GoogleAuthProvider());
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            // console.log('token', token);
            // The signed-in user info.
            this.user = result.user;
            // console.log('user', this.user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        } catch (ex) {
            console.log('error', ex);
            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
        }
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
