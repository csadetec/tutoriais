import React from  'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Todo from './todo/Todo'
import About from './about/About'
//import Menu from './template/Menu'
import Menu from './template/Nav'


export default props => (
    <BrowserRouter>
        <Menu />
        <Switch >
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from="*" to='/todos' />
        </Switch>
    </BrowserRouter>
)