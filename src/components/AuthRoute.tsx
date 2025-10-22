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
      const is_signed_in = localStorage.getItem("is_signed_in");
      const isSignedInWithDemo = localStorage.getItem("isSignedInWithDemo");
      if (is_signed_in === "true"||isSignedInWithDemo==="true") {
        setLoading(true);
        try {
          const { isNewUser, ...userGlobalData } =
            await tokenizeProvider.signInWithPi(isSignedInWithDemo==="true");
          dispatch(setUserGlobalData(userGlobalData));

          if (isNewUser) {
            const isFirstTime = localStorage.getItem("isFirstTime");
            if (
              isFirstTime !== "false" &&
              !userGlobalData?.userData
            ) {
              navigate("/onboarding");
              return;
            }
          }
          setLoading(false);
        } catch (error) {
          console.error("Auto sign-in failed", error);
          localStorage.removeItem("is_signed_in");
          localStorage.removeItem("isSignedInWithDemo");
          navigate("/about");
        } finally {
          setLoading(false);
        }
      } else {
        navigate("/about");
      }
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
