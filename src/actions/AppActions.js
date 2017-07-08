import { ActionBase } from 'ap-flux'

var navigate = new ActionBase({ name: 'NAVIGATE' })
var navigate_back = new ActionBase({ name: 'NAVIGATE_BACK' })

navigate.do = function(args) {
    return new Promise(function (resolve, reject) {
        resolve(args && args.path || '');
    });
}

navigate_back.do = function(args) {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}
