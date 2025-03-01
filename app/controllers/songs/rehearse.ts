import Controller from '@ember/controller';

import type Route from 'band-songs/routes/songs/rehearse';
import type { ModelFrom } from 'band-songs/utils/general';

export default class SongsPracticeController extends Controller {
    declare model: ModelFrom<Route>;
}
