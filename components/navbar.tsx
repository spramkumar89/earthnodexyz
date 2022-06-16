export default function () {
  return (
    <div className="flex flex-row p-4 bg-slate-700 justify-between border-b-2 border-slate-500">
      <div className="text-2xl font-semibold tracking-widest">
        <a href="/" className="p-4 text-slate-300 hover:text-purple-400">
          EarthNodeXYZ
        </a>
      </div>
      <div className="text-xl font-normal tracking-wide">
        <a
          href="/calculator"
          className="p-4 text-slate-300 hover:bg-purple-400"
        >
          Calculator
        </a>
        <a href="/blog" className="p-4 text-slate-300 hover:bg-purple-400">
          Blog
        </a>
        <a href="/aboutUs" className="p-4 text-slate-300 hover:bg-purple-400">
          AboutUs
        </a>
      </div>
    </div>
  );
}
