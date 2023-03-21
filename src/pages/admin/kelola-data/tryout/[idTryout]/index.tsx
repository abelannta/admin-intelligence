import { GET_TRYOUT } from "@/lib/urlApi";
import { DetailTryoutAdmin } from "@/modules/admin/kelola-data/tryout/detail";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { idTryout } = context.query;
  const cookies = nookies.get(context);

  const [detailRes, soalRes] = await Promise.all([
    fetch(GET_TRYOUT + idTryout),
    fetch(GET_TRYOUT + idTryout + "/soal/admin"),
  ]);
  const [detailTryout, soalTryout] = await Promise.all([
    detailRes.json(),
    soalRes.json(),
  ]);

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  if (!detailRes) {
    return {
      notFound: true,
    };
  }

  return {
    props: { idTryout, detailTryout, soalTryout }, // will be passed to the page component as props
  };
}

export default DetailTryoutAdmin;
