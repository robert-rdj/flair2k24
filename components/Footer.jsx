import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Space_Grotesk } from "@next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 ">
        {/* Logo Section */}
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
            <a
              href="https://maps.app.goo.gl/jVGfApGAtwkKvpPs9"
              target="_blank"
              aria-label="Google Maps"
            >
              <FaMapMarkerAlt className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/flairit_2k24/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h4 className="text-lg  mb-4 tracking-widest">Quick Links</h4>
          <ul className={"space-y-3 text-sm " + space_grotesk.className}>
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-gray-400">
                Events
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-gray-400">
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
            <p className="text-sm mt-2">Divyakrishnan R</p>
            <p className="text-sm ">Guru Keerthi</p>
            <p className="tracking-widest mt-5">MAIL US</p>

            <a
              href="mailto:flairit@licet.ac.in"
              className="hover:text-gray-400 underline"
            >
              flairit@licet.ac.in
            </a>
          </div>
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
    </footer>
  );
};

export default Footer;
