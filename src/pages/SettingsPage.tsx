import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserGlobalData } from "../store/dreamworldSlice";
import tokenizeProvider from "../backend/TokenizeProvider";
import LoadingIndicator from "../components/LoadingIndicator";

const SettingsPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      Settings
    </div>
  );
};

export default SettingsPage;
