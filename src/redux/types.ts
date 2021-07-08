import {ComicJson} from '../pages/XkcdListPage';

export const ADD_COMIC_JSON = 'ADD_COMIC_JSON';

export type HistoryState = {
  viewedComicJsons: ComicJson[];
};

export type AddComicJsonAction = {
  type: typeof ADD_COMIC_JSON;
  comicJson: ComicJson;
};

export type HistoryAction = AddComicJsonAction;
