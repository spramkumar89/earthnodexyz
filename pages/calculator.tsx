import NavBar from "../components/navbar";
import Calculator from "../components/calculator";

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col  bg-gray-600">
      <NavBar />
      <Calculator />
    </div>
  );
}
