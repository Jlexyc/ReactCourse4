import * as Actions from './actions';

const initialState = {
  list: [],
  isLoading: 'unset',
  isAddLoading: false,
  addError: null,
  removeError: null,
  error: null,
  isRemoveLoading: {},
  isModifyLoading: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_GOODS_SUCCESS: {
      return {
        ...state,
        list: action.goods,
        error: null,
        isLoading: 'success',
      };
    }
    case Actions.GET_ALL_GOODS_REQUEST: {
      return {
        ...state,
        error: null,
        isLoading: 'waiting',
      };
    }
    case Actions.GET_ALL_GOODS_FAILURE: {
      return {
        ...state,
        isLoading: 'failure',
        error: action.error,
      };
    }
    case Actions.ADD_GOODS_SUCCESS: {
      return {
        ...state,
        list: [...state.list, action.item],
        addError: null,
        isAddLoading: false,
      };
    }
    case Actions.ADD_GOODS_REQUEST: {
      return {
        ...state,
        addError: null,
        isAddLoading: true,
      };
    }
    case Actions.ADD_GOODS_FAILURE: {
      return {
        ...state,
        isAddLoading: false,
        addError: action.error,
      };
    }
    case Actions.REMOVE_GOODS_SUCCESS: {
      return {
        ...state,
        list: state.list.filter((i) => i.id !== action.id),
        removeError: null,
        isRemoveLoading: {
          ...state.isRemoveLoading,
          [action.id]: false,
        },
      };
    }
    case Actions.REMOVE_GOODS_REQUEST: {
      return {
        ...state,
        removeError: null,
        isRemoveLoading: {
          ...state.isRemoveLoading,
          [action.id]: true,
        },
      };
    }
    case Actions.REMOVE_GOODS_FAILURE: {
      return {
        ...state,
        removeError: action.error,
        isRemoveLoading: {
          ...state.isRemoveLoading,
          [action.id]: false,
        },
      };
    }
    case Actions.PUT_GOODS_SUCCESS: {
      return {
        ...state,
        list: state.list.map((i) => (i.id === action.item.id ? action.item : i)),
        modifyError: null,
        isModifyLoading: {
          ...state.isRemoveLoading,
          [action.id]: false,
        },
      };
    }
    case Actions.PUT_GOODS_REQUEST: {
      return {
        ...state,
        modifyError: null,
        isModifyLoading: {
          ...state.isRemoveLoading,
          [action.id]: true,
        },
      };
    }
    case Actions.PUT_GOODS_FAILURE: {
      return {
        ...state,
        modifyError: action.error,
        isModifyLoading: {
          ...state.isRemoveLoading,
          [action.id]: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
