import axios from "axios";
import * as types from "./actionTypes";

export const getAllUsers = (filters) => async (dispatch) => {
  const arr = [];

  if (filters.page) {
    arr.push(`page=${filters.page}`);
  }

  const { data } = await axios.get(
    `http://localhost:8000/api/users?${arr.join("&")}`
  );

  dispatch({
    type: types.FETCH_USERS,
    payload: data.data,
    meta: data.meta,
  });
};

export const fetchAllUsers = () => async (dispatch) => {
  const { data } = axios.get("http://localhost:8000/api/users");

  dispatch({
    type: types.GET_ALL_USERS,
    payload: data.data,
  });
};
