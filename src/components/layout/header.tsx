import { LayoutGrid, Search } from "lucide-react";
import Button from "../../common/Button";
import Select from "../../common/Select";
import { HeartIcon, CartIcon } from "../ui/icons-component";

function Header() {
  const navigationOptions = ["Inicio", "Filtros", "Details", "Pago"];
  const languages = ["ENG", "ESP"];

  return (
    <div className="flex gap-8 justify-center items-center">
      <div className="flex items-center gap-[20px]">
        <div className="bg-purple-600 p-3 rounded-lg ">
          <img src="../../../public/icons/Vector.svg" alt="" />
        </div>
        <div className="flex flex-col">
          <img src="../../../public/icons/Bookoe.svg" alt="" />
          <span className="text-[13px]">Book Store Website</span>
        </div>
      </div>
      <div className="border-[1px] border-gray-200 flex items-center rounded-lg h-[60px]">
        <Select
          variant="primary"
          placeholder={
            <div className="flex items-center gap-4">
              <LayoutGrid color="var(--primary)" />
              <span className="text-purple-600 font-bold">Menu</span>
            </div>
          }
          color="var(--primary)"
          options={navigationOptions}
        />
        <input
          className="border-x h-full flex items-center p-6 min-w-3xl w-full flex-1"
          type="text"
          id="search"
          placeholder="Search over 30 million book titles"
        />
        <div className="">
          <Button
            children={<Search color="var(--primary)" />}
            type="button"
            variant="icon"
          />
        </div>
      </div>
      <div className="flex gap-8">
        <HeartIcon border="border-gray-200" color="black" />
        <CartIcon color="black" />
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
