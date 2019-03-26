import React, { Fragment, } from 'react';
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import {Container, } from 'semantic-ui-react'
import { Switch, Route, } from 'react-router-dom'
import FavoriteThings from './components/FavoriteThings'

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' render={ () => <div>Home</div>} />
        <Route exact path='/user/profile' render={ () => <UserProfile />} />
        <Route exact path='/favorite/things' render={ () => <FavoriteThings />} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
