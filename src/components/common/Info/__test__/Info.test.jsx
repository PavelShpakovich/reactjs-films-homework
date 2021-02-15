/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { genres } from '../../../../MockedData/mockedGenres'
import { Info } from '../Info'

const mockStore = configureStore([])

describe('Info', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      genres: { genres },
    })
  })
  it('Should render and match snapshot', () => {
    const component = create(
      <Provider store={store}>
        <Info genreIds={[28, 12, 16]} title="title" vote={5} type="info" onClick={() => {}} />
      </Provider>,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
