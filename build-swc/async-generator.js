"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generator;
var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));
function generator() {
    return _generator.apply(this, arguments);
}
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _AwaitValue;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _awaitAsyncGenerator(value) {
    return new _AwaitValue(value);
}
function _AwaitValue(value) {
    this.wrapped = value;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function _wrapAsyncGenerator(fn) {
    return function() {
        return new AsyncGenerator(fn.apply(this, arguments));
    };
}
function _generator() {
    _generator = _wrapAsyncGenerator(_regeneratorRuntime.default.mark(function _callee() {
        var i, inner;
        return _regeneratorRuntime.default.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    i = 5;
                case 1:
                    if (!(i < 10)) {
                        _ctx.next = 7;
                        break;
                    }
                    _ctx.next = 4;
                    return new Promise(function(res) {
                        return setTimeout(function() {
                            return res({
                                success: true,
                                i: i
                            });
                        }, 5);
                    });
                case 4:
                    i++;
                    _ctx.next = 1;
                    break;
                case 7:
                    _ctx.next = 9;
                    return _awaitAsyncGenerator(Promise.resolve().then(function() {
                        return _interopRequireWildcard(require("./inner-async-generator"));
                    }));
                case 9:
                    inner = _ctx.sent;
                    return _ctx.delegateYield(inner.default(), "t0", 11);
                case 11:
                    return _ctx.abrupt("return", _ctx.t0);
                case 12:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _generator.apply(this, arguments);
}
