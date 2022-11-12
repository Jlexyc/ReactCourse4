import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const styles = {
  cardContainer: {
    width: 250,
    height: 300,
    m: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 14,
  },
  descriptionText: {
    mb: 1.5
  }
}
export const Item = ({ item }) => {
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
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
  })
}
