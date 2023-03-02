import { LoadingTable } from "@/modules/components/loading";
import { FaEdit, FaTrash } from "react-icons/fa";

interface TableProps {
  loading: boolean;
  data: any;
}

const TablePeserta = (props: TableProps) => {
  const { loading, data } = props;
  return (
    <>
      <div className="w-full text-sm text-left text-gray-500 divide-y min-w-[900px]">
        {/* head */}
        <div className="py-2.5 text-xs text-gray-500 mx-7 space-x-2">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-start-1 col-end-2">Id</div>
            <div className="col-start-2 col-end-4">Nama</div>
            <div className="col-start-4 col-end-6">Email</div>
            <div className="col-start-6 col-end-7">createdAt</div>
            <div className="col-start-7 col-end-8">No. HP</div>
            <div className="col-start-8 col-end-10">Alamat</div>
            <div className="col-start-10 col-end-11">Status</div>
            <div className="col-start-11 col-end-12 text-center">Aksi</div>
          </div>
        </div>

        {/* body */}
        {!loading ? (
          data?.map((user: any, idx: number) => (
            <div key={idx}>
              <div className={idx % 2 == 0 ? `bg-gray-50` : `bg-white`}>
                <div className="py-4 mx-7 space-x-2 text-xs font-medium text-black">
                  <div className="grid grid-cols-12 gap-4 items-center font-thin text-gray-500">
                    <div className="col-start-1 col-end-2 font-medium text-black">
                      {user.id}
                    </div>
                    <div className="col-start-2 col-end-4 font-medium text-black">
                      {user.fullname}
                    </div>
                    <div className="col-start-4 col-end-6 font-medium text-black">
                      {user.email}
                    </div>
                    <div className="col-start-6 col-end-7 font-thin">
                      {user.createdAt}
                    </div>
                    <div className="col-start-7 col-end-8 font-thin">
                      {user.createdAt}
                    </div>
                    <div className="col-start-8 col-end-10 font-thin">
                      {user.createdAt}
                    </div>
                    <div className="col-start-10 col-end-11 font-thin">
                      {user.langganan}
                    </div>
                    <div className="col-start-11 col-end-12 flex justify-center">
                      <button>
                        <FaEdit className="text-gray-400 h-3.5 w-3.5 mr-2" />
                      </button>
                      <button>
                        <FaTrash className="text-gray-400 h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <LoadingTable />
        )}
      </div>
    </>
  );
};

export default TablePeserta;
