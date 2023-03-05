import AdminBasePage from "@/modules/basePage";
import { DetailTryoutSectionOne } from "./components/detailTryout";
import { DetailQnATryout } from "./components/qnaTryout";

export const DetailTryoutAdmin = () => {
  return (
    <>
      <AdminBasePage title="Kelola Data Tryout | Detail">
        <h1 className="font-bold text-xl mb-10">Detail Tryout 1</h1>
        <form>
          <DetailTryoutSectionOne />
          <DetailQnATryout />
        </form>
      </AdminBasePage>
    </>
  );
};
