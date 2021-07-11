import React from 'react';
import Header from './components/Header';
import './styles/styles.css'
import AllMovies from './routes/AllMovies';
function Main() {
  return (
    <div className='mainContainer'>
      <div>
      <Header/>
      </div>
      <div className='searchContainer'>
      <AllMovies/>
      </div>
    </div>
  );
}

export default Main;
