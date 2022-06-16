import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col  bg-gray-600">
      <NavBar />
      <div className="flex flex-col lg:flex-row justify-center px-10 py-20 bg-slate-400">
        <div className="flex flex-col justify-center lg:w-1/2 pl-10">
          <div className="divide-y-4 divide-slate-800">
            <h2 className="text-4xl tracking-widest">About Us</h2>
            <div>
              <h2 className="">
                We are a dedicated team of finance and blockchain experts glued
                together by our passion for blockchain and reducing the digital
                divide.
              </h2>
              <h2 className="pt-4 text-3xl tracking-widest">Mission</h2>
              <p>
                To provide the very best staking experience for our delegates
                &#8211; We will work tirelessly to ensure our staking nodes are
                built, run and monitored to the highest standards and industry
                best practices to ensure we provide the maximum value to our
                delegates.
              </p>
              <h2 className="pt-4 text-3xl tracking-widest">Vision</h2>
              <p>
                To be the first choice for WMT delegates. A valued and respected
                participant in the World Mobile ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="pr-10">
          <img
            className="object-cover h-96 w-auto"
            src="https://wmtstaking.com/wp-content/uploads/2022/03/3_transparent-1024x682.png"
          />
        </div>
      </div>
    </div>
  );
}
