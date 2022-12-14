import { ActionType } from 'typesafe-actions';

import * as goodsActions from './goods/actions';
import * as imdbActions from './imdb/actions';

const allActions = {
  goodsActions,
  imdbActions,
};

export type GlobalAppActions = ActionType<typeof allActions>
