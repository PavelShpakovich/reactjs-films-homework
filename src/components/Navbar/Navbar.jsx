/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import className from 'classnames'
import { changeCategory } from '../../redux/actions/changeNavbar'
import { navBtns } from '../../constants/data'
import { Select } from './components/Select/Select'
import fetchGenresData from '../../redux/actions/fetchGenres'
import styles from './Navbar.scss'

export const Navbar = () => {
  const history = useHistory()
  const { genres } = useSelector((state) => state.genres)
  const { chosenCategory } = useSelector((state) => state.navbar)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGenresData())
  }, [])
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__buttons}>
        {Object.entries(navBtns).map(([name, path]) => {
          const classStyle = className(styles.navbar__buttons_button, {
            [styles.active_button]: chosenCategory === path,
          })
          return (
            <div
              className={classStyle}
              onClick={() => {
                history.push('/')
                dispatch(changeCategory(path))
              }}
              key={path}
            >
              {name}
            </div>
          )
        })}
      </div>
      <Select genres={genres} />
    </div>
  )
}
