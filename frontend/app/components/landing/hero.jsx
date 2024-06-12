"use client"

import AudioInput from "./audioInput";
import TextInput from "./textInput";


const Hero = () => {
  return (
    <div className="w-full mx-auto flex flex-row gap-8 items-center justify-center h-screen ">
      <div className="border-2 rounded-md p-20">
        <AudioInput />
      </div>
      <div className="border-2 rounded-md p-20">
       <TextInput />
      </div>
    </div>
  );
};

export default Hero;
