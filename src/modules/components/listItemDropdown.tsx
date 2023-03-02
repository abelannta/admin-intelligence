import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ListItemProps {
  title: string;
  icon: any;
  subMenu?: {
    title: string;
    url: string;
    hasChild: boolean;
    childOpen: boolean;
  }[];
}

const ListItemDropdown = (props: ListItemProps) => {
  const { title, icon, subMenu } = props;
  const router = useRouter();
  const [isRotated, setIsRotated] = React.useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
    setIsRotated((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="hover:translate-x-1 py-3 flex text-gray-500 w-full hover:text-primary-500 duration-300 items-center justify-between"
      >
        <a className="pl-2.5 pr-0.5 justify-center items-center">{icon}</a>
        <h1 className="absolute pl-9 invisible lg:visible font-medium">
          {title}
        </h1>
        <a
          className={`${
            isRotated ? "rotate-180" : ""
          } transition duration-200 mr-3 `}
        >
          <FiChevronDown />
        </a>
      </button>
      {showOptions &&
        subMenu?.map((item: any, idx: number) => (
          <div key={idx}>
            <Link href={item.hasChild ? "#" : item.url} legacyBehavior>
              <div>
                <button
                  className={`hover:translate-x-1 focus:scale-105 duration-150 flex items-center pl-9 lg:justify-start h-10 font-medium w-full overflow-hidden rounded-md
                                    ${
                                      router.pathname.includes(item.url)
                                        ? "duration-300 bg-primary-100 text-primary-500 w-full rounded-md "
                                        : "duration-300 text-gray-500 hover:text-primary-500 w-full"
                                    }`}
                >
                  {item.title}
                </button>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default ListItemDropdown;
