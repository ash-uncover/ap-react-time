import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import Utils from 'utils/Utils'

import './VintageClock.scss'

class VintageClockHour extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hour: ClockHelper.getHour(),
            minute: ClockHelper.getMinute()
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
            hour: ClockHelper.getHour(),
            minute: ClockHelper.getMinute()
        })
    }

    render() { return (
        <div 
            className='ap-clock-hour' 
            style={{ transform: 'rotate(' + ((this.state.hour + this.state.minute / 60) * 30) + 'deg)' }} />
    )}
}
export default VintageClockHour
