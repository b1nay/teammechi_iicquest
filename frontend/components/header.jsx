import Image from "next/image";
import Link from "next/link";

import {Logo} from "@/public/Logo.png";


const Header = () => {
  return (
    <nav className="flex items-center justify-between  w-11/12 mx-auto">
      <div className="flex items-center flex-col">
        <Image src='/Logo.png' alt="logo" width={100} height={100} priority={true} />
        <h1 className="text-2xl font-bold">SM-Care</h1>
      </div>
      <div className="flex items-center space-x-4 font-bold ">
        <Link className="hover:font-light transition-all ease-in-out" href="/">Home</Link>
        <Link href="/link">Links</Link>
      </div>
    </nav>
  );
};

export default Header;
