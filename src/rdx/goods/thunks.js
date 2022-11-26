import * as Actions from './actions';
import * as ApiService from '../../services/goodsStoreApi';

export const fetchAllGoodsThunk = () => async (dispatch) => {
  dispatch(Actions.getAllGoodsRequest());
  try {
    const response = await ApiService.fetchAllGoodsApi();
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.getAllGoodsSuccess({ goods: response.response.goods }));
  } catch (error) {
    dispatch(Actions.getAllGoodsFailure({ error }));
  }
};

export const addGoodsThunk = (item) => async (dispatch) => {
  dispatch(Actions.addGoodsRequest());
  try {
    const response = await ApiService.addGoodsApi({ item });
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.addGoodsSuccess({ item: response.response }));
  } catch (error) {
    dispatch(Actions.addGoodsFailure({ error }));
  }
};

export const removeGoodsThunk = (id) => async (dispatch) => {
  dispatch(Actions.removeGoodsRequest({ id }));
  try {
    const response = await ApiService.removeGoodsApi({ id });
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.removeGoodsSuccess({ id }));
  } catch (error) {
    dispatch(Actions.removeGoodsFailure({ error, id }));
  }
};

export const putGoodsThunk = (item) => async (dispatch) => {
  dispatch(Actions.putGoodsRequest({ id: item.id }));
  try {
    const response = await ApiService.putGoodsApi({ item });
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.putGoodsSuccess({ item: response.response }));
  } catch (error) {
    dispatch(Actions.putGoodsFailure({ error, id: item.id }));
  }
};
