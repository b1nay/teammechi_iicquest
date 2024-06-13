"use client";

import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";
import { Circle, Line } from "rc-progress";
import { Button } from "../ui/button";

const ResultPage = ({ data }) => {
    console.log(data)
  const detectedEmotion = data[0].emotion == "Happy" ? "No sign of difficulties, in a proper mental status" : data[0].predicted_emotion == "neu" ? "Emotionally Neutral" : data[0].predicted_emotion == "sad" ? " Sadness detected, seek help" : "Unwell, possible  explosive/bipolar disorder";

  return (
    <div className="flex flex-row justify-around w-full">
      <div className="text-center flex flex-col justify-between items-center gap-12">
        <div className="w-full flex flex-col items-center">

       
        <h1 className="text-2xl font-bold text-sky-500">
          Predicted Health Status
        </h1>
        <Image src={data[0].imgurl} alt="emotion" width={250} height={250} />
        <p
          className={`text-2xl font-bold text-green-600
          }`}
        >
        {detectedEmotion}
        </p>
        </div>
        {
            data[0].emotion === "Happy" ? <Button className="bg-sky-500 hover:bg-sky-600 p-6 text-xl">Detect Next</Button>:<Button className="">Diagnose</Button>
        }
      </div>
      <div className="w-2/6 grid grid-cols-2">
        {data[0].top_5_predictions.map((prediction, index) => (
          <div key={index} className="text-center font-bold flex flex-col items-center gap-4 mt-6">
            <p>{prediction.label}</p>
            <Circle percent={`${prediction.score*100}`} trailWidth={6} strokeWidth={6} strokeColor={`${prediction.score<=0.2? '#eb4034': prediction.score>0.2 && prediction.score<=0.5? '#0EA5E9':'#34eb59'}`} className="w-4/6" />
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
