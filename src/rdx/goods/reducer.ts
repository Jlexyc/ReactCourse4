import { getType } from 'typesafe-actions';
import { GlobalAppActions } from '../actions';
import * as Actions from './actions';
import { ItemModel, RequestState } from '../../services/goodsStoreTypes';

export interface GoodsState {
  list: ItemModel[],
  isLoading: RequestState,
  isAddLoading: boolean;
  addError: Error | null;
  removeError: Error | null;
  error: Error | null;
  modifyError: Error | null;
  isRemoveLoading: {[index: string]: boolean};
  isModifyLoading: {[index: string]: boolean};
}

const initialState: GoodsState = {
  list: [],
  isLoading: RequestState.Unset,
  isAddLoading: false,
  addError: null,
  removeError: null,
  error: null,
  modifyError: null,
  isRemoveLoading: {},
  isModifyLoading: {},
};

export const reducer = (state = initialState, action: GlobalAppActions): GoodsState => {
  switch (action.type) {
    case getType(Actions.getAllGoodsAsyncAction.success): {
      return {
        ...state,
        list: action.payload.goods,
        error: null,
        isLoading: RequestState.Success,
      };
    }
    case getType(Actions.getAllGoodsAsyncAction.request): {
      return {
        ...state,
        error: null,
        isLoading: RequestState.Waiting,
      };
    }
    case getType(Actions.getAllGoodsAsyncAction.failure): {
      return {
        ...state,
        isLoading: RequestState.Failure,
        error: action.payload.error,
      };
    }
    case getType(Actions.addGoodsAsyncAction.success): {
      return {
        ...state,
        list: [...state.list, action.payload.item],
        addError: null,
        isAddLoading: false,
      };
    }
    case getType(Actions.addGoodsAsyncAction.request): {
      return {
        ...state,
        addError: null,
        isAddLoading: true,
      };
    }
    case getType(Actions.addGoodsAsyncAction.failure): {
      return {
        ...state,
        isAddLoading: false,
        addError: action.payload.error,
      };
    }
    case getType(Actions.removeGoodsAsyncAction.success): {
      return {
        ...state,
        list: state.list.filter((i) => i.id !== action.payload.itemId),
        removeError: null,
        isRemoveLoading: {
          ...state.isRemoveLoading,
          [action.payload.itemId]: false,
        },
      };
    }
    case getType(Actions.removeGoodsAsyncAction.request): {
      return {
        ...state,
        removeError: null,
        isRemoveLoading: {
          ...state.isRemoveLoading,
          [action.payload.itemId]: true,
        },
      };
    }
    case getType(Actions.removeGoodsAsyncAction.failure): {
      return {
        ...state,
        removeError: action.payload.error,
        isRemoveLoading: {
          ...state.isRemoveLoading,
          [action.payload.itemId]: false,
        },
      };
    }
    case getType(Actions.putGoodsAsyncAction.success): {
      return {
        ...state,
        list: state.list.map((i) => (i.id === action.payload.itemId ? action.payload.item : i)),
        modifyError: null,
        isModifyLoading: {
          ...state.isRemoveLoading,
          [action.payload.itemId]: false,
        },
      };
    }
    case getType(Actions.putGoodsAsyncAction.request): {
      return {
        ...state,
        modifyError: null,
        isModifyLoading: {
          ...state.isRemoveLoading,
          [action.payload.itemId]: true,
        },
      };
    }
    case getType(Actions.putGoodsAsyncAction.failure): {
      return {
        ...state,
        modifyError: action.payload.error,
        isModifyLoading: {
          ...state.isRemoveLoading,
          [action.payload.itemId]: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
