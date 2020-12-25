/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import getGenres from '../../../utils/getGenres'
import { Raiting } from '../Raiting'

export const Info = ({ film, className }) => {
  return (
    <div className={className.info}>
      <div className={className.info__about}>
        <div className={className.info__about_title}>{film.title}</div>
        <Raiting className={className.info__about_vote} res={film} />
      </div>
      <div className={className.info__genres}>
        <span>{getGenres(film.genre_ids)}</span>
      </div>
    </div>
  )
}

Info.propTypes = {
  film: PropTypes.object.isRequired,
  className: PropTypes.object.isRequired,
}