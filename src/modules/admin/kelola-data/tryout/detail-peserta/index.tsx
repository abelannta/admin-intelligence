import AdminBasePage from "@/modules/basePage";
import { SIDEBAR_LINK } from "@/modules/components/menuAdmin";
import { useState } from "react";
import TablePelapor from "./components/tablePeserta";

const data = [
  {
    id: 1,
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    telp: "081234567890",
    alamat: "Jl. Kenangan",
    langganan: "Pro",
  },
  {
    id: 2,
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    telp: "081234567890",
    alamat: "Jl. Kenangan",
    langganan: "Pro",
  },
  {
    id: 3,
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    telp: "081234567890",
    alamat: "Jl. Kenangan",
    langganan: "Pro",
  },
  {
    id: 4,
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    telp: "081234567890",
    alamat: "Jl. Kenangan",
    langganan: "Pro",
  },
  {
    id: 5,
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    telp: "081234567890",
    alamat: "Jl. Kenangan",
    langganan: "Pro",
  },
];

export const DataPesertaTryout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AdminBasePage title="Kelola Data Tryout | Data Peserta">
      <div className="bg-white py-10 shadow-lg rounded-lg divide-y overflow-hidden">
        <div className="px-5">
          <h1 className="font-bold text-xl mb-10">Data Peserta Tryout 1</h1>
        </div>
        <TablePelapor data={data} loading={loading} />
      </div>
    </AdminBasePage>
  );
};
