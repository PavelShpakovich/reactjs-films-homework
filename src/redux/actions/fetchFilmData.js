/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { SEARCH_DETAILS_SUCCESS, SEARCH_DETAILS_ERROR } from './actionTypes'
import { API_KEY, BASE_URL } from '../../constants/credentials'

export const fetchDataSuccess = (payload) => ({
  type: SEARCH_DETAILS_SUCCESS,
  payload,
})

export const fetchDataError = (error) => ({
  type: SEARCH_DETAILS_ERROR,
  payload: error,
})

export const fetchFilmData = (id) => async (dispatch) => {
  try {
    const responce = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`)
    const film = await responce.json()
    dispatch(fetchDataSuccess(film))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}
