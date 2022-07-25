import * as types from "../actions/actionTypes";

const initialState = {
  users: [],
  meta: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        meta: action.meta,
      };
    case types.GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
