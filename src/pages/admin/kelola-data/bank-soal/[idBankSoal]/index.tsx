import { GET_BANKSOAL } from "@/lib/urlApi";
import { DetailBankSoalAdmin } from "@/modules/admin/kelola-data/bank-soal/detail";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { idBankSoal } = context.query;
  const cookies = nookies.get(context);

  const [detailRes, soalRes] = await Promise.all([
    fetch(GET_BANKSOAL + idBankSoal),
    fetch(GET_BANKSOAL + idBankSoal + "/soal/admin"),
  ]);
  const [detailBankSoal, soalBankSoal] = await Promise.all([
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
    props: { idBankSoal, detailBankSoal, soalBankSoal }, // will be passed to the page component as props
  };
}

export default DetailBankSoalAdmin;
