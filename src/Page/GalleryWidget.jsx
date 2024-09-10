import React, { useState, useRef } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GrDrag } from "react-icons/gr";
import Draggable from "react-draggable";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function GalleryWidget() {
  const [activeTab] = useState(0);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle the file upload here (e.g., send it to a server)
    }
  };

  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68644b2d8a3b5bde7d6d175200ad2007867564f79974887842a5a21d6d4f0428?placeholderIfAbsent=true&apiKey=0a72531147694b40b228e8453bc4c1c8",
      alt: "Gallery image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68644b2d8a3b5bde7d6d175200ad2007867564f79974887842a5a21d6d4f0428?placeholderIfAbsent=true&apiKey=0a72531147694b40b228e8453bc4c1c8",
      alt: "Gallery image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68644b2d8a3b5bde7d6d175200ad2007867564f79974887842a5a21d6d4f0428?placeholderIfAbsent=true&apiKey=0a72531147694b40b228e8453bc4c1c8",
      alt: "Gallery image 3",
    },
  ];

  return (
    <>
      <Draggable>
        <div className="flex gap-5 justify-between px-3.5 pt-4 pb-7 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)]">
          {/* Icons on the left */}
          <div className="flex flex-col self-start">
            <RxQuestionMarkCircled size={25} />
            <div className="flex flex-wrap gap-px items-start mt-28 w-full rounded-sm max-md:mt-10">
              <GrDrag size={30} className="text-gray-500 mt-5" />
            </div>
          </div>

          {/* Gallery and controls */}
          <div className="flex flex-col max-md:max-w-full w-full">
            <div className="flex justify-between w-full">
              <section className="px-10 py-4 my-auto text-xl font-medium text-white whitespace-nowrap rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-10">
                Gallery
              </section>

              <div className="flex gap-10">
                <button
                  className="flex gap-1 px-7 py-4 my-auto hover:bg-zinc-600  bg-white bg-opacity-0 rounded-[104px] shadow-[0px_0px_7px_rgba(255,255,255,0.25)] max-md:px-5"
                  onClick={handleButtonClick}
                >
                  <span className="my-auto text-white flex font-bold items-center">
                    + ADD IMAGE
                  </span>
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Hide the file input
                />

                <div className="flex mt-2 gap-10">
                  <button className="custom-shadow rounded-full">
                    <BsFillArrowLeftCircleFill
                      size={40}
                      className="shadow-xl rounded-full shadow-black"
                    />
                  </button>
                  <button className="custom-shadow rounded-full">
                    <BsFillArrowRightCircleFill
                      size={40}
                      className="shadow-xl rounded-full shadow-black"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-5 px-3.5 ">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg "
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-48"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default GalleryWidget;
