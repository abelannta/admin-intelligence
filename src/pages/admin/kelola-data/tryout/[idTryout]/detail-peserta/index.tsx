import { DataPesertaTryout } from "@/modules/admin/kelola-data/tryout/detail-peserta";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  return {
    props: {},
  };
};

export default DataPesertaTryout;
