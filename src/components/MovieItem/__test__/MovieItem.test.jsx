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
import { MovieItem } from '../MovieItem'
import { Info } from '../../common/Info/Info'
import { Button } from '../../common/Button/Button'
import { MovieItemModal } from '../components/MovieItemModal/MovieItemModal'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe('MovieItem', () => {
  const mockStore = configureStore([])
  let store
  beforeEach(() => {
    store = mockStore({
      genres: { genres: [1, 2, 3] },
    })
    store.dispatch = jest.fn()
  })

  it('Should render and match snapshot, go to route details, dispatch trailer data', () => {
    const setIsModal = jest.fn()
    const handleClick = jest.spyOn(React, 'useState')
    handleClick.mockImplementation((isModal) => [isModal, setIsModal])
    const component = create(
      <MemoryRouter>
        <Provider store={store}>
          <MovieItem overview="test" vote={5} title="title" genreIds={[28, 12, 16]} poster="poster" id={1} />
        </Provider>
      </MemoryRouter>,
    )
    act(() => {
      component.root.findByType(Info).props.onClick()
    })
    expect(component.toJSON()).toMatchSnapshot()
    expect(mockHistoryPush).toHaveBeenCalledWith('/details/1')

    act(() => {
      component.root.findByType(FontAwesomeIcon).props.onClick()
    })
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    act(() => {
      component.root.findByType(Button).props.onClick()
    })
    expect(setIsModal).toBeTruthy()
    act(() => {
      component.root.findByType(MovieItemModal).props.onModal()
    })
    expect(setIsModal).toBeTruthy()
  })
})
