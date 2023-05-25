import { TryoutDetail } from "@/lib/interfaces/tryout";
import { RxCalendar, RxClock } from "react-icons/rx";
import { TbEdit } from "react-icons/tb";
import moment from "moment";
import Link from "next/link";

export const DetailTryoutSectionOne = (props: any) => {
  const { id, data } = props;

  return (
    <div className="bg-white rounded-xl p-5">
      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Pelaksanaan</h2>
          <div className="flex gap-3">
            <Link href={`${id}/edit`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn bg-danger border-none hover:bg-[#C30404]">
              Hapus
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 items-center">
          <div className="col-span-2 flex flex-row">
            <TbEdit className="w-5 h-5 mr-3" />
            <div className="text-base font-semibold">Waktu Mulai</div>
          </div>
          <input
            type="datetime-local"
            value={moment(data?.startsAt).format("YYYY-MM-DDThh:mm")}
            disabled
            placeholder="Type here"
            className="input input-md input-bordered w-full max-w-xs col-span-6"
          />
        </div>
        <div className="grid grid-cols-12 mt-3 items-center">
          <div className="col-span-2 flex flex-row">
            <TbEdit className="w-5 h-5 mr-3" />
            <div className="text-base font-semibold">Waktu Berakhir</div>
          </div>
          <input
            type="datetime-local"
            value={moment(data?.endsAt).format("yyyy-MM-DDThh:mm")}
            disabled
            placeholder="Type here"
            className="input input-md input-bordered w-full max-w-xs col-span-6"
          />
        </div>
        <div className="grid grid-cols-12 mt-3 items-center">
          <div className="col-span-2 flex flex-row">
            <TbEdit className="w-5 h-5 mr-3" />
            <div className="text-base font-semibold">Durasi</div>
          </div>
          <input
            type="number"
            value={data?.duration}
            disabled
            placeholder="Type here"
            className="input input-md input-bordered w-full max-w-xs col-span-6"
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold mt-5">Detail</h2>
        <div className="grid grid-cols-12 mt-3 items-center">
          <div className="col-span-2 flex flex-row">
            <TbEdit className="w-5 h-5 mr-3" />
            <div className="text-base font-semibold">Nama</div>
          </div>
          <input
            type="text"
            value={data?.to_title}
            disabled
            placeholder="Type here"
            className="input input-md input-bordered w-full max-w-xs col-span-6"
          />
        </div>
      </div>
    </div>
  );
};
