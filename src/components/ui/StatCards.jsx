import React from "react";

const StatCards = ({ value, label }) => {
  return (
    <div className="py-7 px-14 text-center shadow rounded-sm">
      <h2 className="text-3xl font-bold">{value}</h2>
      <p className="text-[#64748B]">{label}</p>
    </div>
  );
};

export default StatCards;
