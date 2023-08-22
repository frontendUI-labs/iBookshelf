import * as Slider from "@radix-ui/react-slider";

function SliderInputComponent({
  initialValue,
  finalvalue,
}: {
  initialValue: number;
  finalvalue: number;
}) {
  return (
    <div>
      <Slider.Root
        defaultValue={[initialValue, finalvalue]}
        className="relative flex items-center select-none touch-none w-full h-5 pb-[60px] pt-4"
        max={100}
        step={1}
        minStepsBetweenThumbs={10}
      >
        <Slider.Track className="bg-purple-400 relative grow rounded-full h-[.5rem]">
          <Slider.Range className="absolute bg-purple-600 rounded-full h-[.5rem]" />
        </Slider.Track>

        <Slider.Thumb
          className="block w-5 h-5 bg-purple-600 shadow-[0_2px_10px]  rounded-[10px] hover:shadow-[0_2px_10px] focus:outline-none focus:shadow-[0_2px_10px] cursor-pointer"
          aria-label="Volume"
        >
          {
            <div className="text-purple-600 font-bold rounded-lg bg-purple-400 px-4 flex items-center justify-center absolute translate-y-8 -translate-x-4 cursor-pointer">
              ${initialValue}
            </div>
          }
        </Slider.Thumb>
        <Slider.Thumb
          className="block w-5 h-5 bg-purple-600 shadow-[0_2px_10px]  rounded-[10px] hover:shadow-[0_2px_10px] focus:outline-none focus:shadow-[0_2px_10px] cursor-pointer"
          aria-label="Volume"
        >
          {
            <div className="text-purple-600 rounded-lg font-bold bg-purple-400 px-4 flex items-center justify-center absolute translate-y-8 -translate-x-4 cursor-pointer">
              ${finalvalue}
            </div>
          }
        </Slider.Thumb>
      </Slider.Root>
    </div>
  );
}

export default SliderInputComponent;
