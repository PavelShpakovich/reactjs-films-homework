/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import * as types from '../actions/actionTypes'
import navbarReducer from './navbarReducer'

describe('navbarReducer tests', () => {
  const initialState = {
    chosenCategory: 'popular',
    chosenGenre: { name: 'Genre', id: null },
  }
  it('reducer should return the initial state', () => expect(navbarReducer(initialState, {})).toEqual(initialState))
  it('should handle CHANGE_CATEGORY', () => {
    const action = {
      type: types.CHANGE_CATEGORY,
      payload: 'upcoming',
    }
    expect(navbarReducer(initialState, action)).toEqual({ ...initialState, chosenCategory: action.payload })
  })
  it('should handle CHANGE_GENRE', () => {
    const action = {
      type: types.CHANGE_GENRE,
      payload: { name: 'comedy', id: 2 },
    }
    expect(navbarReducer(initialState, action)).toEqual({ ...initialState, chosenGenre: action.payload })
  })
})
