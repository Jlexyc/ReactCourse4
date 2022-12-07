import { GlobalAppState } from '../rootReducer';
import { RequestType } from '../../services/goodsStoreTypes';

export const selectAllGoods = (state: GlobalAppState) => state.goods.list;
export const selectIsAllGoodsLoading = (state: GlobalAppState) => (
  state.goods.isLoading === RequestType.Waiting || state.goods.isLoading === RequestType.Unset
);

export const selectAllGoodsError = (state: GlobalAppState) => state.goods.error;

export const selectIsAddGoodsLoading = (state: GlobalAppState) => state.goods.isAddLoading;
export const selectIsRemoveGoodsLoading = (state: GlobalAppState) => state.goods.isRemoveLoading;
export const selectIsModifyGoodsLoading = (state: GlobalAppState) => state.goods.isModifyLoading;
