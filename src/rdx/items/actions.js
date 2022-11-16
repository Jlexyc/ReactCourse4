import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM = '@items/ADD_ITEM';
export const REMOVE_ITEM = '@items/REMOVE_ITEM';
export const EDIT_ITEM = '@items/EDIT_ITEM';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: {
    id: uuidv4(),
    ...item,
    price: parseFloat(item.price),
  },
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});

export const editItem = (item) => ({
  type: EDIT_ITEM,
  item,
});
