import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import Utils from 'utils/Utils'

import './DigitalClock.scss'

class DigitalClockHour extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hour: Utils.formatTime(ClockHelper.getHour())
        }
    }

    componentWillMount() {
        ClockHelper.registerHour(this, this.onClockUpdate.bind(this))
    }

    componentWillUnmount() {
        ClockHelper.unregister(this)
    }

    onClockUpdate() {
        this.setState({
            hour: Utils.formatTime(ClockHelper.getHour())
        })
    }

    render() { return (
        <div className='ap-clock-hour'>
            {this.state.hour}
        </div>
    )}
}
export default DigitalClockHour
