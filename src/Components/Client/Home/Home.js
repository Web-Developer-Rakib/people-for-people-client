import React from "react";
import EventCard from "../EventCard/EventCard";
import Search from "../Search/Search";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Search></Search>
      <div className="card-container">
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
    </div>
  );
};

export default Home;
