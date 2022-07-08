import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
