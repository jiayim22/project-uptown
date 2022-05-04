import { NavLink } from "react-router-dom";
import React from 'react'; //import React library

//initial card view
// props: passes in information
// data: apartment data
export function InitialCardView(props) {

    // Creates and exports the lists of apartments on the 'home' page 
    const cardComponent = props.data.map((card) => {
        return (
            <div className="col" key={card.name}>
                <div className="card shadow-lg"> 
                    <img className="card-img-top" src={card.img}
                        alt="Apartment Building with many windows"/>
                    <div className="card-body">
                        <h4 className="card-title">{card.name}</h4>
                        <p className="card-text">${card.price}/month</p>
                        <p className="card-text">Safety Score: {card.safetyScore}/5</p>
                        <button className="btn btn-light home-link"><NavLink to={card.url}>Click for more details</NavLink></button>  
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {cardComponent}
            </div>
        </section>
    )
}