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

const Index = () => {
  const [showBroken, setShowBroken] = useState(false);
  const [showPaper, setShowPaper] = useState(false);
  const [showText, setShowText] = useState(false);
  const [shake, setShake] = useState(false);
  const [fortune] = useState(() => 
    fortunes[Math.floor(Math.random() * fortunes.length)]
  );

  useEffect(() => {
    // Shake cookie
    const t1 = setTimeout(() => setShake(true), 800);
    // Show broken cookie
    const t2 = setTimeout(() => {
      setShake(false);
      setShowBroken(true);
    }, 1200);
    // Show paper rising
    const t3 = setTimeout(() => setShowPaper(true), 1600);
    // Show fortune text
    const t4 = setTimeout(() => setShowText(true), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', width: 280, height: 280 }}>
        {/* Whole cookie */}
        <img
          src="/cookie-whole.svg"
          alt=""
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: showBroken ? 0 : 1,
            transition: 'opacity 0.3s ease',
            animation: shake ? 'shake 0.4s ease-in-out' : 'none'
          }}
        />
        
        {/* Broken cookie */}
        <img
          src="/cookie-broken.svg"
          alt=""
          style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            left: '-10%',
            top: '-10%',
            objectFit: 'contain',
            opacity: showBroken ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />

        {/* Paper with fortune */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '30%',
          transform: `translateX(-50%) translateY(${showPaper ? '-100px' : '20px'})`,
          opacity: showPaper ? 1 : 0,
          transition: 'all 1s ease-out',
          zIndex: 10
        }}>
          <div style={{
            width: 220,
            padding: '20px 18px',
            background: '#e6b368',
            border: '3px solid #8f210d',
            borderRadius: 6,
            boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
            transform: `scaleY(${showPaper ? 1 : 0.1})`,
            transformOrigin: 'center bottom',
            transition: 'transform 0.8s ease-out 0.3s'
          }}>
            <p style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#8f210d',
              textAlign: 'center',
              fontStyle: 'italic',
              fontWeight: 600,
              margin: 0,
              opacity: showText ? 1 : 0,
              transition: 'opacity 0.8s ease-out'
            }}>
              {fortune}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          20% { transform: translateX(-3px) rotate(-1deg); }
          40% { transform: translateX(3px) rotate(1deg); }
          60% { transform: translateX(-2px) rotate(-0.5deg); }
          80% { transform: translateX(2px) rotate(0.5deg); }
        }
      `}</style>
    </div>
  );
};

export default Index;
