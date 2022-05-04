import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link , NavLink} from "react-router-dom";

// props: passes in information
// data: apartment data from initial page
// Extend card (apartment details)
export default function ExtendCardPage(props) {

    let [count, setCount] = useState(0);
    let [Book, setBook] = useState();
    // Handles the bookmark button action 
    const BookmarkFunc = () => {
        setCount(count++);
        if (count % 2 === 1) {
            setCount(count++);
            setBook(<button className = "bookmarked"/>);
            props.bookmark = true;
        } 
    };

    return (
        <div> 
            <NavBar/>
            <main>
                <h2 className="extend-card-name">"Find the right apartment for you"</h2>
                <div className="card shadow-md extend">
                    <img className="card-img-top extend" src={props.data.img} alt="Rainier Court exterior"/>
                    <div className="card-body extend">
                        <h3 className="card-title extend">{props.data.name}</h3> 
                        <button variant="none" className="btn bookmark" onClick={BookmarkFunc}>
                            <span className="bi bi-bookmark-heart-fill"/>
                        </button>
                        <ul className="card-list">
                            <li className="card-text">{props.data.address}</li>
                            <li className="extend-card-text">${props.data.price} per month </li>
                            <li className="extend-card-text">Number of room: {props.data.bedroomNum} </li>
                            <li className="extend-card-text">Neighborhood: {props.data.neighborhood} </li>
                            <li className="extend-card-text">Lease length: {props.data.leaseLength} months</li>
                            <li className="extend-card-text">Walk score: {props.data.walkScore} / 5</li>
                            <li className="extend-card-text">Safety score: {props.data.safetyScore} / 5</li>
                        </ul>
                        <p className="extend-card-text">{props.data.description} </p>
                        <button className="btn btn-light home-link button"><Link to="/">Back To My Apartment Search</Link></button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}