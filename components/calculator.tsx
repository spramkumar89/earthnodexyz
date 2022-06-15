export default function () {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center font-mono text-2xl py-20 w-full bg-slate-200">
        <div className="px-10">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Enter Number
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
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
            id="exampleFormControlInput1"
            placeholder="Example label"
          />
          <input
            type="range"
            name="range"
            className="w-full h-2 bg-blue-200 appearance-none"
          />
        </div>
        <div className="px-10">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Multiply By
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
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
            id="exampleFormControlInput1"
            placeholder="Example label"
          />
          <input
            type="range"
            name="range"
            className="w-full h-2 bg-blue-200 appearance-none"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center font-mono text-2xl bg-slate-200 pr-10">
        test
      </div>
    </div>
  );
}
