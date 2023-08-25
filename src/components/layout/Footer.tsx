import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  Triangle,
  Heart,
  Play,
} from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const ContactCard = () => {
  return (
    <div className="container m-auto relative overflow-hidden text-white font-heading bg-purple-600 rounded-[32px] py-10  lg:py-16">
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
      <div className="w-full relative flex flex-col gap-8 justify-center items-center lg:gap-12">
        <h2 className="text-2xl text-center  font-medium lg:text-5xl">
          Subscribe our newsletter for newest <br /> books updates
        </h2>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
          <input
            className="w-[300px]  border-2 border-transparent  py-4 px-6 text-base font-normal bg-[#7C6DE3] text-gray-200 focus:text-white lg:w-[450px] lg:rounded-l-xl"
            type="text"
            placeholder="Type your email here"
          />
          <button className="w-[150px] bg-white text-lg font-semibold text-black py-4 px-8 hover:scale-105 duration-300 lg:rounded-r-xl">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

const SocialsIcons = ({
  hover,
  children,
}: {
  hover: string;
  children: ReactNode;
}) => {
  return (
    <a href="" target="_blank">
      <div
        className={twMerge(
          "relative w-[48px] h-[48px] rounded-xl border-2 border-gray-300 flex justify-center items-center lg:w-[58px] lg:h-[58px] hover:scale-110",
          hover
        )}
      >
        {children}
      </div>
    </a>
  );
};

const IconYt = () => {
  return (
    <>
      <Youtube className=" fill-[#FF000D] stroke-none" />
      <div className="absolute">
        <Play className="h-[8px] fill-white text-white stroke-[2px]" />
      </div>
    </>
  );
};
const Information = ({ icon, info }: { icon: ReactNode; info: string }) => {
  return (
    <div className="flex items-center gap-3 lg:w-[340px]">
      <div className="icon-container">{icon}</div>
      <p className="text-sm font-semibold lg:text-lg">{info}</p>
    </div>
  );
};

const LinkTo = ({ category }: { category: string }) => {
  return (
    <a href="" target="_blank">
      <li className="hover:text-purple-600">{category}</li>
    </a>
  );
};

const Footer = () => {
  const iconClassName = "text-purple-600 w-[25px] h-[25px]";
  return (
    <>
      <div className="mt-40 flex flex-col gap-20 mb-4 pb-10 border-b-2 border-gray-300">
        <ContactCard />
        <div className="px-5 lg:container m-auto flex flex-col gap-6  font-heading lg:mt-16 lg:flex-row justify-between">
          <div className="follow w-full flex flex-col gap-2 lg:w-[420px] lg:gap-6">
            <div className="flex items-center gap-[20px]">
              <div className="bg-purple-600 p-3 rounded-lg ">
                <img className="w-8 lg:w-full" src="/icons/Vector.svg" alt="" />
              </div>
              <div className="flex flex-col gap-2 lg:gap-0">
                <img
                  className="w-20 lg:w-full"
                  src="/icons/Bookoe.svg"
                  alt=""
                />
                <span className="text-[13px]">Book Store Website</span>
              </div>
            </div>
            <p className="text-sm font-basic font-normal lg:mb-4 lg:text-base">
              "Discover a world of knowledge and imagination at our books store.
              Find your next literary adventure with us."
            </p>
            <div>
              <h4 className="text-base font-semibold mb-2 lg:mb-7 lg:text-xl">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <SocialsIcons
                  hover="hover:bg-[#232aed3c]"
                  children={
                    <Facebook className="fill-[#2329EE] text-[#2329EE]" />
                  }
                />
                <SocialsIcons hover="hover:bg-red-300" children={<IconYt />} />
                <SocialsIcons
                  hover="hover:bg-[#00b6df3e]"
                  children={
                    <Twitter className="fill-[#00B7DF] text-[#00B7DF]" />
                  }
                />
                <SocialsIcons
                  hover="hover:bg-[#006fa748]"
                  children={
                    <Linkedin className="fill-[#0070A7] text-[#0070A7] " />
                  }
                />
                <SocialsIcons
                  hover="hover:bg-[#fe16773a]"
                  children={<Instagram className="text-[#FF1576] " />}
                />
              </div>
            </div>
          </div>
          <div className="categories">
            <h4 className="text-base font-semibold mb-4 lg:text-xl">
              Books Categories
            </h4>
            <ul className="list-none text-sm font-normal grid grid-cols-2 gap-y-2 gap-x-20 lg:text-lg">
              <LinkTo category="Action" />
              <LinkTo category="Law" />
              <LinkTo category="Advanture" />
              <LinkTo category="Mystery" />
              <LinkTo category="Comedy" />
              <LinkTo category="Professional" />
              <LinkTo category="Crime" />
              <LinkTo category="Romance" />
              <LinkTo category="Drama" />
              <LinkTo category="TV Series" />
              <LinkTo category="Fantasy" />
              <a href="" target="_blank">
                <div className="text-purple-600 flex items-end">
                  View more
                  <ChevronRight className="text-purple-600" />
                </div>
              </a>
              <LinkTo category="Horror" />
            </ul>
          </div>
          <div className="quicklinks">
            <h4 className="text-sm font-semibold mb-4 lg:text-xl">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 text-sm font-normal lg:flex flex-col gap-2 lg:text-lg">
              <LinkTo category="About us" />
              <LinkTo category="Contact us" />
              <LinkTo category="Products" />
              <LinkTo category="Login" />
              <LinkTo category="Sign Up" />
              <LinkTo category="FAQ" />
              <LinkTo category="Shipment" />
            </ul>
          </div>
          <div className="information flex flex-col gap-2 lg:gap-5">
            <h4 className="text-sm font-semibold lg:text-xl">Our Store</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6862.37426942483!2d-122.44929124613022!3d37.78804581372756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580cc9a17e597%3A0x7004d2aa23cd50ec!2sCalifornia%20St%2C%20San%20Francisco%2C%20CA%2094107%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1692986626821!5m2!1ses-419!2spe"
              width="600"
              height="450"
              className="border-none w-full h-[120px] lg:w-[380px] rounded-xl hover:scale-105 duration-200"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Information
              icon={<MapPin className={iconClassName} />}
              info="832  Thompson Drive, San Fransisco CA 94107, United States"
            />
            <Information
              icon={<Phone className={iconClassName} />}
              info="+123 345123 556"
            />
            <Information
              icon={<Mail className={iconClassName} />}
              info="support@bookoe.id"
            />
          </div>
        </div>
      </div>
      <div className="px-4 lg:container m-auto pb-4 flex flex-col lg:flex-row items-center justify-between font-heading text-xs font-normal lg:text-base">
        <p>iBookshrelf Book Store Website - © 2023 All Rights Reserved</p>
        <p className="flex gap-2 items-center">
          Made with
          <span>
            <Heart className="fill-red-500 text-red-500 w-5 h-5" />
          </span>
          by FrontendUI Labs
        </p>
      </div>
    </>
  );
};
export default Footer;
