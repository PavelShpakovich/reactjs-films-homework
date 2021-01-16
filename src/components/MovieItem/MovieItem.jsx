import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../common/Button/Button'
import { Info } from '../common/Info/Info'
import { MovieItemModal } from './components/MovieItemModal/MovieItemModal'
import { fetchTrailerData } from '../../redux/actions/fetchTrailer'
import styles from './MovieItem.scss'

export const MovieItem = ({ overview, vote, title, genreIds, poster, id }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isModal, setIsModal] = useState(false)
  const onModal = (setState) => setState((state) => !state)
  return (
    <div className={styles.container}>
      {isModal && (
        <MovieItemModal
          onModal={() => onModal(setIsModal)}
          overview={overview}
          vote={vote}
          genreIds={genreIds}
          id={id}
          title={title}
        />
      )}
      <div className={styles.poster} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})` }}>
        <div className={styles.poster__hover}>
          <FontAwesomeIcon
            onClick={() => dispatch(fetchTrailerData(id))}
            className={styles.poster__hover_play}
            icon={faPlayCircle}
          />
          <span className={styles.poster__hover_text}>Watch Now</span>
          <Button onClick={() => onModal(setIsModal)} type="secondary">
            View Info
          </Button>
        </div>
      </div>
      <Info onClick={() => history.push(`/details/${id}`)} type="info" genreIds={genreIds} title={title} vote={vote} />
    </div>
  )
}

MovieItem.propTypes = {
  vote: PropTypes.number.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
