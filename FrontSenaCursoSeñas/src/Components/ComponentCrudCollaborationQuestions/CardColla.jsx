import React from "react";

export const CardColla = ({ title }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 m-4 shadow-md">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
    </div>
  );
};
