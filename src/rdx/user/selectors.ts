import { GlobalAppState } from '../rootReducer';

export const selectIsUserAuthenticated = (state: GlobalAppState) => state.user.isUserAuthenticated;
