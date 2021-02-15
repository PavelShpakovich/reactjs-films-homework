/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create, act } from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../../../../../redux/store'
import { MovieItemModal } from '../MovieItemModal'

describe('MovieItemModal', () => {
  store.dispatch = jest.fn()

  const component = create(
    <Provider store={store}>
      <MovieItemModal genreIds={[28, 12, 16]} id={1} overview="some text" title="title" vote={5} onModal={() => {}} />
    </Provider>,
  )

  it('Should render and match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('should dispatch an action on Button click', () => {
    act(() => {
      component.root.findByType('button').props.onClick()
    })
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})
