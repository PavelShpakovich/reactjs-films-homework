/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
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
  const { chosenCategory, chosenGenre } = useSelector((state) => state.navbar)
  const [items, setItems] = useState([])
  const [page, setPage] = useState(2)

  useEffect(() => {
    setItems([...items, ...movies])
  }, [movies])

  useEffect(() => {
    setItems([])
    setPage(2)
    if (query) {
      dispatch(fetchMoviesData({ search: true, query }))
    } else if (pathname === '/search') {
      history.push('/404')
    } else {
      dispatch(
        fetchMoviesData({
          category: chosenCategory || 'popular',
          genre: chosenGenre.id || '',
        }),
      )
    }
  }, [chosenCategory, chosenGenre, query])

  return (
    <>
      {!items.length && !isLoading && <div className={styles.not_found}>Movies not found</div>}
      <div>
        {isLoading && <Loading>LOADING</Loading>}
        <InfiniteScroll
          className={styles.container}
          dataLength={items.length}
          next={() => {
            if (query) {
              dispatch(fetchMoviesData({ search: true, query, page }))
            } else {
              dispatch(
                fetchMoviesData({
                  category: chosenCategory,
                  page,
                  genre: chosenGenre.id ? chosenGenre.id : '',
                }),
              )
            }
            setPage((state) => state + 1)
          }}
          hasMore
        >
          {items.map((film, i) => (
            <MovieItem
              title={film.title}
              vote={film.vote_average}
              genreIds={film.genre_ids}
              poster={film.poster_path}
              id={film.id}
              overview={film.overview}
              key={i}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  )
}
