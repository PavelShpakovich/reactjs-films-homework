/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import { resetTrailer } from '../../../redux/actions/fetchTrailer'
import styles from './Modal.scss'

export const Modal = () => {
  const dispatch = useDispatch()
  const { key } = useSelector((state) => state.trailer)
  return (
    key &&
    ReactDOM.createPortal(
      <div onClick={() => dispatch(resetTrailer())} className={styles.modal}>
        {(key.length && (
          <iframe
            className={styles.frame}
            title="youtube"
            src={`https://www.youtube.com/embed/${key}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )) || <div className={styles.not_found}>Trailer not found</div>}
      </div>,
      document.querySelector('#modal-root'),
    )
  )
}
