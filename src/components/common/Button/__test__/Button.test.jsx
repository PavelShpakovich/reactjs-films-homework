/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create } from 'react-test-renderer'
import { Button } from '../Button'

describe('Button', () => {
  it('Should render and match snapshot', () => {
    const mockFn = jest.fn()
    const component = create(<Button onCLick={mockFn}>Button</Button>)
    component.root.props.onClick()
    expect(component.toJSON()).toMatchSnapshot()
    expect(mockFn).toBeCalledTimes(1)
  })
})
