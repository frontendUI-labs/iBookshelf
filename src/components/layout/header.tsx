import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  ActivitySquare,
  BarChartBig,
  Bike,
  ChevronDown,
  Cpu,
  FolderHeart,
  Landmark,
  Menu,
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
    <div className="container mx-auto px-4 md:flex justify-center items-center gap-4 py-5 border-b-2 border-gray-300 xl:gap-8 ">
      <div className="flex justify-between">
        <div className="flex items-center gap-5 md:gap-3">
          <Link to="/">
            <div className="bg-purple-600 p-3 rounded-lg ">
              <img src="/icons/Vector.svg" alt="" />{" "}
            </div>
          </Link>
          <div className="flex flex-col">
            <img src="/icons/Bookoe.svg" alt="" />
            <span className="hidden text-[13px] xl:flex">
              Book Store Website
            </span>
          </div>
        </div>
        <div className="flex items-center rounded-lg md:hidden">
          <NavigationMenu.Root className="relative z-20 ">
            <NavigationMenu.List className=" center m-0 rounded-[6px] bg-white">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger defaultValue="active">
                  <>
                    <Menu className="text-purple-600 stroke-[2.5px] hover:scale-110 duration-200" />
                  </>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="bg-white px-2 py-2 z-3 absolute top-[40px] right-0 border border-gray-200 rounded-md  ">
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <PenSquare />
                      Biography
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <BarChartBig />
                      Business
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <Cpu />
                      Tech
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <ActivitySquare />
                      Health
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <Landmark />
                      Politics
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <FolderHeart />
                      Romance
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <Rocket />
                      Science Fiction
                    </Link>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <Link
                      className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                      to="/biography"
                    >
                      <Bike />
                      Sports
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </div>
      <div className="hidden border-[1px] border-gray-200 md:flex items-center rounded-lg h-[60px] w-[870px]">
        <NavigationMenu.Root className="relative z-20 ">
          <NavigationMenu.List className=" center m-0 rounded-[6px] bg-white">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                defaultValue="active"
                className="xl:w-[300px] text-purple-600 group flex select-none items-center h-[57px] justify-around gap-4 rounded-[4px] px-4 py-2 text-[15px] font-medium outline-purple-600"
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
              <NavigationMenu.Content className=" bg-white md:w-[570px] z-3 absolute top-[60px] px-2 py-2 left-0 border border-gray-200 rounded-b-md lg:w-[600px] ">
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
      <div className="hidden  lg:flex gap-1 xl:gap-8 items-center">
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
