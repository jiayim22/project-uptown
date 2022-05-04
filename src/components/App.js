import React, { useState } from 'react'; //import React library
import NavBar from './NavBar';
import Footer from './Footer';
import _ from 'lodash';
import { Filter } from './Function';
import { InitialCardView } from './InitialCardView';
//import ExtendCardPage from './ExtendCard'; 

// props: passes in information
// data: apartment data
export default function App(props) {
  // displayed data based on current sort and filter option selected and state setting displayed data
  const [displayedData, setDisplayedData] = useState(props.data)

  // function that takes in three parameters to sort and filter data 
  // sortOption: selected sort option
  // bedroomOption: selected number of bedrooms
  // neighborhoodOption: selected neighborhood
  const applySort = (sortOption, bedroomOption, neighborhoodOption) => {
    let aptData = props.data;
    if (bedroomOption.length !== 0) {
      aptData = aptData.filter(apt => {return bedroomOption.includes(apt.bedroomNum.toString())});
      setDisplayedData(aptData); 
    }
    if (neighborhoodOption.length !== 0) {
      aptData = aptData.filter(apt => {return neighborhoodOption.includes(apt.neighborhood)});
      setDisplayedData(aptData);
    }
    if (sortOption !== '') {
        if (sortOption === 'price-l-h') {
          aptData = _.sortBy(aptData, 'price');
          setDisplayedData(aptData);
        } else if (sortOption === 'price-h-l') {
          aptData = _.reverse(_.sortBy(aptData, 'price'));
          setDisplayedData(aptData);
        } else if (sortOption === 'safety-l-h') {
          aptData = _.sortBy(aptData, 'safetyScore');
          setDisplayedData(aptData);
        } else {
          aptData = _.reverse(_.sortBy(aptData, 'safetyScore'));
          setDisplayedData(aptData);
        } 
    } else {
      setDisplayedData(_.sortBy(aptData, 'name'));
    }
  }

  return (
    <div>
      <NavBar/>
      <main>
          <Filter className="function" data={displayedData} applySortCallback={applySort}/>
          
          <InitialCardView data={displayedData}/>
      </main>

      <Footer/>
    </div>
  )
}