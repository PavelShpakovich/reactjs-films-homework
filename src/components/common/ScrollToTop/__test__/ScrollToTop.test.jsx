/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create } from 'react-test-renderer'
import { ScrollToTop } from '../ScrollToTop'

describe('ScrollToTop', () => {
  let component

  beforeEach(() => {
    global.scrollTo = jest.fn()
    component = create(<ScrollToTop />)
  })

  it('Should render and match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
