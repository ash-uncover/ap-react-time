import { StoreRegistry } from 'ap-flux'

class ClockHelper {

    register(obj, callback) {
        StoreRegistry.register('CLOCK_STORE', obj, callback)
    }
    registerHour(obj, callback) {
        StoreRegistry.register('CLOCK_STORE/hour', obj, callback)
    }
    registerMinute(obj, callback) {
        StoreRegistry.register('CLOCK_STORE/minute', obj, callback)
    }
    registerSecond(obj, callback) {
        StoreRegistry.register('CLOCK_STORE/second', obj, callback)
    }

    unregister(obj) {
        StoreRegistry.unregister('CLOCK_STORE', obj)
    }

    getData() {
        return StoreRegistry.getStore('CLOCK_STORE').getData()
    }
    getHour() {
        return StoreRegistry.getStore('CLOCK_STORE').getData('/hour')
    }
    getMinute() {
        return StoreRegistry.getStore('CLOCK_STORE').getData('/minute')
    }
    getSecond() {
        return StoreRegistry.getStore('CLOCK_STORE').getData('/second')
    }

}
let ClockObj = new ClockHelper()
export default ClockObj
