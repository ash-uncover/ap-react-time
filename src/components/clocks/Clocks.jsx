import React from 'react'

import './Clocks.scss'

import DigitalClock from 'components-lib/clocks/digital/DigitalClock'
import VintageClock from 'components-lib/clocks/vintage/VintageClock'

import Timer from 'components-lib/timers/Timer'

class Clocks extends React.Component {

    constructor(props) {
        super(props)
    }

    render() { return (
        <div className='ap-clocks'>
            <div>
                <VintageClock />
            </div>
            <div>
                <DigitalClock />
            </div>
            <div>
                <Timer second={48}/>
            </div>
        </div>
    )}
}

export default Clocks
