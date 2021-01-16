/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../common/Search/Search'
import styles from './Header.scss'

export const Header = () => (
  <div className={styles.header}>
    <Link className={styles.header__title} to="/">
      FILMS
    </Link>
    <Search />
  </div>
)
