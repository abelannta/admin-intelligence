import AdminBasePage from "@/modules/basePage";
import { DetailBankSoalSectionOne } from "./components/detailBankSoal";
import { DetailQnABankSoal } from "./components/qnaBankSoal";

export const DetailBankSoalAdmin = (props: any) => {
  const { idBankSoal, detailBankSoal, soalBankSoal } = props;

  return (
    <>
      <AdminBasePage title="Kelola Data Tryout | Detail">
        <h1 className="font-bold text-xl mb-10">{`Detail ${detailBankSoal.bs_title}`}</h1>
        <DetailBankSoalSectionOne data={detailBankSoal} id={idBankSoal} />
        <DetailQnABankSoal data={soalBankSoal} />
      </AdminBasePage>
    </>
  );
};
