import { createAsyncAction } from 'typesafe-actions';
import { ItemModel } from '../../services/goodsStoreTypes';

export enum GoodsActions {
  GET_ALL_GOODS_REQUEST = '@goods/GET_ALL_GOODS_REQUEST',
  GET_ALL_GOODS_SUCCESS = '@goods/GET_ALL_GOODS_SUCCESS',
  GET_ALL_GOODS_FAILURE = '@goods/GET_ALL_GOODS_FAILURE',

  ADD_GOODS_SUCCESS = '@goods/ADD_GOODS_SUCCESS',
  ADD_GOODS_REQUEST = '@goods/ADD_GOODS_REQUEST',
  ADD_GOODS_FAILURE = '@goods/ADD_GOODS_FAILURE',

  REMOVE_GOODS_REQUEST = '@goods/REMOVE_GOODS_REQUEST',
  REMOVE_GOODS_SUCCESS = '@goods/REMOVE_GOODS_SUCCESS',
  REMOVE_GOODS_FAILURE = '@goods/REMOVE_GOODS_FAILURE',

  PUT_GOODS_REQUEST = '@goods/PUT_GOODS_REQUEST',
  PUT_GOODS_SUCCESS = '@goods/PUT_GOODS_SUCCESS',
  PUT_GOODS_FAILURE = '@goods/PUT_GOODS_FAILURE',
}

export const addGoodsAsyncAction = createAsyncAction(
  GoodsActions.ADD_GOODS_REQUEST,
  GoodsActions.ADD_GOODS_SUCCESS,
  GoodsActions.ADD_GOODS_FAILURE,
)<undefined, { item: ItemModel}, { error: Error }>();

export const getAllGoodsAsyncAction = createAsyncAction(
  GoodsActions.GET_ALL_GOODS_REQUEST,
  GoodsActions.GET_ALL_GOODS_SUCCESS,
  GoodsActions.GET_ALL_GOODS_FAILURE,
)<undefined, { goods: ItemModel[] }, { error: Error }>();

export const removeGoodsAsyncAction = createAsyncAction(
  GoodsActions.REMOVE_GOODS_REQUEST,
  GoodsActions.REMOVE_GOODS_SUCCESS,
  GoodsActions.REMOVE_GOODS_FAILURE,
)<{ itemId: string }, { itemId: string }, { error: Error, itemId: string}>();

export const putGoodsAsyncAction = createAsyncAction(
  GoodsActions.PUT_GOODS_REQUEST,
  GoodsActions.PUT_GOODS_SUCCESS,
  GoodsActions.PUT_GOODS_FAILURE,
)<{ itemId: string}, { item: ItemModel, itemId: string }, { error: Error, itemId: string}>();
