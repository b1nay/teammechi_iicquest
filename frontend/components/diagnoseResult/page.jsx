import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DiagnoseResult = ({ detectedDisorder }) => {
  const router = useRouter();
  const handleconsultclick = () => {
    router.push("/consult");
  }
  
  return (
    <div className="w-full flex flex-row items-center  h-[70vh]">
        <div className="w-3/6 flex items-end">
            <Image
            src="/diagnose.jpg"
            alt="Picture of the author"
            width={600}
            height={600}
            />

        </div>
        <div className="flex flex-col gap-12">

      
      <div className="  space-y-8">
        <h1 className="text-2xl font-bold text-sky-500">Detected Disorder</h1>
        <p className="text-3xl font-bold">{detectedDisorder}</p>
      </div>
      <div>
        <Button onClick={handleconsultclick} className="bg-sky-500 hover:bg-sky-600 p-6 text-xl">
          Consult With Professionals
        </Button>
      </div>
      </div>
    </div>
  );
};

export default DiagnoseResult;
