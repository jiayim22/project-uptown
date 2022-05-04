import React, { useState } from 'react'; //import React library
import _ from 'lodash';
import { Dropdown } from 'react-bootstrap';
import sortOptions from '../data/sortOptions.json';

// props: passes in information
// data: apartment data
// applySortCallback: sort and filter option callback function
export function Filter(props) {
    //state, setState
    const [sortSelected, setSortSelected] = useState('');
    const [bedroomNumSelected, setBedroomNumSelected] = useState([]);
    const [neighborhoodSelected, setNeighborhoodSelected] = useState([]);

    //gets filter option values
    const bedroomNum = [1, 2, 3, 4];
    const neighborhood = ['Montlake', 'Ravenna', 'University District'];

    //handles sort value
    const handleSort = (event) => {
        setSortSelected(event.target.value);
    }

    //handles bedroom number selection
    const handleBedroom = (event) => {
        if (bedroomNumSelected.includes(event.target.value)) {
            setBedroomNumSelected(bedroomNumSelected.filter(num => num !== event.target.value));
        } else {
            setBedroomNumSelected([...bedroomNumSelected, event.target.value]);
        }
    }

    //handles neighborhood selection
    const handleNeighbor = (event) => {
        if (neighborhoodSelected.includes(event.target.value)) {
            setNeighborhoodSelected(neighborhoodSelected.filter(name => name !== event.target.value));
        } else {
            setNeighborhoodSelected([...neighborhoodSelected, event.target.value]);
        }
    }

    // handles when filter or sort button gets clicked
    const onClick = (event) => {
        //button should not refresh the page
        event.preventDefault();
        props.applySortCallback(sortSelected, bedroomNumSelected, neighborhoodSelected);
    }

    //constructs bedroom number filter
    const bedroomComponent = bedroomNum.map((num) => {
        return (
            <div className="form-check form-switch" key={num}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={num} onChange={handleBedroom}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{num}-Bedroom</label>
            </div>
        )
    })
    
    //constructs neighborhood filter
    const neighborhoodComponent = neighborhood.map((neighborhoodName) => {
        return (
            <div className="form-check form-switch" key={neighborhoodName}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={neighborhoodName} onChange={handleNeighbor}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{neighborhoodName}</label>
            </div>
        )
    })
    
    //constructs sorts
    const sortComponent = sortOptions.map((option) => {

        return (
            <Dropdown.Item href="/" onChange={handleSort} key={option.label}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="Radios" id={"Radios"+option.num} value={option.label}/>
                    <label className="form-check-label" htmlFor={"Radios"+option.num}>{option.name}</label>
                </div>
            </Dropdown.Item>
        )
    })

    return (
        <section className="filters-sort">
                <div className="btn-group">
                    <Dropdown autoClose="outside">
                        <Dropdown.Toggle className="dropdown-option" variant="none" id="dropdown-autoclose-outside">
                        <span className="bi bi-filter-square"></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <button id="submitButton" type="submit" className="btn btn-light" onClick={onClick}>Apply Filter</button>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/">
                                <div className="card filter-sort-option">
                                    <h2 className="card-title">Number of Bedrooms</h2>
                                    <div className="card-body">
                                        {bedroomComponent}
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                <div className="card filter-sort-option">
                                    <h2 className="card-title">Neighborhoods</h2>
                                    <div className="card-body">
                                        {neighborhoodComponent}
                                    </div>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="btn-group">
                    <Dropdown autoClose="outside">
                        <Dropdown.Toggle className="dropdown-option" variant="none" id="dropdown-autoclose-outside">
                        <span className="bi bi-sort-down"></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <button id="submitButton" type="submit" className="btn btn-light" onClick={onClick}>Apply Sort</button>
                            <Dropdown.Divider />
                            {sortComponent}
                        </Dropdown.Menu>  
                    </Dropdown>
                </div>
        </section>
    )
}