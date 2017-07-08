import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import Utils from 'utils/Utils'

import './DigitalClock.scss'

class DigitalClockMinute extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            minute: Utils.formatTime(ClockHelper.getMinute())
        }
    }

    componentWillMount() {
        ClockHelper.registerMinute(this, this.onClockUpdate.bind(this))
    }

    componentWillUnmount() {
        ClockHelper.unregister(this)
    }

    onClockUpdate() {
        this.setState({
            minute: Utils.formatTime(ClockHelper.getMinute())
        })
    }

    render() { return (
        <div className='ap-clock-minute'>
            {this.state.minute}
        </div>
    )}
}
export default DigitalClockMinute
