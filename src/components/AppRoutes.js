import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App  from 'components/App'

class AppRouter extends React.Component {

    constructor(props) {
        super(props)
    }

    _onUpdate() {
        window.scrollTo(0, 0)
        let element = document.getElementsByClassName('app')[0]
        if (element) {
            element.scrollTop = 0
        }
    }

    render() {
        return (
            <Router history={browserHistory} onUpdate={this._onUpdate}>
                <Route path='/' component={App} >
                </Route>
                <Route path='*' component={Redirect} />
            </Router>
        )
    }
}

export default AppRoutes
