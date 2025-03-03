import { curve, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import WaitlistForm from "./WaitlistForm";
import { motion, AnimatePresence } from 'framer-motion';

// Sample meals for the hero swipe demo
const sampleMeals = [
  {
    id: 1,
    name: "Sardine tomato pasta with gremolata",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prepTime: "5m",
    cookTime: "15m",
    serves: 4,
    tags: ["Lowcalorie", "Healthy", "Lowfat"],
    nutrition: {
      calories: 405,
      protein: 23,
      carbs: 53,
      fats: 9
    }
  },
  {
    id: 2,
    name: "Chicken Stir Fry with Vegetables",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prepTime: "10m",
    cookTime: "12m",
    serves: 2,
    tags: ["Highprotein", "Healthy", "Quick"],
    nutrition: {
      calories: 320,
      protein: 28,
      carbs: 24,
      fats: 12
    }
  },
  {
    id: 3,
    name: "Mediterranean Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prepTime: "15m",
    cookTime: "20m",
    serves: 3,
    tags: ["Vegetarian", "Healthy", "Highfiber"],
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 58,
      fats: 12
    }
  },
  {
    id: 4,
    name: "Grilled Salmon with Asparagus",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prepTime: "5m",
    cookTime: "15m",
    serves: 2,
    tags: ["Highprotein", "Lowcarb", "Omega3"],
    nutrition: {
      calories: 310,
      protein: 34,
      carbs: 8,
      fats: 16
    }
  },
  {
    id: 5,
    name: "Vegetable Curry with Rice",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    prepTime: "15m",
    cookTime: "25m",
    serves: 4,
    tags: ["Vegan", "Spicy", "Glutenfree"],
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 68,
      fats: 10
    }
  }
];

const Hero = () => {
  const parallaxRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [matches, setMatches] = useState([]);
  const [partnerMatches, setPartnerMatches] = useState([1, 3, 4]); // Simulated partner matches
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const currentMeal = sampleMeals[currentIndex % sampleMeals.length];
  
  const handleSwipe = (dir) => {
    setDirection(dir);
    
    if (dir === 'right') {
      const newMatches = [...matches, currentMeal.id];
      setMatches(newMatches);
      
      // Check if this is also a partner match
      if (partnerMatches.includes(currentMeal.id)) {
        // This would be where you show a "It's a match!" animation
        console.log("It's a match!");
      }
    }
    
    // Move to next meal after a short delay
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setDirection(null);
    }, 300);
  };
  
  // Track touch/mouse start position
  const handleDragStart = (e) => {
    setIsDragging(true);
    
    // For touch events
    if (e.touches) {
      setDragStart(e.touches[0].clientX);
    } 
    // For mouse events
    else {
      setDragStart(e.clientX);
    }
  };
  
  // Handle the end of drag to determine swipe direction
  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    let endX;
    
    // For touch events
    if (e.changedTouches) {
      endX = e.changedTouches[0].clientX;
    } 
    // For mouse events
    else {
      endX = e.clientX || dragStart; // Fallback to dragStart if clientX is undefined
    }
    
    const threshold = 50; // minimum distance required for a swipe
    const delta = endX - dragStart;
    
    console.log("Swipe delta:", delta);
    
    if (delta > threshold) {
      // Swiped right
      handleSwipe('right');
    } else if (delta < -threshold) {
      // Swiped left
      handleSwipe('left');
    }
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[3.25rem]">
          <h1 className="h1 mb-6">
            Meal Planning Made&nbsp;Simple&nbsp;With {` `}
            <span className="inline-block relative">
              Swipes{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-18 lg:mb-8">
            Swipe left or right on meals with your partner. When you match, they go into your meal plan.
          </p>
          <WaitlistForm />
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="relative bg-n-19 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-19 rounded-t-[0.9rem]" />

              <div className="aspect-[33/50] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/600] lg:aspect-[900/600]">
                {/* SwipeDemo integration starts here */}
                <div className="w-full h-full flex flex-col items-center">
                  {/* Progress bar at the top - constrained to the width of the card */}
                  <div className="w-full max-w-md px-4 mb-2 mx-auto">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-green-500 font-medium">Matched: {matches.length}/7 meals</div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(matches.length / 7) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  {/* Floating instruction text */}
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute -left-36 md:-left-40 top-1/2 transform -translate-y-1/2 text-center mt-60">
                      <div className="text-red-500 font-bold text-lg mb-2">Swipe Left</div>
                      <svg className="w-8 h-8 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <div className="text-red-500 text-sm mt-1">Don't like</div>
                    </div>
                    
                    <div className="absolute -right-36 md:-right-40 top-1/2 transform -translate-y-1/2 text-center mt-60">
                      <div className="text-green-500 font-bold text-lg mb-2">Swipe Right</div>
                      <svg className="w-8 h-8 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <div className="text-green-500 text-sm mt-1">Like</div>
                    </div>
                  </div>
                  {/* Meal card - made taller */}
                  <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-xl mx-auto h-[550px] md:h-[600px] select-none">
                    {/* Add floating swipe indicators */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-red-500 text-white px-3 py-2 rounded-lg transform -rotate-90 opacity-70 pointer-events-none">
                      <span className="font-bold">NOPE</span>
                    </div>
                    
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green-500 text-white px-3 py-2 rounded-lg transform rotate-90 opacity-70 pointer-events-none">
                      <span className="font-bold">LIKE</span>
                    </div>
                    
                    <AnimatePresence>
                      <motion.div
                        key={currentIndex}
                        initial={{ x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ 
                          x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
                          opacity: 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full flex flex-col select-none"
                      >
                        <img 
                          src={currentMeal.image} 
                          alt={currentMeal.name}
                          className="w-full h-64 object-cover md:h-80"
                        />
                        
                        <div className="p-5 flex-grow">
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{currentMeal.name}</h3>
                          
                          <div className="flex items-center mb-3">
                            <div className="flex items-center mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">Prep: {currentMeal.prepTime}</span>
                            </div>
                            <div className="flex items-center mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">Cook: {currentMeal.cookTime}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            <span className="text-gray-600">Serves: {currentMeal.serves}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {currentMeal.tags.map((tag, index) => (
                              <span 
                                key={index} 
                                className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Nutrition per serving:</h4>
                            <div className="flex justify-between text-sm text-gray-700">
                              <span>Calories: {currentMeal.nutrition.calories}</span>
                              <span>Protein: {currentMeal.nutrition.protein}g</span>
                              <span>Carbs: {currentMeal.nutrition.carbs}g</span>
                              <span>Fats: {currentMeal.nutrition.fats}g</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Add a transparent overlay to capture swipe gestures */}
                    <div 
                      className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing select-none"
                      onMouseDown={(e) => {
                        e.preventDefault(); // Prevent default selection behavior
                        handleDragStart(e);
                        
                        // Add document-level event listeners
                        const handleMouseMove = (e) => {
                          e.preventDefault(); // Prevent text selection during drag
                          
                          // Show/hide the appropriate indicator based on drag direction
                          const currentX = e.clientX;
                          const delta = currentX - dragStart;
                          
                          // Get references to the indicators
                          const leftIndicator = e.currentTarget.parentNode.querySelector('.left-indicator');
                          const rightIndicator = e.currentTarget.parentNode.querySelector('.right-indicator');
                          
                          if (delta < -30) {
                            // Dragging left
                            if (leftIndicator) leftIndicator.style.opacity = '1';
                            if (rightIndicator) rightIndicator.style.opacity = '0';
                          } else if (delta > 30) {
                            // Dragging right
                            if (leftIndicator) leftIndicator.style.opacity = '0';
                            if (rightIndicator) rightIndicator.style.opacity = '1';
                          } else {
                            // Not dragging enough in either direction
                            if (leftIndicator) leftIndicator.style.opacity = '0';
                            if (rightIndicator) rightIndicator.style.opacity = '0';
                          }
                        };
                        
                        const handleMouseUp = (e) => {
                          handleDragEnd(e);
                          
                          // Reset indicators
                          const leftIndicator = e.currentTarget.parentNode.querySelector('.left-indicator');
                          const rightIndicator = e.currentTarget.parentNode.querySelector('.right-indicator');
                          if (leftIndicator) leftIndicator.style.opacity = '0';
                          if (rightIndicator) rightIndicator.style.opacity = '0';
                          
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };
                        
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                      onTouchStart={(e) => {
                        handleDragStart(e);
                      }}
                      onTouchMove={(e) => {
                        // Show/hide the appropriate indicator based on drag direction
                        const currentX = e.touches[0].clientX;
                        const delta = currentX - dragStart;
                        
                        // Get references to the indicators
                        const leftIndicator = e.currentTarget.parentNode.querySelector('.left-indicator');
                        const rightIndicator = e.currentTarget.parentNode.querySelector('.right-indicator');
                        
                        if (delta < -30) {
                          // Dragging left
                          if (leftIndicator) leftIndicator.style.opacity = '1';
                          if (rightIndicator) rightIndicator.style.opacity = '0';
                        } else if (delta > 30) {
                          // Dragging right
                          if (leftIndicator) leftIndicator.style.opacity = '0';
                          if (rightIndicator) rightIndicator.style.opacity = '1';
                        } else {
                          // Not dragging enough in either direction
                          if (leftIndicator) leftIndicator.style.opacity = '0';
                          if (rightIndicator) rightIndicator.style.opacity = '0';
                        }
                      }}
                      onTouchEnd={(e) => {
                        handleDragEnd(e);
                        
                        // Reset indicators
                        const leftIndicator = e.currentTarget.parentNode.querySelector('.left-indicator');
                        const rightIndicator = e.currentTarget.parentNode.querySelector('.right-indicator');
                        if (leftIndicator) leftIndicator.style.opacity = '0';
                        if (rightIndicator) rightIndicator.style.opacity = '0';
                      }}
                    ></div>
                    
                    {/* Add floating indicators with classes for JavaScript reference */}
                    <div className="left-indicator absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-red-500 text-white px-3 py-2 rounded-lg transform opacity-0 transition-opacity duration-200 pointer-events-none">
                      <span className="font-bold text-xl">NOPE</span>
                    </div>
                    
                    <div className="right-indicator absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green-500 text-white px-3 py-2 rounded-lg transform opacity-0 transition-opacity duration-200 pointer-events-none">
                      <span className="font-bold text-xl">LIKE</span>
                    </div>
                    
                    {/* Swipe buttons remain for users who prefer clicking
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 z-30">
                      <button 
                        onClick={() => handleSwipe('left')}
                        className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="#FF4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <button 
                        onClick={() => handleSwipe('right')}
                        className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12.75L10.5 18.75L19.5 5.25" stroke="#3BAA57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div> */}
                  </div>
                  
                  {/* Navigation tabs at bottom - constrained to the width of the card */}
                  <div className="w-full max-w-md mt-4 flex justify-between items-center border-t border-gray-200 pt-4 px-4 mx-auto">
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-xs text-gray-500">Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-xs text-green-500">Discover</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs text-gray-500">Plan</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-xs text-gray-500">Profile</span>
                    </div>
                  </div>
                </div>
                {/* SwipeDemo integration ends here */}

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-16 backdrop-blur border border-n-16/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex text-white"
                    title="No more 'What's for dinner?' debates!"
            
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/* Background image removed */}
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
