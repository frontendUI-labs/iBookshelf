import Button from "../../common/Button";
import AcordionComponent from "./acordion-component";

function SideBar() {
  const options = [
    "Alone Here ",
    "Alien Invassion",
    "Bullo The Cat",
    "Cut That Hair!",
    "Dragon Of The King",
  ];
  const mainOptions = [
    <AcordionComponent
      title="
Best Sales (105)"
      options={options}
      id="item-1"
    />,
    <AcordionComponent
      title="
Best Sales (105)"
      options={options}
      id="item-2"
    />,
  ];
  return (
    <form className="bg-green-500 p-4">
      <h3 className="text-4xl font-bold">Filter Option</h3>
      <div>
        <AcordionComponent
          variant="primary"
          title="Editor Picks"
          id="main-1"
          options={mainOptions}
        />
      </div>
      <div className="w-full">
        <Button variant="primary">Refine Search</Button>
        <Button variant="secondary">Reset Filter</Button>
      </div>
    </form>
  );
}

export default SideBar;
