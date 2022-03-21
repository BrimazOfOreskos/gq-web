import { createReducer, on } from '@ngrx/store';

import { MobileMenuState } from '@interfaces';
import { toggleMobileMenu } from './mobile-menu.actions';

export const initialState: MobileMenuState = {
  active: false
};

const _mobileMenuReducer = createReducer(
  initialState,
  on(toggleMobileMenu, (state) => {
    return {
      ...state,
      active: !state.active
    }
  })
);

export function mobileMenuReducer(state: any, action: any) {
  return _mobileMenuReducer(state, action);
}
