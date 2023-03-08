import { getTryout, postCreateTryout } from "@/lib/tryout/tryout";
import AdminBasePage from "@/modules/basePage";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import Moment from "react-moment";

export const KelolaDataTryout = () => {
  const [listTryout, setListTryout] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [formTambah, setFormTambah] = useState({
    to_title: "",
    to_summary: "",
    startsAt: "",
    endsAt: "",
    duration: "",
  });
  const getListTryout = () => {
    const res = getTryout()
      .then((res) => {
        setListTryout(res);
        console.log(res);
      })
      .catch((err) => toast.error(err.message));
  };

  const handleTambahTryout = () => {
    const res = postCreateTryout(
      formTambah.to_title,
      formTambah.to_summary,
      formTambah.startsAt,
      formTambah.endsAt
    )
      .then((res) => {
        toast.success("Tryout Berhasil Ditambahkan");
        setSubmit(!submit);
        setFormTambah({
          to_title: "",
          to_summary: "",
          startsAt: "",
          endsAt: "",
          duration: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getListTryout();
  }, [submit]);

  return (
    <>
      <AdminBasePage title="Kelola Data Tryout">
        <div className="py-10 px-5">
          <h1 className="font-bold text-xl mb-10">Kelola Data Tryout</h1>
          <div className="flex flex-col gap-5 mb-10">
            {listTryout.map((item, i) => (
              <TryoutComponent item={item} index={i} key={i} />
            ))}
          </div>
          <label
            htmlFor="tambah-tryout"
            className="btn bg-white text-black hover:bg-slate-300 border-none"
          >
            <FaPlus className="w-3 h-3 mr-3" />
            Tambah
          </label>
        </div>
      </AdminBasePage>
      <input type="checkbox" id="tambah-tryout" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="tambah-tryout"
            className="absolute right-5 top-5 cursor-pointer"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Tambah Tryout</h3>
          <div className="py-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nama Tryout</span>
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
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tanggal Tryout</span>
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
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Durasi (mnt)</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                value={formTambah.duration}
                onChange={(e) =>
                  setFormTambah((prev) => ({
                    ...prev,
                    duration: e.target.value,
                  }))
                }
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="modal-action">
            <label
              onClick={handleTambahTryout}
              htmlFor="tambah-tryout"
              className="btn w-full"
            >
              Tambah
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const TryoutComponent = (props: any) => {
  const { item, index } = props;

  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
            {index + 1}
          </div>
          <div className="flex flex-col">
            <div className="text-base md:text-lg font-bold">
              {item?.to_title}
            </div>
            <div className="text-gray-600">
              <Moment format="dddd, D MMMM YYYY">{item?.startsAt}</Moment>
            </div>
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
              <a>Detail Peserta</a>
            </li>
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
