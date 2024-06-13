import React from "react";

const Page = () => {
  return (
    <div className="flex items-start justify-around mt-10  ">
      <div className="flex flex-col items-center w-1/2">
        <span className="text-sky-500 text-2xl font-bold">
          Nearby Therapists
        </span>

        <div className="flex justify-around items-center w-full">


        </div>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <span className="text-sky-500 text-2xl font-bold">
          Nearby Psychiatrists
        </span>
      </div>
    </div>
  );
};

export default Page;
