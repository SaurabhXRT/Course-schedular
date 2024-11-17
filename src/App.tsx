/* eslint-disable @typescript-eslint/no-unused-vars */
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Homepage";
import { InboxPage } from "./pages/Inbox";
import { SettingsPage } from "./pages/SettingPage";
import UserProfile from "./pages/Profile";
import { gapi } from "gapi-script";
import { ReactNode, useEffect } from "react";
import { useAuth } from "./context/authContext";
import {Login } from "./pages/login";
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  authToken: string | null;
  children: ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ authToken, children }) => {
  return authToken ? <>{children}</> : <Navigate to="/login" />;
};
const clientId =
  "109340097905-gj2d8o64fg808k4m2usiptma1bfd54uv.apps.googleusercontent.com";
const App = () => {
  const { authToken } = useAuth();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="flex flex-row">
      <Router>
        <Layout />
        <div className="w-full sm:w-[1120px] mx-auto ">
        <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute authToken={authToken}>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/inbox"
              element={
                <ProtectedRoute authToken={authToken}>
                  <InboxPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute authToken={authToken}>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute authToken={authToken}>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
