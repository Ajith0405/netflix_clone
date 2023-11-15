import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from "../Utils/axios";
import requests from '../Utils/requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        
        function setMovieInterval(){
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])

            
            
            return request
        }
        fetchData()
    }
        setInterval(setMovieInterval,6000)
        
    },[])
    

    console.log(movie);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }

    return (
        <header className='banner' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`, backgroundSize: 'cover', backgroundPosition: 'center center' }} >
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='banner_fadeBottom'/>

        </header>
    )
}

export default Banner