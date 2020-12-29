/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { Navbar } from '../Navbar'
import { MovieList } from '../MovieList'
import { Loading } from '../common/Loading'
import responce from './responce.json'
import styles from './Categories.scss'

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <Navbar />
      <MovieList res={responce} />
      <Loading>LOADING</Loading>
    </div>
  )
}
