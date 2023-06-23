import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import React from 'react'

import "./Moviesgrid.css"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className='query-text'>{query}</span></h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
      {topMovies.length > 0 && 
        topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
aa
    </div>
  )
}

export default Search