"use client";

import React, { useState } from "react";
import AudioInput from "@/components/audioInput";
import Image from "next/image";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); // Optional state to store the response from the server

  const handleSend = async () => {
    setLoading(true);
    try {
      // Send the audio file to the server
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "GET",
      });
      if (res.ok) {
        const result = await res.json();
        console.log(result);
    setData(result.title);
      }
    } catch (error) {
      console.error("API call failed:", error);
    } finally {
     
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[70vh] w-5/6 mx-auto">
      {!loading && !data ? (
        <AudioInput handlesend={handleSend} />
      ) : data ? (
        <p>
            <Image
                src="https://imgs.search.brave.com/HDd-gFfC4kDbXbYNzWU1Z2AhHdaIrV24YXeeD6o5U3g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvaGFwcHkt/ZmFjZS1lbW9qaS1w/ODI3Yzd4OTY3dG1h/Mmw1LmdpZg.gif"
                alt="Picture of the author"
                width={600}
                height={600}    
            />
            {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
