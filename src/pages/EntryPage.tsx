import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserGlobalData } from "../store/dreamworldSlice";
import tokenizeProvider from "../backend/TokenizeProvider";
import LoadingIndicator from "../components/LoadingIndicator";

const EntryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginState = async () => {
      const is_signed_in = localStorage.getItem("is_signed_in");
            const isSignedInWithDemo = localStorage.getItem("isSignedInWithDemo");

      if (is_signed_in === "true") {
        setLoading(true);
        try {
          const userGlobalData = await tokenizeProvider.signInWithPi(isSignedInWithDemo==="true");
          if (userGlobalData.isNewUser===true) {
              navigate("/about");
          }else{
            dispatch(setUserGlobalData(userGlobalData));
            navigate("/dashboard");

          }
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

    checkLoginState();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingIndicator />
    </div>
  );
};

export default EntryPage;
