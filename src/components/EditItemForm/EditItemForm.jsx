import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, CircularProgress } from '@mui/material';
import { addGoodsThunk } from '../../rdx/goods/thunks';
import { selectIsAddGoodsLoading } from '../../rdx/goods/selectors';
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
  weight: '',
  category: '',
};

export const EditItemForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsAddGoodsLoading);

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
      // dispatch(editItem(item));
    } else {
      console.log('item: ', item);
      dispatch(addGoodsThunk(item));
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
        name="weight"
        id="filled-basic"
        label="Weight"
        variant="filled"
        sx={styles.textfield}
        onChange={onChangeText}
        value={item.weight}
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
        {isLoading
          ? <CircularProgress />
          : <Button size="small" onClick={onSave}>{id ? 'Save' : 'Add'}</Button>}
        <Button size="small" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};
