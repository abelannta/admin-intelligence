import { MdGroup, MdInsertChart } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

export const SIDEBAR_LINK = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <MdInsertChart className="h-5 w-5" />,
    hasChild: false,
    childOpen: false,
  },
  {
    title: "Data Pengguna",
    url: "/admin/data-pengguna",
    icon: <MdGroup className="h-5 w-5" />,
    hasChild: false,
    childOpen: false,
  },
  {
    title: "Kelola Data",
    icon: <HiDocumentText className="h-5 w-5" />,
    hasChild: true,
    childOpen: false,
    subMenu: [
      {
        title: "Data Tryout",
        url: "/admin/kelola-data/tryout",
      },
      {
        title: "Data Bank Soal",
        url: "/admin/kelola-data/bank-soal",
      },
      {
        title: "Data Materi",
        url: "/admin/kelola-data/mmteri",
      },
    ],
  },
];
