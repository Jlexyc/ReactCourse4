export const GET_ALL_GOODS_REQUEST = '@goods/GET_ALL_GOODS_REQUEST';
export const GET_ALL_GOODS_SUCCESS = '@goods/GET_ALL_GOODS_SUCCESS';
export const GET_ALL_GOODS_FAILURE = '@goods/GET_ALL_GOODS_FAILURE';

export const ADD_GOODS_REQUEST = '@goods/ADD_GOODS_REQUEST';
export const ADD_GOODS_SUCCESS = '@goods/ADD_GOODS_SUCCESS';
export const ADD_GOODS_FAILURE = '@goods/ADD_GOODS_FAILURE';

export const addGoodsRequest = () => ({
  type: ADD_GOODS_REQUEST,
});

export const addGoodsFailure = (error) => ({
  type: ADD_GOODS_FAILURE,
  error,
});

export const addGoodsSuccess = (item) => ({
  type: ADD_GOODS_SUCCESS,
  item,
});

export const getAllGoodsRequest = () => ({
  type: GET_ALL_GOODS_REQUEST,
});

export const getAllGoodsFailure = (error) => ({
  type: GET_ALL_GOODS_FAILURE,
  error,
});

export const getAllGoodsSuccess = (goods) => ({
  type: GET_ALL_GOODS_SUCCESS,
  goods,
});
