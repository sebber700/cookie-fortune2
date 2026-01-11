import { useState, useEffect } from "react";

const fortunes = [
  "The quietest step often leads to the longest journey.",
  "What you seek is also seeking you.",
  "A single grain of rice can tip the scale.",
  "The door you fear to open hides the room you seek.",
  "Patience is not waiting—it is how you wait.",
  "Your silence today will speak tomorrow.",
  "The moon does not fight the night.",
  "What is broken can hold more light.",
  "Your next breath is a new beginning.",
  "The river does not push; it flows.",
  "Small acts ripple further than grand gestures.",
  "Trust the timing of your life.",
  "You already know the answer.",
  "Let go of what was never yours to hold.",
  "Your presence is the gift.",
  "The path appears when you begin to walk.",
  "Not all who wander are lost—some are arriving.",
  "Listen to what wants to be born.",
  "The crack is where the light enters.",
  "You are exactly where you need to be."
];

type AnimationPhase = 
  | "initial" 
  | "cracking" 
  | "broken" 
  | "paper-rising" 
  | "paper-unrolling" 
  | "revealing";

const Index = () => {
  const [phase, setPhase] = useState<AnimationPhase>("initial");
  const [fortune] = useState(() => 
    fortunes[Math.floor(Math.random() * fortunes.length)]
  );

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Animation timeline
    timers.push(setTimeout(() => setPhase("cracking"), 800));
    timers.push(setTimeout(() => setPhase("broken"), 1400));
    timers.push(setTimeout(() => setPhase("paper-rising"), 2000));
    timers.push(setTimeout(() => setPhase("paper-unrolling"), 3200));
    timers.push(setTimeout(() => setPhase("revealing"), 4200));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fortune-container">
      {/* Whole cookie */}
      <div 
        className={`cookie-whole ${
          phase === "initial" ? "visible" : 
          phase === "cracking" ? "cracking" : "hidden"
        }`}
      >
        <img 
          src="/cookie-whole.svg" 
          alt="" 
          className="cookie-image"
          draggable={false}
        />
      </div>

      {/* Broken cookie */}
      <div 
        className={`cookie-broken ${
          phase === "broken" || 
          phase === "paper-rising" || 
          phase === "paper-unrolling" || 
          phase === "revealing" 
            ? "visible" 
            : "hidden"
        }`}
      >
        <img 
          src="/cookie-broken.svg" 
          alt="" 
          className="cookie-image cookie-broken-image"
          draggable={false}
        />
      </div>

      {/* Fortune paper */}
      <div 
        className={`paper-container ${
          phase === "paper-rising" ? "rising" :
          phase === "paper-unrolling" ? "unrolling" :
          phase === "revealing" ? "revealed" : ""
        }`}
      >
        <div className="paper">
          <p 
            className={`fortune-text ${
              phase === "revealing" ? "visible" : ""
            }`}
          >
            {fortune}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
