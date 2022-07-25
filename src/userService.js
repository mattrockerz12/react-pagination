import axios from "axios";

export function getUsers() {
  return axios.get("http://localhost:8000/api/users");
}
