import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserGlobalData } from "../store/dreamworldSlice";
import tokenizeProvider from "../backend/TokenizeProvider";
import LoadingIndicator from "../components/LoadingIndicator";

const LiquidityPoolsPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      LiquidityPoolsPage
    </div>
  );
};

export default LiquidityPoolsPage;
