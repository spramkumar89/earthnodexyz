import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [name, setName] = useState("");

  return (
    <div className="relative flex h-screen w-screen flex-col justify-center bg-gray-50 py-6 sm:py-12">
      <Image src="/earth.jpg" layout="fill" />

      <div className="relative bg-transparent p-2 mb-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="h-full w-full text-center text-2xl rounded-t-lg  text-slate-300">
          <div className="py-2 font-mono text-4xl tracking-widest">
            Earth Node XYZ
          </div>
          <div className="pb-2 font-mono text-3xl">World Mobile</div>
          <div className="font-normal font-mono">
            Connecting the Unconnected... One country at a time !
          </div>
        </div>
      </div>

      <div className="relative bg-slate-300 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="overflow-x-auto">
          <input
            className="bg-slate-400 p-2 rounded-lg justify-center"
            value={name}
            name="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="font-mono text-lg text-slate-800 p-2">
            My name is {name}
          </div>
        </div>
      </div>
    </div>
  );
}
