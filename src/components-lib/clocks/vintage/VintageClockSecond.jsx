import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import Utils from 'utils/Utils'

import './VintageClock.scss'

class VintageClockSecond extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            second: ClockHelper.getSecond()
        }
        this.counter = 0
    }

    componentWillMount() {
        ClockHelper.registerSecond(this, this.onClockUpdate.bind(this))
    }

    componentWillUnmount() {
        ClockHelper.unregister(this)
    }

    onClockUpdate() {
        let s = ClockHelper.getSecond()
        if (s === 0) this.counter++
        this.setState({
            second: s
        })
    }

    render() {
        let style = {
            transform: 'rotate(' + ((this.state.second + 60 * this.counter) * 6) + 'deg)',
        }
        return (
            <div>
                <div className='ap-clock-second' style={style} />
            </div>
        )
    }
}
export default VintageClockSecond
