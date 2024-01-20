import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/HomePageComp/Header";
import OurMenu from "../../components/HomePageComp/OurMenu";
import Welcome from "../../components/HomePageComp/Welcome";
import OurService from "../../components/HomePageComp/OurService";
import Testimonia from "../../components/HomePageComp/Testimonia";
import ContactUs from "../../components/HomePageComp/ContatctUs";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Welcome />
      <Testimonia />
      <OurService />
      <OurMenu />
      <ContactUs />
    </>
  );
};

export default HomePage;
