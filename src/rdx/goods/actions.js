export const GET_ALL_GOODS_REQUEST = '@goods/GET_ALL_GOODS_REQUEST';
export const GET_ALL_GOODS_SUCCESS = '@goods/GET_ALL_GOODS_SUCCESS';
export const GET_ALL_GOODS_FAILURE = '@goods/GET_ALL_GOODS_FAILURE';

export const ADD_GOODS_REQUEST = '@goods/ADD_GOODS_REQUEST';
export const ADD_GOODS_SUCCESS = '@goods/ADD_GOODS_SUCCESS';
export const ADD_GOODS_FAILURE = '@goods/ADD_GOODS_FAILURE';

export const REMOVE_GOODS_REQUEST = '@goods/REMOVE_GOODS_REQUEST';
export const REMOVE_GOODS_SUCCESS = '@goods/REMOVE_GOODS_SUCCESS';
export const REMOVE_GOODS_FAILURE = '@goods/REMOVE_GOODS_FAILURE';

export const PUT_GOODS_REQUEST = '@goods/PUT_GOODS_REQUEST';
export const PUT_GOODS_SUCCESS = '@goods/PUT_GOODS_SUCCESS';
export const PUT_GOODS_FAILURE = '@goods/PUT_GOODS_FAILURE';

export const addGoodsRequest = () => ({
  type: ADD_GOODS_REQUEST,
});

export const addGoodsFailure = ({ error }) => ({
  type: ADD_GOODS_FAILURE,
  error,
});

export const addGoodsSuccess = ({ item }) => ({
  type: ADD_GOODS_SUCCESS,
  item,
});

export const getAllGoodsRequest = () => ({
  type: GET_ALL_GOODS_REQUEST,
});

export const getAllGoodsFailure = ({ error }) => ({
  type: GET_ALL_GOODS_FAILURE,
  error,
});

export const getAllGoodsSuccess = ({ goods }) => ({
  type: GET_ALL_GOODS_SUCCESS,
  goods,
});

export const removeGoodsRequest = ({ id }) => ({
  type: REMOVE_GOODS_REQUEST,
  id,
});

export const removeGoodsFailure = ({ error, id }) => ({
  type: REMOVE_GOODS_FAILURE,
  id,
  error,
});

export const removeGoodsSuccess = ({ id }) => ({
  type: REMOVE_GOODS_SUCCESS,
  id,
});

export const putGoodsRequest = ({ id }) => ({
  type: PUT_GOODS_REQUEST,
  id,
});

export const putGoodsFailure = ({ error, id }) => ({
  type: PUT_GOODS_FAILURE,
  id,
  error,
});

export const putGoodsSuccess = ({ item }) => ({
  type: PUT_GOODS_SUCCESS,
  item,
});
