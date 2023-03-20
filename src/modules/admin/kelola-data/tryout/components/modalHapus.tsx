import { deleteTryout } from "@/lib/tryout/tryout";
import { toast } from "react-hot-toast";

interface ModalHapusProps {
  submit: boolean;
  selected: string;
  setSubmit: (value: boolean) => void;
}

export const ModalHapusTryout = (props: ModalHapusProps) => {
  const { selected, submit, setSubmit } = props;

  const handleHapusTryout = () => {
    const res = deleteTryout(selected)
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
      <input type="checkbox" id="modal-hapus" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin menghapus bank soal?
          </h3>
          <div className="modal-action">
            <label htmlFor="modal-hapus" className="btn">
              Batal
            </label>
            <label
              htmlFor="modal-hapus"
              className="btn bg-red-600 border-none"
              onClick={() => handleHapusTryout()}
            >
              Hapus
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
