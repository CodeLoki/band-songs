import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { LaunchMode } from 'band-songs/components/song';

import type Route from 'band-songs/routes/songs/index';
import type { ModelFrom } from 'band-songs/utils';

export default class SongsIndexController extends Controller {
    declare model: ModelFrom<Route>;

    @tracked mode = LaunchMode.Groove;
}
