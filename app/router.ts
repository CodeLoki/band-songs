import EmberRouter from '@ember/routing/router';
import config from 'band-songs/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('songs', function () {
        this.route('edit', {
            path: '/:song_id'
        });
        this.route('rehearse', {
            path: '/songs/rehearse/:song_id'
        });
        this.route('orphans');
    });
    this.route('gigs', {
        path: '/gigs/:gig_id'
    });
});
