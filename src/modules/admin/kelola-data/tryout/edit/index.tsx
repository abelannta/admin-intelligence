import { PostContentTryoutDetail } from "@/lib/interfaces/tryout";
import { postContentTryout } from "@/lib/tryout/tryout";
import AdminBasePage from "@/modules/basePage";
import { NumberRounded } from "@/modules/components/number";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { DetailEditSectionOne } from "./components/detailEdit";
import { QnAEditTryout } from "./components/qnaEdit";
import { useRouter } from "next/router";

export const EditDetailTryout = (props: any) => {
  const { idTryout, detailTryout, soalTryout } = props;
  const [detail, setDetail] = useState({});
  const [content, setContent] = useState<PostContentTryoutDetail>(soalTryout);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = postContentTryout(idTryout, content)
      .then((res) => {
        toast.success("Berhasil Mengubah Data Tryout");
        router.replace("/admin/kelola-data/tryout/" + idTryout);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  return (
    <>
      <AdminBasePage title="Kelola Data Tryout | Edit Tryout">
        <h1 className="font-bold text-xl mb-10">{`Edit ${detailTryout.to_title}`}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <DetailEditSectionOne id={idTryout} data={detailTryout} />
          <QnAEditTryout
            id={idTryout}
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
