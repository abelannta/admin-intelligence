import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ListItemDropdown from "./listItemDropdown";

interface ListItemProps {
  listItems: any[];
}

const ListItemComponent = ({ listItems }: ListItemProps) => {
  const router = useRouter();

  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      {listItems.map((item, idx) => (
        <div key={idx}>
          {item.hasChild ? (
            <ListItemDropdown
              title={item.title}
              icon={item.icon}
              subMenu={item.subMenu}
            />
          ) : (
            <Link href={item.hasChild ? "#" : item.url} legacyBehavior>
              <div className="py-0.5">
                <button
                  className={
                    router.pathname.includes(item.url)
                      ? " bg-primary-100 text-primary-500 w-full rounded-md focus:scale-105 duration-150"
                      : "text-gray-500 hover:text-primary-500 w-full focus:scale-105 duration-150"
                  }
                >
                  <div className="hover:translate-x-1 duration-300 flex items-center justify-center lg:justify-start h-10 font-medium w-full overflow-hidden rounded-md">
                    <a className="px-2.5">{item.icon}</a>
                    <a
                      className={
                        router.pathname.includes(item.url)
                          ? "absolute pl-9 text-black invisible lg:visible"
                          : "absolute pl-9 hover:text-primary-500 invisible lg:visible"
                      }
                    >
                      {item.title}
                    </a>
                  </div>
                </button>
              </div>
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default ListItemComponent;
