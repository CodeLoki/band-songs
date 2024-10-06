import Service, { service, type Registry as ServiceRegistry } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import ENV from 'band-songs/config/environment';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    browserSessionPersistence,
    onAuthStateChanged,
    getRedirectResult,
    type User
} from 'firebase/auth';

import type Owner from '@ember/owner';

export default class FirestoreService extends Service {
    @service declare toast: ServiceRegistry['toast'];
    @service declare router: ServiceRegistry['router'];

    db: ReturnType<typeof getFirestore>;

    private app?: ReturnType<typeof initializeApp>;
    auth?: ReturnType<typeof getAuth>;
    @tracked user: User | null = null;

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

    get userCanEdit(): boolean {
        return this.user?.uid === 'ZC520skCOzUoJkrRUzHtIcggakm2';
    }

    @action logout(): void {
        this.auth?.signOut();
        this.user = null;
        this.auth = undefined;
    }

    @action async login(): Promise<void> {
        try {
            const auth = (this.auth = getAuth(this.app));
            onAuthStateChanged(auth, (user) => {
                this.user = user;
            });
            await auth.setPersistence(browserSessionPersistence);

            if (ENV.environment === 'development') {
                const result = await signInWithPopup(auth, new GoogleAuthProvider());
                this.user = result.user;
            } else {
                await signInWithRedirect(auth, new GoogleAuthProvider());
                const result = await getRedirectResult(auth);
                if (result) {
                    this.user = result.user;
                }
            }
        } catch (ex) {
            this.toast.showError('authenticating', ex);
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
