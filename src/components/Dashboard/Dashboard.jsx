import * as React from 'react';
import { useSelector } from 'react-redux';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';

import { selectAllItems } from '../../rdx/items/selectors';

import { ItemsList } from '../ItemsList/ItemsList';

import './Dashboard.css';

const styles = {
  fabButton: {
    position: 'absolute',
    right: '50px',
    bottom: '50px',
  }
}
export const Dashboard = () => {
  const items = useSelector(selectAllItems);
  const navigate = useNavigate();

  const onEditClicked = React.useCallback(() => {
    navigate('/addItem');
  }, [navigate]);

  return (
    <div className='DashboardContainer'>
      <div className='ContentContainer'>
        <ItemsList items={items} />
        <Outlet />
      </div>
      <Fab color="primary" aria-label="add" sx={styles.fabButton} onClick={onEditClicked} >
        <AddIcon/>
      </Fab>
    </div>
  );
}