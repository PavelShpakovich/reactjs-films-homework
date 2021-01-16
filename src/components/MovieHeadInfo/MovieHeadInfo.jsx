import React from 'react'
import PropTypes from 'prop-types'
import { Raiting } from '../common/Raiting/Raiting'
import { getTimeFormat } from '../../utils/getTimeFormat'
import styles from './MovieHeadInfo.scss'

export const MovieHeadInfo = ({ vote, runtime, genres, title }) => (
  <div className={styles.description}>
    <p className={styles.description__title}>{title}</p>
    <div className={styles.description__genres}>
      {genres.map((genre) => (
        <span className={styles.description__genres_name} key={genre.id}>
          {genre.name}
        </span>
      ))}
      <span className={styles.description__genres_name}>|</span>
      <span className={styles.description__genres_name}>{getTimeFormat(runtime)}</span>
    </div>
    <div className={styles.description__raiting}>
      <Raiting className={styles.description__raiting_vote} withStars vote={vote} />
    </div>
  </div>
)

MovieHeadInfo.propTypes = {
  vote: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
}
