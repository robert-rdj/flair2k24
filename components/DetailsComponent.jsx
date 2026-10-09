import React, { useRef } from "react";
import { secondDivAnimation } from "../app/utls";
import { motion, useInView } from "framer-motion";
import { Space_Grotesk } from "@next/font/google";
import EventCard from "./EventCard";
import { RevealLinks } from "./RevealLinks";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DetailsComponent = () => {
  const descriptionText =
    "Discover the amazing symposium adventure, crafted by it dept".split(" ");

  const events = [
    {
      name: "Collider Conclave",
      location: "H23 , I31",
      time: "9:45 AM - 11:15 AM",
      description:
        "A paper presentation event where innovators showcase their research and breakthrough ideas.",
      photoURL: "/assets/mini-posters/collaider.png",
      url: "https://forms.gle/Xg1btLowaikSGE79A",
      guidelineURL: "/assets/guidelines/paper-presentations.pdf",
    },
    {
      name: "Quantum Quest",
      location: "I32",
      time: "1:30 PM - 2:30 PM",
      description:
        "Test your technical knowledge in this challenging and engaging quiz competition.",
      photoURL: "/assets/mini-posters/quest.png",

      url: "https://forms.gle/4YFDfV7nK77vmg5TA",
      guidelineURL: "/assets/guidelines/tech-quiz.pdf",
    },
    {
      name: "Glitchverse Guess",
      location: "I33",
      time: "1:30 PM - 2:45 PM",
      description:
        "A fun-filled event of technical charades where teams guess tech-related terms through clues.",
      photoURL: "/assets/mini-posters/guess.jpg",

      url: "https://forms.gle/eGPQkQKH4avibKkH8",
      guidelineURL: "/assets/guidelines/tech-charade.pdf",
    },
    {
      name: "Into the Memeverse",
      location: "J14",
      time: "12:00 PM - 1:00 PM",
      description:
        "A creative event where participants showcase their skills by creating technical memes.",
      photoURL: "/assets/mini-posters/meme.png",

      url: "https://forms.gle/XYCRLJT5YBJYiaF6A",
      guidelineURL: "/assets/guidelines/meme-event.pdf",
    },
    {
      name: "Code Swing Duo",
      location: "A22",
      time: "11:00 AM - 12:30 PM",
      description:
        "Partner up and compete to debug code in real-time, racing against the clock.",
      photoURL: "/assets/mini-posters/code-swing.png",

      url: "https://forms.gle/PmgZaYbDxeumco359",
      guidelineURL: "/assets/guidelines/coding-partners.pdf",
    },

    {
      name: "Sinister Hunt",
      location: "A21",
      time: "12:00 PM - 1:30 PM",
      description:
        "Embark on a thrilling treasure hunt, deciphering clues and solving puzzles to uncover the prize.",
      photoURL: "/assets/mini-posters/hunt.png",

      url: "https://forms.gle/Mwikzt8cJCnFeSjAA",
      guidelineURL: "/assets/guidelines/treasure-hunt.pdf",
    },
    {
      name: "Multiversal Link Up",
      location: "I32",
      time: "1:15 PM - 2:45 PM",
      description:
        "A networking event where participants connect the dots through interactive activities.",
      photoURL: "/assets/mini-posters/link.png",

      url: "https://forms.gle/yfpXuE4tLBakX7db9",
      guidelineURL: "/assets/guidelines/tech-conn.pdf",
    },
    {
      name: "Spidey Prompts",
      location: "A21",
      time: "10:15 AM - 11:15 AM",
      description:
        "Dive into the world of AI and see how creative you can get with generating AI prompts.",
      photoURL: "/assets/mini-posters/prompt.jpg",

      url: "https://forms.gle/3ruFDPs5pptwhRrR9",
      guidelineURL: "/assets/guidelines/ai-prompts.pdf",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="relative flex flex-col mx-auto pt-24 bg-white  h-fit text-black pb-14"
      variants={secondDivAnimation}
      ref={ref}
    >
      {/* Heading */}
      <motion.p
        className={`text-center mb-10 ${space_grotesk.className} text-xs font-bold`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        WELCOME TO FLAIR 2k24
      </motion.p>

      {/* Description Text Animation */}
      <motion.p
        className="text-4xl sm:text-8xl text-center font-bold w-[87%] sm:w-[70%] mx-auto mb-5"
        initial={{
          scale: 0.9,
          rotateY: 10,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {descriptionText.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: i / 5,
            }}
          >
            {el.toUpperCase()}{" "}
          </motion.span>
        ))}
      </motion.p>

      {/* Event Cards Section */}
      <div className="flex  justify-center">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mt-10 max-w-7xl">
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DetailsComponent;
