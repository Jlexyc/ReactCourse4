import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, CircularProgress } from '@mui/material';
import { addGoodsThunk, putGoodsThunk } from '../../rdx/goods/thunks';
import { selectIsAddGoodsLoading, selectAllGoods, selectIsAllGoodsLoading } from '../../rdx/goods/selectors';

import './EditItemForm.css';
import { ItemModel } from '../../services/goodsStoreTypes';

const styles = {
  textfield: {
    pb: '10px',
  },
};

type ItemModelEdit = Omit<ItemModel, 'id'> & { id?: string };

const initialItem: ItemModelEdit = {
  title: '',
  description: '',
  weight: '',
  category: '',
};

export const EditItemForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsAddGoodsLoading);
  const isItemsLoading = useSelector(selectIsAllGoodsLoading);

  const { id } = useParams();

  const items = useSelector(selectAllGoods);
  const [item, setItem] = React.useState<ItemModelEdit>(initialItem);

  React.useEffect(() => {
    let itemToEdit: ItemModelEdit | undefined;
    if (id && !isItemsLoading) {
      itemToEdit = items.find((i) => i.id === id);
      if (!itemToEdit) {
        navigate('/');
        return;
      }
    } else {
      itemToEdit = initialItem;
    }
    setItem(itemToEdit);
  }, [items, id, isItemsLoading]);

  const onClose = React.useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onChangeText = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  }, [item]);

  const onSave = React.useCallback(() => {
    if (id) {
      dispatch(putGoodsThunk({ ...item, id }));
    } else {
      dispatch(addGoodsThunk(item));
      setItem(initialItem);
    }
  }, [item, dispatch]);

  if (isItemsLoading) {
    return (
      <div className="FormContainer Center">
        <CircularProgress />
      </div>
    );
  }

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
