import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const clientId =
  "109340097905-gj2d8o64fg808k4m2usiptma1bfd54uv.apps.googleusercontent.com";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const onSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("profileObj" in res) {
      console.log("Profile Object: ", res.profileObj);
      const { email, name, imageUrl } = res.profileObj;
  
      // Check the values before making the API request
      console.log("Email:", email, "Name:", name, "ImageUrl:", imageUrl);
  
      if (email && name && imageUrl) {
        try {
          const response = await axios.post(
            "https://course-schedular.vercel.app/auth/google",
            {
              email,
              name,
              profilePic: imageUrl,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          if (response.data.token) {
            login(response.data.token);
            navigate("/");
            console.log("Login successful:", response.data);
          } else {
            console.error("Error logging in:", response.data.message);
          }
        } catch (error) {
          console.error("Error during Google login:", error);
        }
      } else {
        console.error("Missing required fields: email, name, or profilePic.");
      }
    }
  };
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFailure = (error: any) => {
    console.error("Login failed", error);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        buttonText="Login"
        isSignedIn={false}
      />
    </div>
  );
};

export { Login };
