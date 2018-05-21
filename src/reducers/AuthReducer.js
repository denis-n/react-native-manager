import * as types from "../actions/types";

const INITIAL_STATE = { email: "", password: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };

    case types.PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };

    default:
      return state;
  }
};
