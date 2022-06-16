import NavBar from "../components/navbar";
import HomePage from "../components/homepage";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col  bg-gray-600">
      <NavBar />
      <HomePage />
    </div>
  );
}
