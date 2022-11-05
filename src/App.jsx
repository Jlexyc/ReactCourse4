
import { useState, useCallback, useEffect, useMemo } from 'react';
import { TodoItemComponent } from './TodoItemComponent';
import { TodoItemForm } from './TodoItemForm';
import './App.css';

const initialTodoItems = [
  {
    id: 0,
    title: 'Make some cleaning',
  },
  {
    id: 1,
    title: 'Shopping',
  },
  {
    id: 2,
    title: 'Get back from school',
  },
]

const App = () => {
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newId, setNewId] = useState(3)

  console.log('RENDER: ', todoItems);

  const onAddItemClicked = useCallback((newItemValue) => {
    setTodoItems([...todoItems, { title: newItemValue, id: newId }]);
    setNewId(newId + 1);
  }, [todoItems, newId]);

  const onItemRemoveClicked = useCallback((id) => {
    setTodoItems(todoItems.filter(element => element.id !== id));
  }, [todoItems])

  const onItemEditClicked = useCallback((item) => {

  }, []);

  return (
    <div className='App'>
      {todoItems.map((item) => <TodoItemComponent key={item.id} item={item} onItemRemove={onItemRemoveClicked} onItemEdit={} />)}
      <TodoItemForm onAddItemClicked={onAddItemClicked} value={''}/>
    </div>
  )
}

export default App;
