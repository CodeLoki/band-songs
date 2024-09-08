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
    signOut,
    setPersistence,
    browserSessionPersistence,
    type UserInfo
} from 'firebase/auth';

import type Owner from '@ember/owner';

export default class FirestoreService extends Service {
    db: ReturnType<typeof getFirestore>;

    private app?: ReturnType<typeof initializeApp>;

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

    isAuthenticated(): boolean {
        console.log('foo-bar', getAuth(this.app).currentUser);
        return !!getAuth(this.app).currentUser;
    }

    @tracked _user?: UserInfo;
    set user(v: UserInfo | undefined) {
        this._user = v;
    }
    get user(): UserInfo | undefined {
        return this._user;
    }

    @action logout(): void {
        signOut(getAuth(this.app));
        this.user = undefined;
    }

    @action async login(): Promise<void> {
        try {
            const auth = getAuth(this.app);
            await setPersistence(auth, browserSessionPersistence);

            const result = await signInWithPopup(getAuth(this.app), new GoogleAuthProvider());
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            console.log('token', token);
            // The signed-in user info.
            this.user = result.user;
            console.log('user', this.user);
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
