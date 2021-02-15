/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */
import { SEARCH_GENRES_SUCCESS, SEARCH_GENRES_ERROR } from '../actions/actionTypes'

const initialState = {
  genres: [],
  error: null,
}

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      }
    case SEARCH_GENRES_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default genresReducer
