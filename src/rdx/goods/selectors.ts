import { GlobalAppState } from '../rootReducer';
import { RequestState } from '../../services/goodsStoreTypes';

export const selectAllGoods = (state: GlobalAppState) => state.goods.list;
export const selectIsAllGoodsLoading = (state: GlobalAppState) => (
  state.goods.isLoading === RequestState.Waiting || state.goods.isLoading === RequestState.Unset
);

export const selectAllGoodsError = (state: GlobalAppState) => state.goods.error;

export const selectIsAddGoodsLoading = (state: GlobalAppState) => state.goods.isAddLoading;
export const selectIsRemoveGoodsLoading = (state: GlobalAppState) => state.goods.isRemoveLoading;
export const selectIsModifyGoodsLoading = (state: GlobalAppState) => state.goods.isModifyLoading;
