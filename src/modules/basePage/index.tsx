import { ReactNode, useState } from "react";
import ListItemComponent from "@/modules/components/listItem";
import NavigationBarAdmin from "@/modules/components/navbarAdmin";
import { SIDEBAR_LINK } from "@/modules/components/menuAdmin";

interface BasePageProps {
  children?: ReactNode;
  menuDropdown?: any;
  menuBottom?: any;
}

export interface SideBarData {
  title: string;
  url?: string;
  icon: JSX.Element;
  hasChild: boolean;
  childOpen: boolean;
  child?: SideBarDataChild[];
}

export interface SideBarDataChild {
  title: string;
  icon: JSX.Element;
  url: string;
}

const AdminBasePage = ({
  children,
  menuDropdown,
  menuBottom,
}: BasePageProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-primary-50 bg-stone-100">
        {/* navbar */}
        <div className="z-10 fixed w-full">
          <NavigationBarAdmin />
        </div>

        {/* sidebar */}
        <div className="fixed h-full w-[60px] lg:w-64 bg-white">
          <div className="pt-[92px] lg:pt-[92px]  lg:p-4 p-1">
            <ListItemComponent listItems={SIDEBAR_LINK} />
          </div>
        </div>

        {/* content */}
        <div className="w-full h-auto bg-primary-50 pt-[55px] lg:pl-64 pl-[60px]">
          <div className="lg:p-10 p-4">{children != null && children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminBasePage;
