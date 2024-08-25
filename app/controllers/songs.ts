import Controller from '@ember/controller';
import { A } from '@ember/array';

import type { Song } from 'band-songs/songs';

export default class SongsController extends Controller {
    declare model: Song[];

    get songs(): Song[] {
        return A(this.model).sortBy('title');
    }
}
