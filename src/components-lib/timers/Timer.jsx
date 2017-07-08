import React from 'react'

import ClockHelper from 'helpers/ClockHelper'

import moment from 'moment'

import './Timer.scss'

class Timer extends React.Component {

    constructor(props) {
        super(props)
        //this.initTime = moment()
        this.state = {
            second: this.props.second || 60
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
            second: Math.max(this.state.second - 1, 0)
        })
    }

    render() { 
        let styleLeft = {
            transform: 'rotate(' + (180-(Math.min(30, this.state.second) * 6)) + 'deg)'
        }
        let styleRight = {
            transform: 'rotate(-' + (Math.max(30, this.state.second) * 6) + 'deg)'
        }
        return (
        <div className='ap-timer'>
            <div className='ap-timer-left ap-timer-area'>
                <div className='ap-timer-block' style={styleLeft}>
                    <div className='ap-timer-block-inner' />
                </div>
            </div>
            <div className='ap-timer-right ap-timer-area'>
                <div className='ap-timer-block' style={styleRight}>
                    <div className='ap-timer-block-inner' />
                </div>
            </div>
        </div>
    )}
}
export default Timer