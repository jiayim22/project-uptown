import { React } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

// Bookmark page detials
export default function BookmarkPage() {
    // handles the button to remove all tht bookmarked apartments 
    const removeAll = () => {
        <Link to="/">Return to Apartment Search</Link>
    };

    return (
        <div>
            <NavBar/>
            <main className="bookmark">
                <div>
                    <button className="btn btn-danger" onClick={removeAll }>
                        <FaTrash />
                        &nbsp;Remove All
                    </button>
                </div>
                <div>
                    <button className="btn btn-light home-link"><Link to="/">Return to Apartment Search</Link></button>
                </div>
            </main>
            <Footer className="about-footer"/>
        </div>
    )
}