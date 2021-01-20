/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create, act } from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { resetTrailer } from '../../../../redux/actions/fetchTrailer'
import { Modal } from '../Modal'

const mockStore = configureStore([])

describe('Modal', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      trailer: { key: 'key', error: null },
    })
  })
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element)
  })

  it('Should render and match snapshot with error', () => {
    store = mockStore({
      trailer: { key: '', error: 'error' },
    })
    const component = create(
      <Provider store={store}>
        <Router>
          <Modal />
        </Router>
      </Provider>,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Should render and match snapshot with key', () => {
    const component = create(
      <Provider store={store}>
        <Router>
          <Modal />
        </Router>
      </Provider>,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('should dispatch an action on div click', () => {
    store.dispatch = jest.fn()
    const component = create(
      <Provider store={store}>
        <Router>
          <Modal />
        </Router>
      </Provider>,
    )
    act(() => {
      component.root.findAllByType('div')[0].props.onClick()
    })
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(resetTrailer())
  })
})
