// React modules
import React from 'react'
import { render } from 'react-dom'

// Actions
import AppActions from 'actions/AppActions'
// Stores
import AppStore from 'stores/AppStore'
import ClockStore from 'stores/ClockStore'

// Our root component handling routing in the application
import AppRoutes from 'components/AppRoutes'
render((<AppRoutes />), document.getElementById('app'))
