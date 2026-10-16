"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from 'react-icons/md';
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Space_Grotesk } from "@next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPromoVideoVisible, setIsPromoVideoVisible] = useState(false);
  const pathname = usePathname();
  const isEventsRoute = pathname === "/events";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const promoVideo = document.getElementById("promo-video");

    if (!promoVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPromoVideoVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(promoVideo);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isPromoVideoVisible ? 0 : 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-20 flex flex-col justify-center px-5 sm:py-2 ${isEventsRoute ? "bg-transparent" : "bg-black sm:bg-transparent"} ${isPromoVideoVisible ? "pointer-events-none" : ""} ${className}`}
    >
      <div
        className={`flex justify-between sm:px-10 items-center rounded-lg py-3 ${isScrolled && !isEventsRoute ? "bg-black" : ""
          }`}
      >
        <Image src="/assets/images/licet-logo.png" height={60} width={60} />
        <div className={`sm:flex justify-evenly items-center gap-10 text-sm hidden ${isEventsRoute ? "text-black" : ""}`}>
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/events">Events</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}

          >
            {isMenuOpen ? <MdClose className='text-white' size={24} /> : <RiMenu3Fill className='text-white' size={30} />}
          </button>
        </div>

      </div>
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col h-[100vh] ">
          <div className="flex flex-col h-[90%] justify-between items-stretch gap-8 px-4 ">


            {/* Quick Links */}
            <div className="mt-10">

              <ul className={"space-y-3 text-lg " + space_grotesk.className}>
                <li>
                  <a href="#" className="hover:text-gray-400" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-400" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    Events
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-gray-400" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg  mb-4 tracking-widest">Contact Us</h4>
              <div className={space_grotesk.className}>
                <p className="tracking-widest">COORDINATORS</p>
                <p className="text-sm mt-2">Divyakrishnan R : +91 99406 39989</p>
                <p className="text-sm ">Guru Keerthi : +91 80560 39970</p>
                <p className="tracking-widest mt-5">MAIL US</p>

                <a
                  href="mailto:flairit@licet.ac.in"
                  className="hover:text-gray-400 underline"
                >
                  flairit@licet.ac.in
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">


          <div className="flex gap-10">
            <Image
              src={"/assets/images/logo.png"}
              width={100}
              height={100}
              alt="Logo"
            />
            <Image
              src={"/assets/images/grait-logo-white.png"}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>

          <p className={"text-sm " + space_grotesk.className}>
            Join us for a unique journey, where the future meets the present in
            extraordinary ways.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-6 h-6 hover:text-gray-400" />
            </a>
          </div>
        </div>


            {/* Bottom Footer */}
            <div className="flex justify-center items-center border-t border-gray-700 mt-12 py-4 text-center text-sm">
              <p className={"mr-5 " + space_grotesk.className}>
                See y'all on 28th September
              </p>
              <Image
                src={"/assets/images/spider-web.png"}
                width={20}
                height={20}
              ></Image>
            </div>
          </div>


        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
