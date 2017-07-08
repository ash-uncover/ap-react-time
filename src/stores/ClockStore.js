import { StoreBase } from 'ap-flux'

import moment from 'moment'

let ClockStore = new StoreBase ({ name: 'CLOCK_STORE', content: {} })

function updateClock() {
    let m = moment()
    _updateHour(m)
    _updateMinute(m)
    _updateSecond(m)
}

function _updateHour(m) {
    if (ClockStore.getData('/hour') !== m.hour()) {
        ClockStore.setData('/hour', m.hour())
        ClockStore.notifyPath('/hour')
    }
}
function _updateMinute(m) {
    if (ClockStore.getData('/minute') !== m.minute()) {
        ClockStore.setData('/minute', m.minute())
        ClockStore.notifyPath('/minute')
    }
}
function _updateSecond(m) {
    if (ClockStore.getData('/second') !== m.second()) {
        ClockStore.setData('/second', m.second())
        ClockStore.notifyPath('/second')
    }
}

function clockUpdater() {
    updateClock()
    setTimeout(clockUpdater, 50)
}

clockUpdater()