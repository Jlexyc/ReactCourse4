import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActions, CardContent, Button, Typography, CircularProgress,
} from '@mui/material';

const styles = {
  cardContainer: {
    width: 250,
    height: 220,
    m: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardContainerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
  },
  descriptionText: {
    mb: 1.5,
  },
};
export const Item = (
  {
    item,
    onRemove,
    onEdit,
    isLoadingCell,
    isLoading,
  },
) => {
  const onRemoveClicked = React.useCallback(() => {
    onRemove(item.id);
  });

  const onEditClicked = React.useCallback(() => {
    onEdit(item.id);
  });

  if (isLoadingCell || isLoading) {
    return (
      <Card sx={[styles.cardContainer, styles.cardContainerCenter]}>
        <CircularProgress />
      </Card>
    );
  }
  return (
    <Card sx={styles.cardContainer}>
      <CardContent>
        <Typography sx={styles.fontSize} color="text.secondary" gutterBottom>
          {item.category}
        </Typography>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography sx={styles.descriptionText} color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2">
          {item.weight}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onEditClicked}>Edit</Button>
        <Button size="small" onClick={onRemoveClicked}>Remove</Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isLoadingCell: PropTypes.bool,
  isLoading: PropTypes.bool,
};
