import * as layout from '../actions/layout.actions';

const SMALL_SCREEN = 840;

export interface State {
  showSidenav: boolean;
  sideNavMode: string;
  windowHeight: number;
  windowWidth: number;
}

const initialState: State = {
  showSidenav: window.screen.width >= SMALL_SCREEN,
  sideNavMode: window.screen.width >= SMALL_SCREEN ? 'side' : 'over',
  windowHeight: window.screen.height,
  windowWidth: window.screen.width
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
        windowWidth: width
      });
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getSidenavMode = (state: State) => state.sideNavMode;
export const getWindowWidth = (state: State) => state.windowWidth;
export const getWindowHeight = (state: State) => state.windowHeight;
