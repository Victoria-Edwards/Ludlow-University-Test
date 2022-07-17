import React from "react";
import PropTypes from "prop-types";

import formatDate from "../utils/formatDate";
import { todaysDate } from "../utils/todaysDate";
import "../styles/eventsCalendarProfile.scss";

const EventsCalendarProfile = ({ result }) => {
  return (
    <div className="profile">
      {/* if start date is equal to end date then display start date */}
      {formatDate(result.endDate, "dd/MM/yyyy") ===
      formatDate(result.startDate, "dd/MM/yyyy") ? (
        <>
          <span>{formatDate(result.startDate, "dd")}</span>
          <span>{formatDate(result.endDate, "MMM")}</span>
        </>
      ) : //if todays date is equal to start date then display start date
      formatDate(todaysDate(), "dd/MM/yyyy") ===
        formatDate(result.startDate, "dd/MM/yyyy") ? (
        <>
          <span>{formatDate(result.endDate, "dd")}</span>
          <span>{formatDate(result.startDate, "MMM")}</span>
        </>
      ) : //if todays date is equal to end date then display end date
      formatDate(todaysDate(), "dd/MM/yyyy") ===
        formatDate(result.endDate, "dd/MM/yyyy") ? (
        <>
          <span>{formatDate(result.endDate, "dd")}</span>
          <span>{formatDate(result.endDate, "MMM")}</span>
        </>
      ) : //if todays date is less than start date then show the start date
      todaysDate() < formatDate(result.startDate, "dd/MM/yyyy") ? (
        <>
          <span>{formatDate(result.startDate, "dd")}</span>
          <span>{formatDate(result.startDate, "MMM")}</span>
        </>
      ) : //if todays date is greater than the start date and less than the end date then show todays date
      formatDate(todaysDate(), "dd/MM/yyyy") >
          formatDate(result.startDate, "dd/MM/yyyy") &&
        formatDate(todaysDate(), "dd/MM/yyyy") <
          formatDate(result.endDate, "dd/MM/yyyy") ? (
        <>
          <span>{formatDate(todaysDate(), "dd")}</span>
          <span>{formatDate(todaysDate(), "MMM")}</span>
        </>
      ) : (
        // else show start date
        <>
          <span>{formatDate(result.startDate, "dd")}</span>
          <span>{formatDate(result.startDate, "MMM")}</span>
        </>
      )}
    </div>
  );
};

EventsCalendarProfile.propTypes = {
  result: PropTypes.object,
};

export default EventsCalendarProfile;
