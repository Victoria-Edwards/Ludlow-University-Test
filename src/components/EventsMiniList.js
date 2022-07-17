import React from "react";
import { Link } from "react-router-dom";
import eventsData from "../events-data.json";

import EventsCalendarProfile from "./EventsCalendarProfile";
import "../styles/eventsMiniList.scss";

const EventsMiniList = () => {
  if (!eventsData) return null;

  return eventsData && eventsData.length ? (
    <div className="container homeEvents px-2 px-md-0">
      <div className="homeEventsHeading d-flex justify-content-between p-2 align-content-center">
        <h2>Upcoming events</h2>
        <span className="gradientButton">
          <Link to="/events">View all events</Link>
        </span>
      </div>

      <div className="container px-3 px-md-2 my-4">
        {eventsData.length === 1 && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {eventsData.map((result, index) => {
              const thumbnail = result.image
                ? result.image
                : "assets/ludlowUniLogo.png";
              const alt = result.altText ? result.altText : "Ludlow Uni logo";
              return (
                <div className="col px-1" key={index}>
                  <a href={result.link} className="card h-100">
                    <img
                      src={thumbnail}
                      alt={alt}
                      className="card-img-top"
                      loading="lazy"
                    />
                    <div className="user text-center">
                      <EventsCalendarProfile result={result} />
                    </div>
                    <div className="card-body">
                      <p className="card-title">{result.title}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}
        {eventsData.length > 1 && (
          <div className="row row-cols-2 row-cols-lg-3 g-4 my-4">
            {eventsData.map((result, index) => {
              const thumbnail = result.image
                ? result.image
                : "assets/ludlowUniLogo.png";
              const alt = result.altText ? result.altText : "Ludlow Uni logo";
              return (
                <div className="col px-1" key={index}>
                  <a href={result.link} className="card h-100">
                    <img
                      src={thumbnail}
                      alt={alt}
                      className="card-img-top"
                      loading="lazy"
                    />
                    <div className="user text-center">
                      <EventsCalendarProfile result={result} />
                    </div>
                    <div className="card-body">
                      <p className="card-title">{result.title}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default EventsMiniList;
