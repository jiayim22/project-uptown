import { React , useState } from 'react'; //import React library
import { NavLink } from "react-router-dom";

// Creates the navbar with it's link to other pages 'home' ' about 'bookmark' 
export default function NavBar() {
    
    const [burgerOpen, setBurgerOpen] = useState(false);

    // Handles the toggle action in the Nav bar 
    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">UPTOWN</a>
                    
                    <button className="navbar-toggler float-right" onClick={toggleBurger} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-list"></span>
                    </button> 

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bookmark">Bookmark</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}