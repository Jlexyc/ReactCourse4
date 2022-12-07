import * as React from 'react';
import { Typography } from '@mui/material';

import { Item } from '../Item/Item';

import './ItemsList.css';
import { ItemModel } from '../../services/goodsStoreTypes';

interface ItemsListProps {
  items: ItemModel[];
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
  isItemCreating: boolean;
  isRemoveGoodsLoading: {[index: string]: boolean};
  isModifyGoodsLoading: {[index: string]: boolean};
}

export const ItemsList = (
  {
    items,
    onRemove,
    onEdit,
    isItemCreating,
    isRemoveGoodsLoading,
    isModifyGoodsLoading,
  }: ItemsListProps,
) => {
  if (!items?.length && !isItemCreating) {
    return (
      <div>
        <Typography variant="h5">
          No items to display
        </Typography>
      </div>
    );
  }
  return (
    <div className="ListContainer">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemove={onRemove}
          onEdit={onEdit}
          isLoading={isRemoveGoodsLoading[item.id] || isModifyGoodsLoading[item.id]}
        />
      ))}
      {isItemCreating && <Item isLoadingCell />}
    </div>
  );
};
