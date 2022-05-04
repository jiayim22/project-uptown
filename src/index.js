import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import App from './components/App';
import AboutPage from './components/About';
import data from './data/apartments.json';
import ExtendCardPage from './components/ExtendCard';
import BookmarkPage from './components/Bookmark';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs7D_Wr9dVIGlO9VW2NJxzCE4Rh0oSFb0",
  authDomain: "uptown-edd64.firebaseapp.com",
  projectId: "uptown-edd64",
  storageBucket: "uptown-edd64.appspot.com",
  messagingSenderId: "1092861784818",
  appId: "1:1092861784818:web:1da71e381e395f1954566b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 'click to learn more' Routing 
const routeComponent = data.map((apt) => {
  return (
    <Route path={apt.url} element={<ExtendCardPage data={apt}/>} key={apt.url}/>
  )
});

// Handles the routing of pages 
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="about" element={<AboutPage/>}></Route>
      <Route path="/" element={<App data={data}/>}></Route>
      {routeComponent}
      <Route path="bookmark" element={<BookmarkPage/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);