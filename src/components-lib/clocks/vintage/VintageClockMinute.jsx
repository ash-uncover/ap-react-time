import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import Utils from 'utils/Utils'

import './VintageClock.scss'

class VintageClockMinute extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            minute: ClockHelper.getMinute(),
            second: ClockHelper.getSecond()
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
            minute: ClockHelper.getMinute(),
            second: ClockHelper.getSecond()
        })
    }

    render() { return (
        <div 
            className='ap-clock-minute' 
            style={{ transform: 'rotate(' + ((this.state.minute + this.state.second / 60) * 6) + 'deg)' }} />
    )}
}
export default VintageClockMinute
