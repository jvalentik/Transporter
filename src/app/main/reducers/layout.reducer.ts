import * as layout from '../actions/layout.actions';
import { NavItem } from '../models/nav-item';

const SMALL_SCREEN = 840;

export interface State {
  showSidenav: boolean;
  sideNavMode: string;
  windowHeight: number;
  windowWidth: number;
  viewList: Array<NavItem>;
  locale: string;
}

const initialState: State = {
  showSidenav: window.screen.width >= SMALL_SCREEN,
  sideNavMode: window.screen.width >= SMALL_SCREEN ? 'side' : 'over',
  windowHeight: window.screen.height,
  windowWidth: window.screen.width,
  locale: 'en',
  viewList: [
    {
      header: 'sidenav.home.header',
      title: 'sidenav.home.title',
      showFooter: false,
      icon: 'home',
      routerLink: '/map'
    },
    {
      title: 'sidenav.transports.title',
      showFooter: true,
      icon: 'today',
      routerLink: '/transports'
    }
  ] as Array<NavItem>
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.SET_SIDENAV_MODE:
      const mode = action.payload;
      return Object.assign({}, state, {
        sideNavMode: mode
      });
    case layout.OPEN_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: true
      });
    case layout.CLOSE_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: false
      });
    case layout.RESIZE_WINDOW:
      const height = action.payload['height'];
      const width = action.payload['width'];
      const showSidenav = width >= SMALL_SCREEN;
      const sideNavMode = width >= SMALL_SCREEN ? 'side' : 'over';
      return Object.assign({}, state, {
        showSidenav: showSidenav,
        sideNavMode: sideNavMode,
        windowHeight: height,
        windowWidth: width,
      });
    case layout.SET_LOCALE:
      const locale = action.payload;
      return Object.assign({}, state, {
        locale,
    });
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getSidenavMode = (state: State) => state.sideNavMode;
export const getWindowWidth = (state: State) => state.windowWidth;
export const getWindowHeight = (state: State) => state.windowHeight;
export const getViewList = (state: State) => state.viewList;
export const getLocale = (state: State) => state.locale;
