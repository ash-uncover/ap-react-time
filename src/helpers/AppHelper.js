import { Dispatcher, StoreRegistry } from 'ap-flux'

let NAME = 'APP_STORE'

class AppHelper {

    register(path, obj, callback) {
        StoreRegistry.register(NAME + (path ? path : '') , obj, callback);
    }

    unregister(obj) {
        StoreRegistry.unregister(NAME, obj);
    }

    getData(path) {
        return StoreRegistry.getStore(NAME).getData(path);
    }

    navigate(path) {
        return Dispatcher.issue('NAVIGATE', { path: path });
    }

    navigateBack() {
        return Dispatcher.issue('NAVIGATE_BACK', {});
    }
}
var AppHelperObj = new AppHelper()
export default AppHelperObj
