import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const ClientInformation = () => {
  return (
    <div className="bg-[#141212]">
      <div className="w-full container mx-auto md:px-0 px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto">
          <div className="bg-white p-5 rounded-lg  lg:col-span-2">
            <div className="flex justify-start items-center md:flex-row flex-col  md:gap-12 gap-5 ">
              <Image
                height={300}
                width={300}
                className="w-72 h-48 rounded-md"
                src="https://img.freepik.com/premium-photo/portrait-male-model-with-arms-crossed-standing-against-white-background_1015293-93417.jpg?ga=GA1.1.703347942.1689316676&semt=ais_hybrid"
                alt="l"
              />
              <div className="">
                <p className="text-3xl font-semibold">Nathan Drake</p>
                <p className="my-4 text-[#464646]">
                  Lorem ipsum dolor sit amet
                </p>
                <div className="flex items-center justify-start gap-4">
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                    }
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                    }
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                    }
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
                    }
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <p className="text-[#464646]  mt-3 text-justify">
              Lorem ipsum dolor sit amet consectetur. Ipsum donec tortor laoreet
              euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non
              nisl mattis fringilla sagittis blandit nec arcu massa. Ac luctus
              lorem non auctor. Sagittis vehicula.Lorem ipsum dolor sit amet
              consectetur. Ipsum donec tortor laoreet euismod phasellus.
              Tincidunt odio cursus eleifend fermentum. Non nisl mattis
              fringilla sagittis blandit nec arcu massa. Ac luctus lorem non
              auctor.{" "}
            </p>
          </div>
          <div className=" bg-white rounded-lg p-7 flex justify-center items-center ">
            <div className="text-center space-y-1">
              <Image
                width={100}
                height={100}
                className="w-32 h-32 rounded-md mx-auto"
                src="https://img.freepik.com/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-11907.jpg?ga=GA1.1.703347942.1689316676&semt=ais_hybrid"
                alt="lk"
              />
              <div>
                <p className="text-lg font-bold ">Roland Beck</p>
                <p className="text-[#464646] ">Germany</p>
              </div>
              <p className=" text-slate-800">
                {" "}
                Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio
                cursus eleifend fermentum. Non nisl mattis Ipsum donec tortor
                laoreet euismod phasellus. Tincidunt odio cursus eleifend
                fermentum. Non nisl mattis{" "}
              </p>
              <div className="w-full flex items-center justify-center gap-3">
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className="  bg-white rounded-lg p-7 flex justify-center items-center">
            <div className="text-center space-y-2">
              <Image
                width={100}
                height={200}
                className="w-32 h-32 rounded-md mx-auto"
                src="https://img.freepik.com/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-11907.jpg?ga=GA1.1.703347942.1689316676&semt=ais_hybrid"
                alt="lk"
              />
              <div>
                <p className="text-lg font-bold ">Roland Beck</p>
                <p className="text-[#464646] ">Germany</p>
              </div>
              <p className="text-[#464646]">
                {" "}
                Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio
                cursus eleifend fermentum. Non nisl mattis Ipsum donec tortor
                laoreet euismod phasellus. Tincidunt odio cursus eleifend
                fermentum. Non nisl mattis{" "}
              </p>
              <div className="w-full flex items-center justify-center gap-3">
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg p-7 flex justify-center items-center">
            <div className="text-center space-y-2">
              <Image
                width={100}
                height={200}
                className="w-32 h-32 rounded-md mx-auto"
                src="https://img.freepik.com/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-11907.jpg?ga=GA1.1.703347942.1689316676&semt=ais_hybrid"
                alt="lk"
              />
              <div>
                <p className="text-lg font-bold mt-3">Roland Beck</p>
                <p className="text-[#464646] ">Germany</p>
              </div>
              <p className="text-[#464646]">
                {" "}
                Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio
                cursus eleifend fermentum. Non nisl mattis Ipsum donec tortor
                laoreet euismod phasellus. Tincidunt odio cursus eleifend
                fermentum. Non nisl mattis{" "}
              </p>
              <div className=" w-full flex items-center justify-center gap-3">
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className="  bg-white rounded-lg p-7 flex justify-center items-center">
            <div className="text-center space-y-2">
              <Image
                width={100}
                height={200}
                className="w-32 h-32 rounded-md mx-auto"
                src="https://img.freepik.com/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-11907.jpg?ga=GA1.1.703347942.1689316676&semt=ais_hybrid"
                alt="lk"
              />
              <div>
                <p className="text-lg font-bold ">Roland Beck</p>
                <p className="text-[#464646]">Germany</p>
              </div>
              <p className="text-[#464646]">
                {" "}
                Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio
                cursus eleifend fermentum. Non nisl mattis Ipsum donec tortor
                laoreet euismod phasellus. Tincidunt odio cursus eleifend
                fermentum. Non nisl mattis{" "}
              </p>
              <div className=" w-full flex items-center justify-center mx-auto gap-3">
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInformation;
