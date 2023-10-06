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
  UserCircle,
} from "lucide-react";
import Button from "../../common/Button";
import Select from "../../common/Select";
// import { HeartIconHeader } from "../ui/Icons";
import { Link, useNavigate } from "react-router-dom";
import DialogCart from "../ui/DialogCart";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { appSliceBook } from "../../redux/input-slice";
import FavoriteDialog from "../ui/DialogFavorite";

function Header() {
  const languages = ["ENG", "ESP"];
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto fixed top-0 z-20 backdrop-blur-3xl">
      <div className="container mx-auto px-4 sm:px-8 md:flex justify-center gap-4 border-b-2 border-gray-300 py-5 xl:gap-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-5 md:gap-3">
            <Link to="/">
              <div className="flex justify-center items-center bg-purple-600 p-3 rounded-lg ">
                <img src="/icons/Vector.svg" alt="" />{" "}
              </div>
            </Link>
            <div className="flex flex-col">
              <img className="bg-transparent" src="/icons/Bookoe.svg" alt="" />
              <span className="hidden text-[13px] xl:flex">
                Book Store Website
              </span>
            </div>
          </div>
          <div className="mobile flex items-center rounded-lg md:hidden">
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
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/biography"
                      >
                        <PenSquare />
                        Biography
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/business"
                      >
                        <BarChartBig />
                        Business
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/tech"
                      >
                        <Cpu />
                        Tech
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/health"
                      >
                        <ActivitySquare />
                        Health
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/politics"
                      >
                        <Landmark />
                        Politics
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/romance"
                      >
                        <FolderHeart />
                        Romance
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/science-fiction"
                      >
                        <Rocket />
                        Science Fiction
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="flex w-full m-0 p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/sports"
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
        <div className="hidden border-[1px] border-gray-200 md:flex items-center rounded-lg h-[60px] w-full">
          <NavigationMenu.Root className="relative z-20 ">
            <NavigationMenu.List className=" center m-0 rounded-[6px] bg-white">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  defaultValue="active"
                  className="xl:w-[150px] text-purple-600 group flex select-none items-center h-[57px] justify-around gap-4 rounded-[4px] px-4 py-2 text-[15px] font-medium outline-purple-600"
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
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/biography"
                      >
                        <div className="flex gap-4">
                          <PenSquare />
                          Biography
                        </div>
                        <p className="text-black font-light text-sm italic">
                          Explore the riveting journey of a legendary figure,
                          from humble beginnings...
                        </p>
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/business"
                      >
                        <div className="flex gap-4">
                          <BarChartBig />
                          Business
                        </div>
                        <p className="text-black font-light text-sm italic">
                          Discover the proven strategies and innovative
                          approaches that have propelled companies...
                        </p>
                      </Link>
                    </NavigationMenu.Link>
                  </div>
                  <div className="flex">
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/tech"
                      >
                        <div className="flex gap-4">
                          <Cpu />
                          Tech
                        </div>
                        <p className="text-black font-light text-sm italic">
                          Embark on a captivating exploration of the
                          ever-evolving world of technology...
                        </p>
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/health"
                      >
                        <div className="flex gap-4">
                          <ActivitySquare />
                          Health
                        </div>
                        <p className="text-black font-light text-sm italic">
                          Navigate the path to optimal health and well-being
                          with a comprehensive guide...
                        </p>
                      </Link>
                    </NavigationMenu.Link>
                  </div>
                  <div className="flex">
                    <NavigationMenu.Link asChild>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/politics"
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
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/romance"
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
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/science-fiction"
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
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="w-full m-0 flex flex-col p-2  gap-4 rounded-xl hover:bg-gray-300 hover:text-purple-600  focus:text-purple-600 outline-purple-600"
                        to="/filter/sports"
                      >
                        <div className="flex gap-4">
                          <Bike />
                          Sports
                        </div>
                        <p className="text-black font-light text-sm italic">
                          Follow the inspirational journey of athletes
                          determined to achieve greatness...
                        </p>
                      </Link>
                    </NavigationMenu.Link>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/filter");
              if (inputRef.current) {
                const actualValue = inputRef.current.value;
                dispatch(appSliceBook(actualValue));
              }
            }}
            className="flex h-full w-full rounded-lg "
          >
            <label htmlFor="search" className="sr-only">
              Search your favorite book
            </label>
            <input
              className="border-x h-full p-6 w-full flex-1 outline-purple-600 text-purple-600"
              type="text"
              id="search"
              ref={inputRef}
              placeholder="Search over 30 million book titles"
            />
            <div className="w-[80px] h-full flex justify-center items-center">
              <Button variant="icon">
                <Search color="var(--primary)" />
              </Button>
            </div>
          </form>
        </div>

        <div className="hidden  lg:flex gap-1 xl:gap-8 items-center">
          <FavoriteDialog />
          <DialogCart />
          <div className="h-[60px] w-[60px] rounded-full">
            <UserCircle className="w-full h-full text-gray-300 fill-black stroke-[1.3px] " />
          </div>
          <Select
            variant="secondary"
            placeholder={<span className=" font-bold">EN</span>}
            options={languages}
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
