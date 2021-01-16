import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import styles from './Button.scss'

export const Button = ({ type = 'primary', onClick, children }) => {
  const classList = className(styles.button, {
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary',
  })
  return (
    <button className={classList} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
