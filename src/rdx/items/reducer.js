import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from './actions';

const initialState = {
  list: [
    {
      id: uuidv4(),
      title: 'Samsung TV',
      price: 42,
      description: 'The best TV ever',
      category: 'electronics',
    },
    {
      id: uuidv4(),
      title: 'Microwave TB-323424',
      price: 32,
      description: 'Power 8000Wt',
      category: 'electronics',
    },
    {
      id: uuidv4(),
      title: 'Vacuum Cleaner',
      price: 32,
      description: 'Power 48000Wt',
      category: 'cleaning',
    },
    {
      id: uuidv4(),
      title: 'Toaster P-3232',
      price: 32,
      description: 'Two toasts at once',
      category: 'kitchen',
    },
    {
      id: uuidv4(),
      title: 'Grill FD-323',
      price: 50,
      description: 'Make your steaks well',
      category: 'kitchen',
    },
  ],
};

export const reducer = (state = initialState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter((i) => i.id !== action.itemId),
      };
    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map((i) => (i.id === action.item.id ? action.item : i)),
      };
    default:
      return state;
  }
};
