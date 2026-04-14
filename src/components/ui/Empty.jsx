import React from "react";

const Empty = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-325 mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="border-2 border-dashed border-gray-200 rounded-lg py-20 flex flex-col items-center justify-center">
        <p className="text-gray-500 text-lg">{children}</p>
      </div>
    </div>
  );
};

export default Empty;
