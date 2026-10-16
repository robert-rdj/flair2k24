"use client";

import { useState, useEffect } from "react";

import TitleList from "@/components/TitleList";
import Carousel from "@/components/carousel";

const cardsData = [
  {
    title: "QUANTUM QUEST",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
  {
    title: "COLLIDER CONCLAVE",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
  {
    title: "GLITCHVERSE GUESS",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
  {
    title: "SINISTER HUNT",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
  {
    title: "CODE SWING DUO",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
  {
    title: "INTO THE MEMEVERSE",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
  {
    title: "MULTIVERSAL LINK UP",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
  {
    title: "SPIDEY PROMPTS",
    img: "/assets/card-bg-1.jpg",
    description: "Sample Description",
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="border flex h-screen pt-[100px]">
      {/* Left side: Title List */}
      <div className="border w-1/2 h-full flex flex-col items-start p-4">
        <h1 className="text-center text-5xl mx-14 my-4 font-sans items-center">
          EVENTS
        </h1>
        <TitleList
          titles={cardsData.map((card) => card.title)}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      {/* Right side: Carousel */}
      <div className="w-2/3 flex justify-center items-center">
        <Carousel cards={cardsData} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default Page;
