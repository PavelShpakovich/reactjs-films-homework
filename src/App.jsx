/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainSection } from './components/MainSection/MainSection'
import { Footer } from './components/Footer/Footer'
import { Modal } from './components/common/Modal/Modal'
import { MovieHead } from './components/MovieHead/MovieHead'
import { NotFound } from './components/NotFound/NotFound'
import styles from './App.scss'

const App = () => (
  <div className={styles.main_container}>
    <Modal />
    <Header />
    <div className={styles.main_section}>
      <Switch>
        <Route exact path="/" component={MainSection} />
        <Route path="/search" component={MainSection} />
        <Route path="/details/:id" component={MovieHead} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Route path="/details" component={MainSection} />
    </div>
    <Footer />
  </div>
)

export default hot(module)(App)
