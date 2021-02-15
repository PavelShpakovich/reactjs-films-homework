/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import * as types from '../actions/actionTypes'
import moviesReducer from './moviesReducer'

describe('moviesReducer tests', () => {
  const initialState = {
    movies: [],
    error: null,
    isLoading: false,
  }
  it('reducer should return the initial state', () => expect(moviesReducer(initialState, {})).toEqual(initialState))
  it('should handle SEARCH_MOVIES_PENDING', () => {
    const action = {
      type: types.SEARCH_MOVIES_PENDING,
      payload: true,
    }
    expect(moviesReducer(initialState, action)).toEqual({ ...initialState, isLoading: action.payload })
  })
  it('should handle SEARCH_MOVIES_SUCCESS', () => {
    const action = {
      type: types.SEARCH_MOVIES_SUCCESS,
      payload: [{ film: 'test' }],
    }
    expect(moviesReducer(initialState, action)).toEqual({ ...initialState, movies: action.payload, isLoading: false })
  })
  it('should handle SEARCH_MOVIES_ERROR', () => {
    const action = {
      type: types.SEARCH_MOVIES_ERROR,
      payload: 'error',
    }
    expect(moviesReducer(initialState, action)).toEqual({ ...initialState, error: action.payload, isLoading: false })
  })
})
