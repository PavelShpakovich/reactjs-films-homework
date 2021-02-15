/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames'
import { changeGenre } from '../../../../redux/actions/changeNavbar'
import styles from './Select.scss'

export const Select = ({ genres }) => {
  const { chosenGenre } = useSelector((state) => state.navbar)
  const dispatch = useDispatch()
  const [isSelect, setIsSelect] = useState(false)
  const arrowClass = className(styles.select__button_arrow, {
    [styles.rotateArrow]: isSelect,
  })
  return (
    <div className={styles.select}>
      <div onClick={() => setIsSelect((state) => !state)} className={styles.select__button} testid="1">
        <span className={styles.select__button_text}>{chosenGenre.name}</span>
        <FontAwesomeIcon className={arrowClass} icon={faChevronCircleDown} />
      </div>
      {isSelect && (
        <div className={styles.select__list}>
          {genres.map((genre) => {
            const classStyle = className(styles.select__item, {
              [styles.select__item_active]: genre.name === chosenGenre.name,
            })
            return (
              <div
                onClick={() => {
                  setIsSelect((state) => !state)
                  dispatch(changeGenre(genre))
                }}
                className={classStyle}
                key={genre.id}
                testid="2"
              >
                {genre.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

Select.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
}
