/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create, act } from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Navbar } from '../Navbar'

describe('Navbar', () => {
  const mockStore = configureStore([])
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      genres: { genres: [{ id: 1, name: 'test' }] },
      navbar: { chosenCategory: 'popular', chosenGenre: 'genre' },
    })
    store.dispatch = jest.fn()

    component = create(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    )
  })

  it('Should render and match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Should call dispatch after click', () => {
    act(() => {
      component.root.findAllByProps({ testid: 'test' })[0].props.onClick()
    })
    expect(store.dispatch).toHaveBeenCalledTimes(2)
  })
})
