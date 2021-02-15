import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import { changeCategory, changeGenre } from '../../../redux/actions/changeNavbar'
import styles from './Search.scss'

export const Search = () => {
  const history = useHistory()
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!value) return
    dispatch(changeCategory())
    dispatch(changeGenre({ name: 'Genre' }))
    history.push(`/search?q=${value}`)
  }
  const handleChange = (event) => {
    setValue(event.target.value.trim())
  }
  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} className={styles.search__input} type="text" placeholder="Search" />
      </form>
      <FontAwesomeIcon onClick={handleSubmit} className={styles.search__icon} icon={faSearch} />
    </div>
  )
}
