import * as Tabs from "@radix-ui/react-tabs";
import { format } from "date-fns";
import ProgressComponent from "./progress";
import { Rating } from "../components/ui/Icons";

export type BookInfo = {
  author: string;
  categorySlug: string;
  cover: string;
  discountPercentage: number;
  id: string;
  isFavorite: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  isReaderChoice: boolean;
  isRecommended: boolean;
  isbn: string;
  language: string;
  pages: number;
  price: number;
  publishDate: string;
  publisher: string;
  rating: number;
  slug: string;
  synopsis: string;
  title: string;
  totalReviews: number;
};

function TabsComponent({ bookinfo }: { bookinfo: BookInfo }) {
  const formatedDate = format(new Date(bookinfo.publishDate), "MMMM do yyyy");
  const exampleTags = [
    bookinfo.categorySlug,
    "Drama",
    "Adventure",
    "Survival",
    "Biography",
    "Trending2023",
  ];

  return (
    <div>
      <Tabs.Root
        className="flex flex-col w-full font-heading"
        defaultValue="tab1"
      >
        <Tabs.List
          className="shrink-0 flex border-b border-mauve6"
          aria-label="Details Product"
        >
          <Tabs.Trigger
            className="bg-white p-4 flex-1 flex items-center justify-start text-3xl font-bold text-gray-100 leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-purple-700  data-[state=active]:text-purple-700 data-[state=active]:shadow-current data-[state=active]:focus:relative   outline-none cursor-default"
            value="tab1"
          >
            Details Product
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-white p-4  flex-1 flex items-center justify-start text-3xl font-bold text-gray-100 leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:text-purple-700 data-[state=active]:shadow-current data-[state=active]:focus:relative   outline-none cursor-default"
            value="tab2"
          >
            Customer Reviews
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="grow p-4 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab1"
        >
          <div className="grid grid-cols-[350px,1fr] border-x border-t border-gray-200 p-2 items-center">
            <h4 className="font-bold text-lg">Book Title</h4>
            <p className="mb-5  text-[15px]  truncate">{bookinfo.title}</p>
          </div>
          <div className="grid grid-cols-[350px,1fr] border-x border-t border-gray-200  p-2">
            <h4 className="font-bold text-lg">Author</h4>
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              {bookinfo.author}
            </p>
          </div>
          <div className="grid grid-cols-[350px,1fr] border-x border-t border-gray-200 p-2">
            <h4 className="font-bold text-lg">ISBN</h4>
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              {bookinfo.isbn}
            </p>
          </div>
          <div className="grid grid-cols-[350px,1fr] border-x border-t border-gray-200 p-2">
            <h4 className="font-bold text-lg">Edition Language</h4>
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              {bookinfo.language}
            </p>
          </div>
          <div className="grid grid-cols-[350px,1fr] border-x border-t border-gray-200 p-2">
            <h4 className="font-bold text-lg">Book Format</h4>
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              Paperback, {bookinfo.pages} Pages
            </p>
          </div>
          <div className="grid grid-cols-[350px,1fr] border-x border-t border-gray-200 p-2">
            <h4 className="font-bold text-lg">Date Published</h4>
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              {formatedDate}
            </p>
          </div>
          <div className="grid grid-cols-[350px,1fr] border border-gray-200 p-2">
            <h4 className="font-bold text-lg">Publisher</h4>
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              {bookinfo.publisher}
            </p>
          </div>
          <div className="grid grid-cols-[350px,1fr] border-x border-b border-gray-200 p-2">
            <h4 className="font-bold text-lg">Tags</h4>
            <div className="flex flex-wrap gap-3">
              {exampleTags.map((tag, id) => {
                return (
                  <span
                    key={id}
                    className="px-3 py-2 text-purple-600 font-bold bg-purple-400 rounded-lg text-[15px] leading-normal capitalize"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2"
        >
          <div className="flex  py-8 gap-8 items-center">
            <div>
              <h3 className="font-bold text-3xl mb-4">Rating Information</h3>
              <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </div>
            <div>
              <ProgressComponent numberStars={5} value={86} />
              <ProgressComponent numberStars={3} value={61} />
              <ProgressComponent numberStars={3} value={12} />
              <ProgressComponent numberStars={2} value={5} />
              <ProgressComponent numberStars={1} value={8} />
            </div>
            <div>
              <p className="text-5xl font-bold whitespace-nowrap">
                4.7 <span className="text-base font-normal">out of 5</span>
              </p>
              <Rating value={4} />
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default TabsComponent;
