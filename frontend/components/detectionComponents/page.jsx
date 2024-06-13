"use client";

import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";

const ResultPage = ({ data }) => {
  return (
    <div className="flex flex-row justify-around w-full">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-sky-500">
          Predicted Health Status
        </h1>
        <Image src={data[0].imgurl} alt="emotion" width={300} height={300} />
        <p
          className={`text-2xl font-bold ${
            data[0].emotion === "Happy" ? "text-green-600" : "text-black"
          }`}
        >
          {`${data[0].level} ${data[0].emotion}`}
        </p>
      </div>
      <div>
        {
            data[0].top_5_predictions.map((prediction, index) => (
                <div key={index} className="flex flex-row justify-between">
                    <p>{prediction.label}</p>
                    <p>{prediction.score}</p>
                    <Progress value={33} />
                </div>
                ))

        }
      </div>
    </div>
  );
};

export default ResultPage;
