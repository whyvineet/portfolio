import { useState, useEffect } from "react";

const Signature = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <style>
        {`
          @font-face {
            font-family: 'Signatie';
            src: url('/assets/fonts/Signatie.ttf') format('truetype');
          }

          .signature-container {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 200px;
            position: relative;
            background: transparent;
            transition: all 0.3s ease;
          }

          .signature-svg {
            width: 100%;
            height: auto;
            overflow: visible;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
          }

          .letter {
            font-family: 'Signatie', cursive;
            font-size: 300px;
            fill: white;
            stroke: white;
            stroke-width: 0.3;
            fill-opacity: 0;
            stroke-opacity: 0;
            transform-origin: center;
            visibility: ${isVisible ? "visible" : "hidden"};
          }

          .letter-V { animation: ${
            isVisible
              ? "drawLetter 0.8s ease forwards, float 3s ease-in-out infinite"
              : "none"
          }; }
          .letter-I { animation: ${
            isVisible
              ? "drawLetter 0.8s ease 0.6s forwards, float 3s ease-in-out infinite 0.5s"
              : "none"
          }; }
          .letter-N { animation: ${
            isVisible
              ? "drawLetter 0.8s ease 1.2s forwards, float 3s ease-in-out infinite 1s"
              : "none"
          }; }
          .letter-E1 { animation: ${
            isVisible
              ? "drawLetter 0.8s ease 1.8s forwards, float 3s ease-in-out infinite 1.5s"
              : "none"
          }; }
          .letter-E2 { animation: ${
            isVisible
              ? "drawLetter 0.8s ease 2.4s forwards, float 3s ease-in-out infinite 2s"
              : "none"
          }; }
          .letter-T { animation: ${
            isVisible
              ? "drawLetter 0.8s ease 3.0s forwards, float 3s ease-in-out infinite 2.5s"
              : "none"
          }; }

          .decorative-curve {
            visibility: hidden;
            fill: none;
            stroke: white;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: ${
              isVisible ? "showAndDrawCurve 1.5s ease 0.4s forwards" : "none"
            };
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

          @keyframes drawLetter {
            0% {
              fill-opacity: 0;
              stroke-opacity: 0;
              transform: translate(-10px, 10px) scale(0.95) rotate(-2deg);
            }
            50% {
              fill-opacity: 0;
              stroke-opacity: 1;
            }
            100% {
              fill-opacity: 1;
              stroke-opacity: 1;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(1deg); }
          }

          .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .particle {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0;
          }

          ${[...Array(20)]
            .map(
              (_, i) => `
            .particle-${i} {
              width: ${Math.random() * 4 + 2}px;
              height: ${Math.random() * 4 + 2}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              animation: ${
                isVisible
                  ? `particle ${Math.random() * 2 + 2}s ease-out ${
                      Math.random() * 3 + 4
                    }s infinite`
                  : "none"
              };
            }
          `
            )
            .join("\n")}

          @keyframes particle {
            0% {
              opacity: 0;
              transform: translate(0, 0) scale(0);
            }
            50% {
              opacity: 0.8;
              transform: translate(${Math.random() * 100 - 50}px, ${
          Math.random() * 100 - 50
        }px) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(${Math.random() * 200 - 100}px, ${
          Math.random() * 200 - 100
        }px) scale(0);
            }
          }
        `}
      </style>
      <div className="signature-container">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`} />
          ))}
        </div>
        <svg
          className="signature-svg"
          viewBox="0 0 1800 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="100" y="300" className="letter letter-V">
            V
          </text>
          <text x="350" y="300" className="letter letter-I">
            i
          </text>
          <text x="500" y="300" className="letter letter-N">
            n
          </text>
          <text x="750" y="300" className="letter letter-E1">
            e
          </text>
          <text x="1000" y="300" className="letter letter-E2">
            e
          </text>
          <text x="1250" y="300" className="letter letter-T">
            t
          </text>

          <path d="M50 400 Q 725 300, 1400 400" className="decorative-curve" />
        </svg>
      </div>
    </div>
  );
};

export default Signature;
