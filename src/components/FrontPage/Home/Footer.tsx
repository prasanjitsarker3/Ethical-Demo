"use client";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  Map,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-[#d2f153]">
      <div className=" w-full container mx-auto  py-8  text-black text-center">
        <h1>
          Lorem ipsum dolor sit amet consectetur. Lectus vulputate imperdiet in
          facilisi risus.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
