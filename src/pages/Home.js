import React from "react";
import Hero from "../components/Hero";
import CardFeature from "../components/CardFeature";
import Banner from "../components/Banner";
import EventsMiniList from "../components/EventsMiniList";

const Home = () => {
  return (
    <main className="flex-shrink-0 mb-5" id="mainContent">
      <Hero />
      <CardFeature />
      <Banner />
      <EventsMiniList />
    </main>
  );
};

export default Home;
