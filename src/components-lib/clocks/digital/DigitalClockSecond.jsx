import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import Utils from 'utils/Utils'

import './DigitalClock.scss'

class DigitalClockSecond extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            second: Utils.formatTime(ClockHelper.getSecond())
        }
    }

    componentWillMount() {
        ClockHelper.registerSecond(this, this.onClockUpdate.bind(this))
    }

    componentWillUnmount() {
        ClockHelper.unregister(this)
    }

    onClockUpdate() {
        this.setState({
            second: Utils.formatTime(ClockHelper.getSecond())
        })
    }

    render() { return (
        <div className='ap-clock-second'>
            {this.state.second}
        </div>
    )}
}
export default DigitalClockSecond
