import { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <style>
        {`
          @font-face {
            font-family: 'Signatie';
            src: url('/assets/fonts/Signatie.ttf') format('truetype');
          }

          .loading-signature-container {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 200px;
            position: relative;
            background: transparent;
          }

          .loading-signature-svg {
            width: 100%;
            height: auto;
            overflow: visible;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
          }

          .loading-letter {
            font-family: 'Signatie', cursive;
            font-size: 300px;
            fill: white;
            stroke: white;
            stroke-width: 0.3;
            fill-opacity: 0;
            stroke-opacity: 0;
            transform-origin: center;
          }

          .loading-letter-V { animation: drawLetter 0.8s ease forwards, float 3s ease-in-out infinite; }
          .loading-letter-I { animation: drawLetter 0.8s ease 0.6s forwards, float 3s ease-in-out infinite 0.5s; }
          .loading-letter-N { animation: drawLetter 0.8s ease 1.2s forwards, float 3s ease-in-out infinite 1s; }
          .loading-letter-E1 { animation: drawLetter 0.8s ease 1.8s forwards, float 3s ease-in-out infinite 1.5s; }
          .loading-letter-E2 { animation: drawLetter 0.8s ease 2.4s forwards, float 3s ease-in-out infinite 2s; }
          .loading-letter-T { animation: drawLetter 0.8s ease 3.0s forwards, float 3s ease-in-out infinite 2.5s; }

          .loading-curve {
            visibility: hidden;
            fill: none;
            stroke: white;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: showAndDrawCurve 1.5s ease 3.2s forwards;
          }

          @keyframes showAndDrawCurve {
            0% {
              visibility: visible;
              stroke-dashoffset: 1000;
            }
            100% {
              visibility: visible;
              stroke-dashoffset: 0;
            }
          }

          .loading-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .loading-particle {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0;
          }

          ${[...Array(20)]
            .map(
              (_, i) => `
            .loading-particle-${i} {
              width: ${Math.random() * 4 + 2}px;
              height: ${Math.random() * 4 + 2}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              animation: particle ${Math.random() * 2 + 2}s ease-out ${
                Math.random() * 3 + 4
              }s infinite;
            }
          `
            )
            .join("\n")}
        `}
      </style>
      <div className="loading-signature-container">
        <div className="loading-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`loading-particle loading-particle-${i}`} />
          ))}
        </div>
        <svg
          className="loading-signature-svg"
          viewBox="0 0 1800 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="100" y="300" className="loading-letter loading-letter-V">
            V
          </text>
          <text x="350" y="300" className="loading-letter loading-letter-I">
            i
          </text>
          <text x="500" y="300" className="loading-letter loading-letter-N">
            n
          </text>
          <text x="750" y="300" className="loading-letter loading-letter-E1">
            e
          </text>
          <text x="1000" y="300" className="loading-letter loading-letter-E2">
            e
          </text>
          <text x="1250" y="300" className="loading-letter loading-letter-T">
            t
          </text>

          <path d="M50 400 Q 725 300, 1400 400" className="loading-curve" />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
