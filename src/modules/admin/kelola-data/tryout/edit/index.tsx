import AdminBasePage from "@/modules/basePage";
import { NumberRounded } from "@/modules/components/number";
import { FaPlus } from "react-icons/fa";
import { DetailEditSectionOne } from "./components/detailEdit";
import { QnAEditTryout } from "./components/qnaEdit";

export const EditDetailTryout = () => {
  return (
    <>
      <AdminBasePage title="Kelola Data Tryout | Edit Tryout">
        <h1 className="font-bold text-xl mb-10">Edit Tryout 1</h1>
        <form>
          <DetailEditSectionOne />
          <QnAEditTryout />
        </form>
      </AdminBasePage>
    </>
  );
};
