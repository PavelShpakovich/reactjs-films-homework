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
import { Select } from '../Select'

describe('Select', () => {
  const mockStore = configureStore([])
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      navbar: { chosenGenre: 'genre' },
    })
    store.dispatch = jest.fn()

    component = create(
      <MemoryRouter>
        <Provider store={store}>
          <Select genres={[{ id: 1, name: 'test' }]} />
        </Provider>
      </MemoryRouter>,
    )
  })

  it('Should render and match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('should change state and call dispatch after click', () => {
    const setIsSelect = jest.fn()
    const handleClick = jest.spyOn(React, 'useState')
    handleClick.mockImplementation((isSelect) => [isSelect, setIsSelect])
    act(() => {
      component.root.findByProps({ testid: '1' }).props.onClick()
      expect(setIsSelect).toBeTruthy()
    })
    act(() => {
      component.root.findByProps({ testid: '2' }).props.onClick()
      expect(setIsSelect).toBeTruthy()
      expect(store.dispatch).toHaveBeenCalledTimes(1)
    })
  })
})
