// import {  useState } from "react";
import Button from "../../common/Button";
import { CheckBoxInput } from "./AddInput";
import AcordionComponent from "./acordion-component";
import SliderInputComponent from "./slider-input-component";

function SideBar() {
  const options = [
    "Alone Here ",
    "Alien Invassion",
    "Bullo The Cat",
    "Cut That Hair!",
    "Dragon Of The King",
  ];

  // const [checkboxValue, setCheckboxValue] = useState({
  //   action: "",
  //   fantasy: "",
  //   adventure: "",
  //   history: "",
  //   animation: "",
  //   horror: "",
  //   biography: "",
  //   mystery: "",
  //   comedy: "",
  //   romance: "",
  //   crime: "",
  //   "sci-fi": "",
  //   documentary: "",
  //   sport: "",
  // });

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
          title="Shop by Category"
        >
          <CheckBoxInput genre="Action" />
          <CheckBoxInput genre="Fantasy" />
          <CheckBoxInput genre="Advanture" />
          <CheckBoxInput genre="History" />
          <CheckBoxInput genre="Animation" />
          <CheckBoxInput genre="Horror" />
          <CheckBoxInput genre="Biography" />
          <CheckBoxInput genre="Mystery" />
          <CheckBoxInput genre="Comedy" />
          <CheckBoxInput genre="Romance" />
          <CheckBoxInput genre="Crime" />
          <CheckBoxInput genre="Sci-fi" />
          <CheckBoxInput genre="Documentary" />
          <CheckBoxInput genre="Sport" />
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
