import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  CircularProgress,
  Typography,
} from '@mui/material';
import { selectTitlesCast } from '../../rdx/imdb/selectors';
import { imdbGetCreditsThunk } from '../../rdx/imdb/thunks';
import { RequestState } from '../../services/imdbTypes';

export const TitleActors = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const castModels = useSelector(selectTitlesCast);

  const currentCast = React.useMemo(() => {
    if (!id) {
      return null;
    }
    return castModels[id] || null;
  }, [castModels, id]);

  React.useEffect(() => {
    if (id) {
      dispatch(imdbGetCreditsThunk(id));
    }
  }, [id]);

  if (currentCast?.requestState === RequestState.Waiting) {
    return (
      <div className="castLoading">
        <CircularProgress color="secondary" />
      </div>
    );
  }

  if (!id || !currentCast) {
    return (
      <div>Sorry, movie was not found</div>
    );
  }

  return (
    <div className="castList">
      {
        currentCast.list.map((act) => (<Typography>{act.name}</Typography>))
      }
    </div>
  );
};
