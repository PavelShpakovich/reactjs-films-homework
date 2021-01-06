import React from 'react'
import PropTypes from 'prop-types'
import Stars from '../common/Stars'
import Raiting from '../common/Raiting'
import timeFormat from '../../utils/timeFormat'
import styles from './MovieHeadInfo.scss'

const MovieHeadInfo = ({ res }) => (
  <div className={styles.description}>
    <p className={styles.description__title}>{res.original_title}</p>
    <div className={styles.description__genres}>
      {res.genres.map((genre) => (
        <span className={styles.description__genres_name} key={genre.id}>
          {genre.name}
        </span>
      ))}
      <span className={styles.description__genres_name}>|</span>
      <span className={styles.description__genres_name}>{timeFormat(res.runtime)}</span>
    </div>
    <div className={styles.description__raiting}>
      <Stars className={styles.description__raiting_star} res={res} />
      <Raiting className={styles.description__raiting_vote} res={res} />
    </div>
  </div>
)

MovieHeadInfo.propTypes = {
  res: PropTypes.object.isRequired,
}

export default MovieHeadInfo
