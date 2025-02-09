import Link from "next/link";
import Image from "next/image";
import ThemeController from "./ThemeController";

export default function NavBar() {
  return (
    <div className="fixed top-0 w-full z-[999] bg-foreground py-2 dark:bg-customDarkNavy shadow-sm">
      <nav className="flex items-center justify-between w-full font-medium px-10">
        <div className="flex flex-row">
          <Link href={"/"}>
            <Image
              src={"/assets/logo-new.png"}
              width={75}
              height={75}
              alt="scheds icon"
              className="px-4"
            />
          </Link>
          <div className="flex flex-col">
            <h1 className="text-black font-bold text-2xl dark:text-white">
              SCHEDS
            </h1>
            <p className="text-gray-400 font-extralight text-sm">
              an aabdoo23 project
            </p>
          </div>
        </div>
        <ThemeController />
      </nav>
    </div>
  );
}
