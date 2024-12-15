import React, { Fragment, useContext } from "react";
import "./App.css";
import { AuthContext } from "./components/store/AuthProvider";
import Header from "./components/resuables/Header";
import LandingPage from "./components/pages/LandingPage";
import BookPage from "./components/pages/BookPage";
import ReadingList from "./components/pages/ReadingList";
import ProfilePage from "./components/pages/ProfilePage";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";
import Footer from "./components/resuables/Footer";
import ProtectedRoute from "./components/store/ProtectedRoute";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Fragment>
      <Header />
      {/* Secure Routes */}
      <ProtectedRoute protectCondition={isAuthenticated} redirectTo={"/"}>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/reading-list" element={<ReadingList />} />
        <Route path="/profile/:username" element={<ProfilePage/>}/>
      </ProtectedRoute>

      {/* Unsecure Routes */}
      <Routes>
        <Route path="/" element={<LoginRegisterPage />} />
      </Routes>

      {/* Catch All */}
      <Routes>{/* <Route path="*" element={< />} /> */}</Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
