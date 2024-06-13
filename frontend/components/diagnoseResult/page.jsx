import React from 'react'

const DiagnoseResult = ({detectedDisorder}) => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold text-sky-500">Detected Disorder</h1>
      <p className="text-xl font-semibold">{detectedDisorder}</p>
    </div>
  </div>
    
  );

}

export default DiagnoseResult