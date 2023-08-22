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
    <div className="container m-auto relative overflow-hidden text-white font-heading bg-purple-600 rounded-[32px] flex flex-col justify-center items-center gap-12 py-16">
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
          className="w-[450px] rounded-l-xl border-2 border-transparent  py-4 px-6 text-base font-normal bg-[#7C6DE3] text-gray-200 focus:text-white"
          type="text"
          placeholder="Type your email here"
        />
        <button className="bg-white text-lg font-semibold text-black py-4 px-8 rounded-r-xl hover:scale-105 duration-300">
          SUBSCRIBE
        </button>
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
    <a href="">
      <div
        className={twMerge(
          "relative w-[58px] h-[58px] rounded-xl border-2 border-gray-300 flex justify-center items-center hover:scale-110",
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
    <div className="flex items-center gap-3 w-[340px]">
      <div className="icon-container">{icon}</div>
      <p className="text-lg font-semibold">{info}</p>
    </div>
  );
};

const LinkTo = ({ category }: { category: string }) => {
  return (
    <a href="">
      <li className="hover:text-purple-600">{category}</li>
    </a>
  );
};

const Footer = () => {
  const iconClassName = "text-purple-600 w-[25px] h-[25px]";
  return (
    <>
      <div className="mt-40 flex flex-col gap-20 mb-4 pb-10 border-b-2 border-gray-300 ">
        <ContactCard />
        <div className="container m-auto flex justify-between mt-16 w-full font-heading">
          <div className="flex flex-col gap-6 w-[420px]">
            <div className="flex items-center gap-[20px]">
              <div className="bg-purple-600 p-3 rounded-lg ">
                <img src="/icons/Vector.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <img src="/icons/Bookoe.svg" alt="" />
                <span className="text-[13px]">Book Store Website</span>
              </div>
            </div>
            <p className="text-base font-basic font-normal mb-4">
              iBookShelf is a Book Store Website lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </p>
            <div>
              <h4 className="text-xl font-semibold mb-7">Follow Us</h4>
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
          <div>
            <h4 className="text-xl font-semibold mb-4">Books Categories</h4>
            <ul className="list-none text-lg font-normal grid grid-cols-2 gap-y-2 gap-x-20">
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
              <a href="">
                <div className="text-purple-600 flex items-end">
                  View more
                  <ChevronRight className="text-purple-600" />
                </div>
              </a>
              <LinkTo category="Horror" />
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-lg font-normal flex flex-col gap-2">
              <LinkTo category="About us" />
              <LinkTo category="Contact us" />
              <LinkTo category="Products" />
              <LinkTo category="Login" />
              <LinkTo category="Sign Up" />
              <LinkTo category="FAQ" />
              <LinkTo category="Shipment" />
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-semibold ">Our Store</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.5063418319506!2d-75.23073076847245!3d-12.04177453244419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e961dd48c148f%3A0x47dd04a6231d4ff3!2sJr.%20Turmalina%2C%20Huancayo%2012006!5e0!3m2!1ses-419!2spe!4v1692639151151!5m2!1ses-419!2spe"
              width="600"
              height="450"
              className="border-none h-[120px] w-[380px] rounded-xl hover:scale-105 duration-200"
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
      <div className="container m-auto pb-4 flex items-center justify-between font-heading text-base font-normal">
        <p>iBookshrelf Book Store Website - © 2023 All Rights Reserved</p>
        <p className="flex gap-2 items-center">
          Made with
          <span>
            <Heart className="fill-red-500 text-red-500 w-5 h-5" />
          </span>
          by Team Legendary
        </p>
      </div>
    </>
  );
};
export default Footer;
