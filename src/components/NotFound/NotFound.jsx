/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.scss'

export const NotFound = () => (
  <div className={styles.container}>
    <span className={styles.error}>Error 404</span>
    <span className={styles.title}>Page not found</span>
    <Link className={styles.link} to="/" data-testid="not-found-link">
      Go Back
    </Link>
  </div>
)
