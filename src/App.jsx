// import React, { useState } from "react";
// import About from "./Page/About";
// import Experience from "./Page/Experience";
// import Recommended from "./Page/Recommended";

// const App = () => {
//   const [activeTab, setActiveTab] = useState("About");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "About":
//         return <About />;
//       case "Experience":
//         return <Experience />;
//       case "Recommended":
//         return <Recommended />;
//       default:
//         return <About />;
//     }
//   };

//   return (
//     <>
//       <div className="p-10">
//         <div className="flex justify-between gap-5 rounded-lg p-10 bg-gray-600 h-[700px]">

//           <div className="w-1/2 bg-yellow-50 rounded-2xl p-5">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
//             facere illo magnam sed unde fugit dolore inventore ipsum molestias
//             consequuntur molestiae dolor, labore exercitationem enim aliquid
//             iure deserunt dicta aliquam repudiandae laudantium. Molestiae cumque
//             odio veritatis nemo cum voluptatum quidem explicabo at! Harum eaque
//             iste delectus, vel incidunt quaerat quo inventore accusantium quis.
//             Natus maxime, aut illum veniam expedita doloribus numquam labore
//             quasi reprehenderit excepturi, repellat voluptate eaque dicta
//             consectetur commodi quis, dolore veritatis dolor itaque. At,
//             adipisci! Libero a mollitia, facere similique quod repudiandae
//             voluptatem unde quos reiciendis fugit tempora assumenda incidunt
//             iure porro recusandae voluptate tenetur magni dolores!
//           </div>

//           <div className="flex w-1/2    rounded-2xl ">

//             <div className="flex flex-col bg-gray-600 gap-4 w-full  rounded-2xl">

//               <div className="bg-[#363c43] h-1/2 rounded-lg shadow-black shadow-2xl">
//                 {/* Tab navigation */}
//                 <div className="mb-4 m-4 rounded-md flex justify-between mr-10 p-1 bg-[#171717]">
//                   <button
//                     className={`px-4 py-2 flex-grow rounded-md ${
//                       activeTab === "About"
//                         ? "bg-[#28292F] shadow-2xl shadow-black text-gray-300"
//                         : "text-white"
//                     }`}
//                     onClick={() => setActiveTab("About")}
//                   >
//                     About
//                   </button>
//                   <button
//                     className={`px-4 py-2 flex-grow rounded-md ${
//                       activeTab === "Experience"
//                         ? "bg-[#28292F] shadow-2xl shadow-black text-gray-300"
//                         : "text-white"
//                     }`}
//                     onClick={() => setActiveTab("Experience")}
//                   >
//                     Experience
//                   </button>
//                   <button
//                     className={`px-4 py-2 flex-grow rounded-md ${
//                       activeTab === "Recommended"
//                         ? "bg-[#28292F] shadow-2xl shadow-black text-gray-300"
//                         : "text-white"
//                     }`}
//                     onClick={() => setActiveTab("Recommended")}
//                   >
//                     Recommended
//                   </button>
//                 </div>

//                 {/* Tab content */}
//                 <div className="m-4 overflow-y-auto overflow-x-hidden h-44 text-sm">
//                   {renderTabContent()}
//                 </div>
//               </div>

//               <hr />

//               <div className="shadow-black shadow-2xl bg-[#363c43]  rounded-2xl h-1/2 p-4">

//                 <div>
//                   <div className="flex justify-between">
//                     <button>Gallery</button>
//                     <div>
//                       <button>Add Image</button>
//                       <button>--</button>
//                       <button>--</button>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-3 gap-2 mt-4">
//                     <img src="" alt="Gallery Image 1" />
//                     <img src="" alt="Gallery Image 2" />
//                     <img src="" alt="Gallery Image 3" />
//                   </div>
//                 </div>
//               </div>

//               <hr />
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

import TabButton from "./Page/TabButton";
import Divider from "./Page/Divider";
import GalleryWidget from "./Page/GalleryWidget";
import MyComponent from "./Page/MyComponent";
import ProfileWidget from "./Page/ProfileWidget";

import React from "react";

const App = () => {
  return (
    <>
      {/* <TabButton /> */}

      {/* <GalleryWidget /> */}
      <MyComponent />
      {/* <Divider /> */}
      {/* <ProfileWidget /> */}
    </>
  );
};

export default App;
