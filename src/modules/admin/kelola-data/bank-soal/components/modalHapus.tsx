import { deleteBankSoal } from "@/lib/bank-soal";
import { toast } from "react-hot-toast";

interface ModalHapusProps {
  submit: boolean;
  selected: string;
  setSubmit: (value: boolean) => void;
}

export const ModalHapusBankSoal = (props: ModalHapusProps) => {
  const { selected, submit, setSubmit } = props;

  const handleHapusBankSoal = () => {
    const res = deleteBankSoal(selected)
      .then((res) => {
        setSubmit(!submit);
        toast.success("Data Berhasil Dihapus");
      })
      .catch((err) => {
        toast.error("Data gagal dihapus");
      });
  };

  return (
    <>
      <input type="checkbox" id="modal-hapus-bs" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin menghapus bank soal?
          </h3>
          <div className="modal-action">
            <label htmlFor="modal-hapus-bs" className="btn">
              Batal
            </label>
            <label
              htmlFor="modal-hapus-bs"
              className="btn bg-red-600 border-none"
              onClick={() => handleHapusBankSoal()}
            >
              Hapus
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
