import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col  bg-gray-600">
      <NavBar />
      <h2 className="text-yellow-200 p-5">Blog Page</h2>
    </div>
  );
}
