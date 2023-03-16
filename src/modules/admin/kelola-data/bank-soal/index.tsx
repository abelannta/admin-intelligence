import { getBankSoal, postCreateBankSoal } from "@/lib/bank-soal";
import AdminBasePage from "@/modules/basePage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

export const KelolaDataBankSoal = () => {
  const [listBankSoal, setListBankSoal] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [formTambah, setFormTambah] = useState({
    to_title: "",
    to_summary: "",
    startsAt: "",
    endsAt: "",
  });

  const getListBankSoal = () => {
    const res = getBankSoal()
      .then((res) => setListBankSoal(res))
      .catch((err) => toast.error(err.message));
  };

  const handleTambahBankSoal = (e: any) => {
    e.preventDefault();
    const res = postCreateBankSoal(
      formTambah.to_title,
      formTambah.to_summary,
      formTambah.startsAt,
      formTambah.endsAt
    )
      .then((res) => {
        toast.success("Bank Soal Berhasil Ditambahkan");
        setSubmit(!submit);
        setFormTambah({
          to_title: "",
          to_summary: "",
          startsAt: "",
          endsAt: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getListBankSoal();
  }, []);

  return (
    <>
      <AdminBasePage title="Kelola Data Bank Soal">
        <div className="py-10 px-5">
          <h1 className="font-bold text-xl mb-10">Kelola Data Bank Soal</h1>
          <div className="flex flex-col gap-5 mb-10">
            {listBankSoal.map((item, i) => (
              <BankSoalComponent item={item} index={i} key={i} />
            ))}
          </div>
          <label
            htmlFor="tambah-banksoal"
            className="btn bg-white text-black hover:bg-slate-300 border-none"
          >
            <FaPlus className="w-3 h-3 mr-3" />
            Tambah
          </label>
        </div>
      </AdminBasePage>
      <input type="checkbox" id="tambah-banksoal" className="modal-toggle" />
      <form
        onSubmit={(e) => handleTambahBankSoal(e)}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box relative">
          <label
            htmlFor="tambah-banksoal"
            className="absolute right-5 top-5 cursor-pointer"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Tambah Bank Soal</h3>
          <div className="py-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nama Bank Soal</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={formTambah.to_title}
                onChange={(e) =>
                  setFormTambah((prev) => ({
                    ...prev,
                    to_title: e.target.value,
                  }))
                }
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Deskripsi</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={formTambah.to_summary}
                onChange={(e) =>
                  setFormTambah((prev) => ({
                    ...prev,
                    to_summary: e.target.value,
                  }))
                }
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tanggal Bank Soal</span>
              </label>
              <input
                type="datetime-local"
                placeholder="Type here"
                value={formTambah.startsAt}
                onChange={(e) =>
                  setFormTambah((prev) => ({
                    ...prev,
                    startsAt: e.target.value,
                  }))
                }
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tanggal Berakhir</span>
              </label>
              <input
                type="datetime-local"
                placeholder="Type here"
                value={formTambah.endsAt}
                onChange={(e) =>
                  setFormTambah((prev) => ({
                    ...prev,
                    endsAt: e.target.value,
                  }))
                }
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="modal-action">
            <button className="btn w-full">Tambah</button>
          </div>
        </div>
      </form>
    </>
  );
};

const BankSoalComponent = (props: any) => {
  const { item, index } = props;

  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
            1
          </div>
          <div className="flex flex-col">
            <div className="text-base md:text-lg font-bold">Bank Soal 1</div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1">
            <BiDotsVerticalRounded className="w-5 h-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Edit</a>
            </li>
            <li>
              <a>Sembunyikan</a>
            </li>
            <li>
              <a>Pembahasan</a>
            </li>
            <li>
              <a>Hapus</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
