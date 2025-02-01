import React from "react";
import { Laptop, SmartphoneIcon } from "lucide-react";

const MobileBlockScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 text-center">
      <SmartphoneIcon size={48} className="mb-4 text-red-500" />
      <h1 className="text-2xl text-white font-bold mb-4">
        Mobile Access Restricted
      </h1>
      <p className="mb-6 text-white">
        The portfolio isn’t mobile-friendly because I was too lazy to deal with
        it.
      </p>
      <Laptop size={48} className="text-green-500" />
      <p className="mt-4 text-gray-400">
        I hope you're not too lazy to check it out! Just grab your laptop and
        take a look at my portfolio.
      </p>
    </div>
  );
};

export default MobileBlockScreen;
