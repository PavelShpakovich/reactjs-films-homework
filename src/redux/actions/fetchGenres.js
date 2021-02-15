/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */
import { SEARCH_GENRES_SUCCESS, SEARCH_GENRES_ERROR } from './actionTypes'
import { API_KEY, BASE_URL } from '../../constants/credentials'

export const fetchDataSuccess = (payload) => ({
  type: SEARCH_GENRES_SUCCESS,
  payload,
})

export const fetchDataError = (error) => ({
  type: SEARCH_GENRES_ERROR,
  payload: error,
})

export const fetchGenresData = () => async (dispatch) => {
  try {
    const responce = await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`)
    const genresList = await responce.json()
    dispatch(fetchDataSuccess(genresList.genres))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}
