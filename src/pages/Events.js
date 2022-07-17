import React from "react";
import EventsListing from "../components/EventsListing";

const Events = () => {
  return (
    <main className="flex-shrink-0 mb-5" id="mainContent">
      <div className="container">
        <h1>Events</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          ducimus nemo error aut dolor doloribus quidem beatae debitis quibusdam
          temporibus necessitatibus illo omnis officia maxime vitae, fugit,
          numquam reiciendis officiis!
        </p>
        <EventsListing />
      </div>
    </main>
  );
};

export default Events;
