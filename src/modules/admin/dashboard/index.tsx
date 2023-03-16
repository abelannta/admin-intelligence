import AdminBasePage from "@/modules/basePage";
import { SIDEBAR_LINK } from "@/modules/components/menuAdmin";
import { StatsDashboardAdmin } from "@/modules/admin/dashboard/components/stats";
import dynamic from "next/dynamic";
import { StatsUserDashboardAdmin } from "./components/statsUser";

const LineChart = dynamic(
  () => import("@/modules/admin/dashboard/components/lineChart"),
  {
    ssr: false,
  }
);

export const DashboardAdmin = () => {
  return (
    <>
      <AdminBasePage title="Dashboard Admin">
        <h1 className="text-2xl font-bold mb-5">Dashboard Admin</h1>
        <div className="flex gap-5">
          <div className="col-span-1">
            <StatsDashboardAdmin />
            <div className="rounded-xl shadow-md bg-white p-5 mt-5">
              <h3 className="text-lg font-semibold mb-5">Chart User</h3>
              <LineChart />
            </div>
          </div>
          <div className="col-span-1">
            <StatsUserDashboardAdmin />
          </div>
        </div>
      </AdminBasePage>
    </>
  );
};
