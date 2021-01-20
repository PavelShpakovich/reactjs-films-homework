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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Search } from '../Search'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe('Search', () => {
  const mockStore = configureStore([])
  let store
  beforeEach(() => {
    store = mockStore({
      navbar: { chosenCategory: 'popular', chosenGenre: { name: 'Genre', id: null } },
    })
    store.dispatch = jest.fn()
  })

  it('Should render and match snapshot, go to route details, dispatch trailer data', () => {
    const setValue = jest.fn()
    const handleClick = jest.spyOn(React, 'useState')
    handleClick.mockImplementation((value) => [value, setValue])
    const component = create(
      <MemoryRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </MemoryRouter>,
    )
    const event = { preventDefault: jest.fn(), target: { value: 'value' } }
    act(() => {
      component.root.findByType(FontAwesomeIcon).props.onClick(event)
    })
    expect(component.toJSON()).toMatchSnapshot()
    act(() => {
      component.root.findByType('input').props.onChange(event)
    })
    expect(setValue).toBeTruthy()
    expect(component.toJSON()).toMatchSnapshot()
  })
})
