/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import className from 'classnames'
import { getGenres } from '../../../utils/getGenres'
import { Raiting } from '../Raiting/Raiting'
import styles from './Info.scss'

export const Info = ({ genreIds, title, vote, onClick, type }) => {
  const { genres } = useSelector((state) => state.genres)
  return (
    <div
      onClick={onClick}
      className={className({ [styles.info]: type === 'info', [styles.info_modal]: type === 'info-modal' })}
    >
      <div
        className={className({
          [styles.info__about]: type === 'info',
          [styles.info_modal__about]: type === 'info-modal',
        })}
      >
        <div
          className={className({
            [styles.info__about_title]: type === 'info',
            [styles.info_modal__about_title]: type === 'info-modal',
          })}
        >
          {title}
        </div>
        <Raiting vote={vote} />
      </div>
      <div
        className={className({
          [styles.info__genres]: type === 'info',
          [styles.info_modal__genres]: type === 'info-modal',
        })}
      >
        {getGenres(genreIds, genres)}
      </div>
    </div>
  )
}

Info.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
}
