import { ADD_ITEM } from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  list: [
    {
      id: uuidv4(),
      title: 'Samsung TV',
      price: 42,
      description: 'The best TV ever',
      category: 'electronics'
    },
    {
      id: uuidv4(),
      title: 'Microwave TB-323424',
      price: 32,
      description: 'Power 8000Wt',
      category: 'electronics'
    },
    {
      id: uuidv4(),
      title: 'Vacuum Cleaner',
      price: 32,
      description: 'Power 48000Wt',
      category: 'cleaning'
    },
    {
      id: uuidv4(),
      title: 'Toaster P-3232',
      price: 32,
      description: 'Two toasts at once',
      category: 'kitchen'
    },
    {
      id: uuidv4(),
      title: 'Grill FD-323',
      price: 50,
      description: 'Make your steaks well',
      category: 'kitchen'
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    default:
      return state;
  }

}