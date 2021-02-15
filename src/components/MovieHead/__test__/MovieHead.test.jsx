/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { create, act } from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Button } from '../../common/Button/Button'
import { MovieHead } from '../MovieHead'

describe('MovieHead', () => {
  const mockStore = configureStore([])
  let store
  beforeEach(() => {
    store = mockStore({
      info: {
        film: {
          original_title: 'title',
          genres: [{ id: 1, name: 'test' }],
          runtime: 100,
          vote_average: 5,
          overview: 'test',
        },
      },
    })
    store.dispatch = jest.fn()
    window.scrollTo = jest.fn()
  })

  it('Should render and match snapshot, dispatch data', () => {
    const setIsInfo = jest.fn()
    const handleClick = jest.spyOn(React, 'useState')
    handleClick.mockImplementation((isInfo) => [isInfo, setIsInfo])
    const component = create(
      <MemoryRouter initialEntries={['details/1']}>
        <Provider store={store}>
          <MovieHead />
        </Provider>
      </MemoryRouter>,
    )
    expect(component.toJSON()).toMatchSnapshot()
    act(() => {
      component.root.findAllByType(Button)[0].props.onClick()
    })
    expect(store.dispatch).toHaveBeenCalledTimes(2)
    expect(window.scrollTo).toBeCalledWith({ behavior: 'smooth', top: 0 })
    act(() => {
      component.root.findAllByType(Button)[1].props.onClick()
    })
    expect(setIsInfo).toBeTruthy()
  })
})
