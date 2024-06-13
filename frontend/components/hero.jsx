"use client";

import Image from "next/image";
import { Mic } from "lucide-react";
import { useRouter } from "next/navigation";
import {Button} from "./ui/button";

 const Hero = () => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/detection");
  };
  return (
    <div className="w-full mx-auto flex flex-row gap-32 items-center justify-around h-[80vh]">
      <div className="w-3/6 flex justify-end">
        <Image
          src="/heroo.png"
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </div>
      <div className="flex flex-col gap-12 w-3/6  ">
        <h1 className="text-4xl font-bold text-sky-500">
          Detect Mental Health Status
        </h1>
        <p className="text-xl">
        Students' Mental Care is a platform that helps students to detect their mental health status and seek help from professionals instantly.
        </p>

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
        <div className="flex flex-row gap-4 text-md items-center">
          <span>Already Detected?</span>
          <span
            className="text-sky-500 underline cursor-pointer"
            onClick={() => {
              router.push("/diagnose");
            }}
          >
            Diagnose
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;


