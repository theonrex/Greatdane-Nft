import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { useForm } from "react-hook-form";
import Favicon from "../public/images/favIcon.png";
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

export default function Home() {
  return (
    <div>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={Favicon.src} />
      </Head>
      <NavbarMenu />

      <main>
        <LandingPage />

        <CountUpp />
        <WhyChoose />
        <Earn />
        <Sentiments />
      </main>

      <Footer />
    </div>
  );
}
