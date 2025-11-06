import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const cakes = [
    { 
      name: "Strawberry", 
      img: "/images/strawberry.png",
      leftImg: "/images/strawberry1.png",
      rightImg: "/images/strawberry2.png",
      leftStyle: { width: "480px", height: "350px", top: "-30px", left: "-120px", rotate: -15 },
      rightStyle: { width: "440px", height: "320px", top: "10px", right: "-100px", rotate: 12 },
      title: "Fresh Strawberry Cake",
      description: "Bursting with juicy strawberries and fluffy cream. A sweet delight for every celebration, layered with love and freshness that melts in every bite.",
      background: "radial-gradient(circle at center, #a41638 0%, #610b21 60%, #000 100%)"
    },
    { 
      name: "Lemon", 
      img: "/images/lemon.png",
      leftImg: "/images/lemon1.png",
      rightImg: "/images/lemon2.png",
      title: "Zesty Lemon Cake",
      leftStyle: { width: "580px", height: "350px", top: "10px", left: "-120px", rotate: -15 },
      rightStyle: { width: "580px", height: "320px", top: "10px", right: "-100px", rotate: -120 },
      description: "Tangy lemon zest with a soft sponge. A refreshing twist that brightens the mood, perfect for sunny afternoons or cheerful gatherings.",
      background: "radial-gradient(circle at center, #EAB82A 0%, #8a5d14 55%, #1a0d00 100%)"
    },
    { 
      name: "Carrot", 
      img: "/images/carrot.png",
      leftImg: "/images/carrot1.png",
      rightImg: "/images/carrot2.png",
      title: "Classic Carrot Cake",
      leftStyle: { width: "300px", height: "350px", top: "10px", left: "-70px", rotate: -15 },
      rightStyle: { width: "300px", height: "320px", top: "20px", right: "-70px", rotate: 12 },
      description: "Moist, spiced carrot cake with a creamy frosting. A timeless bakery favorite that balances earthy sweetness with warm, cozy flavors.",
      background: "radial-gradient(circle at center, #CA4708 0%, #6a2205 55%, #000 100%)"
    },
    { 
      name: "Raspberry", 
      img: "/images/raspberry.png",
      leftImg: "/images/raspberry1.png",
      rightImg: "/images/raspberry2.png",
      title: "Raspberry Bliss Cake",
      leftStyle: { width: "350px", height: "420px", top: "-10px", left: "-20px", rotate: -15 },
      rightStyle: { width: "350px", height: "420px", top: "20px", right: "-70px", rotate: 12 },
      description: "A berry lover’s dream. Fresh raspberries blended into soft layers, offering a perfect harmony of tartness and sweetness in every slice.",
      background: "radial-gradient(circle at center, #800000 0%, #5b0e23 50%, #1a0004 100%)"
    },
    { 
      name: "Cocoa", 
      img: "/images/chocolate.png",
      leftImg: "/images/chocolate1.png",
      rightImg: "/images/chocolate2.png",
      title: "Rich Cocoa Cake",
      leftStyle: { width: "300px", height: "300px", top: "20px", left: "-20px", rotate: -15 },
      rightStyle: { width: "300px", height: "300px", top: "20px", right: "-70px", rotate: 12 },
      description: "Deep chocolate layers with silky cocoa frosting. Pure indulgence for chocolate lovers, crafted for moments of luxury and comfort.",
      background: "radial-gradient(circle at center, #5d4037 0%, #3e2723 60%, #000 100%)"
    },
    { 
      name: "Pista Rose", 
      img: "/images/pista.png",
      leftImg: "/images/pista1.png",
      rightImg: "/images/pista2.png",
      title: "Pistachio Rose Cake",
      leftStyle: { width: "350px", height: "400px", top: "20px", left: "-60px", rotate: -30 },
      rightStyle: { width: "350px", height: "400px", top: "20px", right: "-60px", rotate: 12 },
      description: "Nutty pistachio paired with subtle rose flavors. An elegant and exotic treat that feels both festive and delicate, perfect for special occasions.",
      background: "radial-gradient(circle at center, #BD8419 0%, #7a4a12 55%, #1a0a00 100%)"
    },
    { 
      name: "Black Currant", 
      img: "/images/black.png",
      leftImg: "/images/black1.png",
      rightImg: "/images/black2.png",
      title: "Black Currant Cake",
      leftStyle: { width: "300px", height: "400px", top: "20px", left: "-20px", rotate: -30 },
      rightStyle: { width: "300px", height: "400px", top: "20px", right: "-20px", rotate: 12 },
      description: "Juicy black currants with smooth cream layers. A burst of fruity richness that brings a touch of sophistication to the classic sponge.",
      background: "radial-gradient(circle at center, #351C27 0%, #1f0f15 60%, #000 100%)"
    },
  ];
  
  
  
const Hero = () => {
  const steps = 7; 
 
    const stepRad = Math.PI / steps;      

  const [stepIndex, setStepIndex] = useState(0);
  const [rotation, setRotation]   = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const radius = 500;
  const offset = 80 / radius;                     
  const startAngle = Math.PI + offset;
  const angle = startAngle + stepIndex * stepRad;

  const move = (dir) => {
    const dirSign = dir === "right" ? 1 : -1;
    setStepIndex(prev => (prev + dirSign + steps) % steps);
    setRotation(prev => prev + (dirSign * 90));

    setTimeout(() => {
      setActiveIndex(prev =>
        (prev + dirSign + cakes.length) % cakes.length
      );
    }, 300);
  };

  return (
    <div 
 className="hero"
  >
       <motion.div
    className="hero-bg"
    animate={{ background: cakes[activeIndex].background }}
    transition={{ duration: 1, ease: "easeInOut" }}
  />
<motion.img
  key={cakes[activeIndex].leftImg}
  src={cakes[activeIndex].leftImg}
  alt=""
  className="left-side"
  style={{
    position: "absolute",
    left: cakes[activeIndex].leftStyle.left,
    width: cakes[activeIndex].leftStyle.width,
    height: cakes[activeIndex].leftStyle.height,
    rotate: cakes[activeIndex].leftStyle.rotate,
  }}
  initial={{ top: "-200px", opacity: 0 }}
  animate={{ top: cakes[activeIndex].leftStyle.top, opacity: 0.5 }}
  exit={{ top: "-200px", opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>

<motion.img
  key={cakes[activeIndex].rightImg}
  src={cakes[activeIndex].rightImg}
  alt=""
  className="right-side"
  style={{
    position: "absolute",
    right: cakes[activeIndex].rightStyle.right,
    width: cakes[activeIndex].rightStyle.width,
    height: cakes[activeIndex].rightStyle.height,
    rotate: cakes[activeIndex].rightStyle.rotate,
  }}
  initial={{ top: "-200px", opacity: 0 }}
  animate={{ top: cakes[activeIndex].rightStyle.top, opacity: 0.5 }}
  exit={{ top: "-200px", opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
/>




      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            key={cakes[activeIndex].title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {cakes[activeIndex].title}
          </motion.h1>
          <motion.p
            key={cakes[activeIndex].description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {cakes[activeIndex].description}
          </motion.p>
        </div>

        <div className="circular-slider">
          <div className="circle outer-circle">
            <div className="circle inner-circle">
              <motion.div
                className="center-image"
                animate={{ rotate: rotation }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={cakes[activeIndex].img}
                  alt={cakes[activeIndex].name}
                />
              </motion.div>
            </div>

            <div
              className="moving-ball"
              style={{
                transform: `rotate(${(angle * 180) / Math.PI}deg) translate(${radius - 10}px)`
              }}
            />
          </div>

          <div className="circle-text">
            <svg viewBox="0 0 1100 1200" width="100%" height="100%">
              <defs>
                <path
                  id="circlePath"
                  d="M600,600 m-550,0 a500,500 0 1,1 1000,0 a500,500 0 1,1 -1000,0"
                />
              </defs>
              <text fill="white" fontSize="24" letterSpacing="8">
                <textPath href="#circlePath" startOffset="50%">
                  {cakes.map((cake) => ` • ${cake.name.toUpperCase()} `).join("")}
                </textPath>
              </text>
            </svg>
          </div>

          <button className="arrow left"  onClick={() => move('left')}>←</button>
          <button className="arrow right"  onClick={() => move('right')} >→</button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
