import axios from "axios";
import {
  DELETE_BANKSOAL,
  GET_BANKSOAL,
  POST_BANKSOAL,
  POST_CREATE_BANKSOAL,
} from "../urlApi";
import { parseCookies } from "nookies";
import slugify from "react-slugify";
import { PostContentTryoutDetail } from "../interfaces/tryout";

const cookies = parseCookies();
const token = cookies.accessToken;

// GET

export const getBankSoal = async () => {
  const res = await axios.get(GET_BANKSOAL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// POST
export const postCreateBankSoal = async (name: string, summary: string) => {
  const res = await axios.post(
    POST_CREATE_BANKSOAL,
    {
      bs_title: name,
      bs_slug: slugify(name),
      bs_summary: summary,
      endsAt: "2023-05-30T10:32:00+00:00",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const postContentBankSoal = async (
  idBankSoal: string,
  data: PostContentTryoutDetail
) => {
  console.log(data);
  const res = await axios.post(POST_BANKSOAL + idBankSoal + "/soal", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};

export const deleteBankSoal = async (bs_slug: string) => {
  const res = await axios.delete(DELETE_BANKSOAL + bs_slug, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
