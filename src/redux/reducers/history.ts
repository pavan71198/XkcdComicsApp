import {
  AddComicJsonAction,
  ADD_COMIC_JSON,
  HistoryAction,
  HistoryState,
} from '../types';

const initialHistoryState: HistoryState = {
  viewedComicJsons: [],
};

export const historyReducer = (
  state: HistoryState = initialHistoryState,
  action: HistoryAction,
): HistoryState => {
  switch (action.type) {
    case ADD_COMIC_JSON:
      const addComicJsonAction = <AddComicJsonAction>action;
      return {
        viewedComicJsons: [
          ...state.viewedComicJsons,
          addComicJsonAction.comicJson,
        ],
      };
    default:
      return state;
  }
};
