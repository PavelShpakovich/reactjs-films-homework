/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import * as types from '../actions/actionTypes'
import movieInfoReducer from './movieInfoReducer'

describe('movieInfoReducer tests', () => {
  const initialState = {
    film: {},
    error: null,
  }
  it('reducer should return the initial state', () => expect(movieInfoReducer(initialState, {})).toEqual(initialState))
  it('should handle SEARCH_DETAILS_SUCCESS', () => {
    const action = {
      type: types.SEARCH_DETAILS_SUCCESS,
      payload: { film: 'test' },
    }
    expect(movieInfoReducer(initialState, action)).toEqual({ ...initialState, film: action.payload })
  })
  it('should handle SEARCH_DETAILS_ERROR', () => {
    const action = {
      type: types.SEARCH_DETAILS_ERROR,
      payload: 'error',
    }
    expect(movieInfoReducer(initialState, action)).toEqual({ ...initialState, error: action.payload })
  })
})
