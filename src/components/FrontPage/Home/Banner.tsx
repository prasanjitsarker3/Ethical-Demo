"use client";
import { LayoutDashboard, Phone, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" relative">
      <div className="relative h-[100vh] w-full">
        {/* Four-Color Gradient Background */}
        <div
          className="h-[100vh] w-full"
          style={{
            background:
              "linear-gradient(to right, #000000, #9B1FE8, #02C2CC, #000000)",
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-85 z-10"></div>

        {/* Banner Text */}
      </div>

      <div className="container mx-auto h-full absolute top-0 right-0 left-0  z-10 flex justify-center items-center">
        <div className=" text-white text-center space-y-3  md:px-0 px-8">
          <h1 className="text-4xl md:text-5xl font-semibold ">
            Let’s learn & gain skills
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. In at mauris sollicitudin
              phasellus enim tellus et.
            </p>
            <p>
              Lectus mauris consequat nam leo eget.Lorem ipsum dolor sit amet
              consectetur.{" "}
            </p>
            <p>
              In at mauris sollicitudin phasellus enim tellus et. Lectus mauris
              consequat nam leo eget.
            </p>
          </div>
          <div className=" flex flex-col md:flex-row justify-center md:gap-12 gap-4">
            <button className=" px-4 py-2 bg-[#d2f153] text-slate-800 rounded-full justify-center flex items-center gap-2">
              <Phone size={16} />
              Schedule
            </button>
            <button className=" px-4 py-2 bg-slate-600 text-white rounded-full justify-center flex items-center gap-2">
              <LayoutDashboard size={16} /> View case studies
            </button>
          </div>
          <div className=" relative flex justify-center">
            <Image
              src={
                "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
              }
              alt=""
              width={500}
              height={500}
              className=" border border-white rounded-md shadow-md"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="h-14 w-14 bg-white bg-opacity-35 flex justify-center items-center rounded-full">
                <Play className="text-white font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
