import { deleteTryout } from "@/lib/tryout/tryout";
import { toast } from "react-hot-toast";

interface ModalHapusProps {
  selected: string;
}

export const ModalHapusTryout = (props: ModalHapusProps) => {
  const { selected } = props;

  const handleHapusTryout = () => {
    const res = deleteTryout(selected)
      .then((res) => {
        console.log(res);
        toast.success("Data Berhasil Dihapus");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Data gagal dihapus");
      });
  };

  return (
    <>
      <input type="checkbox" id="modal-hapus" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label
              htmlFor="modal-hapus"
              className="btn"
              onClick={() => handleHapusTryout()}
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
