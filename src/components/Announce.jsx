import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const Announce = () => {
  const [hide, setHide] = useState("");
  const handleHide = () => {
    setHide("hidden");
  };
  return (
    <div className={`relative py-3 text-white bg-blue-600 ${hide}`}>
      <div className="container flex items-center justify-center m-auto">
        <h2 className="text-sm font-bold">Hurry up it's 40% off now</h2>
        <IoIosArrowUp
          className="w-8 px-1 cursor-pointer"
          onClick={handleHide}
        />
      </div>
    </div>
  );
};

export default Announce;
