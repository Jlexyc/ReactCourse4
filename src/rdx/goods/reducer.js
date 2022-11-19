import {
  GET_ALL_GOODS_SUCCESS,
  GET_ALL_GOODS_REQUEST,
  GET_ALL_GOODS_FAILURE,
  ADD_GOODS_SUCCESS,
  ADD_GOODS_REQUEST,
  ADD_GOODS_FAILURE,
} from './actions';

const initialState = {
  list: [],
  isLoading: false,
  isAddLoading: false,
  addError: null,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GOODS_SUCCESS: {
      return {
        ...state,
        list: action.goods,
        error: null,
        isLoading: false,
      };
    }
    case GET_ALL_GOODS_REQUEST: {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    }
    case GET_ALL_GOODS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case ADD_GOODS_SUCCESS: {
      return {
        ...state,
        list: [...state.list, action.item],
        addError: null,
        isAddLoading: false,
      };
    }
    case ADD_GOODS_REQUEST: {
      return {
        ...state,
        addError: null,
        isAddLoading: true,
      };
    }
    case ADD_GOODS_FAILURE: {
      return {
        ...state,
        isAddLoading: false,
        addError: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
