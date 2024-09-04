"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Home,
  Instagram,
  Menu,
  MoonIcon,
  Phone,
  Route,
  SunIcon,
  X,
} from "lucide-react";
import { Avatar, Button } from "@nextui-org/react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? " bg-slate-800 dark:bg-slate-800 fixed w-full z-40"
          : "fixed w-full z-50 "
      }`}
    >
      <div className="container mx-auto py-3 flex justify-between items-center md:px-0 px-0">
        <div className="">
          <div className="flex items-center gap-3 ">
            <Link
              href={"/"}
              className=" text-2xl font-bold vigaRegular text-[#d2f153]"
            >
              DEMO
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className=" flex items-center gap-3">
            <h1 className="text-lg text-[#d2f153] hover:text-[#d2f153] cursor-pointer">
              Home
            </h1>
            <h1 className="text-lg text-white hover:text-[#d2f153] cursor-pointer">
              Case studies
            </h1>

            <h1 className="text-lg text-white hover:text-[#d2f153] cursor-pointer">
              Services
            </h1>
            <h1 className="text-lg text-white hover:text-[#d2f153] cursor-pointer">
              About
            </h1>
            <h1 className="text-lg text-white hover:text-[#d2f153] cursor-pointer">
              Review
            </h1>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className=" px-4 py-1 border border-[#d2f153] text-white hover:bg-[#d2f153] hover:text-white flex items-center gap-1">
            Contact us <ArrowRight size={16} />
          </button>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col items-center bg-white dark:bg-slate-800 pb-32 space-y-3">
          <h1 className="text-lg text-[#d2f153] hover:text-[#d2f153] cursor-pointer">
            Home
          </h1>
          <h1 className="text-lg text-black hover:text-[#d2f153] cursor-pointer">
            Case studies
          </h1>

          <h1 className="text-lg text-black hover:text-[#d2f153] cursor-pointer">
            Services
          </h1>
          <h1 className="text-lg text-black hover:text-[#d2f153] cursor-pointer">
            About
          </h1>
          <h1 className="text-lg text-black hover:text-[#d2f153] cursor-pointer">
            Review
          </h1>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
