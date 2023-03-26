import axios from "axios";
import slugify from "react-slugify";
import { PostContentTryoutDetail } from "../interfaces/tryout";
import {
  DELETE_TRYOUT,
  GET_TRYOUT,
  POST_CREATE_TRYOUT,
  POST_TRYOUT,
} from "../urlApi";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.accessToken;

// GET

export const getTryout = async () => {
  const res = await axios.get(GET_TRYOUT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// POST

export const postCreateTryout = async (
  name: string,
  summary: string,
  duration: number,
  startAt: string,
  endAt: string
) => {
  const res = await axios.post(
    POST_CREATE_TRYOUT,
    {
      to_title: name,
      to_slug: slugify(name),
      to_summary: summary,
      duration: duration,
      startsAt: startAt,
      endsAt: endAt,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};

export const postContentTryout = async (
  idTryout: string,
  data: PostContentTryoutDetail
) => {
  console.log(data);
  const res = await axios.post(POST_TRYOUT + idTryout + "/soal", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};

// DELETE

export const deleteTryout = async (to_slug: string) => {
  const res = await axios.delete(DELETE_TRYOUT + to_slug, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
