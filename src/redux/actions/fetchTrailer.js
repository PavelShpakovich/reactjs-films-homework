/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { SEARCH_TRAILER_SUCCESS, SEARCH_TRAILER_ERROR, RESET_TRAILER } from './actionTypes'
import { API_KEY, BASE_URL } from '../../constants/credentials'

const fetchDataSuccess = (payload) => ({
  type: SEARCH_TRAILER_SUCCESS,
  payload,
})

const fetchDataError = (error) => ({
  type: SEARCH_TRAILER_ERROR,
  payload: error,
})

export const resetTrailer = () => ({
  type: RESET_TRAILER,
})

export const fetchTrailerData = (id) => async (dispatch) => {
  try {
    const responce = await fetch(`${BASE_URL}/3/movie/${id}/videos?api_key=${API_KEY}`)
    const trailer = await responce.json()
    dispatch(fetchDataSuccess(trailer.results[0].key))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}
