/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */
import { SEARCH_MOVIES_PENDING, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from './actionTypes'
import { API_KEY, BASE_URL } from '../../constants/credentials'

const fetchData = () => ({
  type: SEARCH_MOVIES_PENDING,
})

const fetchDataSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
})

const fetchDataError = (error) => ({
  type: SEARCH_MOVIES_ERROR,
  payload: error,
})

const fetchMoviesData = ({ search = false, category = '', genre = '', query = '', page = 1 }) => {
  const genreUrl = genre ? `&with_genres=${genre}` : ''
  const searchUrl = search ? `/search` : ''
  const queryUrl = query ? `&query=${query}` : ''
  const categoryUrl = category ? `/${category}` : ''
  return async (dispatch) => {
    try {
      dispatch(fetchData())
      const responce = await fetch(
        `${BASE_URL}/3${searchUrl}/movie${categoryUrl}?api_key=${API_KEY}&page=${page}${genreUrl}${queryUrl}`,
      )
      const movies = await responce.json()
      dispatch(fetchDataSuccess(movies.results))
    } catch (error) {
      dispatch(fetchDataError(error))
    }
  }
}

export default fetchMoviesData
