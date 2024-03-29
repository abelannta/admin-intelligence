import AdminBasePage from "@/modules/basePage";
import { DetailTryoutSectionOne } from "./components/detailTryout";
import { DetailQnATryout } from "./components/qnaTryout";

export const DetailTryoutAdmin = (props: any) => {
  const { idTryout, detailTryout, soalTryout } = props;

  return (
    <>
      <AdminBasePage title="Kelola Data Tryout | Detail">
        <h1 className="font-bold text-xl mb-10">{`Detail ${detailTryout.to_title}`}</h1>
        <DetailTryoutSectionOne data={detailTryout} id={idTryout} />
        <DetailQnATryout data={soalTryout} />
      </AdminBasePage>
    </>
  );
};
