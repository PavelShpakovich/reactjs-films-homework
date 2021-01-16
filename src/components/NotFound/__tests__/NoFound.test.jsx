/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create } from 'react-test-renderer' // ES6
import { BrowserRouter as Router } from 'react-router-dom'
import { NotFound } from '../NotFound'

describe('NotFound', () => {
  it('Should render and match snapshot', () => {
    const component = create(
      <Router>
        <NotFound />
      </Router>,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
