import React,{ useEffect, useState } from 'react';
import './App.css';
import MovieBox from './comps/MovieBox';
import MovieInfo from './comps/MovieInfo';
import NavBar from './comps/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';



function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState(true);

  useEffect(()=>{getApi();},[]);
  
  const getApi = async(_show="girls") => {
    try {
      const url = `https://api.tvmaze.com/search/shows?q=${_show}`;
      let resp = await axios.get(url);
      let data = resp.data;
      const sortedMovie = data.sort((a,b) =>
      {
        const dateA = new Date(a.show.premiered);
        const dateB = new Date(b.show.premiered);
        return dateB - dateA;
      });
      console.log(sortedMovie);
      setMovies(sortedMovie);
    } 
    catch (error) {
      console.log("error in the function getApi(): ",error);
    }
  };


  return (
    <Router>
        <div className='container-fluid'>
          <NavBar getApi={getApi} searchInput={searchInput}/>
        </div>

        <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
                <Routes>
                  <Route path='/' 
                  element={
                    movies.map((movie) => (<MovieBox key={movie.show.id} movie={movie.show}/>))}/>
                </Routes>
              </div>
            </div>
          </div> 

        <div className='container-fluid'>
          <div className='container'>
            <Routes>
              <Route path='/Info/:id' element={<MovieInfo movies={movies} setSearchInput={setSearchInput}/>}/>
            </Routes>
          </div>
        </div>
    </Router>
  
  );
}

export default App;
