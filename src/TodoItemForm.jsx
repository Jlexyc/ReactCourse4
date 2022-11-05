import { useState, useCallback } from "react";

export const TodoItemForm = ({ value, onAddItemClicked }) => {

  const [newItemValue, setNewItemValue] = useState(value);

  const onNewItemChangedHandler = useCallback((event) => setNewItemValue(event.target.value), []);

  const onAddItemHandler = useCallback(() => {
    onAddItemClicked(newItemValue);
    setNewItemValue('');
  }, [newItemValue, onAddItemClicked]);

  return (
    <div className='Form'>
      <input value={newItemValue} onChange={onNewItemChangedHandler} />
      <button onClick={onAddItemHandler}>Add Item</button>
    </div>
  )
}