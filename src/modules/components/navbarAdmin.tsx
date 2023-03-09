import dynamic from "next/dynamic";
import Link from "next/link";
import { TbStack2 } from "react-icons/tb";

const UserNav = dynamic(() => import("@/modules/components/userNavbar"), {
  ssr: false,
});

const NavigationBarAdmin = () => {
  return (
    <>
      <nav className="z-50 relative bg-white px-5 py-3 w-full">
        <div className="z-50 flex flex-wrap justify-between w-full items-center">
          <Link href="/" legacyBehavior>
            <div className="hover:translate-x-1 duration-300 flex items-center space-x-2 text-primary-500 ">
              <div className="self-center text-xl font-semibold whitespace-nowrap">
                <p className="normal-case text-xl">
                  Nine
                  <span className="text-bold">Intelligence</span>
                </p>
              </div>
            </div>
          </Link>
          <div className="flex z-50 items-center ">
            <UserNav />
          </div>
        </div>
      </nav>

      {/* Shadow */}
      <div className="lg:pl-64 pl-[60px]">
        <nav className="absolute top-0 z-0 bg-white h-[54px] w-full shadow-md" />
      </div>
    </>
  );
};

export default NavigationBarAdmin;
