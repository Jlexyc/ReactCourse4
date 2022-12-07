import { ActionType } from 'typesafe-actions';

import * as goodsActions from './goods/actions';
import * as userActions from './user/actions';

const allActions = {
  goodsActions,
  userActions,
};

export type GlobalAppActions = ActionType<typeof allActions>
