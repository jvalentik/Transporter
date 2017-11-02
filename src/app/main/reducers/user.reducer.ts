import * as firebase from 'firebase/app';
import * as user from '../actions/user.actions';

export interface State {
  user: firebase.User;
}

const initialState: State = {
  user: null,
};

export function reducer(state = initialState, action: user.Actions): State {
  switch (action.type) {
    case user.LOG_OFF_SUCCESS:
      return Object.assign({}, state, {
        user: null,
      });
    case user.LOGIN_SUCCESS:
      const newUser = action.payload;
      return Object.assign({}, state, {
        user: newUser,
      });
    default:
      return state;
  }
}

export const getLoggedInUser = (state: State) => state.user;
export const isLoggedIn = (state: State) => state.user !== null;
