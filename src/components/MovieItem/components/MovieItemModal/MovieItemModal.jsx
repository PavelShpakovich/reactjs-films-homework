/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { fetchTrailerData } from '../../../../redux/actions/fetchTrailer'
import { Info } from '../../../common/Info/Info'
import { Button } from '../../../common/Button/Button'
import styles from './MovieItemModal.scss'

export const MovieItemModal = ({ genreIds, id, overview, title, vote, onModal }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.modal}>
      <div className={styles.modal__window}>
        <FontAwesomeIcon onClick={onModal} className={styles.modal__cross} icon={faTimesCircle} />
        <Info type="info-modal" genreIds={genreIds} title={title} vote={vote} />
        <div className={styles.modal__description}>{overview}</div>
        <div className={styles.modal__button}>
          <Button
            onClick={() => {
              dispatch(fetchTrailerData(id))
              onModal()
            }}
            type="primary"
          >
            Watch Now
          </Button>
        </div>
      </div>
    </div>
  )
}

MovieItemModal.propTypes = {
  onModal: PropTypes.func.isRequired,
  vote: PropTypes.number.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
