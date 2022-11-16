import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { addItem, editItem } from '../../rdx/items/actions';
import { selectAllItems } from '../../rdx/items/selectors';

import './EditItemForm.css';

const styles = {
  textfield: {
    pb: '10px',
  },
};

const initialItem = {
  title: '',
  description: '',
  price: 0,
  category: '',
};

export const EditItemForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const items = useSelector(selectAllItems);
  const [item, setItem] = React.useState(initialItem);

  React.useEffect(() => {
    let itemToEdit;
    if (id) {
      itemToEdit = items.find((i) => i.id === id);
      if (!itemToEdit) {
        navigate('/');
      }
    } else {
      itemToEdit = initialItem;
    }
    setItem(itemToEdit);
  }, [items, id]);

  const onClose = React.useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onChangeText = React.useCallback((event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  }, [item]);

  const onSave = React.useCallback(() => {
    if (id) {
      dispatch(editItem(item));
    } else {
      dispatch(addItem(item));
      setItem(initialItem);
    }
  }, [item, dispatch]);

  return (
    <div className="FormContainer">
      <TextField
        name="title"
        id="filled-basic"
        label="Title"
        variant="filled"
        sx={styles.textfield}
        onChange={onChangeText}
        value={item.title}
      />
      <TextField
        name="description"
        id="filled-basic"
        label="Description"
        variant="filled"
        sx={styles.textfield}
        onChange={onChangeText}
        value={item.description}
      />
      <TextField
        name="price"
        id="filled-basic"
        label="Price"
        variant="filled"
        sx={styles.textfield}
        onChange={onChangeText}
        value={item.price}
      />
      <TextField
        name="category"
        id="filled-basic"
        label="Category"
        variant="filled"
        sx={styles.textfield}
        onChange={onChangeText}
        value={item.category}
      />
      <div className="ButtonsFooter">
        <Button size="small" onClick={onSave}>{id ? 'Save' : 'Add'}</Button>
        <Button size="small" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};
