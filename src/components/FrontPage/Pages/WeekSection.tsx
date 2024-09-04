import { Cannabis, Gauge, Pencil } from "lucide-react";
import React from "react";

const WeekSection = () => {
  const data = [
    {
      id: 1,
      icon: <Cannabis size={32} />, // Set icon size
      name: "Lorem Ipsum",
      des: "Non nisl mattis ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis ipsum donec tortor laoreet euismod phasellus.",
    },
    {
      id: 2,
      icon: <Gauge size={32} />,
      name: "Lorem Ipsum",
      des: "Non nisl mattis ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis ipsum donec tortor laoreet euismod phasellus.",
    },
    {
      id: 3,
      icon: <Pencil size={32} />,
      name: "Lorem Ipsum",
      des: "Non nisl mattis ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis ipsum donec tortor laoreet euismod phasellus.",
    },
  ];

  return (
    <div className="bg-[#08090a] text-white">
      <div className="container mx-auto md:px-0 px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              <div className="bg-[#141212] rounded-lg">
                <h1 className="text-2xl font-bold mb-4 bg-[#d2f153] rounded-t-lg  py-3">
                  Week {item.id}
                </h1>
                <div className=" px-4 pb-10">
                  <div className="mb-4 flex justify-center items-center">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-sm">{item.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" border-b border-dashed border-white  pt-20"></div>
      </div>
    </div>
  );
};

export default WeekSection;
