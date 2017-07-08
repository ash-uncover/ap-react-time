import React from 'react'

import ClockHelper from 'helpers/ClockHelper'
import Utils from 'utils/Utils'

import './DigitalClock.scss'

class DigitalChar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() { return (
        <div className='ap-digital-char'>
            <div className='ap-digital-char-top' />
            <div className='ap-digital-char-top-left' />
            <div className='ap-digital-char-top-right' />
            <div className='ap-digital-char-mid' />
            <div className='ap-digital-char-bottom-left' />
            <div className='ap-digital-char-bottom-right' />
            <div className='ap-digital-char-bottom' />
        </div>
    )}
}
export default DigitalChar
