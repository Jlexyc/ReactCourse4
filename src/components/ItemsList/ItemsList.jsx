import * as React from 'react'
import { Typography } from '@mui/material';

import { Item } from '../Item/Item';

import './ItemsList.css';

export const ItemsList = ({ items }) => {
  if (!items?.length) {
    return (
      <div>
        <Typography variant="h5" component="div">
        No items to display
        </Typography>
      </div>
    )
  }
  return (
    <div className='ListContainer'>
      {items.map((item) => <Item key={item.id} item={item} />)}
    </div>
  )
}