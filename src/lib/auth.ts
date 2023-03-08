import axios from "axios";
import { GET_PROFILE, POST_AUTH_LOGIN } from "./urlApi";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const getToken = async (username: string, password: string) => {
  const res = await axios.post(
    POST_AUTH_LOGIN,
    {
      username: username,
      password: password,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const getProfile = async (token: string) => {
  const res = await axios.get(GET_PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
