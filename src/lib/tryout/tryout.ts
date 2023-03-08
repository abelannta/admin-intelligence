import axios from "axios";
import slugify from "react-slugify";
import { GET_TRYOUT, POST_CREATE_TRYOUT } from "../urlApi";

export const getTryout = async () => {
  const res = await axios.get(GET_TRYOUT);

  return res.data;
};

export const postCreateTryout = async (
  name: string,
  summary: string,
  startAt: string,
  endAt: string
) => {
  console.log({
    to_title: name,
    to_slug: slugify(name),
    to_summary: summary,
    startsAt: startAt,
    endsAt: endAt,
  });
  const res = await axios.post(
    POST_CREATE_TRYOUT,
    {
      to_title: name,
      to_slug: slugify(name),
      to_summary: summary,
      startsAt: startAt,
      endsAt: endAt,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
