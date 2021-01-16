/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { MovieItem } from '../MovieItem/MovieItem'
import { Loading } from '../common/Loading/Loading'
import fetchMoviesData from '../../redux/actions/fetchMovies'
import styles from './MovieList.scss'

export const MovieList = () => {
  const urlParams = new URLSearchParams(useLocation().search)
  const query = urlParams.get('q')
  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const { movies, isLoading } = useSelector((state) => state.movies)
  useEffect(() => {
    if (query) {
      dispatch(fetchMoviesData({ search: `/search`, query: `&query=${query}` }))
    } else if (pathname === '/search') {
      history.push('/')
      dispatch(fetchMoviesData({ category: `/popular` }))
    } else {
      dispatch(fetchMoviesData({ category: `/popular` }))
    }
  }, [query])
  return (
    <>
      {!movies.length && !isLoading && <div className={styles.not_found}>Movies not found</div>}
      <div className={styles.container}>
        {isLoading && <Loading>LOADING</Loading>}
        {movies.map((film) => (
          <MovieItem
            title={film.title}
            vote={film.vote_average}
            genreIds={film.genre_ids}
            poster={film.poster_path}
            id={film.id}
            overview={film.overview}
            key={film.id}
          />
        ))}
      </div>
    </>
  )
}
