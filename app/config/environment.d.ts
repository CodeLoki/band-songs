/**
 * Type declarations for
 *    import config from 'band-songs/config/environment'
 */
declare const config: {
    environment: string;
    modulePrefix: string;
    podModulePrefix: string;
    locationType: 'history' | 'hash' | 'none';
    rootURL: string;
    firebaseApiKey: string;
    APP: Record<string, unknown>;
};

export default config;
