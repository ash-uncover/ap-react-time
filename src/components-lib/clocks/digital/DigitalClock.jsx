import React from 'react'

import ClockHelper from 'helpers/ClockHelper'

import DigitalClockHour from 'components-lib/clocks/digital/DigitalClockHour'
import DigitalClockMinute from 'components-lib/clocks/digital/DigitalClockMinute'
import DigitalClockSecond from 'components-lib/clocks/digital/DigitalClockSecond'

import './DigitalClock.scss'

class DigitalClock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hour: ClockHelper.getHour(),
            minute: ClockHelper.getMinute(),
            second: ClockHelper.getSecond()
        }
    }

    componentWillMount() {
        ClockHelper.register(this, this.onClockUpdate.bind(this))
    }

    componentWillUnmount() {
        ClockHelper.unregister(this)
    }

    onClockUpdate() {
        this.setState({
            hour: ClockHelper.getHour(),
            minute: ClockHelper.getMinute(),
            second: ClockHelper.getSecond()
        })
    }

    render() { return (
        <div className='ap-clock-digital'>
            <DigitalClockHour />
            <DigitalClockMinute />
            <DigitalClockSecond />
        </div>
    )}
}
export default DigitalClock
