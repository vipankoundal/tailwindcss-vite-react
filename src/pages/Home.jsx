import React from "react";
import Hero from "../components/Hero";
import HomeProduct from "../components/HomeProduct";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Hero />
      <section>
        <Slider />
      </section>
      <HomeProduct />
    </>
  );
};

export default Home;
