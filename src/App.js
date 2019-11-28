import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/layouts/Navbar"
import { Switch, Route } from 'react-router-dom'
import Api from './components/pages/Api'
import Home from './components/pages/Home'
import PageNotFound from './components/pages/PageNotFound'
import CandleStick from './components/CandleStick'

class App extends Component {

  render () {
      return (
      <div className='App' > 
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/api" component={Api} />
        <Route path="/chart" component={CandleStick} />
        <Route component={PageNotFound} />
      </Switch>
      </div> 
    )
  }
}

export default App;