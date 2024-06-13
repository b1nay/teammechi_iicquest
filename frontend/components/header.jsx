"use client"

import Image from "next/image";
import Link from "next/link";


import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handlelogoclick = () => {
    router.push("/");
  }

  const route = [
    {
      name: "Home",
      link: "/",
      active: pathname === "/",
    },
    {
      name: "Detect",
      link: "/detection",
      active: pathname === "/detection",
    },
    {
      name: "Diagnose",
      link: "/diagnose",
      active: pathname === "/diagnose",
    },
  ];
  return (
    <>
      <nav className="flex items-center justify-between  w-11/12 mx-auto">
        <div className="flex items-center flex-col cursor-pointer" onClick={handlelogoclick}>
          <Image
            src="/Logo.png"
            alt="logo"
            width={90}
            height={90}
            priority={true}
          />
        </div>
        <div className="flex items-center space-x-8 font-bold mr-24">
          {route.map((item, index) => (
            <Link
              key={index}
              className={`hover:font-light transition-all ease-in-out ${
                item.active ? "text-sky-500" : ""
              }`}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
          {/* <Link className="hover:font-light transition-all ease-in-out" href="/">Home</Link>
        <Link className="hover:font-light transition-all ease-in-out" href="/detection  ">Detect</Link>
        <Link className="hover:font-light transition-all ease-in-out" href="/diagnose">Diagnose</Link> */}
        </div>
      </nav>
      <hr className="w-11/12 mt-2 h-0.5 mx-auto bg-gray-300 border-0 rounded " />
    </>
  );
};

export default Header;
