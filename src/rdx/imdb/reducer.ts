import { getType } from 'typesafe-actions';
import { GlobalAppActions } from '../actions';
import * as Actions from './actions';
import { TitleModel, CastModel, RequestState } from '../../services/imdbTypes';

export interface IMDBState {
  titles: TitleModel[],
  cast: {[id: string]: {
    requestState: RequestState,
    list: CastModel[];
    error: Error | null;
  }};
  findTitleRequestState: RequestState,
  error: Error | null;
}

const initialState: IMDBState = {
  titles: [],
  cast: {},
  findTitleRequestState: RequestState.Unset,
  error: null,
};

export const reducer = (state = initialState, action: GlobalAppActions): IMDBState => {
  console.log('reducer: ', action);
  console.log('state: ', state);
  switch (action.type) {
    case getType(Actions.findTitleAsyncAction.success): {
      return {
        ...state,
        titles: action.payload.titles,
        error: null,
        findTitleRequestState: RequestState.Success,
      };
    }
    case getType(Actions.findTitleAsyncAction.request): {
      return {
        ...state,
        error: null,
        findTitleRequestState: RequestState.Waiting,
      };
    }
    case getType(Actions.findTitleAsyncAction.failure): {
      return {
        ...state,
        findTitleRequestState: RequestState.Failure,
        error: action.payload.error,
      };
    }
    case getType(Actions.getCreditsAsyncAction.success): {
      return {
        ...state,
        cast: {
          ...state.cast,
          [action.payload.id]: {
            list: action.payload.cast,
            error: null,
            requestState: RequestState.Success,
          },
        },
      };
    }
    case getType(Actions.getCreditsAsyncAction.request): {
      return {
        ...state,
        cast: {
          ...state.cast,
          [action.payload.id]: {
            list: [],
            error: null,
            requestState: RequestState.Waiting,
          },
        },
      };
    }
    case getType(Actions.getCreditsAsyncAction.failure): {
      return {
        ...state,
        cast: {
          ...state.cast,
          [action.payload.id]: {
            list: [],
            error: action.payload.error,
            requestState: RequestState.Failure,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
