import BaseSongsController from './base-songs-controller';
import { ActionMode } from 'band-songs/utils/songs';

import type Route from 'band-songs/routes/songs/index';
import type { ModelFrom } from 'band-songs/utils/general';

export default class SongsOrphansController extends BaseSongsController {
    declare model: ModelFrom<Route>;

    editMode = ActionMode.Perform;
}
