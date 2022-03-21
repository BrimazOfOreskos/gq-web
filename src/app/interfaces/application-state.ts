import { MobileMenuState } from './mobile-menu-state';
import { ProfileBlockMenuState } from './profile-block-menu-state';

export interface ApplicationState {
  mobileMenu: MobileMenuState;
  profileBlockMenu: ProfileBlockMenuState;
}
