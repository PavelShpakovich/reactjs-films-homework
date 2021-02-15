/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loading.scss'

export const Loading = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.loading}>
      <div className={styles.lds_ellipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <span className={styles.text}>{children}</span>
    </div>
  </div>
)

Loading.propTypes = {
  children: PropTypes.node.isRequired,
}
