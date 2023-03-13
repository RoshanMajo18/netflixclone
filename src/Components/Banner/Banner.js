import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY } from '../../constants/constants'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function Banner() {
    const[movie,setMovie]= useState()
    
    
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log(response.data.results)
            var x=Math.floor(Math.random()*20)
            setMovie(response.data.results[x])
            
        }) 
    }, [])
    
  return (
    <div 
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.name || movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button2'>Play</button>
                <button className='button2'>My List</button>
                <h1 className='description'>{movie?movie.overview.slice(0,387):""}</h1>
            </div>
            </div>    
            <div className="fade"></div>
        
    </div>
  )
}

export default Banner