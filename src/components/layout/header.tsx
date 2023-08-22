import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  ChevronDown,
  CreditCard,
  Filter,
  FolderHeart,
  LayoutGrid,
  Library,
  Search,
} from "lucide-react";
import Button from "../../common/Button";
import Select from "../../common/Select";
import { CartIcon, HeartIconHeader } from "../ui/Icons";
import { Link } from "react-router-dom";

function Header() {
  const languages = ["ENG", "ESP"];

  return (
    <div className="flex gap-8 justify-center items-center my-8 border-b-2 border-gray-300">
      <div className="flex items-center gap-[20px]">
        <div className="bg-purple-600 p-3 rounded-lg ">
          <a href="/">
            <img src="../../../icons/Vector.svg" alt="" />
          </a>
        </div>
        <div className="flex flex-col">
          <img src="../../../icons/Bookoe.svg" alt="" />
          <span className="text-[13px]">Book Store Website</span>
        </div>
      </div>
      <div className="border-[1px] border-gray-200 flex items-center rounded-lg h-[60px] w-[870px]">
        <NavigationMenu.Root className="relative z-[1] ">
          <NavigationMenu.List className=" center m-0 rounded-[6px] bg-white">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                defaultValue="active"
                className="w-full text-purple-600 group flex select-none items-center h-[57px] justify-between gap-4 rounded-[4px] px-4 py-2 text-[15px] font-medium outline-purple-600"
              >
                <>
                  <LayoutGrid />
                  Menu
                  <ChevronDown
                    className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className=" bg-white w-full z-3 absolute top-[58px] px-2 py-2 left-0 border border-gray-200 rounded-b-md  ">
                <NavigationMenu.Link asChild>
                  <Link
                    className="w-full m-0 flex  gap-4 p-2 hover:text-purple-600 focus:text-purple-600 outline-purple-600"
                    to="/"
                  >
                    {" "}
                    <>
                      <Library />
                      Home
                    </>
                  </Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link
                    className=" w-full m-0 flex  gap-4 p-2 hover:text-purple-600 focus:text-purple-600 outline-purple-600"
                    to="/filter"
                  >
                    {" "}
                    <>
                      <Filter />
                      Filter
                    </>
                  </Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link
                    className=" w-full m-0 flex  gap-4 p-2 hover:text-purple-600 focus:text-purple-600 outline-purple-600"
                    to="/checkout"
                  >
                    {" "}
                    <>
                      <CreditCard />
                      Checkout
                    </>
                  </Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link
                    className=" w-full m-0 flex  gap-4 p-2 hover:text-purple-600 focus:text-purple-600 outline-purple-600"
                    to="/favorites"
                  >
                    {" "}
                    <>
                      <FolderHeart />
                      Favorites
                    </>
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <input
          className="border-x h-full p-6 w-full flex-1 outline-purple-600 text-purple-600"
          type="text"
          id="search"
          placeholder="Search over 30 million book titles"
        />
        <div>
          <Button
            children={<Search color="var(--primary)" />}
            type="button"
            variant="icon"
          />
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <HeartIconHeader />
        <CartIcon />
        <div className="bg-[#c4c4c4] rounded-lg h-[60px] w-[60px]">
          <img
            className=""
            src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small/user-profile-icon-free-vector.jpg"
            alt=""
          />
        </div>
        <Select
          variant="secondary"
          placeholder={<span className=" font-bold">EN</span>}
          options={languages}
        />
      </div>
    </div>
  );
}

export default Header;
