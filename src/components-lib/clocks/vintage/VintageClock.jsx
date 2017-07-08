import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import VintageClockHour from 'components-lib/clocks/vintage/VintageClockHour'
import VintageClockMinute from 'components-lib/clocks/vintage/VintageClockMinute'
import VintageClockSecond from 'components-lib/clocks/vintage/VintageClockSecond'

import './VintageClock.scss'

class VintageClock extends React.Component {

    constructor(props) {
        super(props)
    }

    buildTicks() {
        let result = [];
        for (let i = 0 ; i < 60 ; i++) {
            let clazz = i % 15 === 0 ? 'tickLarge' : (i % 5 === 0 ? 'tickMedium' : 'tickSmall')
            result.push(<div key={i} className={clazz} style={{ transform: 'rotate(' + (i * 6) + 'deg)'}} />)
        }
        return result
    }

    render() { return (
        <div className='ap-clock-vintage'>
            <div className='clockBorder'>
                {this.buildTicks()}
                <VintageClockHour />
                <VintageClockMinute />
                <VintageClockSecond />
                <div className='clockCenter' />
            </div>
        </div>
    )}
}
export default VintageClock