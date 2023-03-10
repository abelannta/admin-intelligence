import { KelolaDataTryout } from "@/modules/admin/kelola-data/tryout";
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

export default KelolaDataTryout;
