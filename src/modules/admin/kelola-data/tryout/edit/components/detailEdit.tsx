import moment from "moment";
import { RxCalendar, RxClock } from "react-icons/rx";
import { TbEdit } from "react-icons/tb";

export const DetailEditSectionOne = (props: any) => {
  const { id, data } = props;

  return (
    <div className="bg-white rounded-xl p-5">
      <div>
        <h2 className="text-lg font-bold">Pelaksanaan</h2>
        <div className="grid grid-cols-12 mt-3 items-center">
          <div className="col-span-2 flex flex-row">
            <RxCalendar className="w-5 h-5 mr-3" />
            <div className="text-base font-semibold">Tanggal</div>
          </div>
          <input
            type="datetime-local"
            value={moment(data?.startsAt).format("yyyy-MM-DDThh:mm")}
            placeholder="Type here"
            className="input input-md input-bordered w-full max-w-xs col-span-6"
          />
        </div>
        <div className="grid grid-cols-12 mt-3 items-center">
          <div className="col-span-2 flex flex-row">
            <RxClock className="w-5 h-5 mr-3" />
            <div className="text-base font-semibold">Durasi</div>
          </div>
          <input
            type="number"
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
            placeholder="Type here"
            className="input input-md input-bordered w-full max-w-xs col-span-6"
          />
        </div>
      </div>
    </div>
  );
};
