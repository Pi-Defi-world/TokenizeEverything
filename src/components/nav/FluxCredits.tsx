"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { useSelector } from "react-redux";
import { selectUserGlobalData } from "../../store/dreamworldSlice";

const FluxCredits: React.FC = () => {
  const navigate = useNavigate();
  const userGlobalData = useSelector(selectUserGlobalData);
  
  const goToBuyMorePage = () => {
    navigate("/buy");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3">
          <Flame className="w-4 h-4 text-white" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white text-sm">
            {0}
          </span>
          <span className="text-xs text-slate-400">Flux</span>
        </div>
      </div>
      <motion.button
        onClick={goToBuyMorePage}
        className="px-3 py-1.5 text-xs font-semibold rounded-md
                 bg-blue-500/10 hover:bg-blue-500/20
                 text-blue-400
                 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get More
      </motion.button>
    </div>
  );
};

export default FluxCredits;
