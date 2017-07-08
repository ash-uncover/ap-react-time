import { Dispatcher, StoreBase } from 'ap-flux'

var AppStore = new StoreBase ({ name: 'APP_STORE', content: {} })
let DEFAULT_APP_CONTENT = { path: '/' }

AppStore.navigate = function(result, param) {
    AppStore._content.path = result
    AppStore.notifyPath('/path')
}

AppStore.navigate_back = function(result, param) {
    AppStore._content.path = '___BACK___'
    AppStore.notifyPath('/path')
}

Dispatcher.register('NAVIGATE', AppStore.navigate)
Dispatcher.register('NAVIGATE_BACK', AppStore.navigate_back)
