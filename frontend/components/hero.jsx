"use client";

import Image from "next/image";
import TextInput from "./textInput";
import { HeroImg } from "@/public/hero.png";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/detection");
  };
  return (
    <div className="w-full mx-auto flex flex-row gap-32 items-center justify-around h-[80vh]">
      <div className="w-3/6 flex justify-end">
        <Image
          src="/hero.png"
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </div>
      <div className="flex flex-col gap-16 w-3/6  ">
        <div className="flex flex-row">
          <Button
            className="p-8 bg-sky-500 hover:bg-sky-600 flex flex-row gap-4 w-2/5 text-xl"
            onClick={handleStartClick}
          >
            <Mic />
            Start Now
          </Button>
        </div>
        <hr className="w-2/5 h-0.5  bg-gray-300 border-0 rounded " />
        <div className="flex flex-row gap-4 text-xl items-center">
          <span>already detected?</span>
          <span className="text-sky-500 underline cursor-pointer"
          onClick={() => {
            router.push("/diagnose");}
          }
          
          >Diagnose</span>
       
        </div>
      </div>
    </div>
  );
};

export default Hero;
