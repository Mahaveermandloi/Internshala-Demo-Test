

import React, { useState } from "react";
import Draggable from "react-draggable"; // Import Draggable from react-draggable
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GrDrag } from "react-icons/gr";
import TabButton from "./TabButton";
import "../App.css";
import Experience from "./Experience";
import Recommended from "./Recommended";
import About from "./About";

function ProfileWidget() {
  const tabs = ["About Me", "Experiences", "Recommended"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Draggable >
      <div className="flex gap-5 justify-between px-3.5 pt-4 pb-7 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col self-start">
          <RxQuestionMarkCircled size={25} />
          <div className="flex flex-wrap gap-px items-start mt-28 w-full rounded-sm max-md:mt-10">
            <GrDrag size={30} className="text-gray-500 mt-5" />
          </div>
        </div>

        <div className="flex flex-col max-md:max-w-full mr-2">
          <nav className="flex flex-col justify-center px-1.5 py-2 w-full text-lg font-medium leading-none text-center text-gray-400 rounded-3xl bg-neutral-900 max-md:max-w-full">
            <div className="flex relative gap-1.5 items-center max-md:max-w-full">
              {tabs.map((tab, index) => (
                <TabButton
                  key={index}
                  label={tab}
                  isActive={index === activeTab}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
          </nav>

          <article className="mt-3 text-neutral-400 max-md:mr-1 max-md:max-w-full h-[200px] overflow-y-scroll custom-scrollbar p-5 ">
            {activeTab === 0 && <About />}
            {activeTab === 1 && <Experience />}
            {activeTab === 2 && <Recommended />}
          </article>
        </div>
      </div>
    </Draggable>
  );
}

export default ProfileWidget;
