import * as React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { Item } from '../Item/Item';

import './ItemsList.css';

export const ItemsList = (
  {
    items,
    onRemove,
    onEdit,
    isItemCreating,
  },
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
      {items.map((item) => <Item key={item.id} item={item} onRemove={onRemove} onEdit={onEdit} />)}
      {isItemCreating && <Item loading />}
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
  })),
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isItemCreating: PropTypes.bool,
};
