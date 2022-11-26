import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Fab,
  CircularProgress,
  Typography,
  Button,
} from '@mui/material';
import { Add as AddIcon, Logout as LogoutIcon } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';

import { fetchAllGoodsThunk, removeGoodsThunk } from '../../rdx/goods/thunks';
import {
  selectAllGoods,
  selectIsAllGoodsLoading,
  selectAllGoodsError,
  selectIsAddGoodsLoading,
  selectIsRemoveGoodsLoading,
  selectIsModifyGoodsLoading,
} from '../../rdx/goods/selectors';
import { logoutUser } from '../../rdx/user/actions';
import { ItemsList } from '../ItemsList/ItemsList';

import './Dashboard.css';

const styles = {
  fabButton: {
    position: 'absolute',
    right: '50px',
    bottom: '50px',
  },
  logoutButton: {
    left: '50px',
  },
};

const logoutButtonStyles = [styles.fabButton, styles.logoutButton];

export const Dashboard = () => {
  const items = useSelector(selectAllGoods);
  const isLoading = useSelector(selectIsAllGoodsLoading);
  const isAddLoading = useSelector(selectIsAddGoodsLoading);
  const isRemoveGoodsLoading = useSelector(selectIsRemoveGoodsLoading);
  const isModifyGoodsLoading = useSelector(selectIsModifyGoodsLoading);
  const error = useSelector(selectAllGoodsError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchAllGoodsThunkCallback = React.useCallback(() => {
    dispatch(fetchAllGoodsThunk());
  }, [dispatch]);

  React.useEffect(() => {
    fetchAllGoodsThunkCallback();
  }, []);

  const onEditClicked = React.useCallback(() => {
    navigate('/addItem');
  }, [navigate]);

  const onLogoutClicked = React.useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const onItemRemoveClicked = React.useCallback((id) => {
    dispatch(removeGoodsThunk(id));
  }, [dispatch]);

  const onEditItemClicked = React.useCallback((itemId) => {
    navigate(`/editItem/${itemId}`);
  }, [navigate]);

  return (
    <div className="DashboardContainer">
      <div className="ContentContainer">
        {isLoading && <div className="LoadingContainer"><CircularProgress /></div>}
        {(!error && !isLoading)
          ? (
            <ItemsList
              items={items}
              onRemove={onItemRemoveClicked}
              onEdit={onEditItemClicked}
              isItemCreating={isAddLoading}
              isRemoveGoodsLoading={isRemoveGoodsLoading}
              isModifyGoodsLoading={isModifyGoodsLoading}
            />
          )
          : null}
        {error && (
          <div>
            <Typography variant="body2">{error.message}</Typography>
            <Button size="small" onClick={fetchAllGoodsThunkCallback}>Retry</Button>
          </div>
        )}
        <Outlet />
      </div>
      <Fab color="primary" aria-label="add" sx={styles.fabButton} onClick={onEditClicked}>
        <AddIcon />
      </Fab>
      <Fab color="primary" aria-label="add" sx={logoutButtonStyles} onClick={onLogoutClicked}>
        <LogoutIcon />
      </Fab>
    </div>
  );
};
