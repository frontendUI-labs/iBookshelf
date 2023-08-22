// import {  useState } from "react";
import Button from "../../common/Button";
import { CheckBoxInput } from "./AddInput";
import AcordionComponent from "./Accordion";
import SliderInputComponent from "./SliderInput";
import { Genre } from "../../types/type";

function SideBar({ genres }: { genres: Genre[] }) {
  const options = [
    "Alone Here ",
    "Alien Invassion",
    "Bullo The Cat",
    "Cut That Hair!",
    "Dragon Of The King",
  ];

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className=" p-4"
    >
      <h3 className="text-4xl font-bold">Filter Option</h3>
      <div>
        <AcordionComponent
          title="Best Sales (105)"
          variant="primary"
          id="item-1"
        >
          {options.map((option, id) => (
            <a className="block" href="" target="_blank" key={id}>
              {option}
            </a>
          ))}
        </AcordionComponent>
        ,
      </div>
      <div>
        <AcordionComponent
          variant="checkbox"
          id="main-2"
          title="Filter by Category"
        >
          {genres.map((genre) => {
            return <CheckBoxInput key={genre.id} genre={genre.name} />;
          })}
        </AcordionComponent>
      </div>
      <div>
        <AcordionComponent title="Price Range" id="main-3">
          <SliderInputComponent initialValue={30} finalvalue={80} />
        </AcordionComponent>
      </div>
      <div className="w-full">
        <Button type="submit" variant="primary">
          Refine Search
        </Button>
        <Button variant="secondary">Reset Filter</Button>
      </div>
    </form>
  );
}

export default SideBar;
