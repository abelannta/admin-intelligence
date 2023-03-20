import axios from "axios";
import { GET_USERS } from "../urlApi";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.accessToken;

export const getUsers = async () => {
  const res = await axios.get(GET_USERS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
