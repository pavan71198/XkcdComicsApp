import {ADD_COMIC_JSON, AddComicJsonAction} from '../types';
import {ComicJson} from '../../pages/XkcdListPage';
export const addComicJson = (comicJson: ComicJson): AddComicJsonAction => ({
  type: ADD_COMIC_JSON,
  comicJson: comicJson,
});
