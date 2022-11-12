import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM = '@items/ADD_ITEM';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: uuidv4(),
      ...item,
    },
  }
}