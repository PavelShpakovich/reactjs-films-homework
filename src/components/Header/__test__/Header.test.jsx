/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create, act } from 'react-test-renderer'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import { changeCategory } from '../../../redux/actions/changeNavbar'
import { Header } from '../Header'

describe('Header', () => {
  store.dispatch = jest.fn()

  const component = create(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>,
  )

  it('Should render and match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('should dispatch an action on link click', () => {
    act(() => {
      component.root.findByType(Link).props.onClick()
    })

    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(changeCategory('popular'))
  })
})
