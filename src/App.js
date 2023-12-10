import React from "react";
import './App.css';
import SearchIcon from  './search.svg'
import { useEffect,useState } from "react";
import MovieCard from "./MovieCard";
import  ReactDOM  from "react-dom";
//c638eef6
//SSS
const API_URL='http://www.omdbapi.com?apikey=c638eef6'

const  movie1={
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
}

const App=()=>{
    const [searchTerm,setSearchTerm]=useState("");
    const [movies,setMovies]=useState([])
    const searchMovies=async(title)=>{
        const response =await fetch(`${API_URL}&s=${title}`)
        const data=await response.json();
        setMovies(data.Search)

       
    }
    useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    return (
        <div className="app"> 
            <h1>Movie Land</h1>

            <div className="search">
            <input placeholder="search foor Movie" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>    
            <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}/>
            </div>  
            {
               movies.length > 0 ? (
                <div className="container">
                  {movies.map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
              ) 
            }
            

        </div>
    )
}


export default App;