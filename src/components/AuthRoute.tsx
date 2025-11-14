import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import tokenizeProvider from "../backend/TokenizeProvider";
import AppLayout from "../layouts/AppLayout"; // Import the AppLayout component
import { selectUserGlobalData, setUserGlobalData } from "../store/dreamworldSlice";
import { AppDispatch } from "../store/store";
import LoadingIndicator from "./LoadingIndicator";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const userGlobalData = useSelector(selectUserGlobalData);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setLoading] = React.useState(
    userGlobalData?.userData?.uid ? false : true
  );
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginState = async () => {
      setLoading(false)
    };
    if (!userGlobalData?.userData?.uid) checkLoginState();
  }, []);

  return isLoading ? (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingIndicator />
    </div>
  ) : (
    <AppLayout>{children}</AppLayout>
  ); // Wrap children with AppLayout
};

export default AuthRoute;
