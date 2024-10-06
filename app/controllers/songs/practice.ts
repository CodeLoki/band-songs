import BaseSongsController from './base-songs-controller';

import type Route from 'band-songs/routes/songs/index';
import type { ModelFrom } from 'band-songs/utils/general';

export default class SongsPracticeController extends BaseSongsController {
    declare model: ModelFrom<Route>;
}
