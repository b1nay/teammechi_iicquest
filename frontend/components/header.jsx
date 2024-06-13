import Image from "next/image";
import Link from "next/link";

import {Logo} from "@/public/Logo.png";


const Header = () => {
  return (
    <>
    <nav className="flex items-center justify-between  w-11/12 mx-auto">
      <div className="flex items-center flex-col">
        <Image src='/Logo.png' alt="logo" width={60} height={60} priority={true} />
        <h1 className="text-xl font-bold">SM-Care</h1>
      </div>
      <div className="flex items-center space-x-6 font-bold mr-24">
        <Link className="hover:font-light transition-all ease-in-out" href="/">Home</Link>
        <Link className="hover:font-light transition-all ease-in-out" href="/detection">Detect</Link>
        <Link className="hover:font-light transition-all ease-in-out" href="/diagnose">Diagnose</Link>
      </div>
     
    </nav>
     <hr className="w-11/12 mt-2 h-0.5 mx-auto bg-gray-300 border-0 rounded " />
     </>
  );
};

export default Header;
