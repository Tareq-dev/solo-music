import React from "react";
import Header from "../components/Header";
import UserMusic from "../components/UserMusic";
import Tracks from "../components/Tracks";
import AddYourSong from "../components/AddYourSong";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <UserMusic />
      <Tracks />
      <AddYourSong />
      <Footer />
    </div>
  );
}

export default Home;
