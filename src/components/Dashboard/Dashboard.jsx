import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fab } from '@mui/material';
import { Add as AddIcon, Logout as LogoutIcon } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';

import { selectAllItems } from '../../rdx/items/selectors';
import { logoutUser } from '../../rdx/user/actions';
import { removeItem } from '../../rdx/items/actions';
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
  const items = useSelector(selectAllItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onEditClicked = React.useCallback(() => {
    navigate('/addItem');
  }, [navigate]);

  const onLogoutClicked = React.useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const onItemRemoveClicked = React.useCallback((itemId) => {
    dispatch(removeItem(itemId));
  }, [dispatch]);

  const onEditItemClicked = React.useCallback((itemId) => {
    navigate(`/editItem/${itemId}`);
  }, [navigate]);

  return (
    <div className="DashboardContainer">
      <div className="ContentContainer">
        <ItemsList items={items} onRemove={onItemRemoveClicked} onEdit={onEditItemClicked} />
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
