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
} from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SocialsIcons = ({
  children,
  bg,
}: {
  children: ReactNode;
  bg?: string;
}) => {
  return (
    <a href="">
      <div
        className={twMerge(
          "w-[58px] h-[58px] rounded-xl border-2 border-gray-300 flex justify-center items-center hover:scale-110",
          bg === "yt" ? ["bg-red-300", "border-red-300"] : ""
        )}
      >
        {children}
      </div>
    </a>
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
    <div className="flex justify-between my-16 w-full font-heading">
      <div className="flex flex-col gap-6 w-[420px]">
        <div className="bg-purple-600 rounded-lg h-16">LOGO</div>
        <p className="text-base font-basic font-normal mb-4">
          iBookShelf is a Book Store Website lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
        <div>
          <h4 className="text-xl font-semibold mb-7">Follow Us</h4>
          <div className="flex gap-4">
            <SocialsIcons
              children={<Facebook className="fill-[#2329EE] text-[#2329EE]" />}
            />
            <SocialsIcons
              bg="yt"
              children={
                <Youtube className="fill-[#FF000D] text-red-300 none" />
              }
            />
            <SocialsIcons
              children={<Twitter className="fill-[#00B7DF] text-[#00B7DF]" />}
            />
            <SocialsIcons
              children={<Linkedin className="fill-[#0070A7] text-[#0070A7] " />}
            />
            <SocialsIcons
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
        <div className="bg-gray-400 h-[120px] w-[380px] rounded-xl"></div>
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
  );
};
export default Footer;
