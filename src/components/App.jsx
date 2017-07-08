import React from 'react'

import './App.scss'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}


	render() {
		return (
			<div className='ap-app'>
                APP
			</div>
		);
	}
}
App.contextTypes = { router: React.PropTypes.object }
export default App
