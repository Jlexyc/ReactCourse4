export const selectAllGoods = (state) => state.goods.list;
export const selectIsAllGoodsLoading = (state) => state.goods.isLoading === 'waiting' || state.goods.isLoading === 'unset';
export const selectAllGoodsError = (state) => state.goods.error;

export const selectIsAddGoodsLoading = (state) => state.goods.isAddLoading;
export const selectIsRemoveGoodsLoading = (state) => state.goods.isRemoveLoading;
export const selectIsModifyGoodsLoading = (state) => state.goods.isModifyLoading;
