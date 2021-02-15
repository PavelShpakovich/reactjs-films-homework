/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieHeadInfo } from '../MovieHeadInfo/MovieHeadInfo'
import { Button } from '../common/Button/Button'
import { fetchTrailerData } from '../../redux/actions/fetchTrailer'
import { fetchFilmData } from '../../redux/actions/fetchFilmData'
import styles from './MovieHead.scss'

export const MovieHead = () => {
  const dispatch = useDispatch()
  const { film } = useSelector((state) => state.info)
  const [isInfo, setIsInfo] = useState(false)
  const onViewInfo = () => {
    setIsInfo((state) => !state)
  }
  const { id } = useParams()
  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    [film],
  )
  useEffect(() => dispatch(fetchFilmData(id)), [id])

  return (
    !!Object.keys(film).length && (
      <div
        className={styles.container}
        style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${film.backdrop_path}')` }}
      >
        <div className={styles.footer}>
          <MovieHeadInfo
            title={film.original_title}
            genres={film.genres}
            runtime={film.runtime}
            vote={film.vote_average}
            film={film}
          />
          <div className={styles.footer__controls}>
            {isInfo && <p>{film.overview}</p>}
            <Button type="primary" onClick={() => dispatch(fetchTrailerData(film.id))}>
              Watch Now
            </Button>
            <Button type="info" onClick={onViewInfo}>
              View Info
            </Button>
          </div>
        </div>
      </div>
    )
  )
}
