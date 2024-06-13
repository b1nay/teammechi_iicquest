"use client";

import React, { useState } from "react";
import AudioInput from "@/components/audioInput";
import Image from "next/image";
import generateEmotionList from "@/utils/generateEmotionList";
import ResultPage from "@/components/detectionComponents/page";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); // Optional state to store the response from the server

  const handleSend = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", data.audio); // Append the selected audio file, 'file' should match the name used in your Flask app

    try {
      // const res = await fetch("http://localhost:5000/predict", {
      //   method: "POST",
      //   body: formData,
      // });

      // if (!res.ok) {
      //   throw new Error("Network response was not ok");
      // }

      //   const result = await res.json();


        const ress = {
          predicted_emotion: "hap",
          top_5_predictions: [
            {
              label: "hap",
              score: 0.7928280830383301,
            },
            {
              label: "neu",
              score: 0.20054923595783308,
            },
            {
              label: "sad",
              score: 0.006119635887444019,
            },
            {
              label: "ang",
              score: 0.00020300208416301757,
            },
          ],
        };

      const extendedEmotionList = generateEmotionList(ress);

      setData(extendedEmotionList);
      console.log(extendedEmotionList);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-start h-[70vh] w-5/6 mx-auto">
      {!loading && !data ? (
        <AudioInput handlesend={handleSend} />
      ) : data ? (
        <ResultPage data={data} />
        
      
      ) : (
        <p>Loading...</p>
      )}
      {/* {!loading && !data ? (
        <AudioInput handlesend={handleSend} />
      ) : data ? (
        <div>
          <h1>Other data</h1>
          <p>{data.predicted_emotion}</p>
          {data.top_5_predictions.map((prediction, index) => (
            <div key={index}>
              <p>{prediction.label}</p>
              <p>{prediction.score}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default Page;
