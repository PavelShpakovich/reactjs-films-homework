/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import * as types from '../actions/actionTypes'
import trailerReducer from './trailerReducer'

describe('trailerReducer tests', () => {
  const initialState = {
    key: '',
    error: null,
  }
  it('reducer should return the initial state', () => expect(trailerReducer(initialState, {})).toEqual(initialState))
  it('should handle SEARCH_TRAILER_SUCCESS', () => {
    const action = {
      type: types.SEARCH_TRAILER_SUCCESS,
      payload: 'test-key',
    }
    expect(trailerReducer(initialState, action)).toEqual({ ...initialState, key: action.payload })
  })
  it('should handle SEARCH_TRAILER_ERROR', () => {
    const action = {
      type: types.SEARCH_TRAILER_ERROR,
      payload: 'error',
    }
    expect(trailerReducer(initialState, action)).toEqual({ ...initialState, error: action.payload })
  })
  it('should handle RESET_TRAILER', () => {
    const action = {
      type: types.RESET_TRAILER,
    }
    expect(trailerReducer(initialState, action)).toEqual(initialState)
  })
})
