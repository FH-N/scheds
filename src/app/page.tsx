import Image from "next/image";
import LandingOptions from "./components/LandingOptions";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/assets/new-bg-final.png')] w-full min-h-screen bg-fixed bg-center bg-cover">
        <div className="flex flex-col justify-center items-start h-[60vh] pt-16 px-16">
          <h1 className="text-8xl font-bold text-customNavy p-2">SCHEDS</h1>
          <h2 className="text-6xl text-customOrange font-semibold pb-6">
            Your time, your way.
          </h2>
          <Link href={"/signin"}>
            <button className="btn btn-lg bg-customNavy text-white ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <LandingOptions />
    </div>
  );
}
