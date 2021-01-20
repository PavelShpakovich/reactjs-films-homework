/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import * as types from '../actions/actionTypes'
import genresReducer from './genresReducer'
import { genres } from '../../MockedData/mockedGenres'

describe('genresReducer tests', () => {
  const initialState = {
    genres: [],
    error: null,
  }
  it('reducer should return the initial state', () => expect(genresReducer(initialState, {})).toEqual(initialState))
  it('should handle SEARCH_GENRES_SUCCESS', () => {
    const action = {
      type: types.SEARCH_GENRES_SUCCESS,
      payload: genres,
    }
    expect(genresReducer(initialState, action)).toEqual({ ...initialState, genres: action.payload })
  })
  it('should handle SEARCH_GENRES_ERROR', () => {
    const action = {
      type: types.SEARCH_GENRES_ERROR,
      payload: 'error',
    }
    expect(genresReducer(initialState, action)).toEqual({ ...initialState, error: action.payload })
  })
})
