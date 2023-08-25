import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  ActivitySquare,
  BarChartBig,
  Bike,
  ChevronDown,
  Cpu,
  FolderHeart,
  Landmark,
  MenuSquare,
  PenSquare,
  Rocket,
  Search,
} from "lucide-react";
import Button from "../../common/Button";
import Select from "../../common/Select";
import { CartIcon, HeartIconHeader } from "../ui/Icons";
import { Link } from "react-router-dom";

function Header() {
  const languages = ["ENG", "ESP"];

  return (
    <div className="flex gap-8 justify-center items-center py-5 border-b-2 border-gray-300">
      <div className="flex items-center gap-[20px]">
        <Link to="/">
          <div className="bg-purple-600 p-3 rounded-lg ">
            <img src="/icons/Vector.svg" alt="" />{" "}
          </div>
        </Link>
        <div className="flex flex-col">
          <img src="/icons/Bookoe.svg" alt="" />
          <span className="text-[13px]">Book Store Website</span>
        </div>
      </div>
      <div className="border-[1px] border-gray-200 flex items-center rounded-lg h-[60px] w-[870px]">
        <NavigationMenu.Root className="relative z-20 ">
          <NavigationMenu.List className=" center m-0 rounded-[6px] bg-white">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                defaultValue="active"
                className="w-[300px] text-purple-600 group flex select-none items-center h-[57px] justify-around gap-4 rounded-[4px] px-4 py-2 text-[15px] font-medium outline-purple-600"
              >
                <>
                  <MenuSquare />
                  Menu
                  <ChevronDown
                    className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className=" bg-white w-[600px] z-3 absolute top-[60px] px-2 py-2 left-0 border border-gray-200 rounded-b-md  ">
                <div className="flex">
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <div className="flex gap-4">
                        <PenSquare />
                        Biography
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Explore the riveting journey of a legendary figure, from
                        humble beginnings...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/business"
                    >
                      <div className="flex gap-4">
                        <BarChartBig />
                        Business
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Discover the proven strategies and innovative approaches
                        that have propelled companies...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                </div>
                <div className="flex">
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/tech"
                    >
                      <div className="flex gap-4">
                        <Cpu />
                        Tech
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Embark on a captivating exploration of the ever-evolving
                        world of technology...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/health"
                    >
                      <div className="flex gap-4">
                        <ActivitySquare />
                        Health
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Navigate the path to optimal health and well-being with
                        a comprehensive guide...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                </div>
                <div className="flex">
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/politics"
                    >
                      <div className="flex gap-4">
                        <Landmark />
                        Politics
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Gain a deep understanding of the intricate workings of
                        political landscapes...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/romance"
                    >
                      <div className="flex gap-4">
                        <FolderHeart />
                        Romance
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Immerse yourself in a heartwarming tale of passion and
                        complexities of love...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                </div>
                <div className="flex">
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/science-fiction"
                    >
                      <div className="flex gap-4">
                        <Rocket />
                        Science Fiction
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Embark on an exhilarating journey to distant galaxies
                        and alternate realities...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/sports"
                    >
                      <div className="flex gap-4">
                        <Bike />
                        Sports
                      </div>
                      <p className="text-black font-light text-sm italic">
                        Follow the inspirational journey of athletes determined
                        to achieve greatness...
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                </div>
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
