import {
  getAllGoodsSuccess,
  getAllGoodsRequest,
  getAllGoodsFailure,
  addGoodsSuccess,
  addGoodsRequest,
  addGoodsFailure,
} from './actions';

export const fetchAllGoodsThunk = () => async (dispatch) => {
  dispatch(getAllGoodsRequest());
  try {
    const response = await fetch('http://localhost:8080/goods', { method: 'GET' });
    if (!response.ok) {
      throw (Error('Something went wrong'));
    }
    const jsonResponse = await response.json();
    dispatch(getAllGoodsSuccess(jsonResponse.goods));
  } catch (error) {
    dispatch(getAllGoodsFailure(error));
  }
};

export const addGoodsThunk = (item) => async (dispatch) => {
  dispatch(addGoodsRequest());
  try {
    const response = await fetch('http://localhost:8080/goods', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw (Error('Something went wrong'));
    }
    const jsonResponse = await response.json();
    dispatch(addGoodsSuccess(jsonResponse));
  } catch (error) {
    dispatch(addGoodsFailure(error));
  }
};
