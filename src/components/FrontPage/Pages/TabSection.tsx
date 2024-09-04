import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import banner from "../../../../public/Photo/Screenshot 2024-09-04 234914.png";

const TabSection = () => {
  return (
    <div className="w-full container mx-auto relative rounded-2xl pb-12">
      <div className="relative">
        {/* Four-Color Gradient Background */}
        <div
          className="md:h-[70vh] h-[100vh] w-full rounded-2xl"
          style={{
            background:
              "linear-gradient(to right, #000000, #9B1FE8, #02C2CC, #000000)",
          }}
        ></div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-85 z-10 rounded-2xl"></div>
      </div>

      <div className="container mx-auto h-full absolute top-0 right-0 left-0 z-20 flex justify-center items-center">
        <div className="w-full flex justify-between flex-col md:flex-row md:px-0 px-8">
          <div className="md:w-1/2 w-full mx-auto">
            <div className=" flex justify-center items-center">
              <Image
                src={banner}
                alt=""
                width={500}
                height={500}
                className="border border-gray-800 rounded-md shadow-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full mx-auto">
            <div className="text-white md:px-8 space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Lorem ipsum amet consectetur. Mauris diam.
              </h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Amet sed elementum
                  eget volutpat lectus dui sed. Sed risus dictumst faucibus
                  vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc
                  adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at
                  quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor
                  ut
                </p>
              </div>
              <button className="px-4 py-2 bg-[#d2f153] text-slate-800 rounded-full justify-center flex items-center gap-2">
                <Phone size={16} />
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
