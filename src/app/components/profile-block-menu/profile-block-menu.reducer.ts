import { createReducer, on } from '@ngrx/store';

import { ProfileBlockMenuState } from '@interfaces';
import { toggleProfileBlockMenu } from './profile-block-menu.actions';

export const initialState: ProfileBlockMenuState = {
  active: false
};

const _profileBlockMenuReducer = createReducer(
  initialState,
  on(toggleProfileBlockMenu, (state) => {
    return {
      ...state,
      active: !state.active
    }
  })
);

export function profileBlockMenuReducer(state: any, action: any) {
  return _profileBlockMenuReducer(state, action);
}
