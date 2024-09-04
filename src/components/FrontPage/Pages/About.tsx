import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" bg-[#08090a]">
      <div className="w-full container mx-auto md:px-0 px-8 py-32">
        <div className=" w-full flex  flex-col md:flex-row justify-between items-center gap-12 pb-16">
          <div className=" md:w-1/2 w-full mx-auto">
            <div className=" w-full flex items-center gap-6">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/business-men-group-talking-together-around-office-table_1297061-9767.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                }
                alt=""
                width={500}
                height={500}
                className=" w-[45%] h-full rounded-2xl"
              />
              <Image
                src={
                  "https://img.freepik.com/free-photo/teamwork-meeting-with-business-people_23-2148825936.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                }
                alt=""
                width={500}
                height={500}
                className=" w-[50%] h-full rounded-2xl"
              />
            </div>
          </div>
          <div className=" md:w-1/2 w-full mx-auto">
            <div className=" space-y-7">
              <h1 className=" bg-slate-800 text-white py-2 px-6 rounded-full inline-block">
                About Us
              </h1>

              <h1 className=" text-2xl md:text-5xl vigaRegular text-white">
                Who we are
              </h1>
              <p className=" text-justify text-white">
                Lorem ipsum dolor sit amet Amet sed elementum eget volutpat
                lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim
                dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet
                faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet
                facilisi fusce non urna. Sed dolor dolor ut vitae ultricies.
                Tortor ligula enim eros maecenas. Magna eget porttitor augue eu
                enim. Iaculis luctus magna tellus ullamcorper dui nisl viverra
                at. Ac amet lorem vel enim fames imperdiet varius. Semper
              </p>
              <button className=" flex justify-center items-center py-2 px-4 bg-[#d2f153] text-black rounded-full">
                Learn More <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full flex  flex-col md:flex-row justify-between items-center gap-12 py-24">
          <div className=" md:w-1/2 w-full mx-auto">
            <div className=" space-y-7">
              <h1 className=" bg-slate-800 text-white py-2 px-6 rounded-full inline-block">
                About Us
              </h1>

              <h1 className=" text-2xl md:text-5xl vigaRegular text-white">
                Here is how we Help people
              </h1>
              <p className=" text-justify text-white">
                Lorem ipsum dolor sit amet Amet sed elementum eget volutpat
                lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim
                dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet
                faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet
                facilisi fusce non urna. Sed dolor dolor ut vitae ultricies.
                Tortor ligula enim eros maecenas. Magna eget porttitor augue eu
                enim. Iaculis luctus magna tellus ullamcorper dui nisl viverra
                at. Ac amet lorem vel enim fames imperdiet varius. Semper
              </p>
              <button className=" flex justify-center items-center py-2 px-4 bg-[#d2f153] text-black rounded-full">
                Learn More <ArrowRight />
              </button>
            </div>
          </div>
          <div className=" md:w-1/2 w-full mx-auto">
            <div className=" w-full flex items-center gap-6">
              <Image
                src={
                  "https://img.freepik.com/free-photo/teamwork-meeting-with-business-people_23-2148825936.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                }
                alt=""
                width={500}
                height={500}
                className=" w-[50%] h-full rounded-2xl"
              />
              <Image
                src={
                  "https://img.freepik.com/premium-photo/business-men-group-talking-together-around-office-table_1297061-9767.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                }
                alt=""
                width={500}
                height={500}
                className=" w-[45%] h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
