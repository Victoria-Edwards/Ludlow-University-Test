import React from "react";
import eventsData from "../events-data.json";

import formatDate from "../utils/formatDate";
import "../styles/eventsListing.scss";

const EventsListing = () => {
  return eventsData && eventsData.length ? (
    <div>
      <div className=" eventsListing row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center justify-content-lg-start">
        {eventsData?.map((result) => {
          const thumbnail = result.image
            ? result.image
            : "assets/ludlowUniLogo.png";
          const alt = result.altText ? result.altText : "Ludlow Uni logo";
          return (
            <div className="col px-1" key={result.id}>
              <a href={result.uri} className="card h-100">
                <img
                  src={thumbnail}
                  alt={alt}
                  className="card-img-top"
                  loading="lazy"
                />

                <div className="card-body">
                  <p className="eventsDate">
                    {formatDate(result.startDate, "dd/MM/yyyy")}

                    {formatDate(result.endDate, "dd/MM/yyyy") ===
                    formatDate(result.startDate, "dd/MM/yyyy") ? (
                      ""
                    ) : (
                      <>
                        <span> – </span>
                        {formatDate(result.endDate, "dd/MM/yyyy")}
                      </>
                    )}
                  </p>
                  <p className="card-title">{result.title}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="no-eventsData">
      <p>There are no events to show</p>
    </div>
  );
};

export default EventsListing;
