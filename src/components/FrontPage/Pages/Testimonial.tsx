import { ArrowRight, Phone, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import TabSection from "./TabSection";

const Testimonial = () => {
  const tesiData = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum commodo purus, eget tincidunt ex interdum ut.",
      img: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      des: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      img: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Data Scientist",
      des: "Suspendisse potenti. Nullam ac magna tincidunt, scelerisque dui in, malesuada risus.",
      img: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Emily Wilson",
      position: "UX Designer",
      des: "Curabitur lacinia mi at ex suscipit, ut elementum magna fermentum. Donec vitae lorem in turpis dapibus lobortis.",
      img: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Chris Johnson",
      position: "Marketing Specialist",
      des: "In ornare, metus at varius luctus, felis sem malesuada ex, eget vulputate elit odio sit amet nulla.",
      img: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Sophia Davis",
      position: "HR Manager",
      des: "Aliquam erat volutpat. Praesent auctor, odio eu interdum feugiat, turpis eros aliquam arcu, ac facilisis nulla nunc eget nisl.",
      img: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="bg-[#08090a]">
      <div className="w-full container mx-auto md:px-0 px-8 py-32">
        {/* Section Header */}
        <div className="py-12 text-center space-y-3">
          <h1 className="bg-slate-700 text-white py-2 px-5 rounded-full inline-block">
            TESTIMONIALS
          </h1>
          <h1 className="text-2xl md:text-5xl text-white vigaRegular">
            Let’s see what our students say
          </h1>
          <p className="text-white text-base max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum eget volutpat lectus, dui sed. Sed risus dictumst faucibus
            vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc
            adipiscing laoreet faucibus.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {tesiData.map((item) => (
            <div
              key={item.id}
              className="bg-[#141212] text-white border border-gray-700 p-8 rounded-md shadow-md"
            >
              <div className=" flex justify-end items-end">
                <Quote size={14} className=" flex justify-end text-[#d2f153]" />
              </div>
              <div className=" flex items-center gap-3 pb-6">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20220.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                  }
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold ">{item.name}</h2>
                  <p className=" text-sm text-gray-300">{item.position}</p>
                </div>
              </div>
              <p className="text-sm text-white">{item.des}</p>
            </div>
          ))}
        </div>
        <div className=" flex justify-center pt-12">
          <button className=" flex justify-center items-center gap-2 py-2 px-4 bg-[#d2f153] text-black rounded-full">
            <Phone size={20} /> Book A Call
          </button>
        </div>
      </div>
      {/* added */}
      <div className=" pb-24">
        <TabSection />
      </div>
    </div>
  );
};

export default Testimonial;
