import { useState } from "react";

export default function () {
  let [numberValue, setNumberValue] = useState("0");
  let [multiplyValue, setMultiplyValue] = useState("0");

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col font-mono text-2xl py-20 lg:w-1/2 bg-slate-200">
        <div className="px-10">
          <label
            htmlFor="enterNumber"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Enter Number
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-1/2
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="enterNumber"
            placeholder="Enter Number"
            value={numberValue}
          />
          <input
            type="range"
            name="numberValue"
            min="1"
            max="1000"
            step="1"
            className="w-full h-2 bg-blue-200 appearance-none"
            defaultValue={1}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>
        <div className="px-10">
          <label
            htmlFor="enterMultiplier"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Multiply By
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-1/2
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="enterMultiplier"
            placeholder="Enter Multiplier"
            value={multiplyValue}
          />
          <input
            type="range"
            name="multiplyValue"
            min="1"
            max="1000"
            step="1"
            className="w-full h-2 bg-blue-200 appearance-none"
            defaultValue={1}
            onChange={(e) => setMultiplyValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex py-10 justify-center items-center font-mono text-6xl bg-slate-500 lg:w-1/2 text-slate-300">
        {parseInt(numberValue) * parseInt(multiplyValue)}
      </div>
    </div>
  );
}
