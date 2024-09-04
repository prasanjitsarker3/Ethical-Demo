import { Phone, Projector } from "lucide-react";
import Image from "next/image";
import React from "react";

const GoogleMeet = () => {
  return (
    <div>
      <div className=" bg-[#141212]">
        <div className=" w-full container mx-auto flex justify-center flex-col md:flex-row md:gap-0 gap-8 items-center  text-white pt-16 pb-24 md:px-0 px-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <div className="flex gap-2 items-center">
              <Image
                src={
                  "https://cdn-icons-png.flaticon.com/128/15047/15047352.png"
                }
                alt=""
                width={30}
                height={30}
              />
              <p className="text-lg">Google Meet</p>
            </div>
            <h3 className="lg:text-[48px] md:text-3xl font-bold mt-7 mb-5">
              Ipsum amet sectetur. <br />
              <span className="block h-4"></span>
              Mauris diam.
            </h3>
            <p className="text-[#D9D9D9] text-[15px]">
              ipsum dolor sit amet consectetur. Amet sed elementum eget volutpat
              lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui
              vitae. psum dolor sit amet consectetur. Amet sed elementum eget
              volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis
              enim dui vitae.
            </p>
            <button className="bg-white px-8 py-3 font-semibold rounded-full text-black mt-5 flex justify-center items-center gap-2">
              <Phone className="w-5 h-5" />
              Schedule A Call
            </button>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <div className=" flex justify-end items-end">
              <Image
                width={450}
                height={450}
                className="rounded-md"
                src="https://img.freepik.com/free-photo/close-up-young-businessman-having-work-video-call-while-staying-home-new-normal-lifestyle-business-concept_58466-16329.jpg?ga=GA1.1.703347942.1689316676&semt=ais_hybrid"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMeet;
