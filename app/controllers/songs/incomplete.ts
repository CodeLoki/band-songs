import BaseSongsController from './base-songs-controller';
import { TabSource } from 'band-songs/utils/songs';

import type Route from 'band-songs/routes/songs/index';
import type { ModelFrom } from 'band-songs/utils/general';

export default class SongsIncompleteController extends BaseSongsController {
    declare model: ModelFrom<Route>;

    drumTabSource = TabSource.YouTubeMusic;
}
