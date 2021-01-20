/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import * as actions from './changeNavbar'
import * as types from './actionTypes'

describe('changeNavbar actions', () => {
  it('Should be created changeCategory', () => {
    expect(actions.changeCategory('upcoming')).toEqual({
      type: types.CHANGE_CATEGORY,
      payload: 'upcoming',
    })
  })
  it('Should be created changeCategory', () => {
    expect(actions.changeGenre({ name: 'Genre', id: null })).toEqual({
      type: types.CHANGE_GENRE,
      payload: { name: 'Genre', id: null },
    })
  })
})
