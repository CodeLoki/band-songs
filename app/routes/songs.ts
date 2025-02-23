import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { User } from 'band-songs/controllers/application';

class SongRouteModel {
    @tracked pageTitle = '';
    user: User;

    constructor(user: User) {
        this.user = user;
    }

    updateTitle(v: string) {
        this.pageTitle = v;
    }
}

export default class IndexRoute extends Route {
    model(): SongRouteModel {
        return new SongRouteModel(this.paramsFor('application')['u'] as User);
    }
}
