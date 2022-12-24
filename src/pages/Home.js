import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/tripmatwentytwo">TripmaTwentyTwo</Link>
        </li>
        <li>
          <Link to="/tripmatwo">TripmaTwo</Link>
        </li>
        <li>
          <Link to="/tripma">Tripma</Link>
        </li>
        <li>
          <Link to="/tripmafifteen">TripmaFifteen</Link>
        </li>
        <li>
          <Link to="/tripmafour">TripmaFour</Link>
        </li>
        <li>
          <Link to="/tripmaone">TripmaOne</Link>
        </li>
        <li>
          <Link to="/tripmatwenty">TripmaTwenty</Link>
        </li>
        <li>
          <Link to="/tripmafourteen">TripmaFourteen</Link>
        </li>
        <li>
          <Link to="/tripmafive">TripmaFive</Link>
        </li>
        <li>
          <Link to="/tripmatwelve">TripmaTwelve</Link>
        </li>
        <li>
          <Link to="/tripmatwentyone">TripmaTwentyOne</Link>
        </li>
        <li>
          <Link to="/tripmasix">TripmaSix</Link>
        </li>
        <li>
          <Link to="/tripmasixteen">TripmaSixteen</Link>
        </li>
        <li>
          <Link to="/tripmaseven">TripmaSeven</Link>
        </li>
        <li>
          <Link to="/tripmathirteen">TripmaThirteen</Link>
        </li>
        <li>
          <Link to="/tripmanine">TripmaNine</Link>
        </li>
        <li>
          <Link to="/tripmaten">TripmaTen</Link>
        </li>
        <li>
          <Link to="/tripmanineteen">TripmaNineteen</Link>
        </li>
        <li>
          <Link to="/tripmaeleven">TripmaEleven</Link>
        </li>
        <li>
          <Link to="/tripmaseventeen">TripmaSeventeen</Link>
        </li>
        <li>
          <Link to="/tripmaeighteen">TripmaEighteen</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;