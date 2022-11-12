import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

import { addItem } from '../../rdx/items/actions';

import './EditItemForm.css';

const styles = {
  textfield: {
    pb: '10px',
  }
}

const initialItem = {
  title: '',
  description: '',
  price: 0,
  category: '',
}
export const EditItemForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [item, setItem] = React.useState(initialItem);

  const onClose = React.useCallback(() => {
    navigate('/');
  }, [navigate])

  const onChangeText = React.useCallback((event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    })
  }, [item]);

  const onSave = React.useCallback(() => {
    dispatch(addItem(item))
    setItem(initialItem);
  }, [item, dispatch]);

  return (
    <div className='FormContainer'>
      <TextField 
        name='title' 
        id="filled-basic" 
        label="Title" 
        variant="filled" 
        sx={styles.textfield} 
        onChange={onChangeText} 
        value={item.title}
      />
      <TextField 
        name='description' 
        id="filled-basic" 
        label="Description" 
        variant="filled" 
        sx={styles.textfield} 
        onChange={onChangeText}
        value={item.description}
      />
      <TextField 
        name='price' 
        id="filled-basic" 
        label="Price" 
        variant="filled" 
        sx={styles.textfield} 
        onChange={onChangeText}
        value={item.price}
      />
      <TextField 
        name='category' 
        id="filled-basic" 
        label="Category" 
        variant="filled" 
        sx={styles.textfield} 
        onChange={onChangeText}
        value={item.category}
      />
      <div className='ButtonsFooter'>
        <Button size="small" onClick={onSave}>Add</Button>
        <Button size="small" onClick={onClose}>Close</Button>
      </div>
    </div>
  )
};
