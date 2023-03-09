import { GET_TRYOUT } from "@/lib/urlApi";
import { DetailTryoutAdmin } from "@/modules/admin/kelola-data/tryout/detail";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { idTryout } = context.query;

  const res = await fetch(GET_TRYOUT + idTryout);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: data,
    };
  }
}

export default DetailTryoutAdmin;
