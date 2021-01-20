/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './fetchGenres'
import * as types from './actionTypes'
import { genres } from '../../MockedData/mockedGenres'

const mockStore = configureMockStore([thunk])

describe('async fetchGenres actions', () => {
  it('create SEARCH_GENRES_SUCCESS when fetching genres has been done', () => {
    const expectedActions = [{ type: types.SEARCH_GENRES_SUCCESS, payload: genres }]
    const store = mockStore({})

    return store.dispatch(actions.fetchGenresData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('create SEARCH_GENRES_ERROR when fetching genres has been fail', () => {
    expect(actions.fetchDataError('error')).toEqual({
      type: types.SEARCH_GENRES_ERROR,
      payload: 'error',
    })
  })
})
