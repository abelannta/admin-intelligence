import AdminBasePage from "@/modules/basePage";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

export const KelolaDataSubMateri = () => {
  return (
    <>
      <AdminBasePage title="Kelola Data Materi">
        <div className="py-10 px-5">
          <h1 className="font-bold text-xl mb-10">Kelola Data Biologi</h1>
          <div className="flex flex-col gap-5 mb-10">
            <SubMateriComponent />
            <SubMateriComponent />
            <SubMateriComponent />
          </div>
          <button className="btn bg-white text-black hover:bg-slate-300 border-none">
            <FaPlus className="w-3 h-3 mr-3" />
            Tambah
          </button>
        </div>
      </AdminBasePage>
    </>
  );
};

const SubMateriComponent = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
            1
          </div>
          <div className="flex flex-col">
            <div className="text-base md:text-lg font-bold">
              Bakteri dan Virus
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
              <a>Detail Materi</a>
            </li>
            <li>
              <a>Sembunyikan</a>
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
