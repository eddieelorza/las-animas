import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from '../components/welcome.js';
import Card from '../components/card.js';
import News from '../components/news.js';
import Advance from '../components/advance.js';
import NavBar from '../components/navbar.js';


function Home() {
    return (
       <>
             <NavBar/>,
              <Welcome/>,
              <Advance/>,
              <Card />,
              <News/>
       </>

    );
}

export default Home;
