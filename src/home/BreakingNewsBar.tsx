import { motion } from "framer-motion";
import React from "react";

const BreakingNewsBar: React.FC = () => {
  return (
    <div className="bg-white text-black overflow-hidden border-b relative flex items-center h-12">
      {/* Breaking News Badge */}
      <div className="bg-red-600 text-white font-bold px-4 py-2 text-sm flex-shrink-0">
        Breaking News
      </div>

      {/* Scrolling News Text */}
      <div className="overflow-hidden flex-1 relative h-full">
        <motion.div
          className="absolute flex items-center h-full whitespace-nowrap"
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15, // You can adjust speed here
              ease: "linear",
            },
          }}
        >
          <div className="px-6 text-black text-sm">
            चं. शरद यांचं पुण्याला जोरदार प्रतिसाद | मुंबई-कोलकाता राष्ट्रीय महामार्गावर भीषण अपघात; चौघांचं जागीच निधन; तर एकजण गंभीर | आणखी ब्रेकिंग न्यूज वाचा येथे...
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BreakingNewsBar;
