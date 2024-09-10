

import React from "react";

function TabButton({ label, isActive, onClick }) {
  return (
    <div
      className={`relative z-0 flex overflow-hidden gap-2.5 justify-center items-start self-stretch px-6 py-4 my-auto whitespace-nowrap rounded-2xl min-h-[49px] w-[195px] max-md:px-5 cursor-pointer ${
        isActive ? "text-white" : "text-zinc-500"
      }`}
      onClick={onClick} // Handle click
    >
      <div className="z-10 my-auto">{label}</div>

      {isActive && (
        <div className="absolute bottom-0 left-0 z-0 shrink-0 self-start rounded-2xl shadow-2xl bg-zinc-800 h-[49px] w-[195px]" />
      )}
    </div>
  );
}

export default TabButton;
