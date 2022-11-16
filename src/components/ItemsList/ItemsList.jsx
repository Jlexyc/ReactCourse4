import * as React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { Item } from '../Item/Item';

import './ItemsList.css';

export const ItemsList = ({ items, onRemove, onEdit }) => {
  if (!items?.length) {
    return (
      <div>
        <Typography variant="h5" component="div">
          No items to display
        </Typography>
      </div>
    );
  }
  return (
    <div className="ListContainer">
      {items.map((item) => <Item key={item.id} item={item} onRemove={onRemove} onEdit={onEdit} />)}
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
  })),
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
