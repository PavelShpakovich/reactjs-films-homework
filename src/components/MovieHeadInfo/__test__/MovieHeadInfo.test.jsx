/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { create } from 'react-test-renderer'
import { MovieHeadInfo } from '../MovieHeadInfo'

describe('MovieHeadInfo', () => {
  it('Should render and match snapshot', () => {
    const component = create(<MovieHeadInfo vote={5} runtime={100} genres={[{ id: 1, name: 'test' }]} title="title" />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
