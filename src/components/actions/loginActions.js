import { LOGOUT_SUCCESS } from './types';

// Logout User
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  }