import React from "react";
import first from "../../../../public/Photo/self-esteem.png";
import second from "../../../../public/Photo/success.png";
import third from "../../../../public/Photo/proficiency.png";
import Image from "next/image";

const Company = () => {
  const company = [
    {
      id: 1,
      name: "Trusted By",
    },
    {
      id: 2,
      name: "Match",
    },
    {
      id: 3,
      name: "Puzzle",
    },
    {
      id: 4,
      name: "Management",
    },
    {
      id: 5,
      name: "Connect",
    },
    {
      id: 6,
      name: "Navi",
    },
  ];

  const companyCardData = [
    {
      id: 1,
      img: first,
      name: "Self-Expression",
      title:
        "sit aAdipiscing sed faucibus vitae nibh vitae id tortor sit. Integer quis volutpat aliquam turpis vitae risus quis euismod lectus. Quam in mauris sem cras orci sed luctus sit convallis.",
    },
    {
      id: 1,
      img: second,
      name: "Confidence",
      title:
        "sit aAdipiscing sed faucibus vitae nibh vitae id tortor sit. Integer quis volutpat aliquam turpis vitae risus quis euismod lectus. Quam in mauris sem cras orci sed luctus sit convallis.",
    },
    {
      id: 1,
      img: third,
      name: "Enhanced Authority",
      title:
        "sit aAdipiscing sed faucibus vitae nibh vitae id tortor sit. Integer quis volutpat aliquam turpis vitae risus quis euismod lectus. Quam in mauris sem cras orci sed luctus sit convallis.",
    },
  ];
  return (
    <div className=" bg-[#08090a]">
      <div className="bg-[#141212] py-12">
        <div className=" w-full container mx-auto md:px-0 px-8 ">
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-5">
            {company.map((data) => (
              <h1
                key={data.id}
                className=" py-3  text-white text-xl  md:text-3xl font-bold font-exotwo"
              >
                {data.name}
              </h1>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-full container mx-auto md:px-0 px-8 py-32">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
          {companyCardData.map((data) => (
            <div key={data.id}>
              <div className=" text-center bg-[#141212] text-white space-y-2 p-5 border border-slate-800 shadow-md rounded-md">
                <div className="flex justify-center items-center">
                  <Image
                    src={data.img}
                    alt=""
                    width={70}
                    height={70}
                    className=" "
                  />
                </div>
                <h1 className=" text-2xl vigaRegular ">{data.name}</h1>
                <h1 className=" text-base text-slate-300">{data.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
