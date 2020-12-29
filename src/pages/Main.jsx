import React from 'react'
import styles from './main.scss'
import { MovieHead } from '../components/MovieHead'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'

export const Main = () => {
  return (
    <div className={styles.main_container}>
      <MovieHead />
      <Categories />
      <Footer />
    </div>
  )
}
