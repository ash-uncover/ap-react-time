
export default class Utils {

    static formatTime(value) {
        return (value < 10 ? '0' : '') + value
    }
}