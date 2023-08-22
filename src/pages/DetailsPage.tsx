// import { useParams } from "react-router-dom";

import {
  FacebookIcon,
  Mail,
  MessagesSquare,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  ThumbsUp,
  Twitter,
  Zap,
} from "lucide-react";
import { HeartIcon, Rating } from "../components/ui/Icons";
import SocialButtons, { ButtonsSocials } from "../components/ui/SocialButtons";
import { useState } from "react";
import Button from "../common/Button";

function Details() {
  // const { bookSlug } = useParams();
  const [favorite, setFavorite] = useState(false); //active | inactive

  const [counter, setCounter] = useState(1);

  function addCounter() {
    setCounter(counter + 1);
  }
  function reduceCounter() {
    if (counter <= 1) return;
    setCounter(counter - 1);
  }

  return (
    <div className="flex container m-auto">
      <img
        className=" object-contain"
        src="../../public/images/thirdImage.png"
        alt=""
      />
      <div className="flex flex-col gap-6 flex-1">
        <h1>All Good News</h1>
        <div className="flex justify-between items-end">
          <div className="text-purple-600 font-bold flex gap-4 fill-purple-600">
            <Rating value={5} />
            <span>4.0</span>
            <MessagesSquare />
            <span>235 reviews</span>
            <ThumbsUp />
            <span>456k likes</span>
          </div>
          <SocialButtons>
            <ButtonsSocials bg="bg-[#1E33E5]">
              <FacebookIcon />
              Facebook
            </ButtonsSocials>
            <ButtonsSocials bg="bg-[#61C3E2]">
              <Twitter />
              Twitter
            </ButtonsSocials>
            <ButtonsSocials bg="bg-[#53C258]">
              <MessagesSquare />
              Whatsapp
            </ButtonsSocials>
            <ButtonsSocials bg="bg-gray-400">
              <Mail />
              Email
            </ButtonsSocials>
          </SocialButtons>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem
        </p>
        <div className="flex items-center justify-between border-b-2 border-dotted pb-4">
          <div className="flex gap-4 items-center">
            <div>
              <span className="text-gray-100 text-sm">Writen by</span>
              <p className="font-bold text-[18px] ">Kevin Smiley</p>
            </div>
            <div>
              <span className="text-gray-100 text-sm">Publisher</span>
              <p className="font-bold text-[18px] ">Printarea Studios</p>
            </div>
            <div>
              <span className="text-gray-100 text-sm">Pages</span>
              <p className="font-bold text-[18px] ">2019</p>
            </div>
          </div>
          <SocialButtons>
            <ButtonsSocials bg="bg-purple-300">
              <Zap className="fill-purple-600 text-purple-600" />
              <span className="text-purple-600">FREE SHIPPING</span>
            </ButtonsSocials>
            <ButtonsSocials bg="bg-[#DDF5E4]">
              <ShieldCheck className="fill-[#3EB760] " />
              <span className="text-[#3EB760]">IN SOTCKS</span>
            </ButtonsSocials>
          </SocialButtons>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center ">
            <h4 className="text-xl text-left font-bold m-2">$15,63</h4>
            <span className="text-gray-100 text-xs line-through">$16,99</span>
            <span className="bg-orange-400 py-1 px-4 rounded-full text-white font-bold">
              2%
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-4 border border-gray-400 rounded-lg h-full">
              <ButtonsSocials onClick={reduceCounter}>
                <Minus className="text-purple-600" />
              </ButtonsSocials>
              <span className="font-bold">{counter}</span>
              <ButtonsSocials onClick={addCounter}>
                <Plus className="text-purple-600" />
              </ButtonsSocials>
            </div>
            <div className="flex items-center">
              <Button variant="primary">
                <ShoppingCart />
                <span>Add to cart</span>
              </Button>
              <HeartIcon
                onClick={() => {
                  setFavorite(!favorite);
                }}
                variant={favorite}
                bg="purple-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
