import { GET_TRYOUT } from "@/lib/urlApi";
import { EditDetailTryout } from "@/modules/admin/kelola-data/tryout/edit";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { idTryout } = context.query;

  const [detailRes, soalRes] = await Promise.all([
    fetch(GET_TRYOUT + idTryout),
    fetch(GET_TRYOUT + idTryout + "/soal/admin"),
  ]);
  const [detailTryout, soalTryout] = await Promise.all([
    detailRes.json(),
    soalRes.json(),
  ]);

  if (!detailRes) {
    return {
      notFound: true,
    };
  }

  return {
    props: { detailTryout, soalTryout, idTryout }, // will be passed to the page component as props
  };
}

export default EditDetailTryout;
