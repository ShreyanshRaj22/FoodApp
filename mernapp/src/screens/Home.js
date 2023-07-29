import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
      <Carousal />
      </div>
      <div className="m-2">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer />
    </div>
  );
}
