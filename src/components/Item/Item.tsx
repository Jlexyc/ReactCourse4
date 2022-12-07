import React from 'react';
import {
  Card, CardActions, CardContent, Button, Typography, CircularProgress, SxProps,
} from '@mui/material';

import { ItemModel } from '../../services/goodsStoreTypes';

interface ItemProps {
  item?: ItemModel;
  onRemove?: (id: string) => void;
  onEdit?: (id: string) => void;
  isLoadingCell?: boolean;
  isLoading?: boolean;
}

interface ItemStyles {
  cardContainer: React.CSSProperties;
  cardContainerCenter: React.CSSProperties;
  categoryText: React.CSSProperties;
  descriptionText: SxProps;
}

const styles: ItemStyles = {
  cardContainer: {
    width: 250,
    height: 220,
    margin: '10px',
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
  }: ItemProps,
) => {
  const onRemoveClicked = React.useCallback(() => {
    if (onRemove && item) {
      onRemove(item?.id);
    }
  }, [onRemove, item?.id]);

  const onEditClicked = React.useCallback(() => {
    if (onEdit && item) {
      onEdit(item?.id);
    }
  }, [onEdit, item?.id]);

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
        <Typography sx={styles.categoryText} color="text.secondary" gutterBottom>
          {item?.category}
        </Typography>
        <Typography variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography sx={styles.descriptionText} color="text.secondary">
          {item?.description}
        </Typography>
        <Typography variant="body2">
          {item?.weight}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onEditClicked}>Edit</Button>
        <Button size="small" onClick={onRemoveClicked}>Remove</Button>
      </CardActions>
    </Card>
  );
};
