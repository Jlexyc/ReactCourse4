import React from 'react';
import { connect } from 'react-redux';
import {
  Fab,
  CircularProgress,
  Typography,
  Button,
} from '@mui/material';
import { Add as AddIcon, Logout as LogoutIcon } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withNavigate } from '../withNavigate/withNavigate';

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

class Dashboard extends React.Component {
  componentDidMount() {
    this.fetchAllGoodsThunkCallback();
  }

  fetchAllGoodsThunkCallback = () => {
    const { dispatchFetchAllGoods } = this.props;
    dispatchFetchAllGoods();
  };

  onEditClicked = () => {
    const { navigate } = this.props;
    navigate('/addItem');
  };

  onLogoutClicked = () => {
    const { dispatchLogoutUser } = this.props;
    dispatchLogoutUser();
  };

  onItemRemoveClicked = (id) => {
    const { dispatchRemoveGoodsThunk } = this.props;
    dispatchRemoveGoodsThunk(id);
  };

  onEditItemClicked = (itemId) => {
    const { navigate } = this.props;
    navigate(`/editItem/${itemId}`);
  };

  render() {
    const {
      items,
      isLoading,
      isAddLoading,
      isRemoveGoodsLoading,
      isModifyGoodsLoading,
      error,
    } = this.props;
    return (
      <div className="DashboardContainer">
        <div className="ContentContainer">
          {isLoading && <div className="LoadingContainer"><CircularProgress /></div>}
          {(!error && !isLoading)
            ? (
              <ItemsList
                items={items}
                onRemove={this.onItemRemoveClicked}
                onEdit={this.onEditItemClicked}
                isItemCreating={isAddLoading}
                isRemoveGoodsLoading={isRemoveGoodsLoading}
                isModifyGoodsLoading={isModifyGoodsLoading}
              />
            )
            : null}
          {error && (
            <div>
              <Typography variant="body2">{error.message}</Typography>
              <Button size="small" onClick={this.fetchAllGoodsThunkCallback}>Retry</Button>
            </div>
          )}
          <Outlet />
        </div>
        <Fab color="primary" aria-label="add" sx={styles.fabButton} onClick={this.onEditClicked}>
          <AddIcon />
        </Fab>
        <Fab color="primary" aria-label="add" sx={logoutButtonStyles} onClick={this.onLogoutClicked}>
          <LogoutIcon />
        </Fab>
      </div>
    );
  }
}

Dashboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
  isAddLoading: PropTypes.bool,
  isRemoveGoodsLoading: PropTypes.objectOf(PropTypes.number),
  isModifyGoodsLoading: PropTypes.objectOf(PropTypes.number),
  error: PropTypes.string,
  dispatchFetchAllGoods: PropTypes.func,
  dispatchLogoutUser: PropTypes.func,
  dispatchRemoveGoodsThunk: PropTypes.func,
  navigate: PropTypes.func,
};

const mapStateToProps = (state) => ({
  items: selectAllGoods(state),
  isLoading: selectIsAllGoodsLoading(state),
  isAddLoading: selectIsAddGoodsLoading(state),
  isRemoveGoodsLoading: selectIsRemoveGoodsLoading(state),
  isModifyGoodsLoading: selectIsModifyGoodsLoading(state),
  error: selectAllGoodsError(state),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAllGoods: () => dispatch(fetchAllGoodsThunk()),
  dispatchLogoutUser: () => dispatch(logoutUser()),
  dispatchRemoveGoodsThunk: (id) => dispatch(removeGoodsThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigate(Dashboard));
