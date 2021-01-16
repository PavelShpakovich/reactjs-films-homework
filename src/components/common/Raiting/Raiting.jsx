/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Raiting.scss'

export const Raiting = ({ withStars = false, vote }) => {
  const getStars = () => {
    const halfVote = Math.round(vote) / 2
    const averageVote = Math.round(vote / 2)
    return Array(5)
      .fill()
      .map((star, index) => {
        const key = index
        return halfVote === index + 0.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} key={key} />
        ) : averageVote < index + 1 ? (
          <FontAwesomeIcon icon={regStar} key={key} />
        ) : (
          <FontAwesomeIcon icon={solidStar} key={key} />
        )
      })
  }
  return (
    <>
      {withStars && <div className={styles.star}>{getStars()}</div>}
      <div className={styles.vote}>{vote}</div>
    </>
  )
}

Raiting.propTypes = {
  vote: PropTypes.number.isRequired,
  withStars: PropTypes.bool,
}
