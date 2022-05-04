import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

// About page: explaning the purpose of the website
export default function AboutPage() {
    return (
        <div>
            <NavBar/>
            <main className="about">
                <h2>About Us</h2>
                <p>Uptown is a housing hunting tool made in mind with the safety of our customers. Uptown includes all features its competitors have, like pricing, availability of the apartment or house, and also a safety score for the area. </p>
                <p>Uptown also has a customized notes section for our customers to enter and keep track of their own pros and cons list for the apartment or house. It is truly the one tool needed for anyone looking for a successful renting experience. </p>
                <button className="btn btn-light home-link"><Link to="/">Start My Apartment Search</Link></button>
            </main>
            <Footer className="about-footer"/>
        </div>
    )
}