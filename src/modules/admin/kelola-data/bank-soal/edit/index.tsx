import { PostContentTryoutDetail } from "@/lib/interfaces/tryout";
import { postContentTryout } from "@/lib/tryout/tryout";
import AdminBasePage from "@/modules/basePage";
import { NumberRounded } from "@/modules/components/number";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { DetailEditBankSoal } from "./components/detailEdit";
import { QnAEditBankSoal } from "./components/qnaEdit";
import { useRouter } from "next/router";
import { postContentBankSoal } from "@/lib/bank-soal";

export const EditDetailBankSoal = (props: any) => {
  const { idBankSoal, detailBankSoal, soalBankSoal } = props;
  const [detail, setDetail] = useState({});
  const [content, setContent] = useState<PostContentTryoutDetail>(soalBankSoal);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = postContentBankSoal(idBankSoal, content)
      .then((res) => {
        router.replace("/admin/kelola-data/bank-soal/" + idBankSoal);
      })
      .catch((err) => {
        throw err;
      });
    toast.promise(res, {
      loading: "Loading...",
      success: "Berhasil Mengubah Data!",
      error: "Gagal Mengubah Data!",
    });
  };

  return (
    <>
      <AdminBasePage title="Kelola Data Tryout | Edit Tryout">
        <h1 className="font-bold text-xl mb-10">{`Edit ${detailBankSoal.bs_title}`}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <DetailEditBankSoal id={idBankSoal} data={detailBankSoal} />
          <QnAEditBankSoal
            id={idBankSoal}
            content={content}
            setContent={setContent}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </AdminBasePage>
    </>
  );
};
