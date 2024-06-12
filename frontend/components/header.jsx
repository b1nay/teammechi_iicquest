import Link from "next/link";


const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 w-11/12 mx-auto">
      <div className="flex items-center flex-col">
        {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
        <h1 className=" text-3xl font-bold ">LOGO</h1>
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
