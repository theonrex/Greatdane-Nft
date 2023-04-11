import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { useForm } from "react-hook-form";
import Favicon from "../public/images/Favicon.png";
//components
import NavbarMenu from "../component/navbar";
import LandingPage from "../component/LandingPage";
import CountUpp from "../component/countUp";
import Earn from "../component/Earn";
import Footer from "../component/Footer";
import Sentiments from "../component/sentiments/Sentiments";
import Subscribe from "../component/Subscribe";
import WhyChoose from "../component/WhyChoose";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Splash from "./splash";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
     
      {!loading ? (
        <Splash />
      ) : (
        <>
          <LandingPage />

          <CountUpp />
          <WhyChoose />
          <Earn />
          <Sentiments />
        </>
      )}
    </div>
  );
}
