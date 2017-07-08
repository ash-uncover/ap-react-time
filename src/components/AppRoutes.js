import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from 'components/App'
import Clocks from 'components/clocks/Clocks'
import Redirect from 'components/Redirect'

class AppRoutes extends React.Component {

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
                    <Route path='clocks' component={Clocks} >
                    </Route>
                </Route>
                <Route path='*' component={Redirect} />
            </Router>
        )
    }
}

export default AppRoutes
