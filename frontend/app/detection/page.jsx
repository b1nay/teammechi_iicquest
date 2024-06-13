"use client";

import React, { useEffect, useState } from "react";
import AudioInput from "@/components/audioInput";
import Image from "next/image";
import generateEmotionList from "@/utils/generateEmotionList";
import ResultPage from "@/components/detectionComponents/page";
import { set } from "react-hook-form";
import { LifeLine } from "react-loading-indicators";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isNext, setIsNext] = useState(true);

  const handleSend = async (data) => {
    setLoading(true);
    setIsNext(false);
    const formData = new FormData();
    formData.append("file", data.audio); // Append the selected audio file, 'file' should match the name used in your Flask app

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();

      // const ress = {
      //   predicted_emotion: "ang",
      //   top_5_predictions: [
      //     {
      //       label: "hap",
      //       score: 0.006119635887444019,
      //     },
      //     {
      //       label: "neu",
      //       score: 0.20054923595783308,
      //     },
      //     {
      //       label: "sad",
      //       score:  0.00020300208416301757,
      //     },
      //     {
      //       label: "ang",
      //       score:0.7928280830383301,
      //     },
      //   ],
      // };


      const extendedEmotionList = generateEmotionList(result);

      setData(extendedEmotionList);
      console.log(extendedEmotionList);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  const handleNext = () => {
    setIsNext(true);
    setData(null);
  };

  return (
    <div className="flex justify-center items-center h-[70vh] w-5/6 mx-auto">
      {isNext && !loading && !data ? (
        <AudioInput handleSend={handleSend} />
      ) : data ? (
        <ResultPage data={data} handleNext={handleNext} />
      ) : (
        <div className="flex flex-col text-center text-lg font-bold text-sky-500">
        <LifeLine color="#0EA5E9" size="medium" text="" textColor="" />
        <p>Analyzing Audio Data...</p>
        </div>
      )}
    </div>
  );
};

export default Page;
