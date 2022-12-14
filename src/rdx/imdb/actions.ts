import { createAsyncAction } from 'typesafe-actions';
import { TitleModel, CastModel } from '../../services/imdbTypes';

enum IMDBActions {
  IMDB_FIND_TITLE_REQUEST = '@imdb/FIND_TITLE_REQUEST',
  IMDB_FIND_TITLE_SUCCESS = '@imdb/FIND_TITLE_SUCCESS',
  IMDB_FIND_TITLE_FAILURE = '@imdb/FIND_TITLE_FAILURE',

  IMDB_GET_CREDITS_REQUEST = '@imdb/GET_CREDITS_REQUEST',
  IMDB_GET_CREDITS_SUCCESS = '@imdb/GET_CREDITS_SUCCESS',
  IMDB_GET_CREDITS_FAILURE = '@imdb/GET_CREDITS_FAILURE',
}

export const findTitleAsyncAction = createAsyncAction(
  IMDBActions.IMDB_FIND_TITLE_REQUEST,
  IMDBActions.IMDB_FIND_TITLE_SUCCESS,
  IMDBActions.IMDB_FIND_TITLE_FAILURE,
)<undefined, { titles: TitleModel[] }, { error: Error }>();

export const getCreditsAsyncAction = createAsyncAction(
  IMDBActions.IMDB_GET_CREDITS_REQUEST,
  IMDBActions.IMDB_GET_CREDITS_SUCCESS,
  IMDBActions.IMDB_GET_CREDITS_FAILURE,
)<{ id: string }, { cast: CastModel[], id: string }, { error: Error, id: string }>();
