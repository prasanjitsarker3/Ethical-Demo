/* eslint-disable react/no-unescaped-entities */
import { Play, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const VideoTestmonials = () => {
  const datatest = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393667.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      name: "Nathan Drake",
      position: "Founder of Something",
      profile:
        "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393667.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      rating: 5,
      des: "Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.",
    },
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/smiling-female-student-writing-essay-sitting-with-laptop-floor_176420-20219.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      name: "Nathan Drake",
      position: "Founder of Something",
      profile:
        "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393667.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      rating: 5,
      des: "Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.",
    },
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/front-view-smiley-man-holding-laptop_23-2148946208.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      name: "Nathan Drake",
      position: "Founder of Something",
      profile:
        "https://img.freepik.com/free-photo/front-view-smiley-man-holding-laptop_23-2148946208.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid",
      rating: 5,
      des: "Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.",
    },
  ];
  return (
    <div className="bg-[#141212]">
      <div className=" w-full container mx-auto md:px-0 px-8 py-20">
        <div className=" text-center text-white py-16 space-y-3">
          <h1 className=" inline-block bg-white text-black px-5 py-2 rounded-full">
            VIDEO TESTMONIALS
          </h1>
          <h1 className=" text-3xl vigaRegular">
            Let's see what our students say
          </h1>
          <h1>
            Lorem ipsum dolor sit amet Amet sed elementum eget volutpat lectus
            dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae.
            Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit
            lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non
            urna. Sed dolor dolor ut vitae ultricies. T
          </h1>
        </div>

        <div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
            {datatest.map((data) => (
              <div key={data.id}>
                <div className=" text-white space-y-3 bg-[#08090a] p-6 rounded-lg">
                  <div className=" relative w-full h-full">
                    <Image
                      src={data.img}
                      alt=""
                      width={300}
                      height={300}
                      className=" w-full h-52"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="h-14 w-14 bg-white bg-opacity-50 cursor-pointer flex justify-center items-center rounded-full">
                        <Play className="text-white font-bold" />
                      </div>
                    </div>
                  </div>
                  <h1>{data.des}</h1>
                  <div className=" flex items-center gap-3">
                    <Star className="text-[#d2f153]" />
                    <Star className="text-[#d2f153]" />
                    <Star className="text-[#d2f153]" />
                    <Star className="text-[#d2f153]" />
                    <Star className="text-[#d2f153]" />
                  </div>
                  <div className=" flex items-center gap-8">
                    <div className=" rounded-full  flex justify-center items-center">
                      <Image src={data.profile} alt="" width={50} height={50} />
                    </div>
                    <div>
                      <h1>{data.name}</h1>
                      <h1>{data.position}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestmonials;
