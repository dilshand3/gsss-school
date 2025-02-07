"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useAuth from "@/store/userAuth";
import "./Herosection.css";

const Herosection = () => {
  const { currentIndex, images, nextSlide, prevSlide } = useAuth();
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    if (sliderRef.current) {
      if (currentIndex === 0) {
        gsap.set(sliderRef.current, { x: "0%" });
      } else if (currentIndex === images.length - 1) {
        gsap.set(sliderRef.current, { x: `-${(images.length - 1) * 100}%` });
      }
      gsap.to(sliderRef.current, {
        x: `-${currentIndex * 100}%`,
        duration: 0.5,
      });
    }
  }, [currentIndex]);

  return (
    <div className="home-section">
      <span className="material-symbols-outlined backwardIcon" onClick={prevSlide}>
        arrow_back_ios
      </span>
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`hero-sectionImg-${index}`} />
          ))}
        </div>
      </div>
      <span className="material-symbols-outlined forwardIcon" onClick={nextSlide}>
        arrow_forward_ios
      </span>
    </div>
  );
};

export default Herosection;