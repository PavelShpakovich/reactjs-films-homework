/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import styles from './Footer.scss'

export const Footer = () => (
  <div className={styles.container}>
    <span className={styles.title}>FILMS</span>
    <span className={styles.copyright}>Copyright © 2020 FILMS.</span>
    <span className={styles.copyright}>PAVEL DUBINA</span>
  </div>
)
