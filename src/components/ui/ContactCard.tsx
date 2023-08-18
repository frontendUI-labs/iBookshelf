import { Triangle } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="relative overflow-hidden text-white font-heading bg-purple-600 rounded-[32px] flex flex-col justify-center items-center gap-12 py-16">
      <img
        className="absolute top-0 left-0"
        src="/images/triangleGroup.png"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0"
        src="/images/smallTrianglesGroup.png"
        alt=""
      />
      <Triangle className="fill-[#6153BB] text-[#6153BB] absolute -bottom-8 -left-12 rotate-[12deg] w-[230px] h-[250px]" />
      <Triangle className="fill-[#FFAB7C] text-[#FFAB7C] absolute -bottom-8 -left-20 rotate-[12deg] w-[230px] h-[250px]" />

      <Triangle className="fill-[#6153BB] text-[#6153BB] absolute bottom-48 -right-64 w-[365px] h-[395px]" />
      <Triangle className="fill-[#FFAB7C] text-[#FFAB7C] absolute bottom-48 -right-72 w-[365px] h-[395px]" />
      <h2 className="text-center text-[40px] font-medium ">
        Subscribe our newsletter for newest <br /> books updates
      </h2>
      <div className="flex">
        <input
          className="w-[450px] rounded-l-xl py-4 px-6 text-base font-normal bg-[#7C6DE3] text-gray-200"
          type="text"
          placeholder="Type your email here"
        />
        <button className="bg-white text-lg font-semibold text-black py-4 px-8 rounded-r-xl">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
export default ContactCard;
