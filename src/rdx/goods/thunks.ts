import * as Actions from './actions';
import { AppDispatch } from '../index';
import * as ApiService from '../../services/goodsStoreApi';
import { ItemModel } from '../../services/goodsStoreTypes';

export const fetchAllGoodsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(Actions.getAllGoodsAsyncAction.request());
  try {
    const response = await ApiService.fetchAllGoodsApi();
    if (!response.success || !response.response) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.getAllGoodsAsyncAction.success({ goods: response.response.goods }));
  } catch (error) {
    dispatch(Actions.getAllGoodsAsyncAction.failure({ error: new Error('Something went wrong') }));
  }
};

export const addGoodsThunk = (item: Omit<ItemModel, 'id'>) => async (dispatch: AppDispatch) => {
  dispatch(Actions.addGoodsAsyncAction.request());
  try {
    const response = await ApiService.addGoodsApi({ item });
    if (!response.success || !response.response) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.addGoodsAsyncAction.success({ item: response.response }));
  } catch (error) {
    dispatch(Actions.addGoodsAsyncAction.failure({ error: new Error('Something went wrong') }));
  }
};

export const removeGoodsThunk = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(Actions.removeGoodsAsyncAction.request({ itemId: id }));
  try {
    const response = await ApiService.removeGoodsApi({ id });
    if (!response.success) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.removeGoodsAsyncAction.success({ itemId: id }));
  } catch (error) {
    dispatch(Actions.removeGoodsAsyncAction.failure({ error: new Error('Something went wrong'), itemId: id }));
  }
};

export const putGoodsThunk = (item: ItemModel) => async (dispatch: AppDispatch) => {
  dispatch(Actions.putGoodsAsyncAction.request({ itemId: item.id }));
  try {
    const response = await ApiService.putGoodsApi({ item });
    if (!response.success || !response.response) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.putGoodsAsyncAction.success({ item: response.response, itemId: item.id }));
  } catch (error) {
    dispatch(Actions.putGoodsAsyncAction.failure({ error: new Error('Something went wrong'), itemId: item.id }));
  }
};
