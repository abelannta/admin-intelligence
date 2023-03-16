import axios from "axios";
import { GET_BANKSOAL, POST_CREATE_BANKSOAL } from "../urlApi";
import { parseCookies } from "nookies";
import slugify from "react-slugify";

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
export const postCreateBankSoal = async (
  name: string,
  summary: string,
  startAt: string,
  endAt: string
) => {
  const res = await axios.post(
    POST_CREATE_BANKSOAL,
    {
      to_title: name,
      to_slug: slugify(name),
      to_summary: summary,
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
};
