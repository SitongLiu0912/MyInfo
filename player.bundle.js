(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
    "./node_modules/node-libs-browser/node_modules/process/browser.js": function(module, exports) {
        var process = module.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        (function() {
            try {
                if (typeof setTimeout === "function") {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === "function") {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        })();
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                return setTimeout(fun, 0);
            }
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                return clearTimeout(marker);
            }
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }
        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};
        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
            return [];
        };
        process.binding = function(name) {
            throw new Error("process.binding is not supported");
        };
        process.cwd = function() {
            return "/";
        };
        process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
            return 0;
        };
    },
    "./node_modules/promise-polyfill/Promise.js": function(module, exports, __webpack_require__) {
        (function(setImmediate) {
            (function(root) {
                var asap = Promise.immediateFn || typeof setImmediate === "function" && setImmediate || function(fn) {
                    setTimeout(fn, 1);
                };
                function bind(fn, thisArg) {
                    return function() {
                        fn.apply(thisArg, arguments);
                    };
                }
                var isArray = Array.isArray || function(value) {
                    return Object.prototype.toString.call(value) === "[object Array]";
                };
                function Promise(fn) {
                    if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
                    if (typeof fn !== "function") throw new TypeError("not a function");
                    this._state = null;
                    this._value = null;
                    this._deferreds = [];
                    doResolve(fn, bind(resolve, this), bind(reject, this));
                }
                function handle(deferred) {
                    var me = this;
                    if (this._state === null) {
                        this._deferreds.push(deferred);
                        return;
                    }
                    asap(function() {
                        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
                        if (cb === null) {
                            (me._state ? deferred.resolve : deferred.reject)(me._value);
                            return;
                        }
                        var ret;
                        try {
                            ret = cb(me._value);
                        } catch (e) {
                            deferred.reject(e);
                            return;
                        }
                        deferred.resolve(ret);
                    });
                }
                function resolve(newValue) {
                    try {
                        if (newValue === this) throw new TypeError("A promise cannot be resolved with itself.");
                        if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
                            var then = newValue.then;
                            if (typeof then === "function") {
                                doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                                return;
                            }
                        }
                        this._state = true;
                        this._value = newValue;
                        finale.call(this);
                    } catch (e) {
                        reject.call(this, e);
                    }
                }
                function reject(newValue) {
                    this._state = false;
                    this._value = newValue;
                    finale.call(this);
                }
                function finale() {
                    for (var i = 0, len = this._deferreds.length; i < len; i++) {
                        handle.call(this, this._deferreds[i]);
                    }
                    this._deferreds = null;
                }
                function Handler(onFulfilled, onRejected, resolve, reject) {
                    this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
                    this.onRejected = typeof onRejected === "function" ? onRejected : null;
                    this.resolve = resolve;
                    this.reject = reject;
                }
                function doResolve(fn, onFulfilled, onRejected) {
                    var done = false;
                    try {
                        fn(function(value) {
                            if (done) return;
                            done = true;
                            onFulfilled(value);
                        }, function(reason) {
                            if (done) return;
                            done = true;
                            onRejected(reason);
                        });
                    } catch (ex) {
                        if (done) return;
                        done = true;
                        onRejected(ex);
                    }
                }
                Promise.prototype["catch"] = function(onRejected) {
                    return this.then(null, onRejected);
                };
                Promise.prototype.then = function(onFulfilled, onRejected) {
                    var me = this;
                    return new Promise(function(resolve, reject) {
                        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
                    });
                };
                Promise.all = function() {
                    var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
                    return new Promise(function(resolve, reject) {
                        if (args.length === 0) return resolve([]);
                        var remaining = args.length;
                        function res(i, val) {
                            try {
                                if (val && (typeof val === "object" || typeof val === "function")) {
                                    var then = val.then;
                                    if (typeof then === "function") {
                                        then.call(val, function(val) {
                                            res(i, val);
                                        }, reject);
                                        return;
                                    }
                                }
                                args[i] = val;
                                if (--remaining === 0) {
                                    resolve(args);
                                }
                            } catch (ex) {
                                reject(ex);
                            }
                        }
                        for (var i = 0; i < args.length; i++) {
                            res(i, args[i]);
                        }
                    });
                };
                Promise.resolve = function(value) {
                    if (value && typeof value === "object" && value.constructor === Promise) {
                        return value;
                    }
                    return new Promise(function(resolve) {
                        resolve(value);
                    });
                };
                Promise.reject = function(value) {
                    return new Promise(function(resolve, reject) {
                        reject(value);
                    });
                };
                Promise.race = function(values) {
                    return new Promise(function(resolve, reject) {
                        for (var i = 0, len = values.length; i < len; i++) {
                            values[i].then(resolve, reject);
                        }
                    });
                };
                if (true && module.exports) {
                    module.exports = Promise;
                } else if (!root.Promise) {
                    root.Promise = Promise;
                }
            })(this);
        }).call(this, __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate);
    },
    "./node_modules/setimmediate/setImmediate.js": function(module, exports, __webpack_require__) {
        (function(global, process) {
            (function(global, undefined) {
                "use strict";
                if (global.setImmediate) {
                    return;
                }
                var nextHandle = 1;
                var tasksByHandle = {};
                var currentlyRunningATask = false;
                var doc = global.document;
                var registerImmediate;
                function setImmediate(callback) {
                    if (typeof callback !== "function") {
                        callback = new Function("" + callback);
                    }
                    var args = new Array(arguments.length - 1);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i + 1];
                    }
                    var task = {
                        callback: callback,
                        args: args
                    };
                    tasksByHandle[nextHandle] = task;
                    registerImmediate(nextHandle);
                    return nextHandle++;
                }
                function clearImmediate(handle) {
                    delete tasksByHandle[handle];
                }
                function run(task) {
                    var callback = task.callback;
                    var args = task.args;
                    switch (args.length) {
                      case 0:
                        callback();
                        break;

                      case 1:
                        callback(args[0]);
                        break;

                      case 2:
                        callback(args[0], args[1]);
                        break;

                      case 3:
                        callback(args[0], args[1], args[2]);
                        break;

                      default:
                        callback.apply(undefined, args);
                        break;
                    }
                }
                function runIfPresent(handle) {
                    if (currentlyRunningATask) {
                        setTimeout(runIfPresent, 0, handle);
                    } else {
                        var task = tasksByHandle[handle];
                        if (task) {
                            currentlyRunningATask = true;
                            try {
                                run(task);
                            } finally {
                                clearImmediate(handle);
                                currentlyRunningATask = false;
                            }
                        }
                    }
                }
                function installNextTickImplementation() {
                    registerImmediate = function(handle) {
                        process.nextTick(function() {
                            runIfPresent(handle);
                        });
                    };
                }
                function canUsePostMessage() {
                    if (global.postMessage && !global.importScripts) {
                        var postMessageIsAsynchronous = true;
                        var oldOnMessage = global.onmessage;
                        global.onmessage = function() {
                            postMessageIsAsynchronous = false;
                        };
                        global.postMessage("", "*");
                        global.onmessage = oldOnMessage;
                        return postMessageIsAsynchronous;
                    }
                }
                function installPostMessageImplementation() {
                    var messagePrefix = "setImmediate$" + Math.random() + "$";
                    var onGlobalMessage = function(event) {
                        if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                            runIfPresent(+event.data.slice(messagePrefix.length));
                        }
                    };
                    if (global.addEventListener) {
                        global.addEventListener("message", onGlobalMessage, false);
                    } else {
                        global.attachEvent("onmessage", onGlobalMessage);
                    }
                    registerImmediate = function(handle) {
                        global.postMessage(messagePrefix + handle, "*");
                    };
                }
                function installMessageChannelImplementation() {
                    var channel = new MessageChannel();
                    channel.port1.onmessage = function(event) {
                        var handle = event.data;
                        runIfPresent(handle);
                    };
                    registerImmediate = function(handle) {
                        channel.port2.postMessage(handle);
                    };
                }
                function installReadyStateChangeImplementation() {
                    var html = doc.documentElement;
                    registerImmediate = function(handle) {
                        var script = doc.createElement("script");
                        script.onreadystatechange = function() {
                            runIfPresent(handle);
                            script.onreadystatechange = null;
                            html.removeChild(script);
                            script = null;
                        };
                        html.appendChild(script);
                    };
                }
                function installSetTimeoutImplementation() {
                    registerImmediate = function(handle) {
                        setTimeout(runIfPresent, 0, handle);
                    };
                }
                var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
                attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
                if ({}.toString.call(global.process) === "[object process]") {
                    installNextTickImplementation();
                } else if (canUsePostMessage()) {
                    installPostMessageImplementation();
                } else if (global.MessageChannel) {
                    installMessageChannelImplementation();
                } else if (doc && "onreadystatechange" in doc.createElement("script")) {
                    installReadyStateChangeImplementation();
                } else {
                    installSetTimeoutImplementation();
                }
                attachTo.setImmediate = setImmediate;
                attachTo.clearImmediate = clearImmediate;
            })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
        }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js"));
    },
    "./node_modules/timers-browserify/main.js": function(module, exports, __webpack_require__) {
        (function(global) {
            var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
            var apply = Function.prototype.apply;
            exports.setTimeout = function() {
                return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
            };
            exports.setInterval = function() {
                return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
            };
            exports.clearTimeout = exports.clearInterval = function(timeout) {
                if (timeout) {
                    timeout.close();
                }
            };
            function Timeout(id, clearFn) {
                this._id = id;
                this._clearFn = clearFn;
            }
            Timeout.prototype.unref = Timeout.prototype.ref = function() {};
            Timeout.prototype.close = function() {
                this._clearFn.call(scope, this._id);
            };
            exports.enroll = function(item, msecs) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = msecs;
            };
            exports.unenroll = function(item) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = -1;
            };
            exports._unrefActive = exports.active = function(item) {
                clearTimeout(item._idleTimeoutId);
                var msecs = item._idleTimeout;
                if (msecs >= 0) {
                    item._idleTimeoutId = setTimeout(function onTimeout() {
                        if (item._onTimeout) item._onTimeout();
                    }, msecs);
                }
            };
            __webpack_require__("./node_modules/setimmediate/setImmediate.js");
            exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
            exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
        }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"));
    },
    "./node_modules/webpack/buildin/amd-options.js": function(module, exports) {
        (function(__webpack_amd_options__) {
            module.exports = __webpack_amd_options__;
        }).call(this, {});
    },
    "./node_modules/webpack/buildin/global.js": function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || new Function("return this")();
        } catch (e) {
            if (typeof window === "object") g = window;
        }
        module.exports = g;
    },
    "./src/analysis/experience/data.js": function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var EXPERIENCE_LOG_TYPE_TIMELINE = "timeline";
        var EXPERIENCE_LOG_TYPE_ACTION = "action";
        var experience = {
            reportId: "",
            cdn: "",
            loadPlaybackStartAt: 0,
            loadedPlaybackDoneAt: 0,
            preparedPlaybackSpendTime: 0,
            action: {
                network: {
                    throughputTotal: 0,
                    throughputStarts: {},
                    throughputEnds: {},
                    throughputBytes: {},
                    hitUrl: ""
                },
                bufferCount: 0,
                delayTime: 0,
                bitrateDecoded: 0,
                quality: {
                    avgScore: 0,
                    currentScore: 0,
                    currentResolution: "",
                    detectedResolutions: [],
                    frameRate: 0
                },
                actions: []
            },
            timeline: {
                network: {
                    throughputTotal: 0,
                    throughputStarts: {},
                    throughputEnds: {},
                    throughputBytes: {},
                    hitUrl: ""
                },
                bufferCount: 0,
                delayTime: 0,
                bitrateDecoded: 0,
                quality: {
                    avgScore: 0,
                    currentScore: 0,
                    currentResolution: "",
                    detectedResolutions: [],
                    frameRate: 0
                },
                actions: []
            },
            reset: function reset(type) {
                switch (type) {
                  case EXPERIENCE_LOG_TYPE_ACTION:
                    this.action = this.getInitData();
                    break;

                  case EXPERIENCE_LOG_TYPE_TIMELINE:
                    this.timeline = this.getInitData();
                    break;

                  default:
                    this.reportId = "";
                    this.loadPlaybackStartAt = 0;
                    this.loadedPlaybackDoneAt = 0;
                    this.preparedPlaybackSpendTime = 0;
                    this.action = this.getInitData();
                    this.timeline = this.getInitData();
                    break;
                }
            },
            getInitData: function getInitData() {
                return {
                    network: {
                        throughputTotal: 0,
                        throughputStarts: {},
                        throughputEnds: {},
                        throughputBytes: {},
                        hitUrl: ""
                    },
                    bufferCount: 0,
                    delayTime: 0,
                    bitrateDecoded: 0,
                    quality: {
                        avgScore: 0,
                        currentScore: 0,
                        currentResolution: "",
                        detectedResolutions: [],
                        frameRate: 0
                    },
                    actions: []
                };
            },
            getInitActionData: function getInitActionData() {
                return {
                    action: "",
                    timestamp: "",
                    real_time: "",
                    play_time: "",
                    info: {}
                };
            }
        };
        exports.experience = experience;
        exports.EXPERIENCE_LOG_TYPE_TIMELINE = EXPERIENCE_LOG_TYPE_TIMELINE;
        exports.EXPERIENCE_LOG_TYPE_ACTION = EXPERIENCE_LOG_TYPE_ACTION;
    },
    "./src/analysis/experience/experience-logger.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _data = __webpack_require__("./src/analysis/experience/data.js");
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        var _httpRequest = __webpack_require__("./src/catchplay/core/http-request.js");
        var _httpRequest2 = _interopRequireDefault(_httpRequest);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _utils = __webpack_require__("./src/common/utils.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var GET = "GET";
        var POST = "POST";
        var PUT = "PUT";
        var NEW_REPORT = "new-report";
        var UPDATE_REPORT = "update-report";
        var LOG = "log";
        var STATUS_START_PLAY = 1;
        var STATUS_ENDED = 201;
        var STATUS_STOP = 202;
        var STATUS_UNKNOWN = 300;
        var STATUS_DRM_FAILED = 301;
        var STATUS_VIDEO_INFO_API_FAILED = 401;
        var STATUS_DRM_LICENSE_API_FAILED = 402;
        var STATUS_SEND_LOG_API_FAILED = 403;
        var STATUS_WATCH_LOG_API_FAILED = 404;
        var ACTION_START = "start";
        var ACTION_END = "end";
        var ACTION_STOP = "stop";
        var ACTION_READY = "ready";
        var ACTION_PLAY = "play";
        var ACTION_PAUSE = "pause";
        var ACTION_SPEEDRATE = "speedrate";
        var ACTION_BUFFERING = "buffering";
        var ACTION_SEEK = "seek";
        var ACTION_SWITCH_SUBTITLE = "subtitle";
        var ACTION_SWITCH_AUDIO = "audio";
        var ACTION_SWITCH_BITRATE = "mbr";
        var ACTION_CAST = "cast";
        var ACTION_AIRPLAY = "airplay";
        var queue = {
            data: [],
            enqueue: function enqueue(data) {
                this.data.push(data);
            },
            dequeue: function dequeue() {
                return this.data.shift();
            },
            isEmpty: function isEmpty() {
                return this.data.length === 0;
            },
            first: function first() {
                return this.data[0];
            },
            last: function last() {
                return this.data.slice(-1)[0];
            },
            all: function all() {
                return this.data;
            },
            size: function size() {
                return this.data.length;
            },
            reset: function reset() {
                this.data = [];
            }
        };
        var logSettlement = function logSettlement(logType) {
            if (!this.player || !(this.player.getVideoElement() instanceof HTMLElement)) {
                _logger2.default.warning("player or video element does not exists.");
                return;
            }
            var getScore = function getScore(height) {
                if (height >= 1080) {
                    return 5;
                } else if (height < 1080 && height >= 720) {
                    return 4;
                } else if (height < 720 && height >= 480) {
                    return 3;
                } else if (height < 480 && height >= 404) {
                    return 2;
                } else if (height < 360) {
                    return 1;
                } else {
                    return 1;
                }
            };
            var periodFixed = Date.now() - this.lastSettlementAt[logType];
            var videoHeight = 0;
            try {
                videoHeight = this.player.getVideoElement().videoHeight;
            } catch (err) {
                _logger2.default.warning("the video element is not exists. message: " + err);
            }
            _data.experience[logType].quality.currentResolution = this.player.getVideoElement().videoWidth + "x" + videoHeight;
            if (videoHeight in _data.experience[logType].quality.detectedResolutions) {
                _data.experience[logType].quality.detectedResolutions[videoHeight]++;
            } else {
                _data.experience[logType].quality.detectedResolutions[videoHeight] = 1;
            }
            _data.experience[logType].quality.currentScore = getScore(videoHeight);
            var totalScore = 0;
            var totalResolutionCount = 0;
            _data.experience[logType].quality.detectedResolutions.forEach(function(count, height) {
                totalResolutionCount += count;
                totalScore += getScore(height);
            });
            _data.experience[logType].quality.avgScore = totalScore / totalResolutionCount;
            if (typeof this.player.getVideoElement().webkitVideoDecodedByteCount !== "undefined") {
                var previousBitrateDecoded = this.currentBitrateDecoded[logType];
                this.currentBitrateDecoded[logType] = this.player.getVideoElement().webkitVideoDecodedByteCount;
                _data.experience[logType].bitrateDecoded = (this.currentBitrateDecoded[logType] - previousBitrateDecoded) * 8 / 1024 / 1024 / periodFixed * 1e3;
            }
            _data.experience[logType].quality.frameRate = 0;
            if (typeof this.player.getVideoElement().webkitDecodedFrameCount !== "undefined") {
                var previousFrameCount = this.currentFrameCount[logType];
                this.currentFrameCount[logType] = this.player.getVideoElement().webkitDecodedFrameCount;
                _data.experience[logType].quality.frameRate = Math.floor((this.currentFrameCount[logType] - previousFrameCount) / periodFixed * 1e3);
            } else if (typeof this.player.getVideoElement().mozDecodedFrames !== "undefined") {
                var _previousFrameCount = this.currentFrameCount[logType];
                this.currentFrameCount[logType] = this.player.getVideoElement().mozDecodedFrames;
                _data.experience[logType].quality.frameRate = Math.floor((this.currentFrameCount[logType] - _previousFrameCount) / periodFixed * 1e3);
            }
            if (Object.keys(_data.experience[logType].network.throughputEnds).length >= 1) {
                for (var url in _data.experience[logType].network.throughputEnds) {
                    _data.experience[logType].network.throughputTotal += _data.experience[logType].network.throughputBytes[url] / (_data.experience[logType].network.throughputEnds[url] - _data.experience[logType].network.throughputStarts[url]) * 8 / 1024 / 1024 * 1e3;
                }
                if (!_data.experience[logType].network.throughputTotal) {
                    _data.experience[logType].network.throughputTotal = 0;
                }
            }
            this.lastSettlementAt[logType] = Date.now();
        };
        var ExperienceLogger = function() {
            function ExperienceLogger(playerConfig, videoConfig, detector, player, eventTarget, containerDom, errorHandler) {
                var _lastSettlementAt, _currentBitrateDecode, _currentFrameCount, _this = this;
                _classCallCheck(this, ExperienceLogger);
                this.instance = null;
                this.playerConfig = playerConfig;
                this.videoConfig = videoConfig;
                this.browserEnv = detector.getIdentity();
                this.player = player;
                this.eventTarget = eventTarget;
                this.containerDom = containerDom;
                this.errorHandler = errorHandler;
                this.logTypes = [ _data.EXPERIENCE_LOG_TYPE_ACTION, _data.EXPERIENCE_LOG_TYPE_TIMELINE ];
                this.instance = null;
                this.isAllowSendingLogs = false;
                this.waitForSendReportTimes = 0;
                this.catchCurrentTimeBeforeStopOrEnd = 0;
                this.isInConsumeState = false;
                this.bufferEmptyAt = undefined;
                this.lastEveryMinuteCurrentTime = 0;
                var settlementAt = Date.now();
                this.lastSettlementAt = (_lastSettlementAt = {}, _defineProperty(_lastSettlementAt, _data.EXPERIENCE_LOG_TYPE_ACTION, settlementAt), 
                _defineProperty(_lastSettlementAt, _data.EXPERIENCE_LOG_TYPE_TIMELINE, settlementAt), 
                _lastSettlementAt);
                this.currentBitrateDecoded = (_currentBitrateDecode = {}, _defineProperty(_currentBitrateDecode, _data.EXPERIENCE_LOG_TYPE_ACTION, 0), 
                _defineProperty(_currentBitrateDecode, _data.EXPERIENCE_LOG_TYPE_TIMELINE, 0), _currentBitrateDecode);
                this.currentFrameCount = (_currentFrameCount = {}, _defineProperty(_currentFrameCount, _data.EXPERIENCE_LOG_TYPE_ACTION, 0), 
                _defineProperty(_currentFrameCount, _data.EXPERIENCE_LOG_TYPE_TIMELINE, 0), _currentFrameCount);
                this.previousAction = null;
                this.actionItems = [];
                this.prepareVideoHandler = function() {
                    _data.experience.loadPlaybackStartAt = Date.now();
                    var timestamp = (0, _utils.nowTimestampISOString)();
                    _this.logTypes.forEach(function(type) {
                        _data.experience[type].actions.push({
                            action: ACTION_START,
                            timestamp: timestamp,
                            real_time: String(0),
                            play_time: String(0),
                            info: "player initialize start"
                        });
                    });
                    _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION, false);
                };
                this.startPlayHandler = function() {
                    _data.experience.loadedPlaybackDoneAt = Date.now();
                    _data.experience.preparedPlaybackSpendTime = (0, _utils.formatFloat)((_data.experience.loadedPlaybackDoneAt - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                    _this.saveUpdateReport(STATUS_START_PLAY);
                };
                this.endHandler = function() {
                    var timestamp = (0, _utils.nowTimestampISOString)();
                    var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                    var playTime = (0, _utils.formatFloat)(_this.videoConfig.duration, 0);
                    _this.catchCurrentTimeBeforeStopOrEnd = playTime;
                    _this.logTypes.forEach(function(type) {
                        _data.experience[type].actions.push({
                            action: ACTION_END,
                            timestamp: timestamp,
                            real_time: String(realTime),
                            play_time: String(playTime),
                            info: ""
                        });
                    });
                    _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    _this.saveUpdateReport(STATUS_ENDED);
                    _this.ejectActionLogs();
                };
                this.stopHandler = function(event) {
                    var timestamp = (0, _utils.nowTimestampISOString)();
                    var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                    var playTime = (0, _utils.formatFloat)(event.detail.currentTime, 0);
                    _this.catchCurrentTimeBeforeStopOrEnd = playTime;
                    _this.logTypes.forEach(function(type) {
                        _data.experience[type].actions.push({
                            action: ACTION_STOP,
                            timestamp: timestamp,
                            real_time: String(realTime),
                            play_time: String(playTime),
                            info: ""
                        });
                    });
                    _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    _this.saveUpdateReport(STATUS_STOP);
                    _this.ejectActionLogs();
                };
                this.playHandler = function() {
                    try {
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(_this.player.getVideoElement().currentTime, 0);
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_PLAY,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: ""
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[PlayHandler] failed", err);
                    }
                };
                this.pauseHandler = function() {
                    try {
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(_this.player.getVideoElement().currentTime, 0);
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_PAUSE,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: ""
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[PauseHandler] failed", err);
                    }
                };
                this.waitingHandler = function() {
                    _this.bufferEmptyAt = Date.now();
                    try {
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(_this.player.getVideoElement().currentTime, 0);
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_BUFFERING,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: ""
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[WaitingHandler] failed", err);
                    }
                };
                this.playingHandler = function() {
                    try {
                        var bufferLoadedAt = Date.now();
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(_this.player.getVideoElement().currentTime, 0);
                        if (!!_this.bufferEmptyAt) {
                            var delay = (bufferLoadedAt - _this.bufferEmptyAt) / 1e3;
                            _this.logTypes.forEach(function(type) {
                                _data.experience[type].bufferCount += 1;
                                _data.experience[type].delayTime += delay;
                            });
                            _this.bufferEmptyAt = undefined;
                        }
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_READY,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: ""
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[PlayingHandler] failed", err);
                    }
                };
                this.speedRateHandler = function() {
                    try {
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(_this.player.getVideoElement().currentTime, 0);
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_SPEEDRATE,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: "speedrate change to " + _this.player.getVideoElement().playbackRate
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[SpeedRateHandler] failed", err);
                    }
                };
                this.seekingHandler = function(event) {
                    try {
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(event.detail.currentTime, 0);
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_SEEK,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: "seek to " + playTime + "s"
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[SeekingHandler] failed", err);
                    }
                };
                this.subtitleHandler = function(event) {
                    try {
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(_this.player.getVideoElement().currentTime, 0);
                        var message = "";
                        if (event.detail) {
                            if ("enable" in event.detail) {
                                message = "subtitle enable switch to: " + event.detail.enable;
                            } else if ("language" in event.detail) {
                                message = "subtitle language switch to: " + event.detail.language;
                            }
                        }
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_SWITCH_SUBTITLE,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: message
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[SubtitleHandler] failed", err);
                    }
                };
                this.airplayHandler = function() {
                    try {
                        var timestamp = (0, _utils.nowTimestampISOString)();
                        var realTime = (0, _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                        var playTime = (0, _utils.formatFloat)(_this.player.getVideoElement().currentTime, 0);
                        _this.logTypes.forEach(function(type) {
                            _data.experience[type].actions.push({
                                action: ACTION_AIRPLAY,
                                timestamp: timestamp,
                                real_time: String(realTime),
                                play_time: String(playTime),
                                info: ""
                            });
                        });
                        _this.saveLog(_data.EXPERIENCE_LOG_TYPE_ACTION);
                    } catch (err) {
                        _logger2.default.warning("experience-logger[AirplayHandler] failed", err);
                    }
                };
                this.everyMinuteHandler = function(event) {
                    _logger2.default.common("every minute: " + event.detail.currentTime);
                    _this.lastEveryMinuteCurrentTime = event.detail.currentTime;
                    _this.ejectActionLogs();
                    _this.saveLog(_data.EXPERIENCE_LOG_TYPE_TIMELINE);
                };
                this.videoErrorHandler = function() {
                    _this.saveUpdateReport(STATUS_UNKNOWN);
                };
            }
            _createClass(ExperienceLogger, [ {
                key: "start",
                value: function start() {
                    var _this2 = this;
                    if (this.videoConfig.isCustomPlayback) {
                        _logger2.default.common("experience-logger is disabled. because the custom playback is enabled");
                        return;
                    }
                    if (!this.playerConfig.isEnabledExperienceLog) {
                        _logger2.default.common("experience-logger is disabled. so it will not execute start-process playback.");
                        return;
                    }
                    if (this.videoConfig.watchType == _dictionary2.default.WATCH_TYPE.TRAILER) {
                        _logger2.default.common("experience-logger will not execute start-process in trailer playback.");
                        return;
                    }
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_EVERY_MINUTE, this.everyMinuteHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PREPARING, this.prepareVideoHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY_START, this.startPlayHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAYING, this.playingHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_WAITING, this.waitingHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_END, this.endHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_STOP, this.stopHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_SPEED_RATECHANGE, this.speedRateHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY, this.playHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PAUSE, this.pauseHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_SEEKING, this.seekingHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_TEXT_TRACK_CHANGE, this.subtitleHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_AIRPLAY, this.airplayHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_UNKNOWN_ERROR, this.videoErrorHandler);
                    this.instance = setInterval(function() {
                        if (_logger2.default.isEnabled) {
                            _logger2.default.common("current queue:", JSON.parse(JSON.stringify(queue.all())));
                        }
                        if (_this2.waitForSendReportTimes > 10) {
                            _logger2.default.warning("wait for the report sent more than 10 times. clean up and stop to send experience logs.");
                            _this2.reset();
                            return;
                        }
                        if (!_this2.canSendLog()) {
                            _this2.waitForSendReportTimes += 1;
                            _logger2.default.warning("report still not to sent. wait for next time.");
                            return;
                        }
                        if (_this2.isInConsumeState) {
                            _logger2.default.warning("current queue is still in consumed state. wait for the next time.");
                            return;
                        }
                        _this2.isInConsumeState = true;
                        _this2.consume().then(function(result) {
                            _logger2.default.common(result + ". execute dequeue and un-lock consume-state");
                            queue.dequeue();
                            _this2.isInConsumeState = false;
                        }).catch(function(err) {
                            _logger2.default.warning(err.message + ". un-lock consume-state");
                            if (queue.first().retryCount >= 1) {
                                _logger2.default.warning("this queue item has already send 2 times and still failed. drop this queue item");
                                var item = queue.dequeue();
                                _this2.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                    type: _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS,
                                    message: "this queue item has already send 2 times and still failed. drop this queue item. message: " + err.toString(),
                                    code: "P012",
                                    httpCode: "",
                                    data: item
                                }), _this2.containerDom);
                            }
                            _this2.isInConsumeState = false;
                        });
                    }, this.playerConfig.experienceLogConsumeSpeed);
                    _logger2.default.common("experience-logger setup successful and will send log interval-id:" + this.instance);
                }
            }, {
                key: "end",
                value: function end() {
                    var _this3 = this;
                    return new Promise(function(resolve) {
                        var requestPromises = queue.all().map(function(item) {
                            return _this3.sendRequest(item);
                        });
                        Promise.all(requestPromises).then(function(results) {
                            results.forEach(function(result) {
                                _logger2.default.common(result);
                            });
                            _this3.reset();
                            resolve("experience-log has already ended");
                        }).catch(function(err) {
                            _logger2.default.warning(err);
                            _this3.reset();
                            resolve("experience-log has already ended");
                        });
                    });
                }
            }, {
                key: "reset",
                value: function reset() {
                    queue.reset();
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_EVERY_MINUTE, this.everyMinuteHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PREPARING, this.prepareVideoHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY_START, this.startPlayHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAYING, this.playingHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_WAITING, this.waitingHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_END, this.endHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_STOP, this.stopHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_SPEED_RATECHANGE, this.speedRateHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY, this.playHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PAUSE, this.pauseHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_SEEKING, this.seekingHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_TEXT_TRACK_CHANGE, this.subtitleHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_AIRPLAY, this.airplayHandler);
                    this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_UNKNOWN_ERROR, this.videoErrorHandler);
                    _logger2.default.common("cleanup all event-listener: ", this.eventTarget.getListeners(), "cleanup all queue: ", queue.all());
                    if (!!this.instance) {
                        clearInterval(this.instance);
                        this.instance = null;
                    }
                }
            }, {
                key: "consume",
                value: function consume() {
                    var _this4 = this;
                    var item = queue.first();
                    if (!item) {
                        return Promise.resolve("the queue is empty right now. skip to send request");
                    }
                    return new Promise(function(resolve, reject) {
                        _this4.sendRequest(item).then(function(result) {
                            _logger2.default.common(result);
                            resolve("consumed queue successful");
                        }).catch(function(err) {
                            _logger2.default.warning(err.message + ". try again report/log consume");
                            item.retryCount += 1;
                            return _this4.sendRequest(item);
                        }).then(function(result) {
                            _logger2.default.common(result);
                            resolve("consumed report/log try again successful");
                        }).catch(function(err) {
                            _logger2.default.warning(err.message);
                            reject(new _playerError2.default({
                                message: "failed for try again consume",
                                httpCode: _this4.status,
                                data: err.response
                            }));
                        });
                    });
                }
            }, {
                key: "sendRequest",
                value: function sendRequest(item) {
                    var _this5 = this;
                    if (item.type !== NEW_REPORT) {
                        if (Array.isArray(item.params)) {
                            item.params.forEach(function(log) {
                                log.report_id = _data.experience.reportId;
                            });
                        } else {
                            item.params.report_id = _data.experience.reportId;
                        }
                    }
                    var selectRequest = function selectRequest(item) {
                        var config = {
                            params: item.params,
                            headers: item.headers
                        };
                        switch (item.httpMethod) {
                          case GET:
                            return _httpRequest2.default.get(item.url, config);

                          case POST:
                            return _httpRequest2.default.post(item.url, config);

                          case PUT:
                            return _httpRequest2.default.put(item.url, config);

                          default:
                            return Promise.reject(new _playerError2.default({
                                message: "skip to send. " + item.httpMethod + " is not valid http-method",
                                httpCode: undefined,
                                data: item
                            }));
                        }
                    };
                    var requestPromise = selectRequest(item);
                    return new Promise(function(resolve, reject) {
                        requestPromise.then(function(response) {
                            var result = JSON.parse(response);
                            if (typeof item.successCallback === "function") {
                                item.successCallback.call(_this5, result);
                            }
                            _logger2.default.common(item.successMessage);
                            resolve("send request successful");
                        }).catch(function(err) {
                            _this5.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                type: _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS,
                                message: item.failedMessage + ". message: " + err.toString(),
                                code: "P012",
                                httpCode: err.httpCode,
                                data: err.data
                            }), _this5.containerDom);
                            if (typeof item.failedCallback === "function") {
                                item.failedCallback.call(_this5, err);
                            }
                            _logger2.default.warning(item.failedMessage);
                            reject(new _playerError2.default({
                                message: "send request failed but player will still works fine",
                                httpCode: err.httpCode,
                                data: err
                            }));
                        });
                    });
                }
            }, {
                key: "createReport",
                value: function createReport() {
                    var _this6 = this;
                    if (this.videoConfig.isCustomPlayback) {
                        return Promise.resolve("experience-logger skip to send report. because the custom playback is enabled");
                    }
                    if (this.videoConfig.watchType == _dictionary2.default.WATCH_TYPE.TRAILER) {
                        return Promise.resolve("experience-logger skip to send report in trailer playback.");
                    }
                    var item = ExperienceLogger.getRequestTemplate();
                    var osVersion = !!this.browserEnv.osVersion ? this.browserEnv.osVersion : "unknown";
                    item.type = NEW_REPORT;
                    item.url = this.playerConfig.vcmsApiHost + "/api/v2/stream/player/report";
                    item.httpMethod = POST;
                    item.successMessage = "create experience-report successful";
                    item.failedMessage = "create experience-report failed";
                    item.params = {
                        cpp_id: this.videoConfig.cppId,
                        movie_id: this.videoConfig.videoCode,
                        account_id: this.playerConfig.accountId,
                        cdn: _data.experience.cdn || "unknow",
                        watch_type: this.videoConfig.watchType,
                        device_type: this.browserEnv.deviceType,
                        device_model: this.browserEnv.deviceModel,
                        os_version: osVersion,
                        sdk_version: this.playerConfig.sdkVersion,
                        player_type: this.playerConfig.playerType,
                        order_id: this.videoConfig.orderId,
                        drm_support: this.videoConfig.drmConfig.currentDrm,
                        network_type: ""
                    };
                    item.headers = {
                        "content-type": "application/json",
                        authorization: "bearer " + this.videoConfig.accessToken
                    };
                    item.successCallback = function(result) {
                        this.isAllowSendingLogs = true;
                        _data.experience.reportId = result.data.report_id;
                        _logger2.default.common("success to create report. report-id: " + _data.experience.reportId);
                    };
                    return new Promise(function(resolve, reject) {
                        _this6.sendRequest(item).then(function(result) {
                            resolve(result);
                        }).catch(function(err) {
                            _logger2.default.warning("create report failed. " + err.message + ". player will try again(1)");
                            return _this6.sendRequest(item);
                        }).then(function(result) {
                            resolve(result);
                        }).catch(function(err) {
                            _logger2.default.warning("create report failed. " + err.message + ". player will try again(2)");
                            return _this6.sendRequest(item);
                        }).then(function(result) {
                            resolve(result);
                        }).catch(function(err) {
                            _logger2.default.warning("create report failed. " + err.message + ". player is try to send 3 times. stop to collect log");
                            reject(new _playerError2.default({
                                type: _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS,
                                code: "P012",
                                message: "player will not send any experience logs but player still works fine",
                                httpCode: err.httpCode,
                                data: err
                            }));
                        });
                    });
                }
            }, {
                key: "saveUpdateReport",
                value: function saveUpdateReport(status) {
                    var item = ExperienceLogger.getRequestTemplate();
                    item.type = UPDATE_REPORT;
                    item.url = this.playerConfig.vcmsApiHost + "/api/v2/stream/player/report/status";
                    item.httpMethod = PUT;
                    item.successMessage = "update experience-report successful";
                    item.failedMessage = "update experience-report failed";
                    item.params = {
                        status: String(status),
                        speedtest: "",
                        traceroute: ""
                    };
                    item.headers = {
                        "content-type": "application/json",
                        authorization: "bearer " + this.videoConfig.accessToken
                    };
                    queue.enqueue(item);
                }
            }, {
                key: "ejectActionLogs",
                value: function ejectActionLogs() {
                    if (_logger2.default.isEnabled()) {
                        _logger2.default.common("experience-logs[EXPERIENCE_LOG_TYPE_ACTION]");
                    }
                    if (this.actionItems.length == 0) {
                        _logger2.default.common("no action log need to be send, exit ejectActionLogs()");
                        return;
                    }
                    var item = ExperienceLogger.getRequestTemplate();
                    item.type = LOG;
                    item.url = this.playerConfig.vcmsApiHost + "/api/v2/stream/player/report/" + _data.EXPERIENCE_LOG_TYPE_ACTION + "/log";
                    item.httpMethod = POST;
                    item.successMessage = "send experience-" + _data.EXPERIENCE_LOG_TYPE_ACTION + "-log successful";
                    item.failedMessage = "send experience-" + _data.EXPERIENCE_LOG_TYPE_ACTION + "-log failed";
                    _logger2.default.common("EXPERIENCE_LOG_TYPE_ACTION will send " + this.actionItems, JSON.parse(JSON.stringify(this.actionItems)));
                    item.params = this.actionItems;
                    item.headers = {
                        "content-type": "application/json",
                        authorization: "bearer " + this.videoConfig.accessToken
                    };
                    queue.enqueue(item);
                    this.actionItems = [];
                }
            }, {
                key: "saveLog",
                value: function saveLog(type) {
                    var isExecuteSettlement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    if (_logger2.default.isEnabled()) {
                        _logger2.default.common("experience-logs[" + type + "]", JSON.parse(JSON.stringify(_data.experience[type])));
                    }
                    var logTypeWhitelist = [ _data.EXPERIENCE_LOG_TYPE_TIMELINE, _data.EXPERIENCE_LOG_TYPE_ACTION ];
                    if (!(0, _utils.isIncludesIn)(logTypeWhitelist, type)) {
                        _logger2.default.warning("skip to save. the log type [" + type + "] is not a valid type. the range should be in [" + _data.EXPERIENCE_LOG_TYPE_TIMELINE + ", " + _data.EXPERIENCE_LOG_TYPE_ACTION + "]");
                        return;
                    }
                    if (isExecuteSettlement) {
                        logSettlement.call(this, type);
                    }
                    var item = ExperienceLogger.getRequestTemplate();
                    var playTime = 0;
                    if (type === _data.EXPERIENCE_LOG_TYPE_ACTION) {
                        playTime = (0, _utils.formatFloat)(_data.experience[type].actions[0].play_time, 0);
                    } else if (type === _data.EXPERIENCE_LOG_TYPE_TIMELINE) {
                        try {
                            playTime = (0, _utils.formatFloat)(this.lastEveryMinuteCurrentTime, 0);
                        } catch (err) {
                            _logger2.default.warning("play-time get video current-time failed. change to use [catchCurrentTimeBeforeStopOrEnd] variable");
                            playTime = (0, _utils.formatFloat)(this.catchCurrentTimeBeforeStopOrEnd, 0);
                        }
                    }
                    var realTime = type === _data.EXPERIENCE_LOG_TYPE_ACTION ? _data.experience[type].actions[0].real_time : (0, 
                    _utils.formatFloat)((Date.now() - _data.experience.loadPlaybackStartAt) / 1e3, 0);
                    var insertedAt = type === _data.EXPERIENCE_LOG_TYPE_ACTION ? _data.experience[type].actions[0].timestamp : (0, 
                    _utils.nowTimestampISOString)();
                    var bitrate = !!_data.experience[type].bitrateDecoded ? (0, _utils.formatFloat)(_data.experience[type].bitrateDecoded, 2) : 0;
                    var frameRate = !!_data.experience[type].quality.frameRate ? _data.experience[type].quality.frameRate : 0;
                    var previousActions = [];
                    if (type === _data.EXPERIENCE_LOG_TYPE_ACTION) {
                        if (this.previousAction) {
                            previousActions = [ this.previousAction ];
                        }
                        this.previousAction = _data.experience[type].actions[0];
                    }
                    item.type = LOG;
                    item.url = this.playerConfig.vcmsApiHost + "/api/v2/stream/player/report/" + type + "/log";
                    item.httpMethod = POST;
                    item.successMessage = "send experience-" + type + "-log successful";
                    item.failedMessage = "send experience-" + type + "-log failed";
                    item.params = {
                        resolution: String(_data.experience[type].quality.currentResolution),
                        score: String(_data.experience[type].quality.currentScore),
                        bitrate: String(bitrate),
                        bandwidth: String((0, _utils.formatFloat)(_data.experience[type].network.throughputTotal, 2)),
                        cdn_edge_ip: "",
                        ping: "",
                        frame_rate: String(frameRate),
                        start_time: String(_data.experience.preparedPlaybackSpendTime),
                        play_time: String(playTime),
                        real_time: String(realTime),
                        buffer_counts: String(_data.experience[type].bufferCount),
                        delay_time: String((0, _utils.formatFloat)(_data.experience[type].delayTime, 2)),
                        log_type: String(type),
                        previous_action: previousActions,
                        action: _data.experience[type].actions,
                        inserted_at: String(insertedAt)
                    };
                    item.headers = {
                        "content-type": "application/json",
                        authorization: "bearer " + this.videoConfig.accessToken
                    };
                    if (type === _data.EXPERIENCE_LOG_TYPE_ACTION) {
                        this.actionItems.push(item.params);
                    } else {
                        queue.enqueue(item);
                    }
                    _data.experience.reset(type);
                }
            }, {
                key: "canSendLog",
                value: function canSendLog() {
                    return !!_data.experience.reportId && !!this.isAllowSendingLogs;
                }
            } ], [ {
                key: "getRequestTemplate",
                value: function getRequestTemplate() {
                    return {
                        type: "",
                        url: "",
                        httpMethod: "",
                        params: {},
                        headers: {},
                        successMessage: "",
                        failedMessage: "",
                        successCallback: null,
                        failedCallback: null,
                        retryCount: 0
                    };
                }
            } ]);
            return ExperienceLogger;
        }();
        exports.default = ExperienceLogger;
    },
    "./src/analysis/watch/data.js": function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var watch = {
            launchTime: "",
            firstFrameTime: "",
            currentSecond: 0,
            maxSecond: 0,
            sentCount: 0,
            sendLimit: 0,
            correctionMaxSecond: function correctionMaxSecond() {
                if (parseInt(this.currentSecond, 0) + 60 >= parseInt(this.maxSecond, 0)) {
                    this.maxSecond = parseInt(this.currentSecond, 0);
                }
            },
            reset: function reset() {
                this.launchTime = "";
                this.firstFrameTime = "";
                this.currentSecond = 0;
                this.maxSecond = 0;
                this.sentCount = 0;
                this.sendLimit = 0;
            }
        };
        exports.default = watch;
    },
    "./src/analysis/watch/watch-logger.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _data = __webpack_require__("./src/analysis/watch/data.js");
        var _data2 = _interopRequireDefault(_data);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        var _httpRequest = __webpack_require__("./src/catchplay/core/http-request.js");
        var _httpRequest2 = _interopRequireDefault(_httpRequest);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _utils = __webpack_require__("./src/common/utils.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var WATCH_LOG_INTERVAL_MICROSECONDS = 6e4;
        var WatchLogger = function() {
            function WatchLogger(playerConfig, videoConfig, player, eventTarget, containerDom, errorHandler) {
                var _this = this;
                _classCallCheck(this, WatchLogger);
                this.instance = null;
                this.playerConfig = playerConfig;
                this.videoConfig = videoConfig;
                this.player = player;
                this.eventTarget = eventTarget;
                this.containerDom = containerDom;
                this.errorHandler = errorHandler;
                this.pauseHandler = function() {
                    _this.send().then(function(result) {
                        _logger2.default.common(result);
                    }).catch(function(err) {
                        _logger2.default.warning(err);
                    });
                };
                this.startHandler = function() {
                    _this.send().then(function(result) {
                        _logger2.default.common(result);
                    }).catch(function(err) {
                        _logger2.default.warning(err);
                    });
                };
                this.endHandler = function() {
                    _this.send().then(function(result) {
                        _logger2.default.common(result);
                        _this.end();
                    }).catch(function(err) {
                        _logger2.default.warning(err);
                    });
                };
            }
            _createClass(WatchLogger, [ {
                key: "start",
                value: function start() {
                    var _this2 = this;
                    if (this.videoConfig.isCustomPlayback) {
                        _logger2.default.common("watch-logger is disabled. because the custom playback is enabled");
                        return;
                    }
                    if (!this.playerConfig.isEnabledWatchLog) {
                        _logger2.default.common("watch-logger is disabled. so it will not execute start-process in playback.");
                        return;
                    }
                    if (this.videoConfig.watchType == _dictionary2.default.WATCH_TYPE.TRAILER) {
                        _logger2.default.common("watch-logger will not execute start-process in trailer playback.");
                        return;
                    }
                    if (!this.player || !this.player.getVideoElement()) {
                        _logger2.default.common("you must be set player into watch-logger object via 'setPlayer(player)' or constructor");
                        return;
                    }
                    _logger2.default.common("watch-logger start to setup");
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PAUSE, this.pauseHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY_START, this.startHandler);
                    this.eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_END, this.endHandler);
                    if (!!this.instance) {
                        clearInterval(this.instance);
                    }
                    this.instance = setInterval(function() {
                        _this2.send().then(function(result) {
                            _logger2.default.common(result);
                        }).catch(function(err) {
                            _logger2.default.warning(err);
                        });
                    }, WATCH_LOG_INTERVAL_MICROSECONDS);
                    _logger2.default.common("watch-logger setup successful and will send log interval-id:" + this.instance);
                    this.send().then(function(result) {
                        _logger2.default.common(result);
                    }).catch(function(err) {
                        _logger2.default.warning(err);
                    });
                }
            }, {
                key: "end",
                value: function end() {
                    if (this.videoConfig.watchType == _dictionary2.default.WATCH_TYPE.TRAILER) {
                        _logger2.default.common("watch-logger will not execute end-process in trailer playback.");
                        return;
                    }
                    if (!!this.instance) {
                        _logger2.default.common("watch-log instance exists. stop watch-log.");
                        if (!!this.eventTarget) {
                            this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PAUSE, this.pauseHandler);
                            this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY_START, this.startHandler);
                            this.eventTarget.removeEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_END, this.endHandler);
                        }
                        clearInterval(this.instance);
                        this.instance = null;
                        _logger2.default.common("clear watch-log instance interval. now instance-id:" + this.instance);
                    }
                    _data2.default.reset();
                    _logger2.default.common("stop to send watch-log and process done already.");
                }
            }, {
                key: "send",
                value: function send() {
                    var _this3 = this;
                    if (this.videoConfig.watchType == _dictionary2.default.WATCH_TYPE.TRAILER) {
                        return Promise.reject("watch-logger will not execute send-process in trailer playback.");
                    }
                    if (!this.player || !this.player.getVideoElement()) {
                        this.end();
                        return Promise.reject("player or video element already no longer exists.");
                    }
                    if (!!_data2.default.sendLimit && _data2.default.sentCount >= _data2.default.sendLimit) {
                        this.end();
                        return Promise.reject("watch-logger is sent over the limit. stop to send.");
                    }
                    _data2.default.currentSecond = parseInt(this.player.getVideoElement().currentTime, 0);
                    _data2.default.correctionMaxSecond();
                    _logger2.default.common("watch-logger start to send... watch-data:", _data2.default);
                    var log = {
                        launchTime: _data2.default.launchTime,
                        firstFrameTime: _data2.default.firstFrameTime,
                        deviceId: this.videoConfig.watchLogger.deviceId,
                        videoId: this.videoConfig.videoId,
                        orderId: this.videoConfig.orderId,
                        currentSecond: _data2.default.currentSecond,
                        duration: this.videoConfig.duration,
                        maxSecond: _data2.default.maxSecond,
                        submitTime: (0, _utils.nowTimestampISOString)(),
                        watchType: this.videoConfig.watchType
                    };
                    var headers = {
                        "content-type": "application/json",
                        authorization: "bearer " + this.videoConfig.accessToken,
                        "ASIAPLAY-PLAY-TOKEN": this.videoConfig.playToken,
                        "ASIAPLAY-DEVICE-VERSION": this.videoConfig.watchLogger.deviceVersion,
                        "ASIAPLAY-DEVICE-TYPE": _dictionary2.default.DEVICE_TYPE.WEB,
                        "ASIAPLAY-DEVICE-NAME": this.videoConfig.watchLogger.deviceName
                    };
                    return new Promise(function(resolve, reject) {
                        _httpRequest2.default.post("" + _this3.playerConfig.cmsApiURL, {
                            params: log,
                            headers: headers
                        }).then(function(response) {
                            var data = JSON.parse(response);
                            resolve("watch-logger verify successful. message: " + data.message);
                        }).catch(function(err) {
                            var data = err.data;
                            var eventDetail = {
                                isShouldStop: false,
                                experienceErrorMessage: "",
                                experienceErrorCode: 404
                            };
                            switch (data.code) {
                              case "270001":
                                _this3.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                    message: "device_id invalid",
                                    code: "P006"
                                }), _this3.containerDom);
                                eventDetail.isShouldStop = true;
                                eventDetail.experienceErrorMessage = "P006 : device_id invalid";
                                break;

                              case "140001":
                              case "930005":
                                _this3.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                    message: "video_id invalid",
                                    code: "P007"
                                }), _this3.containerDom);
                                break;

                              case "290001":
                                _this3.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                    message: "current play time is over than video duration",
                                    code: "P009"
                                }), _this3.containerDom);
                                eventDetail.experienceErrorMessage = "P009 : current play time is over than video duration";
                                break;

                              case "300001":
                                _this3.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                    message: "other device is playing",
                                    code: "P010"
                                }), _this3.containerDom);
                                eventDetail.isShouldStop = true;
                                eventDetail.experienceErrorMessage = "P010 : other device is playing";
                                break;
                            }
                            _this3.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_WATCH_LOG_PLAYBACK_ILLEGAL, {
                                detail: eventDetail
                            }));
                            resolve("watch-logger catch error and dispatch event to player handing.");
                        }).catch(function(err) {
                            reject("watch-logger can not catch any watch-log error: " + err.toString());
                        });
                    });
                }
            } ]);
            return WatchLogger;
        }();
        exports.default = WatchLogger;
    },
    "./src/asiaplay-chromecast-sender.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _browserEnvDetector = __webpack_require__("./src/catchplay/core/detect/browser-env-detector.js");
        var _browserEnvDetector2 = _interopRequireDefault(_browserEnvDetector);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        var _playerConfig = __webpack_require__("./src/common/player-config.js");
        var _playerConfig2 = _interopRequireDefault(_playerConfig);
        var _videoConfig = __webpack_require__("./src/common/video-config.js");
        var _videoConfig2 = _interopRequireDefault(_videoConfig);
        var _data = __webpack_require__("./src/analysis/experience/data.js");
        var _dependenciesLoader = __webpack_require__("./src/catchplay/core/plugins/dependencies-loader.js");
        var _api = __webpack_require__("./src/common/api.js");
        var _api2 = _interopRequireDefault(_api);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = AsiaPlayChromecastSender = function(_AsiaPlayChromecastSender) {
            function AsiaPlayChromecastSender(_x, _x2) {
                return _AsiaPlayChromecastSender.apply(this, arguments);
            }
            AsiaPlayChromecastSender.toString = function() {
                return _AsiaPlayChromecastSender.toString();
            };
            return AsiaPlayChromecastSender;
        }(function(containerDom, cppConfig) {
            console.info("Init AsiaPlayChromecastSender cppConfig: " + cppConfig);
            var playerConfig = new _playerConfig2.default(cppConfig);
            var videoConfig = null;
            var browserEnv = new _browserEnvDetector2.default().getIdentity();
            var isChrome = browserEnv.browserName == "chrome" && browserEnv.deviceType && browserEnv.osName != "webos";
            var receiver_status = void 0;
            var receiver_player_status = void 0;
            var CAST_API_INITIALIZATION_DELAY = 1e3;
            var PROGRESS_BAR_UPDATE_DELAY = 1e3;
            var SESSION_IDLE_TIMEOUT = 3e5;
            var currentMediaSession = null;
            var currentVolume = .5;
            var progressFlag = 1;
            var pre_session = null;
            var session = null;
            var storedSession = null;
            var cast_initializet_timer = null;
            var cast_processing_timer = null;
            var cast_info_timer = null;
            var current = {};
            current.reportId = "";
            current.volume = {};
            current.volume.isMuted = false;
            current.volume.value = 100;
            current.textTrack = {};
            current.textTrack.isShowed = false;
            current.textTrack.activeLanguage = "";
            if (typeof containerDom === "undefined") {
                throw Error("the AsiaPlayChromecastSender's element required");
            }
            if (typeof cppConfig === "undefined") {
                throw Error("the AsiaPlayChromecastSender's config required");
            }
            this.element = containerDom;
            _logger2.default.setDebugMode(playerConfig.debugMode);
            var self = this;
            (0, _dependenciesLoader.loadHandle)(_dependenciesLoader.libs.chromecast.name, _dependenciesLoader.libs.chromecast.url).then(function(result) {
                if (!isChrome) {
                    throw Error("ChromecastSender only support chrome browser");
                }
                _logger2.default.common("[chromecast]", result);
                if (typeof chrome != "undefined") {
                    cast_initializet_timer = setInterval(function() {
                        if (chrome.cast && chrome.cast.isAvailable) {
                            clearInterval(cast_initializet_timer);
                            cast_initializet_timer = null;
                            castInitializetApi();
                        }
                    }, 500);
                }
            }).catch(function(err) {
                _logger2.default.error("[chromecast]", "load chromecast-sender sdk failed. error:", err);
                receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.IDLE;
                var data = {
                    errorCode: 0,
                    errorMsg: "load chromecast-sender sdk failed"
                };
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.ERROR, {
                    detail: data
                }));
            });
            function castInitializetApi() {
                var sessionRequest = new chrome.cast.SessionRequest(playerConfig.chromecastReceiverAppId);
                var apiConfig = new chrome.cast.ApiConfig(sessionRequest, castSessionListener, castReceiverListener, chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED);
                chrome.cast.initialize(apiConfig, castOnInitSuccess, castOnError);
            }
            function castOnInitSuccess() {
                _logger2.default.common("[chromecast]", "sender init successful. the receiver is IDLE");
                receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.IDLE;
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.INIT));
            }
            function castOnStopAppSuccess() {
                _logger2.default.common("[chromecast]", "sender session stopped. the receiver is IDLE");
                receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.IDLE;
            }
            function castSessionListener(e) {
                _logger2.default.common("[chromecast]", "new session id: " + e.sessionId, "session:", e);
                _logger2.default.common("[chromecast]", "the receiver is READY");
                session = e;
                receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.READY;
                current.volume.isMuted = session.receiver.volume.muted;
                current.volume.value = session.receiver.volume.level * 100;
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.CAST_CONNECTION, {
                    detail: {
                        receiverName: session.receiver.friendlyName
                    }
                }));
                session.addUpdateListener(castSessionUpdateListener.bind(this));
                reconnectCast(session);
            }
            function reconnectCast(session) {
                if (session.media.length > 0) {
                    var mediaSession = session.media[0];
                    if (mediaSession.media.metadata.images.length > 0) {
                        videoConfig.thumbnailSrc = mediaSession.media.metadata.images[0].url;
                    }
                    videoConfig.title = mediaSession.media.metadata.title;
                    videoConfig.mimeType = mediaSession.media.contentType;
                    videoConfig.setVideoSrc(mediaSession.media.contentId);
                    var textTracks = [];
                    for (var key in mediaSession.media.tracks) {
                        textTracks[key] = {
                            src: mediaSession.media.tracks[key].trackContentId,
                            label: mediaSession.media.tracks[key].name,
                            language: mediaSession.media.tracks[key].language,
                            mime_type: mediaSession.media.tracks[key].trackContentType
                        };
                    }
                    videoConfig.setTextTracks(textTracks);
                    if (mediaSession.activeTrackIds != null && mediaSession.activeTrackIds.length > 0) {
                        current.textTrack.isShowed = true;
                        current.textTrack.activeLanguage = getLanguageByTextTrackId(mediaSession.activeTrackIds[0]);
                    } else {
                        current.textTrack.isShowed = false;
                        current.textTrack.activeLanguage = "";
                    }
                    var reconnect_cast_timer = null;
                    if (mediaSession.customData == null) {
                        reconnect_cast_timer = setInterval(function() {
                            if (mediaSession.customData != null) {
                                clearInterval(reconnect_cast_timer);
                                temp();
                            }
                        }, 500);
                    } else {
                        temp();
                    }
                    function temp() {
                        videoConfig.videoId = mediaSession.customData.video_id;
                        videoConfig.cppId = mediaSession.customData.cpp_id;
                        videoConfig.watchType = mediaSession.customData.watch_type;
                        castOnMediaDiscovered("Reconnect Cast", session.media[0]);
                    }
                }
            }
            function castSessionUpdateListener(isAlive) {
                if (!isAlive) {
                    session = null;
                    _logger2.default.common("[chromecast]", "the receiver is IDLE");
                    receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.IDLE;
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.CAST_IDLE));
                    if (cast_processing_timer) {
                        _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                        clearInterval(cast_processing_timer);
                        cast_processing_timer = null;
                    }
                    if (cast_info_timer) {
                        _logger2.default.common("[chromecast]", "stop cast_info_timer");
                        clearInterval(cast_info_timer);
                        cast_info_timer = null;
                    }
                }
            }
            function castReceiverListener(e) {
                if (e === "available") {
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.RECEIVER_FOUND));
                    _logger2.default.common("[chromecast]", "receiver found");
                } else {
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.RECEIVER_NOT_FOUND));
                    _logger2.default.common("[chromecast]", "receiver list empty");
                }
            }
            function castMessageListener(nameSpace, msg) {
                _logger2.default.common("[chromecast]", "receiver send message to sender:", nameSpace, msg);
                if (!msg) {
                    return;
                }
                var obj = JSON.parse(msg);
                switch (obj.dataType) {
                  case "continue":
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.CAST_RECV_MSG_VIDEOWILLEND, {
                        detail: obj
                    }));
                    break;

                  case "info":
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.CAST_RECV_MSG_INFO, {
                        detail: obj
                    }));
                    break;

                  default:
                }
            }
            function castOnError(e) {
                _logger2.default.error("[chromecast]", "sender cast failed. error:", e);
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.CAST_IDLE));
            }
            function castLaunchApp() {
                _logger2.default.common("[chromecast]", "launching receiver app...");
                if (session == null) {
                    _logger2.default.common("[chromecast]", "the receiver is LOADING");
                    receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.LOADING;
                    chrome.cast.requestSession(castOnRequestSessionSuccess, castOnLaunchError);
                } else {
                    castOnRequestSessionSuccess(session);
                }
                if (cast_processing_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                    clearInterval(cast_processing_timer);
                    cast_processing_timer = null;
                }
                if (cast_info_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_info_timer");
                    clearInterval(cast_info_timer);
                    cast_info_timer = null;
                }
            }
            function castOnRequestSessionSuccess(e) {
                _logger2.default.common("[chromecast]", "session request successful", "session id: " + e.sessionId, "event: ", e);
                _logger2.default.common("[chromecast]", "the receiver is READY");
                session = e;
                receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.READY;
                current.volume.isMuted = session.receiver.volume.muted;
                current.volume.value = session.receiver.volume.level * 100;
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.CAST_CONNECTION, {
                    detail: {
                        receiverName: session.receiver.friendlyName
                    }
                }));
                session.addUpdateListener(castSessionUpdateListener.bind(this));
                if (e && e.sessionId) {
                    session.addMessageListener("urn:x-cast:com.catchplay", castMessageListener.bind(this));
                }
            }
            function castOnLaunchError(e) {
                _logger2.default.error("[chromecast]", "launch cast failed. error:", e);
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.CAST_IDLE));
            }
            function stopCastApp(e) {
                var target_session = e || session;
                if (!target_session) {
                    return;
                }
                _logger2.default.common("[chromecast]", "the receiver is TEAR DOWN");
                receiver_status = _dictionary2.default.CHROMECASTSENDER.RECEIVER_STATUS.TEAR_DOWN;
                target_session.stop(castOnStopAppSuccess, castOnError);
                if (cast_processing_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                    clearInterval(cast_processing_timer);
                    cast_processing_timer = null;
                }
                if (cast_info_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_info_timer");
                    clearInterval(cast_info_timer);
                    cast_info_timer = null;
                }
            }
            function loadVideoAndConnectReceiver() {
                _logger2.default.common("[chromecast]", "load video");
                var mediaInfo = {};
                mediaInfo.name = videoConfig.title;
                mediaInfo.subtitle = "";
                mediaInfo.mimetype = videoConfig.mimeType;
                mediaInfo.thumbnailSrc = videoConfig.thumbnailSrc;
                mediaInfo.startSecond = videoConfig.startSecond;
                mediaInfo.activeTrackId = "";
                mediaInfo.protection = {
                    widevine: {
                        licenseUrl: videoConfig.drmConfig.widevine.licenseUrl,
                        httpRequestHeaders: {
                            customdata: videoConfig.drmConfig.widevine.license
                        }
                    },
                    playready: {
                        licenseUrl: videoConfig.drmConfig.playready.licenseUrl,
                        httpRequestHeaders: {
                            customdata: videoConfig.drmConfig.playready.license
                        }
                    }
                };
                _logger2.default.common("[chromecast]", "sender cast now. data:", mediaInfo);
                loadCastMedia(videoConfig.getVideoSrc(), videoConfig.getTextTracks(), mediaInfo);
            }
            function loadCastMedia(mediaURL, textTracks, mediaInfo) {
                if (!session) {
                    _logger2.default.warning("[chromecast]", "session not found");
                    return;
                }
                if (!mediaURL) {
                    _logger2.default.warning("[chromecast]", "mediaURL is required");
                    return;
                }
                var castInfo = new chrome.cast.media.MediaInfo(mediaURL);
                castInfo.contentType = mediaInfo.mimetype;
                castInfo.customData = {
                    protection: mediaInfo.protection
                };
                castInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
                castInfo.metadata.metadataType = chrome.cast.media.MetadataType.GENERIC;
                castInfo.metadata.title = mediaInfo.name;
                castInfo.metadata.subtitle = mediaInfo.subtitle;
                castInfo.metadata.images = [ {
                    url: mediaInfo.thumbnailSrc
                } ];
                var subtitles = [];
                for (var i = 0; i < textTracks.length; i++) {
                    var subtitle = new chrome.cast.media.Track(i, chrome.cast.media.TrackType.TEXT);
                    subtitle.trackContentId = textTracks[i].src;
                    subtitle.trackContentType = textTracks[i].mime_type;
                    subtitle.subtype = chrome.cast.media.TextTrackType.SUBTITLES;
                    subtitle.name = textTracks[i].label;
                    subtitle.language = textTracks[i].language;
                    subtitles.push(subtitle);
                }
                castInfo.tracks = subtitles;
                var request = new chrome.cast.media.LoadRequest(castInfo);
                request.autoplay = true;
                request.currentTime = mediaInfo.startSecond;
                if (mediaInfo.activeTrackId != null && textTracks.hasOwnProperty(mediaInfo.activeTrackId)) {
                    request.activeTrackIds = [ parseInt(mediaInfo.activeTrackId, 10) ];
                }
                request.customData = {
                    account_id: playerConfig.accountId,
                    video_id: videoConfig.videoId,
                    video_code: videoConfig.videoCode,
                    cpp_id: videoConfig.cppId,
                    order_id: videoConfig.orderId,
                    watch_type: videoConfig.watchType,
                    access_token: videoConfig.accessToken,
                    report_id: "",
                    isp: "",
                    cdn: _data.experience.cdn,
                    territory: videoConfig.territory,
                    sender_device_type: browserEnv.deviceType,
                    sender_device_model: browserEnv.deviceModel,
                    sender_device_os_version: browserEnv.osVersion,
                    warningCardDisplaySeconds: videoConfig.watchType == _dictionary2.default.WATCH_TYPE.LIVE ? 0 : 4,
                    ratingCardDisplaySeconds: videoConfig.watchType == _dictionary2.default.WATCH_TYPE.LIVE ? 0 : 4,
                    sender_device_sdk_version: _dictionary2.default.VERSION
                };
                session.loadMedia(request, castOnMediaDiscovered.bind(this, "loadCastMedia"), castOnMediaError);
            }
            function castOnMediaDiscovered(how, mediaSession) {
                _logger2.default.common("[chromecast]", how, "mediaSession:", mediaSession);
                _logger2.default.common("[chromecast]", "new media session id: " + mediaSession.mediaSessionId + " (" + how + ")");
                currentMediaSession = mediaSession;
                currentMediaSession.addUpdateListener(castOnMediaStatusUpdate);
                _logger2.default.common("[chromecast]", "playerstate: " + currentMediaSession.playerState);
                var textTracks = [];
                try {
                    textTracks = videoConfig.getTextTracks().map(function(textTrack) {
                        "use strict";
                        return {
                            label: textTrack.label,
                            language: textTrack.language
                        };
                    });
                } catch (err) {
                    _logger2.default.warning("[chromecast]", "get text-tracks failed", err);
                }
                _logger2.default.common("[chromecast]", "CastPlayerLoadedEvent");
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.LOADED, {
                    detail: {
                        duration: currentMediaSession.media.duration,
                        textTracks: textTracks
                    }
                }));
                var data = {
                    watch_type: videoConfig.watchType,
                    video_id: videoConfig.videoId,
                    title: videoConfig.title,
                    subtitle: "",
                    poster_src: videoConfig.thumbnailSrc,
                    duration: currentMediaSession.media.duration,
                    is_mute: current.volume.isMuted,
                    volume: current.volume.value,
                    textTracks: textTracks,
                    active_language: current.textTrack.activeLanguage
                };
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.MEDIA_DISCOVERED, {
                    detail: data
                }));
                _logger2.default.common("[chromecast]", "CastPlayerMediaDiscoveredEvent");
                if (!cast_processing_timer) {
                    cast_processing_timer = setInterval(castUpdateCurrentTime.bind(this), PROGRESS_BAR_UPDATE_DELAY);
                }
                if (!cast_info_timer) {
                    cast_info_timer = setInterval(listenReceiverInfo.bind(this), PROGRESS_BAR_UPDATE_DELAY);
                }
            }
            function castOnMediaError(e) {
                _logger2.default.error("[chromecast]", "media error:", e);
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.ERROR, {
                    detail: {
                        errorCode: 0,
                        errorMsg: "load video failed"
                    }
                }));
                _logger2.default.error("[chromecast]", "CastErrorEvent");
            }
            function castOnMediaStatusUpdate(isAlive) {
                if (isAlive) {
                    if (currentMediaSession.playerState == "PLAYING") {
                        if (progressFlag) {
                            _logger2.default.common("[chromecast]", "time: " + currentMediaSession.currentTime + ", duration: " + currentMediaSession.media.duration);
                            progressFlag = 0;
                        }
                    }
                }
                if (currentMediaSession.playerState == "IDLE") {
                    receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.IDLE;
                    _logger2.default.common("[chromecast]", "isAlive: " + isAlive);
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS_IDLE));
                    _logger2.default.common("[chromecast]", "CastPlayerIdleEvent");
                    if (cast_processing_timer) {
                        _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                        clearInterval(cast_processing_timer);
                        cast_processing_timer = null;
                    }
                    if (cast_info_timer) {
                        _logger2.default.common("[chromecast]", "stop cast_info_timer");
                        clearInterval(cast_info_timer);
                        cast_info_timer = null;
                    }
                }
                _logger2.default.common("[chromecast]", "playerstate: " + currentMediaSession.playerState);
            }
            function castUpdateCurrentTime() {
                if (!session || !currentMediaSession) {
                    return;
                }
                if (currentMediaSession.media && currentMediaSession.media.duration != null) {
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.PLAYING, {
                        detail: {
                            currentSecond: currentMediaSession.getEstimatedTime()
                        }
                    }));
                } else {
                    if (cast_processing_timer) {
                        _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                        clearInterval(cast_processing_timer);
                        cast_processing_timer = null;
                    }
                }
            }
            function listenReceiverInfo() {
                if (!session || !currentMediaSession) {
                    return;
                }
                if (session.receiver.volume.muted != current.volume.isMuted || session.receiver.volume.level * 100 != current.volume.value) {
                    current.volume.isMuted = session.receiver.volume.muted;
                    current.volume.value = session.receiver.volume.level * 100;
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.VOLUME, {
                        detail: {
                            volume: session.receiver.volume.level * 100,
                            muted: session.receiver.volume.muted
                        }
                    }));
                }
                if (currentMediaSession.playerState == "PLAYING" && receiver_player_status != _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.PLAYING) {
                    if (cast_processing_timer) {
                        _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                        clearInterval(cast_processing_timer);
                        cast_processing_timer = null;
                    }
                    receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.PLAYING;
                    cast_processing_timer = setInterval(castUpdateCurrentTime.bind(this), PROGRESS_BAR_UPDATE_DELAY);
                }
                if (currentMediaSession.playerState == "PAUSED" && receiver_player_status != _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.PAUSED) {
                    receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.PAUSED;
                    self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.PAUSED));
                }
                if (currentMediaSession.playerState == "BUFFERING" && receiver_player_status != _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.BUFFERING) {
                    receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.BUFFERING;
                }
                if (currentMediaSession.playerState == "IDLE" && receiver_player_status != _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.IDLE) {
                    receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.IDLE;
                }
            }
            function castMediaCommandSuccessCallback(info) {
                _logger2.default.common("[chromecast]", info, _dictionary2.default.LOG_TYPE.CAST_LOG);
            }
            function play() {
                if (!currentMediaSession) {
                    return;
                }
                if (cast_processing_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                    clearInterval(cast_processing_timer);
                    cast_processing_timer = null;
                }
                if (cast_info_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_info_timer");
                    clearInterval(cast_info_timer);
                    cast_info_timer = null;
                }
                receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.PLAYING;
                var playpauseresume = document.getElementById("playpauseresume");
                currentMediaSession.play(null, castMediaCommandSuccessCallback.bind(this, "playing started for " + currentMediaSession.sessionId), castOnError);
                _logger2.default.common("[chromecast]", "play started");
                cast_processing_timer = setInterval(castUpdateCurrentTime.bind(this), PROGRESS_BAR_UPDATE_DELAY);
                cast_info_timer = setInterval(listenReceiverInfo.bind(this), PROGRESS_BAR_UPDATE_DELAY);
            }
            function castMediaPauseSuccessCallback(info) {
                _logger2.default.common("[chromecast]", "paused. info:", info);
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.PAUSED));
            }
            function pause() {
                if (!currentMediaSession) {
                    return;
                }
                if (cast_processing_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                    clearInterval(cast_processing_timer);
                    cast_processing_timer = null;
                }
                receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.PAUSED;
                currentMediaSession.pause(null, castMediaPauseSuccessCallback.bind(this, "paused " + currentMediaSession.sessionId), castOnError);
            }
            function castMediaStopSuccessCallback(info) {
                _logger2.default.common("[chromecast]", "stop. info:", info);
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.PAUSED));
            }
            function stop() {
                if (!currentMediaSession) {
                    return;
                }
                if (cast_processing_timer) {
                    _logger2.default.common("[chromecast]", "stop cast_processing_timer");
                    clearInterval(cast_processing_timer);
                    cast_processing_timer = null;
                }
                receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.IDLE;
                currentMediaSession.stop(null, castMediaStopSuccessCallback.bind(this, "stop " + currentMediaSession.sessionId), castOnError);
            }
            function castReceiverVolumeCommandSuccessCallback() {
                self.element.dispatchEvent(new CustomEvent(_dictionary2.default.CHROMECASTSENDER.EVENTS.VOLUME, {
                    detail: {
                        volume: session.receiver.volume.level * 100,
                        muted: session.receiver.volume.muted
                    }
                }));
            }
            function changeVolume(position) {
                if (!currentMediaSession) {
                    return;
                }
                current.volume.value = position;
                session.setReceiverVolumeLevel(position / 100, castReceiverVolumeCommandSuccessCallback.bind(this, "changeVolume"), castOnError);
                _logger2.default.common("[chromecast]", "volume adjust: " + current.volume.value / 100);
            }
            function mute(isMuted) {
                if (!currentMediaSession) {
                    return;
                }
                current.volume.isMuted = isMuted;
                session.setReceiverMuted(isMuted, castReceiverVolumeCommandSuccessCallback.bind(this, "mute"), castOnError);
                _logger2.default.common("[chromecast]", "muted: " + (isMuted ? "on" : "odd"));
            }
            function seek(second) {
                _logger2.default.common("[chromecast]", "seeking. session id: " + currentMediaSession.sessionId + " redirect to " + second);
                progressFlag = 0;
                var request = new chrome.cast.media.SeekRequest();
                request.currentTime = second;
                currentMediaSession.seek(request, castOnSeekSuccess.bind(this, "media seek done"), castOnError);
            }
            function castOnSeekSuccess(info) {
                _logger2.default.common("[chromecast]", info, _dictionary2.default.LOG_TYPE.CAST_LOG);
                setTimeout(function() {
                    progressFlag = 1;
                }, PROGRESS_BAR_UPDATE_DELAY);
            }
            function getTextTrackIdByLanguage(language) {
                var trackId = null;
                videoConfig.getTextTracks().forEach(function(textTrack, i) {
                    "use strict";
                    if (language == textTrack.language) {
                        trackId = i;
                    }
                });
                return trackId;
            }
            function getLanguageByTextTrackId(trackId) {
                var language = "";
                videoConfig.getTextTracks().forEach(function(textTrack, i) {
                    "use strict";
                    if (trackId == i) {
                        language = textTrack.language;
                    }
                });
                return language;
            }
            function changeSubtitle(language) {
                var textTrackId = getTextTrackIdByLanguage(language);
                var activeTrackIds = [];
                if (isNaN(parseInt(textTrackId))) {
                    activeTrackIds = [];
                    current.textTrack.isShowed = false;
                    current.textTrack.activeLanguage = "";
                } else {
                    activeTrackIds = [ parseInt(textTrackId) ];
                    current.textTrack.isShowed = true;
                    current.textTrack.activeLanguage = language;
                }
                var request = new chrome.cast.media.EditTracksInfoRequest(activeTrackIds);
                currentMediaSession.editTracksInfo(request, castMediaCommandSuccessCallback.bind(this, "changeSubtitle done"), castOnError);
            }
            function openSubtitle(isOpened) {
                var activeTrackIds = [];
                if (isOpened) {
                    current.textTrack.isShowed = true;
                    var activeTextTrackId = getTextTrackIdByLanguage(current.textTrack.activeLanguage);
                    if (activeTextTrackId == null) {
                        activeTrackIds = [];
                    } else {
                        activeTrackIds = [ parseInt(activeTextTrackId) ];
                    }
                } else {
                    current.textTrack.isShowed = false;
                    activeTrackIds = [];
                }
                var request = new chrome.cast.media.EditTracksInfoRequest(activeTrackIds);
                currentMediaSession.editTracksInfo(request, castMediaCommandSuccessCallback.bind(this, "changeSubtitle done"), castOnError);
            }
            AsiaPlayChromecastSender.prototype.castLaunch = function() {
                castLaunchApp();
            };
            AsiaPlayChromecastSender.prototype.loadVideo = function(parameters) {
                if (receiver_player_status == _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.LOADING) {
                    _logger2.default.warning("[chromecast]", "receiver is still loading");
                    return false;
                }
                videoConfig = new _videoConfig2.default(parameters);
                _logger2.default.common("[chromecast]", "receiver is LOADING");
                receiver_player_status = _dictionary2.default.CHROMECASTSENDER.PLAYER_STATUS.LOADING;
                _promisePolyfill2.default.all([ _api2.default.getVideoInfoNoSign(browserEnv, videoConfig, playerConfig), _api2.default.getDrmLicense(videoConfig, playerConfig), _api2.default.getReportId(videoConfig, playerConfig) ]).then(function(results) {
                    results.forEach(function(result) {
                        _logger2.default.common("[chromecast]", result);
                    });
                    current.reportId = results.pop();
                    loadVideoAndConnectReceiver();
                }).catch(function(err) {
                    _logger2.default.error(err);
                });
            };
            AsiaPlayChromecastSender.prototype.play = function() {
                play();
            };
            AsiaPlayChromecastSender.prototype.pause = function() {
                pause();
            };
            AsiaPlayChromecastSender.prototype.stop = function() {
                stop();
            };
            AsiaPlayChromecastSender.prototype.seek = function(second) {
                seek(second);
            };
            AsiaPlayChromecastSender.prototype.changeVolume = function(position) {
                changeVolume(position);
            };
            AsiaPlayChromecastSender.prototype.mute = function(is_mute) {
                mute(is_mute);
            };
            AsiaPlayChromecastSender.prototype.changeSubtitle = function(language) {
                changeSubtitle(language);
            };
            AsiaPlayChromecastSender.prototype.openSubtitle = function(is_opened) {
                openSubtitle(is_opened);
            };
            AsiaPlayChromecastSender.prototype.stopCast = function() {
                stopCastApp();
            };
            AsiaPlayChromecastSender.prototype.on = function(eventName, callBack) {
                self.element.addEventListener(eventName, callBack, false);
            };
        });
    },
    "./src/asiaplay-dictionary.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = CatchPlayPlayBack = {
            SDK_VERSION: _dictionary2.default.VERSION,
            WATCH_TYPE: {
                MOVIE: "movie",
                TRAILER: "trailer",
                PREVIEW: "preview",
                DASH: "dash",
                HLS: "hls",
                MP4: "mp4"
            },
            PLAYER_TYPE: {
                NATIVE: "native",
                BRIGHTCOVE: "brightcove",
                CATCHPLAY: "catchplay",
                DASHJS: "dashjs"
            },
            LOG_TYPE: {
                COMMON: 1,
                WARNING: 2,
                ERROR: 4,
                CAST_LOG: 8,
                WATCHLOG_LOG: 16,
                USERACTIVE_LOG: 32
            },
            API_HOST_URL: {
                SIT: {
                    CMS_DOMAIN: _dictionary2.default.API_HOST_URL.SIT.CMS_DOMAIN,
                    VCMS_DOMAIN: _dictionary2.default.API_HOST_URL.SIT.VCMS_DOMAIN
                },
                UAT: {
                    CMS_DOMAIN: _dictionary2.default.API_HOST_URL.UAT.CMS_DOMAIN,
                    VCMS_DOMAIN: _dictionary2.default.API_HOST_URL.UAT.VCMS_DOMAIN
                },
                PROD: {
                    CMS_DOMAIN: _dictionary2.default.API_HOST_URL.PROD.CMS_DOMAIN,
                    VCMS_DOMAIN: _dictionary2.default.API_HOST_URL.PROD.VCMS_DOMAIN
                }
            },
            CastPlayer: {
                RECEIVER_STATUS: {
                    IDLE: "idle",
                    LOADING: "loading",
                    INIT: "initialize",
                    READY: "ready",
                    TEAR_DOWN: "tearDown"
                },
                PLAYER_STATUS: {
                    IDLE: "idle",
                    LOADING: "loading",
                    PLAYING: "playing",
                    BUFFERING: "buffering",
                    PAUSED: "paused"
                },
                EVENTS: {
                    INIT: "PlayerKitonInitEvent",
                    ERROR: "PlayerKitonErrorEvent",
                    RECEIVER_FOUND: "CastReceiverFound",
                    RECEIVER_NOT_FOUND: "CastReceiverNotFound",
                    CAST_CONNECTION: "CastConnectionEvent",
                    CAST_IDLE: "CastIdleEvent",
                    CAST_RECV_MSG_VIDEOWILLEND: "CastReceiverMessageVideoWillEndEvent",
                    CAST_RECV_MSG_INFO: "CastReceiverMessageInfoEvent",
                    LOADED: "CastPlayerLoadEvent",
                    MEDIA_DISCOVERED: "CastPlayerMediaDiscoveredEvent",
                    PLAYING: "CastPlayerProgressEvent",
                    PAUSED: "CastPlayerPAUSEDEvent",
                    VOLUME: "CastPlayerVloumEvent",
                    CASTPLAYER_IDLE: "CastPlayerIdleEvent"
                }
            }
        };
    },
    "./src/asiaplay-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _browserEnvDetector = __webpack_require__("./src/catchplay/core/detect/browser-env-detector.js");
        var _browserEnvDetector2 = _interopRequireDefault(_browserEnvDetector);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _errorHandler = __webpack_require__("./src/catchplay/core/error-handler.js");
        var _errorHandler2 = _interopRequireDefault(_errorHandler);
        var _eventDispatcher = __webpack_require__("./src/catchplay/core/events/event-dispatcher.js");
        var _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);
        var _catchplayPlayer = __webpack_require__("./src/catchplay/catchplay-player.js");
        var _catchplayPlayer2 = _interopRequireDefault(_catchplayPlayer);
        var _playerConfig = __webpack_require__("./src/common/player-config.js");
        var _playerConfig2 = _interopRequireDefault(_playerConfig);
        var _videoConfig = __webpack_require__("./src/common/video-config.js");
        var _videoConfig2 = _interopRequireDefault(_videoConfig);
        var _dependenciesLoader = __webpack_require__("./src/catchplay/core/plugins/dependencies-loader.js");
        var _dependenciesLoader2 = _interopRequireDefault(_dependenciesLoader);
        var _utils = __webpack_require__("./src/common/utils.js");
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        var _data = __webpack_require__("./src/analysis/experience/data.js");
        var _experienceLogger = __webpack_require__("./src/analysis/experience/experience-logger.js");
        var _experienceLogger2 = _interopRequireDefault(_experienceLogger);
        var _data2 = __webpack_require__("./src/analysis/watch/data.js");
        var _data3 = _interopRequireDefault(_data2);
        var _watchLogger = __webpack_require__("./src/analysis/watch/watch-logger.js");
        var _watchLogger2 = _interopRequireDefault(_watchLogger);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _eventTarget = __webpack_require__("./src/catchplay/core/events/event-target.js");
        var _eventTarget2 = _interopRequireDefault(_eventTarget);
        var _api = __webpack_require__("./src/common/api.js");
        var _api2 = _interopRequireDefault(_api);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = AsiaPlayPlayer = function AsiaPlayPlayer(container, cppConfig) {
            "use strict";
            var PROCESS_OF_PLAYER_STATUS = 0;
            var INIT_OF_PLAYER_STATUS = 1;
            var READY_OF_PLAYER_STATUS = 2;
            var LOAD_OF_PLAYER_STATUS = 3;
            var PLAY_OF_PLAYER_STATUS = 4;
            var PAUSE_OF_PLAYER_STATUS = 5;
            var STOP_OF_PLAYER_STATUS = 6;
            var containerDomId = "function" == typeof jQuery && container instanceof jQuery ? "#" + container.attr("id") : "#" + container.id;
            var self = this;
            var sdkStatus = INIT_OF_PLAYER_STATUS;
            var containerDom = document.querySelector(containerDomId);
            var errorHandler = new _errorHandler2.default();
            var eventDispatcher = new _eventDispatcher2.default(containerDom);
            var detector = new _browserEnvDetector2.default();
            var browserEnv = detector.getIdentity();
            var sdkPlayer = null;
            var watchLogger = null;
            var experienceLogger = null;
            var eventTarget = null;
            var playerConfig = new _playerConfig2.default(cppConfig);
            var videoConfig = null;
            _logger2.default.setDebugMode(playerConfig.debugMode);
            _logger2.default.common("player instance starts to create");
            _logger2.default.common("player-config:", playerConfig);
            _logger2.default.common("browser-env:", browserEnv);
            function validateConfig() {
                if (playerConfig.validate()) {
                    return _promisePolyfill2.default.resolve("player config is valid and has been loaded");
                }
                return _promisePolyfill2.default.reject(new _playerError2.default({
                    type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.PARAMETER_INVALID,
                    message: "player config is invalid",
                    code: "P000",
                    data: {
                        error: playerConfig.error,
                        originParams: playerConfig.originParams
                    }
                }));
            }
            function startPlayback() {
                _promisePolyfill2.default.all([ preparePlayback(), displayPolicy() ]).then(function(results) {
                    results.forEach(function(result) {
                        _logger2.default.common(result);
                    });
                    sdkPlayer.play();
                }).catch(function(err) {
                    _logger2.default.error(err);
                    stopVideo().then(function(result) {
                        _logger2.default.common(result);
                        eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_STOP, {
                            watchType: videoConfig.watchType
                        });
                    }).catch(function(err) {
                        _logger2.default.error("player stop failed " + err.toString());
                        errorHandler.dispatchErrorEvent(new _playerError2.default({
                            type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.UNKNOWN,
                            message: "player stop failed. message: " + err.toString(),
                            data: detector.getIdentity(),
                            code: "P004"
                        }), containerDom);
                    });
                });
            }
            function displayPolicy() {
                return new _promisePolyfill2.default(function(resolve) {
                    showWarningCard().then(function(result) {
                        _logger2.default.common(result);
                        return showRatingCard();
                    }).then(function(result) {
                        _logger2.default.common(result);
                        resolve("display policy has been completed");
                    }).catch(function(err) {
                        resolve("display policy failed but playback still in process. message: " + err.toString());
                    });
                });
            }
            function preparePlayback() {
                return new _promisePolyfill2.default(function(resolve, reject) {
                    _promisePolyfill2.default.all([ _api2.default.getVideoInfo(browserEnv, videoConfig, playerConfig), _api2.default.getDrmLicense(videoConfig, playerConfig) ]).then(function(results) {
                        results.forEach(function(result) {
                            _logger2.default.common(result);
                        });
                        return _promisePolyfill2.default.resolve("all data of video necessary already loaded successful");
                    }).then(function(result) {
                        _logger2.default.common(result);
                        sdkStatus = LOAD_OF_PLAYER_STATUS;
                        return loadVideo();
                    }).then(function(result) {
                        _logger2.default.common(result);
                        resolve("playback preparing has been completed");
                    }).catch(function(err) {
                        if (err instanceof _playerError2.default && err.type == _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS) {
                            var dispatchErrorCode = "P001";
                            var dispatchErrorMsg = err.message;
                            if (Object.keys(err.data).length !== 0) {
                                switch (err.data.code) {
                                  case 880106:
                                  case 880107:
                                    dispatchErrorCode = "P003";
                                    break;

                                  default:
                                    dispatchErrorCode = "P001";
                                    break;
                                }
                                if (!!err.data.message) {
                                    dispatchErrorMsg = err.data.message;
                                }
                            }
                            errorHandler.dispatchErrorEvent(new _playerError2.default({
                                type: _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS,
                                code: dispatchErrorCode,
                                message: dispatchErrorMsg
                            }), containerDom);
                        } else if (err instanceof _playerError2.default) {
                            errorHandler.dispatchErrorEvent(err, containerDom);
                        } else {
                            errorHandler.dispatchErrorEvent(new _playerError2.default({
                                type: _dictionary2.default.PLAYER_ERROR_TYPE.UNKNOWN,
                                message: err.toString(),
                                code: "P004"
                            }), containerDom);
                        }
                        reject("prepare playback failed");
                    });
                });
            }
            function showWarningCard() {
                if (videoConfig.isCustomPlayback) {
                    return _promisePolyfill2.default.resolve("skip to show warning-card. because the custom playback is enabled");
                }
                if (videoConfig.startSecond > 0) {
                    return _promisePolyfill2.default.resolve("skip to show warning-card. because the start-second is not zero(0). current start-second is " + videoConfig.startSecond + "s");
                }
                if (videoConfig.watchType === _dictionary2.default.WATCH_TYPE.TRAILER) {
                    return _promisePolyfill2.default.resolve("skip to show warning-card. because the watch-type is " + videoConfig.watchType);
                }
                if (videoConfig.warningCardDisplaySeconds === 0) {
                    return _promisePolyfill2.default.resolve("skip to show warning-card. because the warningCardDisplaySeconds is 0");
                }
                return new _promisePolyfill2.default(function(resolve) {
                    var warningCardDomId = "warning-card";
                    var oldWarningCardElement = document.querySelector("#" + warningCardDomId);
                    var newWarningCardElement = document.createElement("div");
                    var warningCardUrl = "https://ols-ww000-cp.akamaized.net/Common/Copyright.jpg";
                    var warningCardImage = new Image();
                    newWarningCardElement.id = warningCardDomId;
                    newWarningCardElement.style.cssText = "display: none;width: 100%; height: 100%; position: absolute; top:0; left:0; background-position: 50%; background-size: contain; background-color: black; background-repeat: no-repeat; z-index: 1;";
                    if (oldWarningCardElement instanceof HTMLElement) {
                        containerDom.replaceChild(newWarningCardElement, oldWarningCardElement);
                    } else {
                        containerDom.appendChild(newWarningCardElement);
                    }
                    warningCardImage.addEventListener("load", function() {
                        newWarningCardElement.style.backgroundImage = 'url("' + warningCardImage.src + '")';
                        newWarningCardElement.style.display = "block";
                        setTimeout(function() {
                            newWarningCardElement.style.display = "none";
                            resolve("warning-card already displayed");
                        }, videoConfig.warningCardDisplaySeconds * 1e3);
                    });
                    warningCardImage.addEventListener("error", function() {
                        newWarningCardElement.style.display = "none";
                        resolve("skip to show warning-card. image not found");
                    });
                    oldWarningCardElement = null;
                    warningCardImage.src = warningCardUrl;
                });
            }
            function showRatingCard() {
                if (videoConfig.isCustomPlayback) {
                    return _promisePolyfill2.default.resolve("skip to show rating-card. because the custom playback is enabled");
                }
                if (videoConfig.startSecond > 0) {
                    return _promisePolyfill2.default.resolve("skip to show rating-card. because the start-second is not zero(0). current start-second is " + videoConfig.startSecond + "s");
                }
                if (videoConfig.watchType === _dictionary2.default.WATCH_TYPE.TRAILER) {
                    return _promisePolyfill2.default.resolve("skip to show rating-card. because the watch-type is " + videoConfig.watchType);
                }
                if (videoConfig.ratingCardDisplaySeconds === 0) {
                    return _promisePolyfill2.default.resolve("skip to show warning-card. because the ratingCardDisplaySeconds is 0");
                }
                return new _promisePolyfill2.default(function(resolve) {
                    var ratingCardDomId = "rating-card";
                    var oldRatingCardElement = document.querySelector("#" + ratingCardDomId);
                    var newRatingCardElement = document.createElement("div");
                    var ratingCardUrl = "https://durvstsvhbuoh.cloudfront.net/" + videoConfig.videoCode + "/videos/preroll/RatingCard.jpg";
                    var ratingCardImage = new Image();
                    newRatingCardElement.id = ratingCardDomId;
                    newRatingCardElement.style.cssText = "display: none;width: 100%; height: 100%; position: absolute; top:0; left:0; background-position: 50%; background-size: contain; background-color: black; background-repeat: no-repeat; z-index: 2;";
                    if (oldRatingCardElement instanceof HTMLElement) {
                        containerDom.replaceChild(newRatingCardElement, oldRatingCardElement);
                    } else {
                        containerDom.appendChild(newRatingCardElement);
                    }
                    ratingCardImage.addEventListener("load", function() {
                        newRatingCardElement.style.backgroundImage = 'url("' + ratingCardImage.src + '")';
                        newRatingCardElement.style.display = "block";
                        setTimeout(function() {
                            newRatingCardElement.style.display = "none";
                            resolve("rating-card already displayed");
                        }, videoConfig.ratingCardDisplaySeconds * 1e3);
                    });
                    ratingCardImage.addEventListener("error", function() {
                        newRatingCardElement.style.display = "none";
                        resolve("skip to show rating-card. image not found");
                    });
                    oldRatingCardElement = null;
                    ratingCardImage.src = ratingCardUrl;
                });
            }
            function loadVideo() {
                if (_logger2.default.isEnabled()) {
                    _logger2.default.common("video-config", JSON.parse(JSON.stringify(videoConfig)));
                    _logger2.default.common("video-src", videoConfig.getVideoSrc());
                }
                return new _promisePolyfill2.default(function(resolve, reject) {
                    eventTarget = new _eventTarget2.default();
                    sdkPlayer = new _catchplayPlayer2.default({
                        isAutoPlay: videoConfig.isAutoPlay,
                        mimeType: videoConfig.mimeType,
                        drmConfig: videoConfig.drmConfig,
                        videoSrc: videoConfig.getVideoSrc(),
                        textTracks: videoConfig.getTextTracks(),
                        startSecond: videoConfig.startSecond,
                        duration: videoConfig.watchType == _dictionary2.default.WATCH_TYPE.PREVIEW ? playerConfig.previewTime : undefined,
                        logger: _logger2.default,
                        errorHandler: errorHandler,
                        containerDom: containerDom,
                        containerEventDispatcher: eventDispatcher,
                        eventTarget: eventTarget,
                        uaParser: detector.getUAParser(),
                        signQueryParam: videoConfig.signQueryParam
                    });
                    try {
                        experienceLogger = new _experienceLogger2.default(playerConfig, videoConfig, detector, sdkPlayer, eventTarget, containerDom, errorHandler);
                        experienceLogger.start();
                        experienceLogger.createReport().then(function(result) {
                            _logger2.default.common(result);
                        }).catch(function(err) {
                            _logger2.default.warning("stop collect experience logs", err.toString());
                            experienceLogger.reset();
                        });
                    } catch (err) {
                        _logger2.default.warning("[ExperienceLogger] execute failed", err);
                        experienceLogger = null;
                    }
                    sdkPlayer.initialize().then(function(result) {
                        _logger2.default.common(result);
                        var videoEventRegister = new _promisePolyfill2.default(function(registerResolve) {
                            eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY_START, function() {
                                _logger2.default.common("start play. the watch type now is: " + videoConfig.watchType);
                                videoConfig.duration = sdkPlayer.getVideoElement().duration;
                                try {
                                    _data3.default.firstFrameTime = (0, _utils.nowTimestampISOString)();
                                    watchLogger = new _watchLogger2.default(playerConfig, videoConfig, sdkPlayer, eventTarget, containerDom, errorHandler);
                                    watchLogger.start();
                                } catch (err) {
                                    _logger2.default.warning("[WatchLogger] execute failed", err);
                                    watchLogger = null;
                                }
                                if (videoConfig.watchType == _dictionary2.default.WATCH_TYPE.PREVIEW) {
                                    (function countdownToClosePreview() {
                                        if (!sdkPlayer) {
                                            _logger2.default.common("the player already stop. exit the preview timer.");
                                            return;
                                        }
                                        if (sdkPlayer.getVideoElement() instanceof HTMLElement) {
                                            if (sdkPlayer.getVideoElement().currentTime > playerConfig.previewTime) {
                                                stopVideo().then(function(result) {
                                                    _logger2.default.common(result);
                                                    eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_STOP, {
                                                        watchType: videoConfig.watchType
                                                    });
                                                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                                                        message: "video preview is ending",
                                                        code: "P005",
                                                        type: _dictionary2.default.PLAYER_ERROR_TYPE.VIDEO.PREVIEW_TIME_UP
                                                    }), containerDom);
                                                }).catch(function(err) {
                                                    _logger2.default.error("player restart failed " + err.toString());
                                                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                                                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.RESTART_FAIL,
                                                        message: "player restart failed. message: " + err.toString(),
                                                        data: detector.getIdentity(),
                                                        code: "P004"
                                                    }), containerDom);
                                                });
                                            } else {
                                                setTimeout(countdownToClosePreview, 1e3);
                                            }
                                        }
                                    })();
                                }
                            });
                            eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_END, function(event) {
                                _logger2.default.common("video is ending");
                                stopVideo().then(function(result) {
                                    _logger2.default.common(result);
                                    eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_STOP, {
                                        watchType: videoConfig.watchType
                                    });
                                }).catch(function(err) {
                                    _logger2.default.error("player restart failed " + err.toString());
                                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.RESTART_FAIL,
                                        message: "player failed. message: " + err.toString(),
                                        data: detector.getIdentity(),
                                        code: "P004"
                                    }), containerDom);
                                });
                            });
                            eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_UNKNOWN_ERROR, function(event) {
                                _logger2.default.error("unknown error. this video has been interrupted(" + JSON.stringify(event.detail) + ")");
                                stopVideo().then(function(result) {
                                    _logger2.default.common(result);
                                    eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_STOP, {
                                        watchType: videoConfig.watchType
                                    });
                                }).catch(function(err) {
                                    _logger2.default.error("player restart failed " + err.toString());
                                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.RESTART_FAIL,
                                        message: "player failed. message: " + err.toString(),
                                        data: detector.getIdentity(),
                                        code: "P004"
                                    }), containerDom);
                                });
                            });
                            eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_NEED_TO_RESTART, function(event) {
                                _logger2.default.warning("player and video will be reload and seek to: " + event.detail.startSecond + "s");
                                _logger2.default.warning("restart event catch event-data:", event.detail);
                                videoConfig.startSecond = event.detail.startSecond;
                                videoConfig.isAutoPlay = event.detail.isAutoPlay;
                                restart();
                            });
                            eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_WATCH_LOG_PLAYBACK_ILLEGAL, function(event) {
                                _logger2.default.warning("playback illegal from watch-logger.");
                                if (event.detail.isShouldStop) {
                                    stopVideo().then(function(result) {
                                        _logger2.default.common(result);
                                        eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_STOP, {
                                            watchType: videoConfig.watchType
                                        });
                                    }).catch(function(err) {
                                        _logger2.default.error("player restart failed " + err.toString());
                                        errorHandler.dispatchErrorEvent(new _playerError2.default({
                                            type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.RESTART_FAIL,
                                            message: "player failed. message: " + err.toString(),
                                            data: detector.getIdentity(),
                                            code: "P004"
                                        }), containerDom);
                                    });
                                }
                            });
                            registerResolve("registered events successful");
                        });
                        var videoDetectReady = new _promisePolyfill2.default(function(readyResolve) {
                            function detectReadyHandler(done) {
                                done("video element is ready");
                            }
                            eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_READY_START, detectReadyHandler(readyResolve));
                        });
                        return new _promisePolyfill2.default(function(waitForVideoPrepareResolved) {
                            _promisePolyfill2.default.all([ videoEventRegister, videoDetectReady ]).then(function(results) {
                                results.forEach(function(result) {
                                    _logger2.default.common(result);
                                });
                                waitForVideoPrepareResolved("video prepared already.");
                            });
                        });
                    }).then(function(result) {
                        _logger2.default.common(result);
                        sdkStatus = LOAD_OF_PLAYER_STATUS;
                        _data.experience.loadedPlaybackDoneAt = Date.now();
                        _logger2.default.common("add canplay handler");
                        eventTarget.addEventListener(_dictionary2.default.EVENTS.CORE_VIDEO_READY_START, detectCanplayHandler);
                        resolve("player is ready to play");
                    }).catch(function(err) {
                        _logger2.default.error("player error", err);
                        reject("player setup failed");
                    });
                });
            }
            function stopVideo() {
                sdkStatus = STOP_OF_PLAYER_STATUS;
                var currentTime = videoConfig.duration;
                if (!!sdkPlayer && !!sdkPlayer.getVideoElement()) {
                    try {
                        currentTime = sdkPlayer.getVideoElement().currentTime;
                    } catch (err) {
                        _logger2.default.warning("can not find video element. message: " + err.toString());
                    }
                }
                eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_STOP, {
                    detail: {
                        currentTime: currentTime
                    }
                }));
                var cleanup = function cleanup() {
                    _data3.default.reset();
                    _data.experience.reset();
                    sdkPlayer = null;
                    eventTarget = null;
                    experienceLogger = null;
                    return _promisePolyfill2.default.resolve("stop and reset player");
                };
                var stopWatchLogger = function stopWatchLogger() {
                    if (!!watchLogger) {
                        watchLogger.end();
                        watchLogger = null;
                        return _promisePolyfill2.default.resolve("stop watch-logger completed");
                    }
                    return _promisePolyfill2.default.resolve("skip to stop watch-logger. the watch-logger is null.");
                };
                var stopExperienceLogger = function stopExperienceLogger() {
                    if (!!experienceLogger) {
                        return new _promisePolyfill2.default(function(resolve) {
                            experienceLogger.end().then(function(result) {
                                _logger2.default.common(result);
                                resolve("stop experience-logger completed");
                            }).catch(function(err) {
                                _logger2.default.common(err.toString());
                                resolve("stop experience-logger failed but stop process can still work");
                            });
                        });
                    }
                    return _promisePolyfill2.default.resolve("skip to stop experience-logger. the experience-logger is null.");
                };
                return new _promisePolyfill2.default(function(resolve) {
                    if (!!sdkPlayer) {
                        try {
                            sdkPlayer.dispose();
                        } catch (err) {
                            _logger2.default.warning("player dispose failed. but stop process still work fine. message: " + err.toString());
                        }
                    }
                    _promisePolyfill2.default.all([ stopWatchLogger(), stopExperienceLogger() ]).then(function(results) {
                        results.forEach(function(result) {
                            _logger2.default.common(result);
                        });
                        return cleanup();
                    }).then(function(result) {
                        _logger2.default.common(result);
                        resolve("stop player completed and successful");
                    }).catch(function(err) {
                        _logger2.default.warning(err.toString());
                        cleanup().then(function(result) {
                            _logger2.default.common(result);
                            resolve("stop player failed but but player will cleanup");
                        });
                    });
                });
            }
            function restart() {
                stopVideo().then(function(result) {
                    _logger2.default.common(result);
                    return loadVideo();
                }).then(function(result) {
                    _logger2.default.common(result);
                    sdkPlayer.play();
                }).catch(function(err) {
                    _logger2.default.error("player restart failed " + err.toString());
                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.RESTART_FAIL,
                        message: "player restart failed. message: " + err.toString(),
                        data: detector.getIdentity(),
                        code: "P004"
                    }), containerDom);
                });
            }
            function funcBlocking() {
                _logger2.default.error("this browser does not support");
                errorHandler.dispatchErrorEvent(new _playerError2.default({
                    type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.BROWSER_NOT_SUPPORT,
                    message: "this browser does not support",
                    data: detector.getIdentity(),
                    code: "P013"
                }), containerDom);
            }
            function validate() {
                _logger2.default.common("sdkStatus is:", sdkStatus);
                if (!detector.isSupport()) {
                    funcBlocking();
                    return false;
                }
                if (sdkStatus < LOAD_OF_PLAYER_STATUS || sdkStatus == STOP_OF_PLAYER_STATUS) {
                    _logger2.default.warning("player has been shutdown. please reset");
                    return false;
                }
                return true;
            }
            function detectCanplayHandler() {
                _logger2.default.common("handler trigger sdk canplay event");
                eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_CANPLAY, {
                    watchType: videoConfig.watchType
                });
            }
            _logger2.default.common("player instance is creating(SOP)...");
            validateConfig().then(function(result) {
                _logger2.default.common(result);
                return _api2.default.getPlayerType(playerConfig);
            }).then(function(result) {
                _logger2.default.common(result);
                playerConfig.playerType = _dictionary2.default.PLAYER_TYPE.CATCHPLAY;
                var dependenciesLoader = new _dependenciesLoader2.default(detector);
                return dependenciesLoader.loadScript({
                    xhook: _data.experience
                });
            }).then(function(result) {
                _logger2.default.common(result);
                _logger2.default.common("player initialize successful");
                sdkStatus = READY_OF_PLAYER_STATUS;
                eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_INIT, {
                    isSupport: detector.isSupport()
                });
                if (!detector.isSupport()) {
                    funcBlocking();
                }
            }).catch(function(err) {
                if (err instanceof _playerError2.default) {
                    _logger2.default.error("load config failed. code: " + err.code + " message: " + err.message);
                    errorHandler.dispatchErrorEvent(err, containerDom);
                } else {
                    _logger2.default.error("something's warning", err);
                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                        message: err.toString(),
                        code: "P001"
                    }), containerDom);
                }
            });
            _logger2.default.common("player instance is creating(EOP)...");
            this.playVideo = function(parameters) {
                if (!detector.isSupport()) {
                    funcBlocking();
                    return false;
                }
                _data3.default.reset();
                _data.experience.reset();
                videoConfig = new _videoConfig2.default(parameters);
                _logger2.default.common("video-config:", videoConfig);
                if (!videoConfig.validate()) {
                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.PARAMETER_INVALID,
                        message: "video config is invalid",
                        code: "P000",
                        data: {
                            error: videoConfig.error,
                            originParams: videoConfig.originParams
                        }
                    }), containerDom);
                    return;
                }
                if (sdkStatus >= LOAD_OF_PLAYER_STATUS && sdkStatus < STOP_OF_PLAYER_STATUS) {
                    self.play();
                    return;
                } else if (sdkStatus == PROCESS_OF_PLAYER_STATUS) {
                    _logger2.default.warning("player will start playing in processing");
                    return;
                } else if (sdkStatus == INIT_OF_PLAYER_STATUS) {
                    _logger2.default.warning("player is still initializing");
                    return;
                }
                _logger2.default.common("play video. playback rule is: " + videoConfig.watchType + " and video-src is: " + videoConfig.getVideoSrc());
                if ((0, _utils.isIncludesIn)(_videoConfig.watchTypeWhitelist, videoConfig.watchType)) {
                    sdkStatus = PROCESS_OF_PLAYER_STATUS;
                    _data3.default.launchTime = (0, _utils.nowTimestampISOString)();
                    startPlayback();
                } else {
                    var watchTypeWhitelistString = _videoConfig.watchTypeWhitelist.join(",");
                    errorHandler.dispatchErrorEvent(new _playerError2.default({
                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.PARAMETER_INVALID,
                        message: "custom playback does not support yet. and you should set [watchType] scope in [" + watchTypeWhitelistString + "] context",
                        code: "P000"
                    }), containerDom);
                }
            };
            this.play = function() {
                if (validate()) {
                    sdkStatus = PLAY_OF_PLAYER_STATUS;
                    eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY, {
                        detail: null
                    }));
                    _logger2.default.common("play");
                    sdkPlayer.play();
                    return true;
                }
                return false;
            };
            this.pause = function() {
                if (validate()) {
                    sdkStatus = PAUSE_OF_PLAYER_STATUS;
                    eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_PAUSE, {
                        detail: null
                    }));
                    _logger2.default.common("pause");
                    sdkPlayer.pause();
                    return true;
                }
                return false;
            };
            this.moveForwardbySecond = function(seconds) {
                if (validate()) {
                    seconds = parseInt(seconds);
                    if (isNaN(seconds)) {
                        seconds = 10;
                    }
                    var redirectTo = sdkPlayer.getVideoElement().currentTime + seconds;
                    if (redirectTo >= videoConfig.duration) {
                        redirectTo = videoConfig.duration;
                    }
                    _logger2.default.common("forward to " + redirectTo + "s");
                    self.seekToCurrentSecond(redirectTo);
                    return true;
                }
                return false;
            };
            this.moveBackwardbySecond = function(seconds) {
                if (validate()) {
                    seconds = parseInt(seconds);
                    if (isNaN(seconds)) {
                        seconds = 10;
                    }
                    var redirectTo = sdkPlayer.getVideoElement().currentTime - seconds;
                    if (redirectTo <= 0) {
                        redirectTo = 0;
                    }
                    _logger2.default.common("backward to " + redirectTo + "s");
                    self.seekToCurrentSecond(redirectTo);
                    return true;
                }
                return false;
            };
            this.seekToCurrentSecond = function(seconds) {
                if (validate()) {
                    eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_SEEKING, {
                        detail: {
                            currentTime: seconds
                        }
                    }));
                    _logger2.default.common("redirect to " + seconds + "s. video readyState is:" + sdkPlayer.getVideoElement().readyState);
                    sdkPlayer.seekTo(seconds);
                    return true;
                }
                return false;
            };
            this.enterFullScreen = function() {
                if (validate()) {
                    _logger2.default.common("enter full screen");
                    sdkPlayer.enterFullScreen();
                    return true;
                }
                return false;
            };
            this.exitFullScreen = function() {
                if (validate()) {
                    _logger2.default.common("exit full screen");
                    sdkPlayer.exitFullScreen();
                }
                return false;
            };
            this.muted = function(isMute) {
                if (validate()) {
                    isMute = isMute === true;
                    _logger2.default.common("muted is: " + isMute);
                    sdkPlayer.muted(isMute);
                    return true;
                }
                return false;
            };
            this.changeSpeedRate = function(value) {
                if (validate()) {
                    eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_SPEED_RATECHANGE, {
                        detail: {
                            speedRate: value
                        }
                    }));
                    _logger2.default.common("change playback rate to: " + value);
                    sdkPlayer.changeSpeedRate(value);
                    return true;
                }
                return false;
            };
            this.changeVolume = function(position) {
                if (validate()) {
                    _logger2.default.common("change volume to: " + position);
                    sdkPlayer.changeVolume(position);
                    return true;
                }
                return false;
            };
            this.changeSubtitle = function(activeLanguage) {
                if (validate()) {
                    eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_TEXT_TRACK_CHANGE, {
                        detail: {
                            language: activeLanguage
                        }
                    }));
                    _logger2.default.common("change subtitle to: " + activeLanguage);
                    sdkPlayer.changeSubtitle(activeLanguage);
                    return true;
                }
                return false;
            };
            this.openSubtitle = function(isEnable) {
                if (validate()) {
                    eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_TEXT_TRACK_CHANGE, {
                        detail: {
                            enable: isEnable
                        }
                    }));
                    _logger2.default.common("enable subtitle is: " + isEnable);
                    sdkPlayer.enableSubtitle(isEnable);
                    return true;
                }
                return false;
            };
            this.dispose = function() {
                _logger2.default.common("dispose");
                if (validate()) {
                    stopVideo().then(function(result) {
                        _logger2.default.common(result);
                        eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_STOP, {
                            watchType: videoConfig.watchType
                        });
                    }).catch(function(err) {
                        _logger2.default.error("player dispose failed. message: " + err.toString());
                        eventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_STOP, {
                            watchType: videoConfig.watchType
                        });
                    });
                }
            };
            this.setFrontBuffer = function(seconds) {
                seconds = parseInt(seconds);
                if (isNaN(seconds) || seconds <= 0) {
                    return false;
                }
                _logger2.default.common("set frontbuffer");
                sdkPlayer.setFrontBuffer(seconds);
            };
            this.setBackBuffer = function(seconds) {
                seconds = parseInt(seconds);
                if (isNaN(seconds) || seconds <= 0) {
                    return false;
                }
                _logger2.default.common("set backbuffer");
                sdkPlayer.setBackBuffer(seconds);
            };
            this.airPlay = function() {
                if (validate()) {
                    sdkPlayer.airPlay();
                    return true;
                }
                return false;
            };
            this.openLog = function() {
                sdkPlayer.enableLog(true);
            };
            this.closeLog = function() {
                sdkPlayer.enableLog(false);
            };
            this.changeQuality = function(quality) {
                sdkPlayer.changeQuality(quality);
            };
            this.autoSwitchQuality = function() {
                sdkPlayer.autoSwitchQuality();
            };
            this.info = function() {
                if (validate()) {
                    return {
                        playerConfig: JSON.parse(JSON.stringify(playerConfig)),
                        videoConfig: JSON.parse(JSON.stringify(videoConfig)),
                        coreEventTarget: eventTarget,
                        env: detector.getIdentity(),
                        isSupport: detector.isSupport()
                    };
                }
                return {};
            };
            _logger2.default.common("player instance creation completed");
        };
    },
    "./src/catchplay/catchplay-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _sdkPlayer = __webpack_require__("./src/common/sdk-player.js");
        var _sdkPlayer2 = _interopRequireDefault(_sdkPlayer);
        var _basicPlayer = __webpack_require__("./src/catchplay/core/browsers/basic-player.js");
        var _basicPlayer2 = _interopRequireDefault(_basicPlayer);
        var _webosPlayer = __webpack_require__("./src/catchplay/core/browsers/webos-player.js");
        var _webosPlayer2 = _interopRequireDefault(_webosPlayer);
        var _safariPlayer = __webpack_require__("./src/catchplay/core/browsers/safari-player.js");
        var _safariPlayer2 = _interopRequireDefault(_safariPlayer);
        var _chromePlayer = __webpack_require__("./src/catchplay/core/browsers/chrome-player.js");
        var _chromePlayer2 = _interopRequireDefault(_chromePlayer);
        var _firefoxPlayer = __webpack_require__("./src/catchplay/core/browsers/firefox-player.js");
        var _firefoxPlayer2 = _interopRequireDefault(_firefoxPlayer);
        var _edgePlayer = __webpack_require__("./src/catchplay/core/browsers/edge-player.js");
        var _edgePlayer2 = _interopRequireDefault(_edgePlayer);
        var _operaPlayer = __webpack_require__("./src/catchplay/core/browsers/opera-player.js");
        var _operaPlayer2 = _interopRequireDefault(_operaPlayer);
        var _iosSafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-safari-player.js");
        var _iosSafariPlayer2 = _interopRequireDefault(_iosSafariPlayer);
        var _iosChromePlayer = __webpack_require__("./src/catchplay/core/browsers/ios-chrome-player.js");
        var _iosChromePlayer2 = _interopRequireDefault(_iosChromePlayer);
        var _ios11SafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-11-safari-player.js");
        var _ios11SafariPlayer2 = _interopRequireDefault(_ios11SafariPlayer);
        var _ios11ChromePlayer = __webpack_require__("./src/catchplay/core/browsers/ios-11-chrome-player.js");
        var _ios11ChromePlayer2 = _interopRequireDefault(_ios11ChromePlayer);
        var _ios10SafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-10-safari-player.js");
        var _ios10SafariPlayer2 = _interopRequireDefault(_ios10SafariPlayer);
        var _ios10ChromePlayer = __webpack_require__("./src/catchplay/core/browsers/ios-10-chrome-player.js");
        var _ios10ChromePlayer2 = _interopRequireDefault(_ios10ChromePlayer);
        var _ios9SafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-9-safari-player.js");
        var _ios9SafariPlayer2 = _interopRequireDefault(_ios9SafariPlayer);
        var _ios9ChromePlayer = __webpack_require__("./src/catchplay/core/browsers/ios-9-chrome-player.js");
        var _ios9ChromePlayer2 = _interopRequireDefault(_ios9ChromePlayer);
        var _androidChromePlayer = __webpack_require__("./src/catchplay/core/browsers/android-chrome-player.js");
        var _androidChromePlayer2 = _interopRequireDefault(_androidChromePlayer);
        var _androidFirefoxPlayer = __webpack_require__("./src/catchplay/core/browsers/android-firefox-player.js");
        var _androidFirefoxPlayer2 = _interopRequireDefault(_androidFirefoxPlayer);
        var _androidOperaPlayer = __webpack_require__("./src/catchplay/core/browsers/android-opera-player.js");
        var _androidOperaPlayer2 = _interopRequireDefault(_androidOperaPlayer);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _uaParser = __webpack_require__("./src/catchplay/core/detect/ua-parser.js");
        var _uaParser2 = _interopRequireDefault(_uaParser);
        var _browserEnvDetector = __webpack_require__("./src/catchplay/core/detect/browser-env-detector.js");
        var _browserEnvDetector2 = _interopRequireDefault(_browserEnvDetector);
        var _html5NativePlayer = __webpack_require__("./src/catchplay/core/plugins/html5-native-player.js");
        var _html5NativePlayer2 = _interopRequireDefault(_html5NativePlayer);
        var _shakaPlayer = __webpack_require__("./src/catchplay/core/plugins/shaka-player.js");
        var _shakaPlayer2 = _interopRequireDefault(_shakaPlayer);
        var _dashjsPlayer = __webpack_require__("./src/catchplay/core/plugins/dashjs-player.js");
        var _dashjsPlayer2 = _interopRequireDefault(_dashjsPlayer);
        var _videojsPlayer = __webpack_require__("./src/catchplay/core/plugins/videojs-player.js");
        var _videojsPlayer2 = _interopRequireDefault(_videojsPlayer);
        var _hlsjsPlayer = __webpack_require__("./src/catchplay/core/plugins/hlsjs-player.js");
        var _hlsjsPlayer2 = _interopRequireDefault(_hlsjsPlayer);
        var _dependenciesLoader = __webpack_require__("./src/catchplay/core/plugins/dependencies-loader.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var CatchplayPlayer = function(_SDKPlayer) {
            _inherits(CatchplayPlayer, _SDKPlayer);
            function CatchplayPlayer(config) {
                _classCallCheck(this, CatchplayPlayer);
                var _this = _possibleConstructorReturn(this, (CatchplayPlayer.__proto__ || Object.getPrototypeOf(CatchplayPlayer)).call(this, config));
                var parser = function(uaParser) {
                    if (uaParser && uaParser instanceof _uaParser2.default) {
                        return uaParser;
                    }
                    return new _browserEnvDetector2.default().getUAParser();
                }(config.uaParser);
                var _ref = function(parser) {
                    var os = parser.getOS();
                    var browser = parser.getBrowser();
                    var osName = !!os.name ? os.name.toLowerCase() : "";
                    var browserName = !!browser.name ? browser.name.toLowerCase() : "";
                    var osVersion = !!os.version ? os.version.toLowerCase() : "";
                    return {
                        identity: osName + "/" + browserName,
                        osVersion: parseFloat(osVersion)
                    };
                }(parser), identity = _ref.identity, osVersion = _ref.osVersion;
                var streamingType = function(mimeType) {
                    var _mapping;
                    var mapping = (_mapping = {}, _defineProperty(_mapping, _dictionary2.default.VIDEO_MIME_TYPE.DASH, _dictionary2.default.STREAMING_TYPE.DASH), 
                    _defineProperty(_mapping, _dictionary2.default.VIDEO_MIME_TYPE.HLS, _dictionary2.default.STREAMING_TYPE.HLS), 
                    _defineProperty(_mapping, _dictionary2.default.VIDEO_MIME_TYPE.HLS_ALIAS, _dictionary2.default.STREAMING_TYPE.HLS), 
                    _defineProperty(_mapping, _dictionary2.default.VIDEO_MIME_TYPE.MP4, _dictionary2.default.STREAMING_TYPE.MP4), 
                    _mapping);
                    if (mapping[mimeType]) {
                        return mapping[mimeType];
                    }
                    return _dictionary2.default.STREAMING_TYPE.UNKNOWN;
                }(config.mimeType);
                var corePluginFactory = function corePluginFactory(identity, streamingType) {
                    switch (_dependenciesLoader.defaultDependencies[identity].defaultPlugin[streamingType]) {
                      case _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER:
                        return new _shakaPlayer2.default();

                      case _dictionary2.default.PLAYER_PLUGIN.VIDEOJS:
                        return new _videojsPlayer2.default();

                      case _dictionary2.default.PLAYER_PLUGIN.DASHJS:
                        return new _dashjsPlayer2.default();

                      case _dictionary2.default.PLAYER_PLUGIN.HLSJS:
                        return new _hlsjsPlayer2.default();

                      default:
                        return new _html5NativePlayer2.default();
                    }
                };
                var playerFactory = function playerFactory(identity, osVersion, config) {
                    if (config.mimeType == _dictionary2.default.VIDEO_MIME_TYPE.MP4) {
                        return new _basicPlayer2.default(config);
                    }
                    switch (identity) {
                      case _dictionary2.default.PLATFORMS.MAC_OS_SAFARI:
                        return new _safariPlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.IOS_FACEBOOK:
                      case _dictionary2.default.PLATFORMS.IOS_MOBILE_SAFARI:
                        if (osVersion >= 11.2) {
                            return new _iosSafariPlayer2.default(config);
                        } else if (osVersion >= 11 && osVersion <= 11.1) {
                            return new _ios11SafariPlayer2.default(config);
                        } else if (osVersion >= 10) {
                            return new _ios10SafariPlayer2.default(config);
                        } else {
                            return new _ios9SafariPlayer2.default(config);
                        }

                      case _dictionary2.default.PLATFORMS.IOS_CHROME:
                        if (osVersion >= 11.2) {
                            return new _iosChromePlayer2.default(config);
                        } else if (osVersion >= 11 && osVersion <= 11.1) {
                            return new _ios11ChromePlayer2.default(config);
                        } else if (osVersion >= 10) {
                            return new _ios10ChromePlayer2.default(config);
                        } else {
                            return new _ios9ChromePlayer2.default(config);
                        }

                      case _dictionary2.default.PLATFORMS.WINDOWS_CHROME:
                      case _dictionary2.default.PLATFORMS.MAC_OS_CHROME:
                      case _dictionary2.default.PLATFORMS.UBUNTU_CHROME:
                      case _dictionary2.default.PLATFORMS.LINUX_CHROME:
                        return new _chromePlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.ANDROID_FACEBOOK:
                      case _dictionary2.default.PLATFORMS.ANDROID_CHROME:
                        return new _androidChromePlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.WINDOWS_FIREFOX:
                      case _dictionary2.default.PLATFORMS.MAC_OS_FIREFOX:
                      case _dictionary2.default.PLATFORMS.UBUNTU_FIREFOX:
                      case _dictionary2.default.PLATFORMS.LINUX_FIREFOX:
                        return new _firefoxPlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.ANDROID_FIREFOX:
                        return new _androidFirefoxPlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.WINDOWS_EDGE:
                        return new _edgePlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.WEBOS_CHROME:
                      case _dictionary2.default.PLATFORMS.WEBOS_SAFARI:
                        return new _webosPlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.LINUX_OPERA:
                      case _dictionary2.default.PLATFORMS.WINDOWS_OPERA:
                      case _dictionary2.default.PLATFORMS.MAC_OS_OPERA:
                        return new _operaPlayer2.default(config);

                      case _dictionary2.default.PLATFORMS.ANDROID_OPERA:
                        return new _androidOperaPlayer2.default(config);

                      default:
                        console.warn(identity + " browser player not support. default change to BasicPlayer");
                        return new _basicPlayer2.default(config);
                    }
                };
                config.uaParser = parser;
                config.streaming = streamingType;
                config.plugin = corePluginFactory(identity, streamingType);
                _this.browserPlayer = playerFactory(identity, osVersion, config);
                return _this;
            }
            _createClass(CatchplayPlayer, [ {
                key: "getVideoElement",
                value: function getVideoElement() {
                    return this.browserPlayer.videoElement;
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    return this.browserPlayer.initialize();
                }
            }, {
                key: "play",
                value: function play() {
                    this.browserPlayer.play();
                }
            }, {
                key: "pause",
                value: function pause() {
                    this.browserPlayer.pause();
                }
            }, {
                key: "seekTo",
                value: function seekTo(currentTime) {
                    this.browserPlayer.seekTo(currentTime);
                }
            }, {
                key: "enterFullScreen",
                value: function enterFullScreen() {
                    this.browserPlayer.enterFullScreen();
                }
            }, {
                key: "exitFullScreen",
                value: function exitFullScreen() {
                    this.browserPlayer.exitFullScreen();
                }
            }, {
                key: "muted",
                value: function muted(isMute) {
                    this.browserPlayer.muted(isMute);
                }
            }, {
                key: "changeSpeedRate",
                value: function changeSpeedRate(value) {
                    this.browserPlayer.changeSpeedRate(value);
                }
            }, {
                key: "changeVolume",
                value: function changeVolume(value) {
                    this.browserPlayer.changeVolume(value);
                }
            }, {
                key: "changeSubtitle",
                value: function changeSubtitle(activeLanguage) {
                    this.browserPlayer.changeSubtitle(activeLanguage);
                }
            }, {
                key: "enableSubtitle",
                value: function enableSubtitle(isEnable) {
                    this.browserPlayer.enableSubtitle(isEnable);
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.browserPlayer.dispose();
                }
            }, {
                key: "setFrontBuffer",
                value: function setFrontBuffer(seconds) {
                    this.browserPlayer.setFrontBuffer(seconds);
                }
            }, {
                key: "setBackBuffer",
                value: function setBackBuffer(seconds) {
                    this.browserPlayer.setBackBuffer(seconds);
                }
            }, {
                key: "airPlay",
                value: function airPlay() {
                    this.browserPlayer.airPlay();
                }
            }, {
                key: "enableLog",
                value: function enableLog(isEnable) {
                    this.browserPlayer.enableLog(isEnable);
                }
            }, {
                key: "changeQuality",
                value: function changeQuality(quality) {
                    this.browserPlayer.changeQuality(quality);
                }
            }, {
                key: "autoSwitchQuality",
                value: function autoSwitchQuality() {
                    this.browserPlayer.autoSwitchQuality();
                }
            }, {
                key: "dumps",
                value: function dumps() {
                    return this.browserPlayer.dumps();
                }
            } ]);
            return CatchplayPlayer;
        }(_sdkPlayer2.default);
        exports.default = CatchplayPlayer;
    },
    "./src/catchplay/core/browsers/abstracts-browser-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _defaultDrmConfig = __webpack_require__("./src/catchplay/core/eme/default-drm-config.js");
        var _defaultDrmConfig2 = _interopRequireDefault(_defaultDrmConfig);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var AbstractsBrowserPlayer = function AbstractsBrowserPlayer(config) {
            this.name = "AbstractsBrowserPlayer";
            this.streaming = config.streaming;
            this.mimeType = config.mimeType;
            this.drmConfig = config.drmConfig || _defaultDrmConfig2.default;
            this.videoSrc = config.videoSrc;
            this.textTracks = config.textTracks || [];
            this.startSecond = parseInt(config.startSecond);
            this.duration = parseInt(config.duration);
            this.signQueryParam = config.signQueryParam;
            this.status = _dictionary2.default.PLAYER_STATUS.NONE;
            this.isFirstframeShowed = false;
            this.isReady = false;
            this.isFullScreenDisplayed = false;
            this.isAutoPlay = config.isAutoPlay !== false;
            this.isEnableControls = config.isEnableControls === true;
            this.isDefaultMuted = config.isDefaultMuted === true;
            this.isCurrentTextTrackShowing = false;
            this.currentTextTrackLanguage = "";
            this.errorHandler = config.errorHandler;
            this.containerDom = config.containerDom;
            this.containerEventDispatcher = config.containerEventDispatcher;
            this.eventTarget = config.eventTarget;
            this.uaParser = config.uaParser;
            this.videoInternalContainer = null;
            this.videoElement = null;
            this.everyMinuteLock = false;
            this.core = null;
            this.plugin = config.plugin;
            this.videoElementDefaultAttributes = [];
            this.generalEvents = [];
            this.customEvents = [];
            this.isMobileDevice = false;
            if (this.textTracks.length > 0) {
                try {
                    this.currentTextTrackLanguage = this.textTracks[0].language;
                    _logger2.default.common(this.name + " set default text-track[" + this.currentTextTrackLanguage + "]");
                } catch (err) {
                    _logger2.default.warning(this.name + " set default text-track failed. message: " + err.toString());
                }
            }
        };
        AbstractsBrowserPlayer.prototype.initialize = function() {
            var _this = this;
            _logger2.default.common(this.name + " start to initial.");
            this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_PREPARING, {
                detail: null
            }));
            this.status = _dictionary2.default.PLAYER_STATUS.INITIALIZING;
            return new _promisePolyfill2.default(function(resolve, reject) {
                _this.prepareVideoElement().then(function(result) {
                    _logger2.default.common(result);
                    return _this.plugin.build.call(_this, config = _this.corePlayerConfig);
                }).then(function(result) {
                    _logger2.default.common(result);
                    return _this.registerCustomEvents();
                }).then(function(result) {
                    _logger2.default.common(result);
                    return _this.registerGeneralEvents();
                }).then(function(result) {
                    _logger2.default.common(result);
                    return _this.plugin.setup.call(_this);
                }).then(function(result) {
                    _logger2.default.common(result);
                    resolve(_this.name + " has already been initialized.");
                }).catch(function(err) {
                    reject(new _playerError2.default({
                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.INIT_FAIL,
                        message: err.toString(),
                        code: "P000"
                    }));
                });
            });
        };
        AbstractsBrowserPlayer.prototype.prepareVideoElement = function() {
            var _this2 = this;
            this.isFirstframeShowed = false;
            this.isReady = false;
            var oldSubtitleStyle = document.querySelector("#AsiaPlayPlayer-Subtitle");
            if (!oldSubtitleStyle) {
                var head = document.head || document.getElementsByTagName("head")[0];
                var style = document.createElement("style");
                style.id = "AsiaPlayPlayer-Subtitle";
                style.type = "text/css";
                var css = "";
                css += ' video::cue {line-height: 150%;background-color: transparent; text-shadow: 3px 2px 10px #000; font-weight: bold; font-family: Roboto, Verdana, 微軟正黑體, "Microsoft JhengHei", Helvetica, Arial, STHeiti, sans-serif !important;}';
                css += " video::cue(b) {}";
                css += " .player-default-style {height: 100%; width: 100%; left: 0; right: 0; top: 0; bottom: 0; margin: auto; position: absolute; background-color: black;}";
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
            }
            var oldVideoElement = document.querySelector("#AsiaPlayPlayer");
            var oldVideoInternalContainer = document.querySelector("#AsiaPlayPlayerContainer");
            if (!oldVideoElement) {
                this.videoInternalContainer = document.createElement("div");
                this.videoInternalContainer.id = "AsiaPlayPlayerContainer";
                this.videoInternalContainer.style = "";
                this.videoElement = document.createElement("video");
                this.videoElement.id = "AsiaPlayPlayer";
                this.videoElement.setAttribute("x-webkit-airplay", "allow");
                this.videoElement.setAttribute("crossorigin", "anonymous");
                this.videoElement.classList.add("video-js");
                this.videoElement.classList.add("player-default-style");
                if (this.isEnableControls) {
                    this.videoElement.setAttribute("controls", "");
                }
                if (this.isDefaultMuted) {
                    this.videoElement.setAttribute("muted", "");
                }
                this.videoElementDefaultAttributes.forEach(function(attribute) {
                    _this2.videoElement.setAttribute(attribute.name, attribute.value);
                });
                this.videoInternalContainer.appendChild(this.videoElement);
                this.containerDom.appendChild(this.videoInternalContainer);
            } else {
                this.videoInternalContainer = oldVideoInternalContainer;
                this.videoElement = oldVideoElement;
            }
            return _promisePolyfill2.default.resolve(this.name + " create video dom successful");
        };
        AbstractsBrowserPlayer.prototype.prepareTextTracks = function() {
            var _this3 = this;
            _logger2.default.common(this.name + " text-tracks:", this.textTracks);
            return this.textTracks.map(function(textTrack) {
                var label = textTrack.label;
                var language = textTrack.language;
                var src = textTrack.src;
                return new _promisePolyfill2.default(function(resolve) {
                    var currentTextTrack = new _promisePolyfill2.default(function(textTrackResolve) {
                        var track = document.createElement("track");
                        track.kind = "subtitles";
                        track.label = label;
                        track.srclang = language;
                        track.src = src;
                        track.default = "";
                        _this3.videoElement.appendChild(track);
                        textTrackResolve(_this3.name + " " + language + " text-track is loaded.");
                    });
                    currentTextTrack.then(function(result) {
                        resolve(result);
                    }).catch(function(err) {
                        resolve(_this3.name + " " + language + " text-track is missing. but video can still playing. message: " + err.toString());
                    });
                });
            });
        };
        AbstractsBrowserPlayer.prototype.registerGeneralEvents = function() {
            var _this4 = this;
            this.generalEvents.forEach(function(event) {
                _logger2.default.common(_this4.name + " is registering " + event.name + " event.");
                event.handler = event.handler.bind(_this4);
                _this4.videoElement.addEventListener(event.name, event.handler);
            });
            return _promisePolyfill2.default.resolve(this.name + " register general events successful");
        };
        AbstractsBrowserPlayer.prototype.registerCustomEvents = function() {
            return _promisePolyfill2.default.resolve(this.name + " skip to register event. no custom events");
        };
        AbstractsBrowserPlayer.prototype.play = function() {
            var _this5 = this;
            if (this.isNormalState()) {
                this.status = _dictionary2.default.PLAYER_STATUS.PLAYING;
                var playPromise = this.videoElement.play();
                if (playPromise !== undefined) {
                    playPromise.catch(function(err) {
                        if (err.name === "NotAllowedError" || err.name === "AbortError") {
                            _this5.status = _dictionary2.default.PLAYER_STATUS.PAUSE;
                            _this5.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_PLAYBACK_NOT_ALLOWED);
                        }
                        _logger2.default.warning(_this5.name + " (" + err.name + "): Caught pending play exception - continuing (" + err.toString() + ")", err);
                    });
                }
            }
        };
        AbstractsBrowserPlayer.prototype.pause = function() {
            if (this.isNormalState()) {
                this.status = _dictionary2.default.PLAYER_STATUS.PAUSE;
                this.videoElement.pause();
            }
        };
        AbstractsBrowserPlayer.prototype.seekTo = function(currentTime) {
            var _this6 = this;
            if (this.isNormalState()) {
                currentTime = parseInt(currentTime);
                if (this.videoElement.seeking) {
                    _logger2.default.warning(this.name + " is seeking. nothing do to.");
                    return;
                }
                if (currentTime > this.videoElement.duration || currentTime < 0) {
                    return;
                }
                try {
                    this.videoElement.currentTime = currentTime;
                } catch (err) {
                    _logger2.default.warning(this.name + " seek failed: (" + err.toString() + ")");
                    if (!this.videoElement.readyState) {
                        setTimeout(function() {
                            _this6.videoElement.currentTime = currentTime;
                        }, 500);
                    }
                }
            }
        };
        AbstractsBrowserPlayer.prototype.enterFullScreen = function() {
            if (this.isNormalState()) {
                this.isFullScreenDisplayed = true;
                if (this.videoElement.webkitRequestFullscreen) {
                    this.videoElement.webkitRequestFullscreen();
                } else if (this.videoElement.mozRequestFullScreen) {
                    this.videoElement.mozRequestFullScreen();
                } else if (this.videoElement.msRequestFullscreen) {
                    this.videoElement.msRequestFullscreen();
                } else if (this.videoElement.webkitEnterFullScreen) {
                    this.videoElement.webkitEnterFullScreen();
                } else if (this.videoElement.requestFullscreen) {
                    this.videoElement.requestFullscreen();
                } else {
                    _logger2.default.warning(this.name + " not support full screen");
                    this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
                }
            }
        };
        AbstractsBrowserPlayer.prototype.exitFullScreen = function() {
            if (this.isNormalState()) {
                this.isFullScreenDisplayed = false;
                if (this.videoElement.webkitExitFullscreen) {
                    this.videoElement.webkitExitFullscreen();
                } else if (this.videoElement.mozCancelFullScreen) {
                    this.videoElement.mozCancelFullScreen();
                } else if (this.videoElement.msExitFullscreen) {
                    this.videoElement.msExitFullscreen();
                } else if (this.videoElement.webkitExitFullscreen) {
                    this.videoElement.webkitExitFullscreen();
                } else if (this.videoElement.exitFullscreen) {
                    this.videoElement.exitFullscreen();
                } else {
                    _logger2.default.warning(this.name + " not support full screen");
                    this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
                }
            }
        };
        AbstractsBrowserPlayer.prototype.muted = function(isMute) {
            if (this.isNormalState()) {
                this.videoElement.muted = isMute;
                if (isMute) {
                    this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_MUTE, {
                        volume: 0
                    });
                } else {
                    this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_MUTE, {
                        volume: this.videoElement.volume * 100
                    });
                }
            }
        };
        AbstractsBrowserPlayer.prototype.changeSpeedRate = function(value) {
            if (this.isNormalState()) {
                value = parseFloat(value);
                value = value >= .5 ? value : .5;
                value = value <= 2 ? value : 2;
                this.videoElement.playbackRate = value;
            }
        };
        AbstractsBrowserPlayer.prototype.changeVolume = function(value) {
            if (this.isNormalState()) {
                value = parseInt(value);
                this.videoElement.muted = false;
                this.videoElement.volume = value / 100;
            }
        };
        AbstractsBrowserPlayer.prototype.enableSubtitle = function(isEnable) {
            this.isCurrentTextTrackShowing = isEnable !== false;
            if (this.isCurrentTextTrackShowing) {
                for (var i = 0; i < this.videoElement.textTracks.length; i++) {
                    if (this.videoElement.textTracks[i].language == this.currentTextTrackLanguage) {
                        this.videoElement.textTracks[i].mode = "showing";
                    } else {
                        this.videoElement.textTracks[i].mode = "hidden";
                    }
                }
            } else {
                for (var _i = 0; _i < this.videoElement.textTracks.length; _i++) {
                    if (this.videoElement.textTracks[_i].mode == "showing") {
                        this.currentTextTrackLanguage = this.videoElement.textTracks[_i].language;
                    }
                    this.videoElement.textTracks[_i].mode = "hidden";
                }
            }
        };
        AbstractsBrowserPlayer.prototype.changeSubtitle = function(activeLanguage) {
            for (var i = 0; i < this.videoElement.textTracks.length; i++) {
                if (this.videoElement.textTracks[i].language == activeLanguage) {
                    this.videoElement.textTracks[i].mode = "hidden";
                    this.videoElement.textTracks[i].mode = "showing";
                } else {
                    this.videoElement.textTracks[i].mode = "hidden";
                }
            }
            this.isCurrentTextTrackShowing = true;
            this.currentTextTrackLanguage = activeLanguage;
        };
        AbstractsBrowserPlayer.prototype.dispose = function() {
            var _this7 = this;
            this.isFirstframeShowed = false;
            this.isReady = false;
            this.plugin.dispose.call(this).then(function(result) {
                _logger2.default.common(result);
                if (_this7.videoElement instanceof HTMLElement) {
                    try {
                        _this7.generalEvents.forEach(function(event) {
                            _this7.videoElement.removeEventListener(event.name, event.handler);
                            _logger2.default.common(_this7.name + " is removing " + event.name + " general-event");
                        });
                    } catch (err) {
                        _logger2.default.warning(_this7.name + " remove all general-event-listeners failed", err);
                    }
                    try {
                        _this7.customEvents.forEach(function(event) {
                            _this7.videoElement.removeEventListener(event.name, event.handler);
                            _logger2.default.common(_this7.name + " is removing " + event.name + " custom-event");
                        });
                    } catch (err) {
                        _logger2.default.warning(_this7.name + " remove all custom-event-listeners failed", err);
                    }
                    try {
                        _this7.videoElement.pause();
                        _this7.videoElement.removeAttribute("src");
                        _this7.videoElement.load();
                        _this7.videoInternalContainer.style.display = "none";
                        while (_this7.videoElement.firstChild) {
                            _this7.videoElement.removeChild(_this7.videoElement.firstChild);
                            _logger2.default.common(_this7.name + " remove video child element successful");
                        }
                    } catch (err) {
                        _logger2.default.warning(_this7.name + " cleanup video child elements failed", err);
                    }
                }
                return _promisePolyfill2.default.resolve("AbstractsBrowserPlayer video element is cleanup successful");
            }).then(function(result) {
                _logger2.default.common(result);
                _this7.core = null;
                _this7.status = _dictionary2.default.PLAYER_STATUS.DISPOSED;
                _logger2.default.common("AbstractsBrowserPlayer dispose successful");
            }).catch(function(err) {
                _this7.core = null;
                _this7.status = _dictionary2.default.PLAYER_STATUS.DISPOSED;
                _logger2.default.error("AbstractsBrowserPlayer dispose failed", err);
            });
        };
        AbstractsBrowserPlayer.prototype.setFrontBuffer = function(seconds) {
            throw new _playerError2.default({
                message: this.name + " not implement setFrontBuffer method",
                code: "P000"
            });
        };
        AbstractsBrowserPlayer.prototype.setBackBuffer = function(seconds) {
            throw new _playerError2.default({
                message: this.name + " not implement setBackBuffer method",
                code: "P000"
            });
        };
        AbstractsBrowserPlayer.prototype.airPlay = function() {
            var _this8 = this;
            if (this.isNormalState()) {
                if (window.WebKitPlaybackTargetAvailabilityEvent) {
                    this.videoElement.addEventListener("webkitplaybacktargetavailabilitychanged", function(event) {
                        _logger2.default.common(_this8.name + " airplay event:", event);
                    });
                    this.videoElement.webkitShowPlaybackTargetPicker();
                } else {
                    _logger2.default.warning(this.name + " not support airplay");
                    this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
                }
                this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_AIRPLAY, {
                    detail: null
                }));
            }
        };
        AbstractsBrowserPlayer.prototype.enableLog = function(isEnable) {
            throw new _playerError2.default({
                message: this.name + " not implement openLog method",
                code: "P000"
            });
        };
        AbstractsBrowserPlayer.prototype.changeQuality = function(quality) {
            throw new _playerError2.default({
                message: this.name + " not implement changeQuality method",
                code: "P000"
            });
        };
        AbstractsBrowserPlayer.prototype.autoSwitchQuality = function() {
            throw new _playerError2.default({
                message: this.name + " not implement autoSwitchQuality method",
                code: "P000"
            });
        };
        AbstractsBrowserPlayer.prototype.getDuration = function() {
            return !isNaN(this.duration) ? this.duration : this.videoElement.duration;
        };
        AbstractsBrowserPlayer.prototype.isNormalState = function() {
            return !!this.videoElement && !this.videoElement.error;
        };
        AbstractsBrowserPlayer.prototype.isMobile = function() {
            return this.isMobileDevice;
        };
        AbstractsBrowserPlayer.prototype.dumps = function() {
            return {
                name: this.name,
                streaming: this.streaming,
                videoSrc: this.videoSrc,
                mimeType: this.mimeType,
                drmConfig: this.drmConfig,
                textTracks: this.textTracks,
                isCurrentTextTrackShowing: this.isCurrentTextTrackShowing,
                currentTextTrackLanguage: this.currentTextTrackLanguage,
                startSecond: this.startSecond,
                duration: this.duration,
                status: this.status,
                isAutoPlay: this.isAutoPlay,
                userAgent: this.uaParser.getUA(),
                isMobileDevice: this.isMobileDevice
            };
        };
        exports.default = AbstractsBrowserPlayer;
    },
    "./src/catchplay/core/browsers/android-chrome-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _chromePlayer = __webpack_require__("./src/catchplay/core/browsers/chrome-player.js");
        var _chromePlayer2 = _interopRequireDefault(_chromePlayer);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var AndroidChromePlayer = function AndroidChromePlayer(config) {
            _chromePlayer2.default.call(this, config);
            this.name = "AndroidChromePlayer";
            this.isDefaultMuted = true;
            this.isMobileDevice = true;
            this.videoElementDefaultAttributes = [ {
                name: "muted",
                value: ""
            }, {
                name: "autoplay",
                value: ""
            } ];
        };
        AndroidChromePlayer.prototype = Object.create(_chromePlayer2.default.prototype);
        AndroidChromePlayer.prototype.constructor = AndroidChromePlayer;
        exports.default = AndroidChromePlayer;
    },
    "./src/catchplay/core/browsers/android-firefox-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var AndroidFirefoxPlayer = function AndroidFirefoxPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "AndroidFirefoxPlayer";
            this.isDefaultMuted = true;
            this.isMobileDevice = true;
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "muted",
                value: ""
            }, {
                name: "autoplay",
                value: ""
            } ];
        };
        AndroidFirefoxPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        AndroidFirefoxPlayer.prototype.constructor = AndroidFirefoxPlayer;
        exports.default = AndroidFirefoxPlayer;
    },
    "./src/catchplay/core/browsers/android-opera-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var AndroidOperaPlayer = function AndroidOperaPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "AndroidOperaPlayer";
            this.isDefaultMuted = true;
            this.isMobileDevice = true;
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "muted",
                value: ""
            }, {
                name: "autoplay",
                value: ""
            } ];
        };
        AndroidOperaPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        AndroidOperaPlayer.prototype.constructor = AndroidOperaPlayer;
        exports.default = AndroidOperaPlayer;
    },
    "./src/catchplay/core/browsers/basic-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var BasicPlayer = function BasicPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "BasicPlayer";
            this.streaming = "non-streaming";
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            var os = this.uaParser.getOS().name.toLowerCase();
            _logger2.default.common(this.name + " current os is: " + os);
            if (!this.isMobile()) {
                this.videoElementDefaultAttributes = [ {
                    name: "preload",
                    value: "auto"
                } ];
            }
            if (os == "android") {
                this.isDefaultMuted = true;
                this.isMobileDevice = true;
                this.videoElementDefaultAttributes = [ {
                    name: "muted",
                    value: ""
                }, {
                    name: "autoplay",
                    value: ""
                } ];
            }
            if (os == "ios") {
                this.isDefaultMuted = true;
                this.isMobileDevice = true;
                this.videoElementDefaultAttributes = [ {
                    name: "muted",
                    value: ""
                }, {
                    name: "playsinline",
                    value: ""
                }, {
                    name: "webkit-playsinline",
                    value: ""
                }, {
                    name: "autoplay",
                    value: ""
                } ];
            }
        };
        BasicPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        BasicPlayer.prototype.constructor = BasicPlayer;
        BasicPlayer.prototype.setFrontBuffer = function(seconds) {
            _logger2.default.warning(this.name + " not support setFrontBuffer function");
            this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
        };
        BasicPlayer.prototype.setBackBuffer = function(seconds) {
            _logger2.default.warning(this.name + " not support setBackBuffer function");
            this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
        };
        BasicPlayer.prototype.enableLog = function(isEnable) {
            _logger2.default.warning(this.name + " not support enableLog function");
            this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
        };
        BasicPlayer.prototype.changeQuality = function(quality) {
            _logger2.default.warning(this.name + " not support changeQuality function");
            this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
        };
        BasicPlayer.prototype.autoSwitchQuality = function() {
            _logger2.default.warning(this.name + " not support autoSwitchQuality function");
            this.containerEventDispatcher.trigger("PlayerKitNotSupportEvent", null);
        };
        exports.default = BasicPlayer;
    },
    "./src/catchplay/core/browsers/chrome-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var ChromePlayer = function ChromePlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "ChromePlayer";
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "preload",
                value: "auto"
            } ];
        };
        ChromePlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        ChromePlayer.prototype.constructor = ChromePlayer;
        exports.default = ChromePlayer;
    },
    "./src/catchplay/core/browsers/edge-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var EdgePlayer = function EdgePlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "EdgePlayer";
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "preload",
                value: "auto"
            } ];
        };
        EdgePlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        EdgePlayer.prototype.constructor = EdgePlayer;
        exports.default = EdgePlayer;
    },
    "./src/catchplay/core/browsers/firefox-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var FirefoxPlayer = function FirefoxPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "FirefoxPlayer";
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "preload",
                value: "auto"
            } ];
        };
        FirefoxPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        FirefoxPlayer.prototype.constructor = FirefoxPlayer;
        exports.default = FirefoxPlayer;
    },
    "./src/catchplay/core/browsers/ios-10-chrome-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ios10SafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-10-safari-player.js");
        var _ios10SafariPlayer2 = _interopRequireDefault(_ios10SafariPlayer);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOS10ChromePlayer = function IOS10ChromePlayer(config) {
            _ios10SafariPlayer2.default.call(this, config);
            this.name = "IOS10ChromePlayer";
        };
        IOS10ChromePlayer.prototype = Object.create(_ios10SafariPlayer2.default.prototype);
        IOS10ChromePlayer.prototype.constructor = IOS10ChromePlayer;
        exports.default = IOS10ChromePlayer;
    },
    "./src/catchplay/core/browsers/ios-10-safari-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOS10SafariPlayer = function IOS10SafariPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "IOS10SafariPlayer";
            this.isDefaultMuted = true;
            this.isMobileDevice = true;
            this.generalEvents = [ _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "muted",
                value: ""
            }, {
                name: "playsinline",
                value: ""
            }, {
                name: "webkit-playsinline",
                value: ""
            }, {
                name: "autoplay",
                value: ""
            } ];
        };
        IOS10SafariPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        IOS10SafariPlayer.prototype.constructor = IOS10SafariPlayer;
        IOS10SafariPlayer.prototype.registerCustomEvents = function() {
            var self = this;
            this.videoElement.addEventListener("loadedmetadata", function() {
                _logger2.default.common(self.name + " [loadedmetadata] event");
                _promisePolyfill2.default.all(self.prepareTextTracks()).then(function(results) {
                    results.forEach(function(result) {
                        _logger2.default.common(result);
                    });
                    return _promisePolyfill2.default.resolve(self.name + " all subtitles has been loaded");
                }).then(function(result) {
                    _logger2.default.common(result);
                    return new _promisePolyfill2.default(function(waitForDurationResolve) {
                        var waitForDurationInterval = setInterval(function() {
                            if (!!self.videoElement.readyState) {
                                clearInterval(waitForDurationInterval);
                                waitForDurationResolve(self.name + " video duration is setting already. duration(" + self.getDuration() + ")");
                            }
                        }, 500);
                    });
                }).then(function(result) {
                    _logger2.default.common(result);
                    if (self.isDefaultMuted) {
                        self.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_MUTE, {
                            volume: 0
                        });
                    }
                    return _promisePolyfill2.default.resolve(self.name + " video default muted is: " + self.isDefaultMuted);
                }).then(function(result) {
                    _logger2.default.common(result);
                    self.status = _dictionary2.default.PLAYER_STATUS.INITIALIZED;
                    self.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_READY_TO_PLAY, {
                        duration: self.getDuration()
                    });
                }).catch(function(err) {
                    _logger2.default.warning(self.name + " catch some error in initial(" + err.toString() + ") but video is still playable");
                    self.status = _dictionary2.default.PLAYER_STATUS.INITIALIZED;
                    self.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_READY_TO_PLAY, {
                        duration: self.getDuration()
                    });
                });
            });
            this.videoElement.addEventListener("loadeddata", function() {
                _logger2.default.common(self.name + " [loadeddata] event");
                self.enableSubtitle(true);
                if (!!self.startSecond) {
                    self.seekTo(self.startSecond);
                }
            });
            return _promisePolyfill2.default.resolve(this.name + " register custom events successful.");
        };
        IOS10SafariPlayer.prototype.prepareTextTracks = function() {
            return [ _promisePolyfill2.default.resolve(this.name + " using default webvtt in m3u8 file.") ];
        };
        IOS10SafariPlayer.prototype.dispose = function() {
            _abstractsBrowserPlayer2.default.prototype.dispose.call(this);
            this.containerDom.removeChild(this.videoInternalContainer);
        };
        exports.default = IOS10SafariPlayer;
    },
    "./src/catchplay/core/browsers/ios-11-chrome-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ios11SafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-11-safari-player.js");
        var _ios11SafariPlayer2 = _interopRequireDefault(_ios11SafariPlayer);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOS11ChromePlayer = function IOS11ChromePlayer(config) {
            _ios11SafariPlayer2.default.call(this, config);
            this.name = "IOS11ChromePlayer";
        };
        IOS11ChromePlayer.prototype = Object.create(_ios11SafariPlayer2.default.prototype);
        IOS11ChromePlayer.prototype.constructor = IOS11ChromePlayer;
        exports.default = IOS11ChromePlayer;
    },
    "./src/catchplay/core/browsers/ios-11-safari-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOS11SafariPlayer = function IOS11SafariPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "IOS11SafariPlayer";
            this.isDefaultMuted = true;
            this.isMobileDevice = true;
            this.videoElementDefaultAttributes = [ {
                name: "muted",
                value: ""
            }, {
                name: "playsinline",
                value: ""
            }, {
                name: "autoplay",
                value: ""
            } ];
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
        };
        IOS11SafariPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        IOS11SafariPlayer.prototype.constructor = IOS11SafariPlayer;
        IOS11SafariPlayer.prototype.prepareTextTracks = function() {
            return [ _promisePolyfill2.default.resolve(this.name + " using default webvtt in m3u8 file.") ];
        };
        IOS11SafariPlayer.prototype.dispose = function() {
            _abstractsBrowserPlayer2.default.prototype.dispose.call(this);
            this.containerDom.removeChild(this.videoInternalContainer);
        };
        exports.default = IOS11SafariPlayer;
    },
    "./src/catchplay/core/browsers/ios-9-chrome-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ios9SafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-9-safari-player.js");
        var _ios9SafariPlayer2 = _interopRequireDefault(_ios9SafariPlayer);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOS9ChromePlayer = function IOS9ChromePlayer(config) {
            _ios9SafariPlayer2.default.call(this, config);
            this.name = "IOS9ChromePlayer";
        };
        IOS9ChromePlayer.prototype = Object.create(_ios9SafariPlayer2.default.prototype);
        IOS9ChromePlayer.prototype.constructor = IOS9ChromePlayer;
        exports.default = IOS9ChromePlayer;
    },
    "./src/catchplay/core/browsers/ios-9-safari-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOS9SafariPlayer = function IOS9SafariPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "IOS9SafariPlayer";
            this.generalEvents = [ _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.isMobileDevice = true;
        };
        IOS9SafariPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        IOS9SafariPlayer.prototype.constructor = IOS9SafariPlayer;
        IOS9SafariPlayer.prototype.registerCustomEvents = function() {
            var self = this;
            this.videoElement.addEventListener("loadedmetadata", function() {
                _logger2.default.common(self.name + " [loadedmetadata] event");
                _promisePolyfill2.default.all(self.prepareTextTracks()).then(function(results) {
                    results.forEach(function(result) {
                        _logger2.default.common(result);
                    });
                    return _promisePolyfill2.default.resolve(self.name + " all subtitles has been loaded");
                }).then(function(result) {
                    _logger2.default.common(result);
                    return new _promisePolyfill2.default(function(waitForDurationResolve) {
                        var waitForDurationInterval = setInterval(function() {
                            if (!!self.videoElement.readyState) {
                                clearInterval(waitForDurationInterval);
                                waitForDurationResolve(self.name + " video duration is setting already. duration(" + self.getDuration() + ")");
                            }
                        }, 500);
                    });
                }).then(function(result) {
                    _logger2.default.common(result);
                    if (self.isDefaultMuted) {
                        self.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_MUTE, {
                            volume: 0
                        });
                    }
                    return _promisePolyfill2.default.resolve(self.name + " video default muted is: " + self.isDefaultMuted);
                }).catch(function(err) {
                    self.status = _dictionary2.default.PLAYER_STATUS.INITIALIZED;
                    self.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_READY_TO_PLAY, {
                        duration: self.getDuration()
                    });
                    return _promisePolyfill2.default.resolve(self.name + " catch some error in initial.(" + err.toString() + ") but video is still playable");
                }).then(function(result) {
                    _logger2.default.common(result);
                    self.status = _dictionary2.default.PLAYER_STATUS.INITIALIZED;
                    self.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_READY_TO_PLAY, {
                        duration: self.getDuration()
                    });
                    if (self.isAutoPlay) {
                        self.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_PLAYBACK_NOT_ALLOWED);
                    }
                });
            });
            this.videoElement.addEventListener("loadeddata", function() {
                _logger2.default.common(self.name + " [loadeddata] event");
                if (self.textTracks.length > 0) {
                    self.currentTextTrackLanguage = self.textTracks[0].language;
                    self.changeSubtitle(self.currentTextTrackLanguage);
                }
                if (!!self.startSecond) {
                    self.seekTo(self.startSecond);
                }
            });
            return _promisePolyfill2.default.resolve(this.name + " register custom events successful.");
        };
        IOS9SafariPlayer.prototype.prepareTextTracks = function() {
            return [ _promisePolyfill2.default.resolve(this.name + " using default webvtt in m3u8 file.") ];
        };
        exports.default = IOS9SafariPlayer;
    },
    "./src/catchplay/core/browsers/ios-chrome-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _iosSafariPlayer = __webpack_require__("./src/catchplay/core/browsers/ios-safari-player.js");
        var _iosSafariPlayer2 = _interopRequireDefault(_iosSafariPlayer);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOSChromePlayer = function IOSChromePlayer(config) {
            _iosSafariPlayer2.default.call(this, config);
            this.name = "IOSChromePlayer";
        };
        IOSChromePlayer.prototype = Object.create(_iosSafariPlayer2.default.prototype);
        IOSChromePlayer.prototype.constructor = IOSChromePlayer;
        exports.default = IOSChromePlayer;
    },
    "./src/catchplay/core/browsers/ios-safari-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _fairplay = __webpack_require__("./src/catchplay/core/eme/fairplay.js");
        var _fairplay2 = _interopRequireDefault(_fairplay);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var IOSSafariPlayer = function IOSSafariPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "IOSSafariPlayer";
            this.isDefaultMuted = true;
            this.isMobileDevice = true;
            this.videoElementDefaultAttributes = [ {
                name: "muted",
                value: ""
            }, {
                name: "playsinline",
                value: ""
            }, {
                name: "autoplay",
                value: ""
            } ];
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
        };
        IOSSafariPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        IOSSafariPlayer.prototype.constructor = IOSSafariPlayer;
        IOSSafariPlayer.prototype.registerCustomEvents = function() {
            var fairplay = new _fairplay2.default({
                playerName: this.name,
                videoElement: this.videoElement,
                license: this.drmConfig.fairplay.license,
                certificateUrl: this.drmConfig.fairplay.certificateUrl,
                licenseUrl: this.drmConfig.fairplay.licenseUrl
            });
            return fairplay.setup();
        };
        IOSSafariPlayer.prototype.prepareTextTracks = function() {
            return [ _promisePolyfill2.default.resolve(this.name + " using default webvtt in m3u8 file") ];
        };
        IOSSafariPlayer.prototype.dispose = function() {
            _abstractsBrowserPlayer2.default.prototype.dispose.call(this);
            this.containerDom.removeChild(this.videoInternalContainer);
        };
        exports.default = IOSSafariPlayer;
    },
    "./src/catchplay/core/browsers/opera-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var OperaPlayer = function OperaPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "OperaPlayer";
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "preload",
                value: "auto"
            } ];
        };
        OperaPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        OperaPlayer.prototype.constructor = OperaPlayer;
        exports.default = OperaPlayer;
    },
    "./src/catchplay/core/browsers/safari-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _fairplay = __webpack_require__("./src/catchplay/core/eme/fairplay.js");
        var _fairplay2 = _interopRequireDefault(_fairplay);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var SafariPlayer = function SafariPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "SafariPlayer";
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.loadeddataHandler(), _generalEventRegister2.default.timeupdateHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.seekingHandler(), _generalEventRegister2.default.seekedHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.waitingHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "preload",
                value: "auto"
            } ];
        };
        SafariPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        SafariPlayer.prototype.constructor = SafariPlayer;
        SafariPlayer.prototype.registerCustomEvents = function() {
            var fairplay = new _fairplay2.default({
                playerName: this.name,
                videoElement: this.videoElement,
                license: this.drmConfig.fairplay.license,
                certificateUrl: this.drmConfig.fairplay.certificateUrl,
                licenseUrl: this.drmConfig.fairplay.licenseUrl
            });
            return fairplay.setup();
        };
        SafariPlayer.prototype.prepareTextTracks = function() {
            return [ _promisePolyfill2.default.resolve(this.name + " using default webvtt in m3u8 file.") ];
        };
        exports.default = SafariPlayer;
    },
    "./src/catchplay/core/browsers/webos-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _abstractsBrowserPlayer = __webpack_require__("./src/catchplay/core/browsers/abstracts-browser-player.js");
        var _abstractsBrowserPlayer2 = _interopRequireDefault(_abstractsBrowserPlayer);
        var _generalEventRegister = __webpack_require__("./src/catchplay/core/events/general-event-register.js");
        var _generalEventRegister2 = _interopRequireDefault(_generalEventRegister);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var WebOSPlayer = function WebOSPlayer(config) {
            _abstractsBrowserPlayer2.default.call(this, config);
            this.name = "WebOSPlayer";
            this.isSeekingLock = false;
            this.isTimelineLock = false;
            this.reloadTimer = undefined;
            this.timeCounterForReload = this.resetReloadTimer();
            this.generalEvents = [ _generalEventRegister2.default.loadedmetadataHandler(), _generalEventRegister2.default.playingHandler(), _generalEventRegister2.default.pauseHandler(), _generalEventRegister2.default.endedHandler(), _generalEventRegister2.default.errorHandler(), _generalEventRegister2.default.canplayHandler() ];
            this.videoElementDefaultAttributes = [ {
                name: "preload",
                value: "auto"
            } ];
            this.corePlayerConfig = {
                drm: {
                    servers: _defineProperty({}, _dictionary2.default.DRM.WIDEVINE.KEY_SYSTEM, _dictionary2.default.DRM.WIDEVINE.DEFAULT_LICENSE_URL)
                }
            };
        };
        WebOSPlayer.prototype = Object.create(_abstractsBrowserPlayer2.default.prototype);
        WebOSPlayer.prototype.constructor = WebOSPlayer;
        WebOSPlayer.prototype.registerCustomEvents = function() {
            var _this = this;
            this.videoElement.addEventListener("loadeddata", function() {
                _this.isSeekingLock = false;
                _this.isTimelineLock = false;
                _this.status = _dictionary2.default.PLAYER_STATUS.PLAYING;
                _logger2.default.common(_this.name + " CustomEvents[loadeddata] isSeekingLock: " + _this.isSeekingLock + ", isTimelineLock: " + _this.isTimelineLock + ", status: " + _this.status);
                _generalEventRegister2.default.loadeddataHandler().handler.call(_this);
            });
            this.videoElement.addEventListener("timeupdate", function() {
                _generalEventRegister2.default.timeupdateHandler().handler.call(_this);
                if (!_this.isSeekingLock) {
                    _logger2.default.common(_this.name + " remove timeline-lock when [timeupdate] event and seeking unlock");
                    _this.isTimelineLock = false;
                    _this.stopReloadTimer();
                }
            });
            this.videoElement.addEventListener("seeking", function() {
                _generalEventRegister2.default.seekingHandler().handler.call(_this);
                _logger2.default.common(_this.name + " add seeking-lock and timeline-lock when [seeking] event");
                _this.isSeekingLock = true;
                _this.isTimelineLock = true;
                _this.startReloadTimer();
            });
            this.videoElement.addEventListener("seeked", function() {
                _generalEventRegister2.default.seekedHandler().handler.call(_this);
                _logger2.default.common(_this.name + " remove seeking lock when [seeked] event");
                _this.isSeekingLock = false;
            });
            this.videoElement.addEventListener("waiting", function() {
                _generalEventRegister2.default.waitingHandler().handler.call(_this);
                _logger2.default.common(_this.name + " waiting for buffering. start reload-timer");
                _this.isTimelineLock = true;
                _this.resetReloadTimer();
                _this.startReloadTimer();
            });
            return _promisePolyfill2.default.resolve(this.name + " register custom events successful.");
        };
        WebOSPlayer.prototype.play = function() {
            if (this.status != _dictionary2.default.PLAYER_STATUS.PLAYING) {
                this.resetReloadTimer();
                if (this.status == _dictionary2.default.PLAYER_STATUS.INITIALIZING || this.status == _dictionary2.default.PLAYER_STATUS.INITIALIZED) {
                    this.timeCounterForReload += 2;
                    _logger2.default.common(this.name + " is initializing reload-timer set to " + this.timeCounterForReload);
                }
                this.isTimelineLock = true;
                this.startReloadTimer();
                _logger2.default.common(this.name + " play to detect video playback may fail. current count is: " + this.timeCounterForReload);
            }
            _abstractsBrowserPlayer2.default.prototype.play.call(this);
        };
        WebOSPlayer.prototype.seekTo = function(currentTime) {
            if (this.isSeekingLock) {
                _logger2.default.warning(this.name + " has seeking lock. nothing to do.");
                return;
            }
            if (this.isTimelineLock) {
                _logger2.default.warning(this.name + " seek function is ready but timeline position not ready. nothing to do.");
                return;
            }
            _abstractsBrowserPlayer2.default.prototype.seekTo.call(this, currentTime);
        };
        WebOSPlayer.prototype.startReloadTimer = function() {
            var _this2 = this;
            if (this.getDuration() - this.videoElement.currentTime <= 10) {
                _logger2.default.warning(this.name + " the video will be end. reload-timer does not start.");
                return;
            }
            if (!this.reloadTimer && this.isTimelineLock) {
                this.reloadTimer = setInterval(function() {
                    _logger2.default.warning(_this2.name + " reload-timer countdown: " + _this2.timeCounterForReload);
                    if (_this2.timeCounterForReload-- == 0 || isNaN(_this2.timeCounterForReload)) {
                        _this2.stopReloadTimer();
                        _this2.resetReloadTimer();
                        _logger2.default.warning(_this2.name + " reload-timer timeup. the video will be reload");
                        if (!!_this2.videoElement) {
                            _this2.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_NEED_TO_RESTART, {
                                detail: {
                                    startSecond: _this2.videoElement.currentTime,
                                    isAutoPlay: _this2.status !== _dictionary2.default.PLAYER_STATUS.PAUSE,
                                    isAutoFullScreen: _this2.isFullScreenDisplayed
                                }
                            }));
                        } else {
                            _this2.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                message: "player is overloading and crashed. please try reset the player again",
                                code: "P004",
                                type: _dictionary2.default.PLAYER_ERROR_TYPE.UNKNOWN,
                                data: {
                                    lastSecondAt: _this2.videoElement.currentTime,
                                    isFullScreenDisplayed: _this2.isFullScreenDisplayed
                                }
                            }), _this2.containerDom);
                        }
                    }
                }, 1e3);
                _logger2.default.warning(this.name + " reload-timer start. timer-id is: " + this.reloadTimer);
            }
        };
        WebOSPlayer.prototype.stopReloadTimer = function() {
            if (!!this.reloadTimer) {
                this.resetReloadTimer();
                clearInterval(this.reloadTimer);
                this.reloadTimer = undefined;
                _logger2.default.warning(this.name + " reload-timer stop. timer-id is: " + this.reloadTimer);
            }
        };
        WebOSPlayer.prototype.resetReloadTimer = function() {
            this.timeCounterForReload = 10;
        };
        WebOSPlayer.prototype.dispose = function() {
            _abstractsBrowserPlayer2.default.prototype.dispose.call(this);
            this.isSeekingLock = false;
            this.isTimelineLock = false;
            this.reloadTimer = undefined;
            this.containerDom.removeChild(this.videoInternalContainer);
        };
        exports.default = WebOSPlayer;
    },
    "./src/catchplay/core/detect/browser-env-detector.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _uaParser = __webpack_require__("./src/catchplay/core/detect/ua-parser.js");
        var _uaParser2 = _interopRequireDefault(_uaParser);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var BrowserEnvDetector = function() {
            function BrowserEnvDetector(config) {
                _classCallCheck(this, BrowserEnvDetector);
                var vendorOsRegexes = BrowserEnvDetector.originOSRegexes();
                var vendorDeviceRegexes = BrowserEnvDetector.originDeviceRegexes();
                if (!!config) {
                    if (!!config.osRegexExtensions && config.osRegexExtensions instanceof Array) {
                        vendorOsRegexes.concat(config.osRegexExtensions);
                    }
                    if (!!config.deviceRegexExtensions && config.osRegexExtensions instanceof Array) {
                        vendorDeviceRegexes.concat(config.deviceRegexExtensions);
                    }
                    this.uaParser = !!config.uaParser ? config.uaParser : new _uaParser2.default({
                        os: vendorOsRegexes,
                        device: vendorDeviceRegexes
                    });
                } else {
                    this.uaParser = new _uaParser2.default({
                        os: vendorOsRegexes,
                        device: vendorDeviceRegexes
                    });
                }
                var os = this.uaParser.getOS();
                var browser = this.uaParser.getBrowser();
                var osName = !!os.name ? os.name.toLowerCase() : "";
                var osVersion = !!os.version ? os.version.toLowerCase() : "";
                var browserName = !!browser.name ? browser.name.toLowerCase() : "";
                var identity = osName + "/" + browserName;
                var deviceType = osName;
                var deviceModel = identity + "/" + browser.version;
                var platforms = [];
                if (platforms.indexOf(deviceType) === -1) {
                    deviceType = _dictionary2.default.DEVICE_TYPE.WEB;
                }
                this.data = {
                    deviceType: deviceType,
                    deviceModel: deviceModel,
                    identity: identity,
                    osName: osName,
                    osVersion: osVersion,
                    browserName: browserName,
                    browserVersion: browser.version
                };
            }
            _createClass(BrowserEnvDetector, [ {
                key: "getUAParser",
                value: function getUAParser() {
                    return this.uaParser;
                }
            }, {
                key: "getIdentity",
                value: function getIdentity() {
                    return this.data;
                }
            }, {
                key: "isSupport",
                value: function isSupport() {
                    return BrowserEnvDetector.supportPlatforms().indexOf(this.getIdentity().identity) !== -1;
                }
            } ], [ {
                key: "originOSRegexes",
                value: function originOSRegexes() {
                    return [ [ /(netcast)/i ], [ [ _uaParser2.default.OS.NAME, /(.+)/, "webos" ] ], [ /(webos|web0s)/i ], [ [ _uaParser2.default.OS.NAME, /(.+)/, "webos" ] ], [ /(hisense)/i ], [ [ _uaParser2.default.OS.NAME, /(.+)/, "hisense linux" ] ] ];
                }
            }, {
                key: "originDeviceRegexes",
                value: function originDeviceRegexes() {
                    return [ [ /(netcast)/i ], [ [ _uaParser2.default.DEVICE.MODEL, "smarttv" ], [ _uaParser2.default.DEVICE.VENDOR, "LG" ] ], [ /(webos|web0s)/i ], [ [ _uaParser2.default.DEVICE.MODEL, "smarttv" ], [ _uaParser2.default.DEVICE.VENDOR, "LG" ] ], [ /(hisense)/i ], [ [ _uaParser2.default.DEVICE.VENDOR, "Hisense" ] ] ];
                }
            }, {
                key: "supportPlatforms",
                value: function supportPlatforms() {
                    return [ _dictionary2.default.PLATFORMS.WINDOWS_CHROME, _dictionary2.default.PLATFORMS.WINDOWS_FIREFOX, _dictionary2.default.PLATFORMS.WINDOWS_EDGE, _dictionary2.default.PLATFORMS.MAC_OS_CHROME, _dictionary2.default.PLATFORMS.MAC_OS_FIREFOX, _dictionary2.default.PLATFORMS.MAC_OS_SAFARI, _dictionary2.default.PLATFORMS.ANDROID_CHROME, _dictionary2.default.PLATFORMS.IOS_MOBILE_SAFARI, _dictionary2.default.PLATFORMS.IOS_CHROME, _dictionary2.default.PLATFORMS.WEBOS_CHROME, _dictionary2.default.PLATFORMS.WEBOS_SAFARI, _dictionary2.default.PLATFORMS.UBUNTU_CHROME, _dictionary2.default.PLATFORMS.UBUNTU_FIREFOX, _dictionary2.default.PLATFORMS.LINUX_CHROME, _dictionary2.default.PLATFORMS.LINUX_FIREFOX, _dictionary2.default.PLATFORMS.LINUX_OPERA, _dictionary2.default.PLATFORMS.WINDOWS_OPERA, _dictionary2.default.PLATFORMS.MAC_OS_OPERA ];
                }
            }, {
                key: "supportDRMs",
                value: function supportDRMs() {
                    return [];
                }
            } ]);
            return BrowserEnvDetector;
        }();
        exports.default = BrowserEnvDetector;
    },
    "./src/catchplay/core/detect/ua-parser.js": function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        (function(window, undefined) {
            "use strict";
            var LIBVERSION = "0.7.17", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded";
            var util = {
                extend: function extend(regexes, extensions) {
                    var margedRegexes = {};
                    for (var i in regexes) {
                        if (extensions[i] && extensions[i].length % 2 === 0) {
                            margedRegexes[i] = extensions[i].concat(regexes[i]);
                        } else {
                            margedRegexes[i] = regexes[i];
                        }
                    }
                    return margedRegexes;
                },
                has: function has(str1, str2) {
                    if (typeof str1 === "string") {
                        return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                    } else {
                        return false;
                    }
                },
                lowerize: function lowerize(str) {
                    return str.toLowerCase();
                },
                major: function major(version) {
                    return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, "").split(".")[0] : undefined;
                },
                trim: function trim(str) {
                    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }
            };
            var mapper = {
                rgx: function rgx(ua, arrays) {
                    var i = 0, j, k, p, q, matches, match;
                    while (i < arrays.length && !matches) {
                        var regex = arrays[i], props = arrays[i + 1];
                        j = k = 0;
                        while (j < regex.length && !matches) {
                            matches = regex[j++].exec(ua);
                            if (!!matches) {
                                for (p = 0; p < props.length; p++) {
                                    match = matches[++k];
                                    q = props[p];
                                    if (typeof q === OBJ_TYPE && q.length > 0) {
                                        if (q.length == 2) {
                                            if (typeof q[1] == FUNC_TYPE) {
                                                this[q[0]] = q[1].call(this, match);
                                            } else {
                                                this[q[0]] = q[1];
                                            }
                                        } else if (q.length == 3) {
                                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                            } else {
                                                this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                            }
                                        } else if (q.length == 4) {
                                            this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                        }
                                    } else {
                                        this[q] = match ? match : undefined;
                                    }
                                }
                            }
                        }
                        i += 2;
                    }
                },
                str: function str(_str, map) {
                    for (var i in map) {
                        if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                            for (var j = 0; j < map[i].length; j++) {
                                if (util.has(map[i][j], _str)) {
                                    return i === UNKNOWN ? undefined : i;
                                }
                            }
                        } else if (util.has(map[i], _str)) {
                            return i === UNKNOWN ? undefined : i;
                        }
                    }
                    return _str;
                }
            };
            var maps = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": [ "SD", "KF" ]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: [ "NT 5.1", "NT 5.2" ],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: [ "NT 6.4", "NT 10.0" ],
                            RT: "ARM"
                        }
                    }
                }
            };
            var regexes = {
                browser: [ [ /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i ], [ NAME, VERSION ], [ /(opios)[\/\s]+([\w\.]+)/i ], [ [ NAME, "Opera Mini" ], VERSION ], [ /\s(opr)\/([\w\.]+)/i ], [ [ NAME, "Opera" ], VERSION ], [ /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i ], [ NAME, VERSION ], [ /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i ], [ [ NAME, "IE" ], VERSION ], [ /(edge)\/((\d+)?[\w\.]+)/i ], [ NAME, VERSION ], [ /(yabrowser)\/([\w\.]+)/i ], [ [ NAME, "Yandex" ], VERSION ], [ /(puffin)\/([\w\.]+)/i ], [ [ NAME, "Puffin" ], VERSION ], [ /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i ], [ [ NAME, "UCBrowser" ], VERSION ], [ /(comodo_dragon)\/([\w\.]+)/i ], [ [ NAME, /_/g, " " ], VERSION ], [ /(micromessenger)\/([\w\.]+)/i ], [ [ NAME, "WeChat" ], VERSION ], [ /(QQ)\/([\d\.]+)/i ], [ NAME, VERSION ], [ /m?(qqbrowser)[\/\s]?([\w\.]+)/i ], [ NAME, VERSION ], [ /xiaomi\/miuibrowser\/([\w\.]+)/i ], [ VERSION, [ NAME, "MIUI Browser" ] ], [ /;fbav\/([\w\.]+);/i ], [ VERSION, [ NAME, "Facebook" ] ], [ /headlesschrome(?:\/([\w\.]+)|\s)/i ], [ VERSION, [ NAME, "Chrome Headless" ] ], [ /\swv\).+(chrome)\/([\w\.]+)/i ], [ [ NAME, /(.+)/, "$1 WebView" ], VERSION ], [ /((?:oculus|samsung)browser)\/([\w\.]+)/i ], [ [ NAME, /(.+(?:g|us))(.+)/, "$1 $2" ], VERSION ], [ /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i ], [ VERSION, [ NAME, "Android Browser" ] ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i ], [ NAME, VERSION ], [ /(dolfin)\/([\w\.]+)/i ], [ [ NAME, "Dolphin" ], VERSION ], [ /((?:android.+)crmo|crios)\/([\w\.]+)/i ], [ [ NAME, "Chrome" ], VERSION ], [ /(coast)\/([\w\.]+)/i ], [ [ NAME, "Opera Coast" ], VERSION ], [ /fxios\/([\w\.-]+)/i ], [ VERSION, [ NAME, "Firefox" ] ], [ /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i ], [ VERSION, [ NAME, "Mobile Safari" ] ], [ /version\/([\w\.]+).+?(mobile\s?safari|safari)/i ], [ VERSION, NAME ], [ /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ [ NAME, "GSA" ], VERSION ], [ /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ NAME, [ VERSION, mapper.str, maps.browser.oldsafari.version ] ], [ /(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i ], [ NAME, VERSION ], [ /(navigator|netscape)\/([\w\.-]+)/i ], [ [ NAME, "Netscape" ], VERSION ], [ /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i ], [ NAME, VERSION ] ],
                cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ ARCHITECTURE, "amd64" ] ], [ /(ia32(?=;))/i ], [ [ ARCHITECTURE, util.lowerize ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ ARCHITECTURE, "ia32" ] ], [ /windows\s(ce|mobile);\sppc;/i ], [ [ ARCHITECTURE, "arm" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ ARCHITECTURE, /ower/, "", util.lowerize ] ], [ /(sun4\w)[;\)]/i ], [ [ ARCHITECTURE, "sparc" ] ], [ /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ [ ARCHITECTURE, util.lowerize ] ] ],
                device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ MODEL, VENDOR, [ TYPE, TABLET ] ], [ /applecoremedia\/[\w\.]+ \((ipad)/ ], [ MODEL, [ VENDOR, "Apple" ], [ TYPE, TABLET ] ], [ /(apple\s{0,1}tv)/i ], [ [ MODEL, "Apple TV" ], [ VENDOR, "Apple" ] ], [ /(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ VENDOR, MODEL, [ TYPE, TABLET ] ], [ /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i ], [ MODEL, [ VENDOR, "Amazon" ], [ TYPE, TABLET ] ], [ /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i ], [ [ MODEL, mapper.str, maps.device.amazon.model ], [ VENDOR, "Amazon" ], [ TYPE, MOBILE ] ], [ /\((ip[honed|\s\w*]+);.+(apple)/i ], [ MODEL, VENDOR, [ TYPE, MOBILE ] ], [ /\((ip[honed|\s\w*]+);/i ], [ MODEL, [ VENDOR, "Apple" ], [ TYPE, MOBILE ] ], [ /(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i ], [ VENDOR, MODEL, [ TYPE, MOBILE ] ], [ /\(bb10;\s(\w+)/i ], [ MODEL, [ VENDOR, "BlackBerry" ], [ TYPE, MOBILE ] ], [ /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i ], [ MODEL, [ VENDOR, "Asus" ], [ TYPE, TABLET ] ], [ /(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i ], [ [ VENDOR, "Sony" ], [ MODEL, "Xperia Tablet" ], [ TYPE, TABLET ] ], [ /android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i ], [ MODEL, [ VENDOR, "Sony" ], [ TYPE, MOBILE ] ], [ /\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i ], [ VENDOR, MODEL, [ TYPE, CONSOLE ] ], [ /android.+;\s(shield)\sbuild/i ], [ MODEL, [ VENDOR, "Nvidia" ], [ TYPE, CONSOLE ] ], [ /(playstation\s[34portablevi]+)/i ], [ MODEL, [ VENDOR, "Sony" ], [ TYPE, CONSOLE ] ], [ /(sprint\s(\w+))/i ], [ [ VENDOR, mapper.str, maps.device.sprint.vendor ], [ MODEL, mapper.str, maps.device.sprint.model ], [ TYPE, MOBILE ] ], [ /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i ], [ VENDOR, MODEL, [ TYPE, TABLET ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i ], [ VENDOR, [ MODEL, /_/g, " " ], [ TYPE, MOBILE ] ], [ /(nexus\s9)/i ], [ MODEL, [ VENDOR, "HTC" ], [ TYPE, TABLET ] ], [ /d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i ], [ MODEL, [ VENDOR, "Huawei" ], [ TYPE, MOBILE ] ], [ /(microsoft);\s(lumia[\s\w]+)/i ], [ VENDOR, MODEL, [ TYPE, MOBILE ] ], [ /[\s\(;](xbox(?:\sone)?)[\s\);]/i ], [ MODEL, [ VENDOR, "Microsoft" ], [ TYPE, CONSOLE ] ], [ /(kin\.[onetw]{3})/i ], [ [ MODEL, /\./g, " " ], [ VENDOR, "Microsoft" ], [ TYPE, MOBILE ] ], [ /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i ], [ MODEL, [ VENDOR, "Motorola" ], [ TYPE, MOBILE ] ], [ /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i ], [ MODEL, [ VENDOR, "Motorola" ], [ TYPE, TABLET ] ], [ /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i ], [ [ VENDOR, util.trim ], [ MODEL, util.trim ], [ TYPE, SMARTTV ] ], [ /hbbtv.+maple;(\d+)/i ], [ [ MODEL, /^/, "SmartTV" ], [ VENDOR, "Samsung" ], [ TYPE, SMARTTV ] ], [ /\(dtv[\);].+(aquos)/i ], [ MODEL, [ VENDOR, "Sharp" ], [ TYPE, SMARTTV ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i ], [ [ VENDOR, "Samsung" ], MODEL, [ TYPE, TABLET ] ], [ /smart-tv.+(samsung)/i ], [ VENDOR, [ TYPE, SMARTTV ], MODEL ], [ /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i ], [ [ VENDOR, "Samsung" ], MODEL, [ TYPE, MOBILE ] ], [ /sie-(\w+)*/i ], [ MODEL, [ VENDOR, "Siemens" ], [ TYPE, MOBILE ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i ], [ [ VENDOR, "Nokia" ], MODEL, [ TYPE, MOBILE ] ], [ /android\s3\.[\s\w;-]{10}(a\d{3})/i ], [ MODEL, [ VENDOR, "Acer" ], [ TYPE, TABLET ] ], [ /android.+([vl]k\-?\d{3})\s+build/i ], [ MODEL, [ VENDOR, "LG" ], [ TYPE, TABLET ] ], [ /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i ], [ [ VENDOR, "LG" ], MODEL, [ TYPE, TABLET ] ], [ /(lg) netcast\.tv/i ], [ VENDOR, MODEL, [ TYPE, SMARTTV ] ], [ /(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i ], [ MODEL, [ VENDOR, "LG" ], [ TYPE, MOBILE ] ], [ /android.+(ideatab[a-z0-9\-\s]+)/i ], [ MODEL, [ VENDOR, "Lenovo" ], [ TYPE, TABLET ] ], [ /linux;.+((jolla));/i ], [ VENDOR, MODEL, [ TYPE, MOBILE ] ], [ /((pebble))app\/[\d\.]+\s/i ], [ VENDOR, MODEL, [ TYPE, WEARABLE ] ], [ /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i ], [ VENDOR, MODEL, [ TYPE, MOBILE ] ], [ /crkey/i ], [ [ MODEL, "Chromecast" ], [ VENDOR, "Google" ] ], [ /android.+;\s(glass)\s\d/i ], [ MODEL, [ VENDOR, "Google" ], [ TYPE, WEARABLE ] ], [ /android.+;\s(pixel c)\s/i ], [ MODEL, [ VENDOR, "Google" ], [ TYPE, TABLET ] ], [ /android.+;\s(pixel xl|pixel)\s/i ], [ MODEL, [ VENDOR, "Google" ], [ TYPE, MOBILE ] ], [ /android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i ], [ [ MODEL, /_/g, " " ], [ VENDOR, "Xiaomi" ], [ TYPE, MOBILE ] ], [ /android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i ], [ [ MODEL, /_/g, " " ], [ VENDOR, "Xiaomi" ], [ TYPE, TABLET ] ], [ /android.+;\s(m[1-5]\snote)\sbuild/i ], [ MODEL, [ VENDOR, "Meizu" ], [ TYPE, TABLET ] ], [ /android.+a000(1)\s+build/i ], [ MODEL, [ VENDOR, "OnePlus" ], [ TYPE, MOBILE ] ], [ /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i ], [ MODEL, [ VENDOR, "RCA" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(Venue[\d\s]*)\s+build/i ], [ MODEL, [ VENDOR, "Dell" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i ], [ MODEL, [ VENDOR, "Verizon" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i ], [ [ VENDOR, "Barnes & Noble" ], MODEL, [ TYPE, TABLET ] ], [ /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i ], [ MODEL, [ VENDOR, "NuVision" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i ], [ [ VENDOR, "ZTE" ], MODEL, [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i ], [ MODEL, [ VENDOR, "Swiss" ], [ TYPE, MOBILE ] ], [ /android.+[;\/]\s*(zur\d{3})\s+build/i ], [ MODEL, [ VENDOR, "Swiss" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i ], [ MODEL, [ VENDOR, "Zeki" ], [ TYPE, TABLET ] ], [ /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i ], [ [ VENDOR, "Dragon Touch" ], MODEL, [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(NS-?.+)\s+build/i ], [ MODEL, [ VENDOR, "Insignia" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*((NX|Next)-?.+)\s+build/i ], [ MODEL, [ VENDOR, "NextBook" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i ], [ [ VENDOR, "Voice" ], MODEL, [ TYPE, MOBILE ] ], [ /android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i ], [ [ VENDOR, "LvTel" ], MODEL, [ TYPE, MOBILE ] ], [ /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i ], [ MODEL, [ VENDOR, "Envizen" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i ], [ VENDOR, MODEL, [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i ], [ MODEL, [ VENDOR, "MachSpeed" ], [ TYPE, TABLET ] ], [ /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i ], [ VENDOR, MODEL, [ TYPE, TABLET ] ], [ /android.+[;\/]\s*TU_(1491)\s+build/i ], [ MODEL, [ VENDOR, "Rotor" ], [ TYPE, TABLET ] ], [ /android.+(KS(.+))\s+build/i ], [ MODEL, [ VENDOR, "Amazon" ], [ TYPE, TABLET ] ], [ /android.+(Gigaset)[\s\-]+(Q.+)\s+build/i ], [ VENDOR, MODEL, [ TYPE, TABLET ] ], [ /\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i ], [ [ TYPE, util.lowerize ], VENDOR, MODEL ], [ /(android.+)[;\/].+build/i ], [ MODEL, [ VENDOR, "Generic" ] ] ],
                engine: [ [ /windows.+\sedge\/([\w\.]+)/i ], [ VERSION, [ NAME, "EdgeHTML" ] ], [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ NAME, VERSION ], [ /rv\:([\w\.]+).*(gecko)/i ], [ VERSION, NAME ] ],
                os: [ [ /microsoft\s(windows)\s(vista|xp)/i ], [ NAME, VERSION ], [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ NAME, [ VERSION, mapper.str, maps.os.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ NAME, "Windows" ], [ VERSION, mapper.str, maps.os.windows.version ] ], [ /\((bb)(10);/i ], [ [ NAME, "BlackBerry" ], VERSION ], [ /(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i ], [ NAME, VERSION ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ NAME, "Symbian" ], VERSION ], [ /\((series40);/i ], [ NAME ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ NAME, "Firefox OS" ], VERSION ], [ /(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i ], [ NAME, VERSION ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ NAME, "Chromium OS" ], VERSION ], [ /(sunos)\s?([\w\.]+\d)*/i ], [ [ NAME, "Solaris" ], VERSION ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ NAME, VERSION ], [ /(haiku)\s(\w+)/i ], [ NAME, VERSION ], [ /cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i ], [ [ VERSION, /_/g, "." ], [ NAME, "iOS" ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i ], [ [ NAME, "Mac OS" ], [ VERSION, /_/g, "." ] ], [ /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i ], [ NAME, VERSION ] ]
            };
            var UAParser = function UAParser(uastring, extensions) {
                if (typeof uastring === "object") {
                    extensions = uastring;
                    uastring = undefined;
                }
                if (!(this instanceof UAParser)) {
                    return new UAParser(uastring, extensions).getResult();
                }
                var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
                var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                this.getBrowser = function() {
                    var browser = {
                        name: undefined,
                        version: undefined
                    };
                    mapper.rgx.call(browser, ua, rgxmap.browser);
                    browser.major = util.major(browser.version);
                    return browser;
                };
                this.getCPU = function() {
                    var cpu = {
                        architecture: undefined
                    };
                    mapper.rgx.call(cpu, ua, rgxmap.cpu);
                    return cpu;
                };
                this.getDevice = function() {
                    var device = {
                        vendor: undefined,
                        model: undefined,
                        type: undefined
                    };
                    mapper.rgx.call(device, ua, rgxmap.device);
                    return device;
                };
                this.getEngine = function() {
                    var engine = {
                        name: undefined,
                        version: undefined
                    };
                    mapper.rgx.call(engine, ua, rgxmap.engine);
                    return engine;
                };
                this.getOS = function() {
                    var os = {
                        name: undefined,
                        version: undefined
                    };
                    mapper.rgx.call(os, ua, rgxmap.os);
                    return os;
                };
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    };
                };
                this.getUA = function() {
                    return ua;
                };
                this.setUA = function(uastring) {
                    ua = uastring;
                    return this;
                };
                return this;
            };
            UAParser.VERSION = LIBVERSION;
            UAParser.BROWSER = {
                NAME: NAME,
                MAJOR: MAJOR,
                VERSION: VERSION
            };
            UAParser.CPU = {
                ARCHITECTURE: ARCHITECTURE
            };
            UAParser.DEVICE = {
                MODEL: MODEL,
                VENDOR: VENDOR,
                TYPE: TYPE,
                CONSOLE: CONSOLE,
                MOBILE: MOBILE,
                SMARTTV: SMARTTV,
                TABLET: TABLET,
                WEARABLE: WEARABLE,
                EMBEDDED: EMBEDDED
            };
            UAParser.ENGINE = {
                NAME: NAME,
                VERSION: VERSION
            };
            UAParser.OS = {
                NAME: NAME,
                VERSION: VERSION
            };
            if (typeof exports !== UNDEF_TYPE) {
                if (typeof module !== UNDEF_TYPE && module.exports) {
                    exports = module.exports = UAParser;
                }
                exports.UAParser = UAParser;
            } else {
                if ("function" === FUNC_TYPE && __webpack_require__("./node_modules/webpack/buildin/amd-options.js")) {
                    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return UAParser;
                    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (window) {
                    window.UAParser = UAParser;
                }
            }
            var $ = window && (window.jQuery || window.Zepto);
            if (typeof $ !== UNDEF_TYPE) {
                var parser = new UAParser();
                $.ua = parser.getResult();
                $.ua.get = function() {
                    return parser.getUA();
                };
                $.ua.set = function(uastring) {
                    parser.setUA(uastring);
                    var result = parser.getResult();
                    for (var prop in result) {
                        $.ua[prop] = result[prop];
                    }
                };
            }
        })(typeof window === "object" ? window : this);
    },
    "./src/catchplay/core/dictionary.js": function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var DICTIONARY = {};
        var GITHASH = "";
        try {
            GITHASH = "2ba0c4be21bea30f8436531cd0c86e4a99662a23".substr(0, 7);
        } catch (error) {
            console.warn("Cant find webpack git commit hash");
            GITHASH = "";
        }
        DICTIONARY.VERSION = "1.3.5-" + GITHASH;
        DICTIONARY.WATCH_TYPE = {
            LIVE: "live",
            MOVIE: "movie",
            EPISODE: "episode",
            MASTER: "master",
            TRAILER: "trailer",
            PREVIEW: "preview"
        };
        DICTIONARY.DEVICE_TYPE = {
            IOS: "ios",
            ANDROID: "android",
            WEBOS: "webos",
            WEB: "web",
            CHROMECAST: "chromecast"
        };
        DICTIONARY.STREAMING_TYPE = {
            DASH: "dash",
            HLS: "hls",
            MP4: "mp4",
            UNKNOWN: "unknown"
        };
        DICTIONARY.VIDEO_MIME_TYPE = {
            DASH: "application/dash+xml",
            HLS: "application/x-mpegURL",
            HLS_ALIAS: "application/vnd.apple.mpegurl",
            MP4: "video/mp4",
            UNKNOWN: "unknown"
        };
        DICTIONARY.PLAYER_TYPE = {
            NATIVE: "html5",
            BRIGHTCOVE: "bc",
            CATCHPLAY: "cpp"
        };
        DICTIONARY.PLAYER_PLUGIN = {
            CHROMECAST_SENDER: "chromecastsender",
            HTML5: "html5",
            SHAKA_PLAYER: "shakaplayer",
            VIDEOJS: "videojs",
            DASHJS: "dashjs",
            HLSJS: "hlsjs",
            XHOOK: "xhook"
        };
        DICTIONARY.LOG_TYPE = {
            COMMON: 1,
            WARNING: 2,
            ERROR: 4,
            CAST_LOG: 8,
            WATCHLOG_LOG: 16,
            USERACTIVE_LOG: 32
        };
        DICTIONARY.PLAYER_ERROR_TYPE = {
            API: {
                COMMON: "api",
                VCMS: "vcms-api",
                BACKEND: "backend-api"
            },
            VIDEO: {
                COMMON: "video",
                PREVIEW_TIME_UP: "video-preview-time-up"
            },
            SUBTITLE: "subtitle",
            PLAYER: {
                PARAMETER_INVALID: "parameter-invalid",
                DRM_NOT_SUPPORT: "drm-not-support",
                DRM_EXECUTE_FAIL: "drm-execute-fail",
                INIT_FAIL: "player-init-fail",
                RESTART_FAIL: "player-restart-fail",
                BROWSER_NOT_SUPPORT: "browser-not-support"
            },
            UNKNOWN: "unknown"
        };
        DICTIONARY.MEDIA_ERROR_TYPE = {
            1: "MEDIA_ERR_ABORTED",
            2: "MEDIA_ERR_NETWORK",
            3: "MEDIA_ERR_DECODE",
            4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
        };
        DICTIONARY.PLAYER_STATUS = {
            NONE: "none",
            INITIALIZING: "initializing",
            INITIALIZED: "initialized",
            PLAYING: "playing",
            PAUSE: "pause",
            DISPOSED: "disposed",
            ERROR: "error"
        };
        DICTIONARY.IOS_FAIRPLAY_SUPPORT_OS_VERSION = 11.2;
        DICTIONARY.EVENTS = {
            PLAYER_KIT_ON_INIT: "PlayerKitonInitEvent",
            PLAYER_KIT_ON_SUBTITLE_READY: "PlayerKitonSubtitleReadyEvent",
            PLAYER_KIT_ON_READY_TO_PLAY: "PlayerKitonReadytoPlayEvent",
            PLAYER_KIT_ON_START_TO_PLAY: "PlayerKitonStarttoPlayEvent",
            PLAYER_KIT_ON_PROGRESS: "PlayerKitonProgressEvent",
            PLAYER_KIT_ON_CANPLAY: "PlayerKitonCanplayEvent",
            PLAYER_KIT_ON_PLAYING: "PlayerKitonPlayingEvent",
            PLAYER_KIT_ON_PAUSE: "PlayerKitonPauseEvent",
            PLAYER_KIT_ON_SEEKING: "PlayerKitonSeekingEvent",
            PLAYER_KIT_ON_SEEKED: "PlayerKitonSeekedEvent",
            PLAYER_KIT_ON_END: "PlayerKitonEndtoPlayEvent",
            PLAYER_KIT_ON_WAITING: "PlayerKitonWaitingEvent",
            PLAYER_KIT_ON_PLAYBACK_NOT_ALLOWED: "PlayerKitonPlaybackNotAllowedEvent",
            PLAYER_KIT_ON_MUTE: "PlayerKitonMuteEvent",
            PLAYER_KIT_ON_STOP: "PlayerKitonStoptoPlayEvent",
            PLAYER_KIT_ON_ERROR: "PlayerKitonErrorEvent",
            PLAYER_KIT_ON_DOWNLOAD_SEGMENT: "PlayerKitonDownloadSegmentEvent",
            CORE_VIDEO_EVERY_MINUTE: "everyminute",
            CORE_VIDEO_PREPARING: "videopreparing",
            CORE_VIDEO_READY_START: "readystart",
            CORE_VIDEO_PLAY_START: "playstart",
            CORE_VIDEO_PLAY: "play",
            CORE_VIDEO_PLAYING: "playing",
            CORE_VIDEO_WAITING: "waiting",
            CORE_VIDEO_CANPLAY: "canplay",
            CORE_VIDEO_CANPLAYTHROUGH: "canplaythrough",
            CORE_VIDEO_PAUSE: "pause",
            CORE_VIDEO_SEEKING: "seeking",
            CORE_VIDEO_STOP: "stop",
            CORE_VIDEO_END: "ended",
            CORE_VIDEO_TEXT_TRACK_CHANGE: "texttrackchange",
            CORE_VIDEO_CAST: "cast",
            CORE_VIDEO_AIRPLAY: "airplay",
            CORE_VIDEO_SPEED_RATECHANGE: "ratechange",
            CORE_VIDEO_UNKNOWN_ERROR: "videounknownerror",
            CORE_VIDEO_NEED_TO_RESTART: "needtorestart",
            CORE_VIDEO_WATCH_LOG_PLAYBACK_ILLEGAL: "watchlogplaybackillegal"
        };
        DICTIONARY.API_HOST_URL = {
            SIT: {
                CMS_DOMAIN: "https://sit-api.catchplay.com",
                VCMS_DOMAIN: "https://sit-vcmsapi.catchplay.com"
            },
            UAT: {
                CMS_DOMAIN: "https://uat-api.catchplay.com",
                VCMS_DOMAIN: "https://uat-vcmsapi.catchplay.com"
            },
            PROD: {
                CMS_DOMAIN: "https://sunapi.catchplay.com",
                VCMS_DOMAIN: "https://vcmsapi.catchplay.com"
            }
        };
        DICTIONARY.PLATFORMS = {
            MAC_OS_SAFARI: "mac os/safari",
            IOS_FACEBOOK: "ios/facebook",
            IOS_MOBILE_SAFARI: "ios/mobile safari",
            IOS_CHROME: "ios/chrome",
            WINDOWS_CHROME: "windows/chrome",
            MAC_OS_CHROME: "mac os/chrome",
            UBUNTU_CHROME: "ubuntu/chrome",
            LINUX_CHROME: "linux/chrome",
            ANDROID_FACEBOOK: "android/facebook",
            ANDROID_CHROME: "android/chrome",
            WINDOWS_FIREFOX: "windows/firefox",
            MAC_OS_FIREFOX: "mac os/firefox",
            UBUNTU_FIREFOX: "ubuntu/firefox",
            LINUX_FIREFOX: "linux/firefox",
            ANDROID_FIREFOX: "android/firefox",
            WINDOWS_EDGE: "windows/edge",
            LINUX_OPERA: "linux/opera",
            WINDOWS_OPERA: "windows/opera",
            MAC_OS_OPERA: "mac os/opera",
            ANDROID_OPERA: "android/opera",
            WEBOS_CHROME: "webos/chrome",
            WEBOS_SAFARI: "webos/safari",
            ANDROID_UCBROWSER: "android/ucbrowser"
        };
        DICTIONARY.DRM_TYPE = {
            CENC: "cenc",
            WIDEVINE: "widevine",
            PLAYREADY: "playready",
            FAIRPLAY: "fairplay",
            AES128: "aes128",
            CLEARKEY: "clearkey"
        };
        DICTIONARY.DRM = {
            WIDEVINE: {
                NAME: DICTIONARY.DRM_TYPE.WIDEVINE,
                KEY_SYSTEM: "com.widevine.alpha",
                DEFAULT_LICENSE_URL: "https://widevine.licensekeyserver.com",
                DEFAULT_CERTIFICATE_URL: ""
            },
            PLAYREADY: {
                NAME: DICTIONARY.DRM_TYPE.PLAYREADY,
                KEY_SYSTEM: "com.microsoft.playready",
                DEFAULT_LICENSE_URL: "https://sldrm.licensekeyserver.com/core/rightsmanager.asmx",
                DEFAULT_CERTIFICATE_URL: ""
            },
            FAIRPLAY: {
                NAME: DICTIONARY.DRM_TYPE.FAIRPLAY,
                KEY_SYSTEM: "com.apple.fps.1_0",
                DEFAULT_LICENSE_URL: "https://fp-keyos.licensekeyserver.com/getkey",
                DEFAULT_CERTIFICATE_URL: "https://asiaplay-origin.s3.amazonaws.com/playback/certificate/fairplay.der"
            },
            CLEARKEY: {
                NAME: DICTIONARY.DRM_TYPE.CLEARKEY,
                KEY_SYSTEM: "org.w3.clearkey",
                DEFAULT_LICENSE_URL: "",
                DEFAULT_CERTIFICATE_URL: ""
            }
        };
        DICTIONARY.CHROMECASTSENDER = {};
        DICTIONARY.CHROMECASTSENDER.RECEIVER_STATUS = {
            IDLE: "idle",
            LOADING: "loading",
            INIT: "initialize",
            READY: "ready",
            TEAR_DOWN: "tearDown"
        };
        DICTIONARY.CHROMECASTSENDER.PLAYER_STATUS = {
            IDLE: "idle",
            LOADING: "loading",
            PLAYING: "playing",
            BUFFERING: "buffering",
            PAUSED: "paused"
        };
        DICTIONARY.CHROMECASTSENDER.EVENTS = {
            INIT: "PlayerKitonInitEvent",
            ERROR: "PlayerKitonErrorEvent",
            RECEIVER_FOUND: "CastReceiverFound",
            RECEIVER_NOT_FOUND: "CastReceiverNotFound",
            CAST_CONNECTION: "CastConnectionEvent",
            CAST_IDLE: "CastIdleEvent",
            CAST_RECV_MSG_VIDEOWILLEND: "CastReceiverMessageVideoWillEndEvent",
            CAST_RECV_MSG_INFO: "CastReceiverMessageInfoEvent",
            LOADED: "CastPlayerLoadEvent",
            MEDIA_DISCOVERED: "CastPlayerMediaDiscoveredEvent",
            PLAYING: "CastPlayerProgressEvent",
            PAUSED: "CastPlayerPAUSEDEvent",
            VOLUME: "CastPlayerVloumEvent",
            CASTPLAYER_IDLE: "CastPlayerIdleEvent"
        };
        exports.default = DICTIONARY;
    },
    "./src/catchplay/core/eme/default-drm-config.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var defaultDrmConfig = {
            currentDrm: "",
            widevine: {
                keySystem: _dictionary2.default.DRM.WIDEVINE.KEY_SYSTEM,
                licenseUrl: _dictionary2.default.DRM.WIDEVINE.DEFAULT_LICENSE_URL,
                certificateUrl: _dictionary2.default.DRM.WIDEVINE.DEFAULT_CERTIFICATE_URL,
                license: ""
            },
            playready: {
                keySystem: _dictionary2.default.DRM.PLAYREADY.KEY_SYSTEM,
                licenseUrl: _dictionary2.default.DRM.PLAYREADY.DEFAULT_LICENSE_URL,
                certificateUrl: _dictionary2.default.DRM.PLAYREADY.DEFAULT_CERTIFICATE_URL,
                license: ""
            },
            fairplay: {
                keySystem: _dictionary2.default.DRM.FAIRPLAY.KEY_SYSTEM,
                licenseUrl: _dictionary2.default.DRM.FAIRPLAY.DEFAULT_LICENSE_URL,
                certificateUrl: _dictionary2.default.DRM.FAIRPLAY.DEFAULT_CERTIFICATE_URL,
                license: ""
            }
        };
        exports.default = defaultDrmConfig;
    },
    "./src/catchplay/core/eme/fairplay.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _httpRequest = __webpack_require__("./src/catchplay/core/http-request.js");
        var _httpRequest2 = _interopRequireDefault(_httpRequest);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function base64DecodeUint8Array(input) {
            var raw = window.atob(input);
            var rawLength = raw.length;
            var bit8Array = new Uint8Array(new ArrayBuffer(rawLength));
            for (var i = 0; i < rawLength; i++) {
                bit8Array[i] = raw.charCodeAt(i);
            }
            return bit8Array;
        }
        function base64EncodeUint8Array(input) {
            var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var output = "";
            var chr1 = void 0, chr2 = void 0, chr3 = void 0, enc1 = void 0, enc2 = void 0, enc3 = void 0, enc4 = void 0;
            var i = 0;
            while (i < input.length) {
                chr1 = input[i++];
                chr2 = i < input.length ? input[i++] : Number.NaN;
                chr3 = i < input.length ? input[i++] : Number.NaN;
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
            }
            return output;
        }
        function loadCertificate(certificateUrl) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return new _promisePolyfill2.default(function(resolve, reject) {
                var playerName = !!options.playerName ? options.playerName : "";
                _httpRequest2.default.get(certificateUrl, {
                    responseType: "arraybuffer",
                    headers: {
                        pragma: "cache-control: no-cache",
                        "cache-control": "max-age=0"
                    }
                }).then(function(response) {
                    resolve({
                        certificate: new Uint8Array(response),
                        message: playerName + " fairplay DRM certificate loaded successful."
                    });
                }).catch(function(err) {
                    reject(new _playerError2.default({
                        type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.DRM_EXECUTE_FAIL,
                        message: playerName + " failed to retrieve the server certificate..  " + err.toString(),
                        code: "P001",
                        httpCode: err.httpCode,
                        data: err.data
                    }));
                });
            });
        }
        function onCertificateError(event) {
            window.console.error("failed to retrieve the server certificate.");
        }
        function licenseRequestReady(event) {
            var session = event.target;
            var message = event.message;
            var xhr = new XMLHttpRequest();
            var sessionId = event.sessionId;
            var licenseUrl = this.licenseUrl;
            var license = this.license;
            xhr.responseType = "text";
            xhr.session = session;
            xhr.addEventListener("load", licenseRequestLoaded, false);
            xhr.addEventListener("error", licenseRequestFailed, false);
            var params = "spc=" + base64EncodeUint8Array(message) + "&assetId=" + session.contentId;
            xhr.open("POST", licenseUrl, true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("authorization", license);
            xhr.send(params);
        }
        function licenseRequestLoaded(event) {
            _logger2.default.common("fairplay license request loaded and begin decrypt");
            var request = event.target;
            var session = request.session;
            var keyText = request.responseText.trim();
            if (keyText.substr(0, 5) === "<ckc>" && keyText.substr(-6) === "</ckc>") {
                keyText = keyText.slice(5, -6);
            }
            var key = base64DecodeUint8Array(keyText);
            session.update(key);
        }
        function licenseRequestFailed(event) {
            window.console.error("the license request failed.");
        }
        function onkeyerror(event) {
            window.console.error("a decryption key error was encountered");
        }
        function onkeyadded(event) {
            window.console.info("decryption key was added to session.");
        }
        function arrayToString(array) {
            var uint16array = new Uint16Array(array.buffer);
            return String.fromCharCode.apply(null, uint16array);
        }
        function stringToArray(string) {
            var buffer = new ArrayBuffer(string.length * 2);
            var array = new Uint16Array(buffer);
            for (var i = 0, strLen = string.length; i < strLen; i++) {
                array[i] = string.charCodeAt(i);
            }
            return array;
        }
        function extractContentId(initData) {
            var contentId = arrayToString(initData);
            return contentId.substring(8);
        }
        function concatInitDataIdAndCertificate(initData, id, cert) {
            if (typeof id == "string") id = stringToArray(id);
            var offset = 0;
            var buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
            var dataView = new DataView(buffer);
            var initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
            initDataArray.set(initData);
            offset += initData.byteLength;
            dataView.setUint32(offset, id.byteLength, true);
            offset += 4;
            var idArray = new Uint8Array(buffer, offset, id.byteLength);
            idArray.set(id);
            offset += idArray.byteLength;
            dataView.setUint32(offset, cert.byteLength, true);
            offset += 4;
            var certArray = new Uint8Array(buffer, offset, cert.byteLength);
            certArray.set(cert);
            return new Uint8Array(buffer, 0, buffer.byteLength);
        }
        function selectKeySystem() {
            if (WebKitMediaKeys.isTypeSupported(_dictionary2.default.DRM.FAIRPLAY.KEY_SYSTEM, "video/mp4")) {
                return _dictionary2.default.DRM.FAIRPLAY.KEY_SYSTEM;
            } else {
                throw new _playerError2.default({
                    message: "key system not supported",
                    code: "P001",
                    type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.DRM_NOT_SUPPORT
                });
            }
        }
        function fairplayHandler(event) {
            var video = event.target;
            var initData = event.initData;
            var contentId = extractContentId(initData);
            var certificate = this.certificate;
            var licenseUrl = this.licenseUrl;
            var license = this.license;
            initData = concatInitDataIdAndCertificate(initData, contentId, certificate);
            if (!video.webkitKeys) {
                var keySystem = selectKeySystem();
                video.webkitSetMediaKeys(new WebKitMediaKeys(keySystem));
            }
            if (!video.webkitKeys) {
                throw new _playerError2.default({
                    message: "could not create MediaKeys",
                    code: "P001",
                    type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.DRM_EXECUTE_FAIL
                });
            }
            var keySession = video.webkitKeys.createSession("video/mp4", initData);
            if (!keySession) {
                throw new _playerError2.default({
                    message: "could not create key session",
                    code: "P001",
                    type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.DRM_EXECUTE_FAIL
                });
            }
            licenseConfig = {
                licenseUrl: licenseUrl,
                license: license
            };
            keySession.contentId = contentId;
            keySession.addEventListener("webkitkeymessage", licenseRequestReady.bind(licenseConfig), false);
            keySession.addEventListener("webkitkeyadded", onkeyadded, false);
            keySession.addEventListener("webkitkeyerror", onkeyerror, false);
        }
        var Fairplay = function() {
            function Fairplay(config) {
                _classCallCheck(this, Fairplay);
                this.config = config;
            }
            _createClass(Fairplay, [ {
                key: "setup",
                value: function setup() {
                    var _this = this;
                    return new _promisePolyfill2.default(function(resolve, reject) {
                        loadCertificate(_this.config.certificateUrl, {
                            playerName: _this.config.playerName
                        }).then(function(result) {
                            _logger2.default.common(result.message);
                            _this.config.videoElement.addEventListener("webkitneedkey", fairplayHandler.bind({
                                certificate: result.certificate,
                                license: _this.config.license,
                                licenseUrl: _this.config.licenseUrl
                            }), false);
                            resolve(_this.config.playerName + " is register fairplay license fetch event successful");
                        }).catch(function(err) {
                            reject(new _playerError2.default({
                                type: _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.DRM_EXECUTE_FAIL,
                                message: _this.config.playerName + " fairplay handler error: " + err.toString(),
                                code: "P001"
                            }));
                        });
                    });
                }
            } ]);
            return Fairplay;
        }();
        exports.default = Fairplay;
    },
    "./src/catchplay/core/error-handler.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var ErrorHandler = function ErrorHandler() {};
        ErrorHandler.prototype.dispatchErrorEvent = function(err, dom) {
            if (!err instanceof _playerError2.default) {
                throw new _playerError2.default({
                    message: "`parameter (err) must be `PlayerError` object",
                    code: "P000"
                });
            }
            if (!dom instanceof HTMLElement) {
                throw new _playerError2.default({
                    message: "parameter (dom) must be `HTMLElement`",
                    code: "P000"
                });
            }
            _logger2.default.error("send error. code:" + err.code + " message: " + err.message);
            var event = new CustomEvent(_dictionary2.default.EVENTS.PLAYER_KIT_ON_ERROR, {
                detail: {
                    errorType: err.type,
                    errorCode: err.code,
                    errorMsg: err.message,
                    errorData: err.data
                }
            });
            dom.dispatchEvent(event);
        };
        exports.default = ErrorHandler;
    },
    "./src/catchplay/core/events/event-dispatcher.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var EventDispatcher = function EventDispatcher(dom) {
            if (!dom instanceof HTMLElement) {
                throw new _playerError2.default({
                    message: "[EventDispatcher] constructor parameter must be [HTMLElement]",
                    code: "P000"
                });
            }
            this.dom = dom;
        };
        EventDispatcher.prototype.trigger = function(eventName, data) {
            var event = new CustomEvent(eventName, {
                detail: data
            });
            this.dom.dispatchEvent(event);
        };
        exports.default = EventDispatcher;
    },
    "./src/catchplay/core/events/event-target.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var EventTarget = function() {
            function EventTarget() {
                _classCallCheck(this, EventTarget);
                this.listeners = {};
            }
            _createClass(EventTarget, [ {
                key: "addEventListener",
                value: function addEventListener(type, callback) {
                    if (!(type in this.listeners)) {
                        this.listeners[type] = [];
                    }
                    this.listeners[type].push(callback);
                }
            }, {
                key: "removeEventListener",
                value: function removeEventListener(type, callback) {
                    try {
                        if (!(type in this.listeners)) {
                            return;
                        }
                        var stack = this.listeners[type];
                        for (var i = 0, l = stack.length; i < l; i++) {
                            if (stack[i] === callback) {
                                stack.splice(i, 1);
                                return;
                            }
                        }
                    } catch (err) {
                        _logger2.default.warning("coreEventTarget remove event-listener failed", err);
                    }
                }
            }, {
                key: "dispatchEvent",
                value: function dispatchEvent(event) {
                    if (!(event.type in this.listeners)) {
                        return true;
                    }
                    var stack = this.listeners[event.type];
                    event.target = this;
                    for (var i = 0, l = stack.length; i < l; i++) {
                        var func = stack[i];
                        if (func) {
                            func.call(this, event);
                        }
                    }
                    return !event.defaultPrevented;
                }
            }, {
                key: "reset",
                value: function reset() {
                    this.listeners = {};
                }
            }, {
                key: "getListeners",
                value: function getListeners() {
                    return this.listeners;
                }
            } ]);
            return EventTarget;
        }();
        exports.default = EventTarget;
    },
    "./src/catchplay/core/events/general-event-register.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var GeneralEventRegister = function() {
            function GeneralEventRegister() {
                _classCallCheck(this, GeneralEventRegister);
            }
            _createClass(GeneralEventRegister, null, [ {
                key: "loadedmetadataHandler",
                value: function loadedmetadataHandler() {
                    return {
                        name: "loadedmetadata",
                        handler: function handler() {
                            var _this = this;
                            _logger2.default.common(this.name + " [loadedmetadata] event");
                            Promise.all(this.prepareTextTracks()).then(function(results) {
                                results.forEach(function(result) {
                                    _logger2.default.common(result);
                                });
                                return Promise.resolve(_this.name + " all subtitles has been loaded");
                            }).then(function(result) {
                                _logger2.default.common(result);
                                return new Promise(function(waitForDurationResolve) {
                                    var waitForDurationInterval = setInterval(function() {
                                        _logger2.default.common(_this.name + " wait for duration preparing");
                                        if (!!_this.videoElement.readyState && !!_this.videoElement.duration) {
                                            clearInterval(waitForDurationInterval);
                                            waitForDurationResolve(_this.name + " video duration is setting already. length(" + _this.getDuration() + ")");
                                        }
                                    }, 500);
                                });
                            }).then(function(result) {
                                _logger2.default.common(result);
                                if (_this.isDefaultMuted) {
                                    _this.muted(true);
                                }
                                return Promise.resolve(_this.name + " video default muted is: " + _this.isDefaultMuted);
                            }).then(function(result) {
                                _logger2.default.common(result);
                                _this.status = _dictionary2.default.PLAYER_STATUS.INITIALIZED;
                                _this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_READY_TO_PLAY, {
                                    duration: _this.getDuration()
                                });
                            }).catch(function(err) {
                                _logger2.default.warning(_this.name + " catch some error in initial(" + err.toString() + ") but video is still playable");
                                _this.status = _dictionary2.default.PLAYER_STATUS.INITIALIZED;
                                _this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_READY_TO_PLAY, {
                                    duration: _this.getDuration()
                                });
                            });
                        }
                    };
                }
            }, {
                key: "loadeddataHandler",
                value: function loadeddataHandler() {
                    return {
                        name: "loadeddata",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [loadeddata] event");
                            this.enableSubtitle(true);
                            if (!!this.startSecond) {
                                this.seekTo(this.startSecond);
                            }
                            if (this.isMobile()) {
                                _logger2.default.common("pause the video then wait for main-process to the control playback of the video");
                                this.pause();
                            }
                        }
                    };
                }
            }, {
                key: "timeupdateHandler",
                value: function timeupdateHandler() {
                    return {
                        name: "timeupdate",
                        handler: function handler() {
                            if (this.isNormalState()) {
                                var s = Math.floor(this.videoElement.currentTime);
                                var isMatchEveryMinute = s % 60 === 0;
                                if (isMatchEveryMinute && !this.everyMinuteLock) {
                                    _logger2.default.common("match every-minute(60). second: " + s + ". current-time: " + this.videoElement.currentTime);
                                    this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_EVERY_MINUTE, {
                                        detail: {
                                            currentTime: s
                                        }
                                    }));
                                    this.everyMinuteLock = true;
                                } else if (!isMatchEveryMinute && this.everyMinuteLock) {
                                    _logger2.default.common("un-lock for not match every-minute(60). second: " + s + ". current-time: " + this.videoElement.currentTime);
                                    this.everyMinuteLock = false;
                                }
                                this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_PROGRESS, {
                                    currentSecond: this.videoElement.currentTime
                                });
                            }
                        }
                    };
                }
            }, {
                key: "canplayHandler",
                value: function canplayHandler() {
                    return {
                        name: "canplay",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [canplay] event");
                            if (!this.isReady) {
                                this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_READY_START, {
                                    detail: null
                                }));
                                this.isReady = true;
                            }
                            this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_CANPLAY, {
                                detail: null
                            }));
                        }
                    };
                }
            }, {
                key: "playingHandler",
                value: function playingHandler() {
                    return {
                        name: "playing",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [playing] event");
                            this.status = _dictionary2.default.PLAYER_STATUS.PLAYING;
                            if (!this.isFirstframeShowed) {
                                var dispatchTextTracks = this.textTracks.map(function(textTrack) {
                                    return {
                                        label: textTrack.label,
                                        language: textTrack.language
                                    };
                                });
                                if (dispatchTextTracks.length == 0) {
                                    this.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                        message: this.name + " no any subtitles from api fetch",
                                        code: "P002"
                                    }), this.containerDom);
                                }
                                this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_PLAY_START, {
                                    detail: null
                                }));
                                this.videoInternalContainer.style.display = "block";
                                this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_SUBTITLE_READY, {
                                    textTracks: dispatchTextTracks
                                });
                                this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_START_TO_PLAY);
                                this.isFirstframeShowed = true;
                            }
                            this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_PLAYING, {
                                detail: null
                            }));
                            this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_PLAYING);
                        }
                    };
                }
            }, {
                key: "pauseHandler",
                value: function pauseHandler() {
                    return {
                        name: "pause",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [pause] event");
                            this.status = _dictionary2.default.PLAYER_STATUS.PAUSE;
                            this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_PAUSE);
                        }
                    };
                }
            }, {
                key: "seekingHandler",
                value: function seekingHandler() {
                    return {
                        name: "seeking",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [seeking] event. current-time:is " + this.videoElement.currentTime);
                            this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_SEEKING);
                        }
                    };
                }
            }, {
                key: "seekedHandler",
                value: function seekedHandler() {
                    return {
                        name: "seeked",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [seeked] event. current-time:is " + this.videoElement.currentTime);
                            this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_SEEKED);
                        }
                    };
                }
            }, {
                key: "endedHandler",
                value: function endedHandler() {
                    return {
                        name: "ended",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [ended] event");
                            this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_END, {
                                detail: null
                            }));
                            this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_END);
                        }
                    };
                }
            }, {
                key: "errorHandler",
                value: function errorHandler() {
                    return {
                        name: "error",
                        handler: function handler() {
                            if (this.status == _dictionary2.default.PLAYER_STATUS.DISPOSED) {
                                return;
                            }
                            _logger2.default.warning(this.name + " [error] event", this);
                            var videoError = {
                                origin: undefined,
                                code: "unknown",
                                type: "unknown",
                                networkState: undefined,
                                readyState: undefined
                            };
                            if (!!this.videoElement && !!this.videoElement.error) {
                                videoError.origin = this.videoElement.error;
                                videoError.code = this.videoElement.error.code;
                                videoError.type = _dictionary2.default.MEDIA_ERROR_TYPE[videoError.code];
                                videoError.readyState = this.videoElement.readyState;
                                videoError.networkState = this.videoElement.networkState;
                            }
                            var message = this.name + " video playback failed. this video has been interrupted";
                            var dumpsData = this.dumps();
                            var errorData = {
                                origin: videoError.origin,
                                code: "P004",
                                type: videoError.type,
                                readyState: videoError.readyState,
                                networkState: videoError.networkState
                            };
                            _logger2.default.error(message);
                            this.status = _dictionary2.default.PLAYER_STATUS.ERROR;
                            this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_UNKNOWN_ERROR, {
                                detail: {
                                    message: message,
                                    error: errorData,
                                    dumps: dumpsData
                                }
                            }));
                            this.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                message: message,
                                code: "P004",
                                type: _dictionary2.default.PLAYER_ERROR_TYPE.UNKNOWN,
                                data: {
                                    error: errorData,
                                    dumps: dumpsData
                                }
                            }), this.containerDom);
                            try {
                                this.dispose();
                            } catch (err) {
                                _logger2.default.error("player failed in dispose process", err);
                            }
                        }
                    };
                }
            }, {
                key: "waitingHandler",
                value: function waitingHandler() {
                    return {
                        name: "waiting",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [waiting] event");
                            this.eventTarget.dispatchEvent(new CustomEvent(_dictionary2.default.EVENTS.CORE_VIDEO_WAITING, {
                                detail: null
                            }));
                            this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_WAITING);
                        }
                    };
                }
            }, {
                key: "canplaythroughHandler",
                value: function canplaythroughHandler() {
                    return {
                        name: "canplaythrough",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [canplaythrough] event");
                        }
                    };
                }
            }, {
                key: "progressHandler",
                value: function progressHandler() {
                    return {
                        name: "progress",
                        handler: function handler() {
                            if (this.isNormalState()) {
                                _logger2.default.warning(this.name + " [progress] event");
                                var buffers = [];
                                var videoBuffer = this.videoElement.buffered;
                                var bufferedLength = this.videoElement.buffered.length;
                                while (bufferedLength--) {
                                    buffers.push({
                                        start: videoBuffer.start(bufferedLength),
                                        end: videoBuffer.end(bufferedLength)
                                    });
                                }
                                this.containerEventDispatcher.trigger(_dictionary2.default.EVENTS.PLAYER_KIT_ON_DOWNLOAD_SEGMENT, {
                                    buffers: buffers,
                                    currentSecond: this.videoElement.currentTime,
                                    duration: this.getDuration()
                                });
                            }
                        }
                    };
                }
            }, {
                key: "stalledHandler",
                value: function stalledHandler() {
                    return {
                        name: "stalled",
                        handler: function handler() {
                            _logger2.default.common(this.name + " [stalled] event");
                        }
                    };
                }
            } ]);
            return GeneralEventRegister;
        }();
        exports.default = GeneralEventRegister;
    },
    "./src/catchplay/core/http-request.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var GET = "GET";
        var POST = "POST";
        var PUT = "PUT";
        var postSend = function postSend(method, url, config, isAsync) {
            var xhr = new XMLHttpRequest();
            config = !!config ? config : {};
            isAsync = isAsync !== false;
            return new _promisePolyfill2.default(function(resolve, reject) {
                var params = null;
                if (!!config.responseType) {
                    xhr.responseType = config.responseType;
                }
                xhr.open(method, url, isAsync);
                xhr.addEventListener("load", function() {
                    if (this.status >= 200 && this.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject(new _playerError2.default({
                            message: !!xhr.statusText ? xhr.statusText : "Request successful. but receive reject response.",
                            httpCode: this.status,
                            data: xhr.response
                        }));
                    }
                });
                xhr.addEventListener("error", function() {
                    reject(new _playerError2.default({
                        message: !!xhr.statusText ? xhr.statusText : "Request fail on error.",
                        httpCode: this.status,
                        data: xhr.response
                    }));
                });
                xhr.addEventListener("abort", function() {
                    reject(new _playerError2.default({
                        message: !!xhr.statusText ? xhr.statusText : "Request fail on abort.",
                        httpCode: this.status,
                        data: xhr.response
                    }));
                });
                if (config.headers) {
                    Object.keys(config.headers).forEach(function(key) {
                        if ("content-type" == key.toLowerCase() && "object" === typeof config.params && !!config.params) {
                            switch (config.headers[key].toLowerCase()) {
                              case "application/x-www-form-urlencoded":
                                params = Object.keys(config.params).map(function(key) {
                                    return encodeURIComponent(key) + "=" + encodeURIComponent(config.params[key]);
                                }).join("&");
                                break;

                              case "application/json":
                                params = JSON.stringify(config.params);
                                break;

                              default:
                                break;
                            }
                        }
                        xhr.setRequestHeader(key, config.headers[key]);
                    });
                }
                if (!params && !!config.params && "object" === typeof config.params && Object.keys(config.params).length > 0) {
                    params = config.params;
                }
                xhr.send(params);
            });
        };
        var HttpRequest = function HttpRequest() {};
        HttpRequest.prototype.get = function(url, config, isAsync) {
            var xhr = new XMLHttpRequest();
            config = !!config ? config : {};
            isAsync = isAsync !== false;
            return new _promisePolyfill2.default(function(resolve, reject) {
                var params = null;
                if (!!config.responseType) {
                    xhr.responseType = config.responseType;
                }
                if (!!config.params && typeof config.params === "object" && Object.keys(config.params).length > 0) {
                    params = Object.keys(config.params).map(function(key) {
                        return encodeURIComponent(key) + "=" + encodeURIComponent(config.params[key]);
                    }).join("&");
                    url = url + "?" + params;
                }
                xhr.open(GET, url, isAsync);
                xhr.addEventListener("load", function() {
                    if (this.status >= 200 && this.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject(new _playerError2.default({
                            message: !!xhr.statusText ? xhr.statusText : "Request successful. but receive reject response.",
                            httpCode: this.status,
                            data: xhr.response
                        }));
                    }
                });
                xhr.addEventListener("error", function() {
                    reject(new _playerError2.default({
                        message: !!xhr.statusText ? xhr.statusText : "Request fail on error.",
                        httpCode: this.status,
                        data: xhr.response
                    }));
                });
                xhr.addEventListener("abort", function() {
                    reject(new _playerError2.default({
                        message: !!xhr.statusText ? xhr.statusText : "Request fail on abort.",
                        httpCode: this.status,
                        data: xhr.response
                    }));
                });
                if (config.headers) {
                    Object.keys(config.headers).forEach(function(key) {
                        xhr.setRequestHeader(key, config.headers[key]);
                    });
                }
                xhr.send();
            });
        };
        HttpRequest.prototype.post = function(url, config, isAsync) {
            return postSend(POST, url, config, isAsync);
        };
        HttpRequest.prototype.put = function(url, config, isAsync) {
            return postSend(PUT, url, config, isAsync);
        };
        var httpRequest = new HttpRequest();
        exports.default = httpRequest;
    },
    "./src/catchplay/core/logger.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }
        var logger = {
            debugMode: 0,
            setDebugMode: function setDebugMode(level) {
                this.debugMode = level || 0;
            },
            isEnabled: function isEnabled() {
                return !isNaN(this.debugMode);
            },
            common: function common() {
                var logLevel = _dictionary2.default.LOG_TYPE.COMMON;
                if ((logLevel & this.debugMode) === logLevel) {
                    var _console;
                    for (var _len = arguments.length, message = Array(_len), _key = 0; _key < _len; _key++) {
                        message[_key] = arguments[_key];
                    }
                    (_console = console).info.apply(_console, [ "[sdk]" ].concat(_toConsumableArray(message)));
                }
            },
            warning: function warning() {
                var logLevel = _dictionary2.default.LOG_TYPE.WARNING;
                if ((logLevel & this.debugMode) === logLevel) {
                    var _console2;
                    for (var _len2 = arguments.length, message = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        message[_key2] = arguments[_key2];
                    }
                    (_console2 = console).warn.apply(_console2, [ "[sdk]" ].concat(_toConsumableArray(message)));
                }
            },
            error: function error() {
                var logLevel = _dictionary2.default.LOG_TYPE.ERROR;
                if ((logLevel & this.debugMode) === logLevel) {
                    var _console3;
                    for (var _len3 = arguments.length, message = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        message[_key3] = arguments[_key3];
                    }
                    (_console3 = console).error.apply(_console3, [ "[sdk]" ].concat(_toConsumableArray(message)));
                }
            }
        };
        exports.default = logger;
    },
    "./src/catchplay/core/player-error.js": function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var PlayerError = function PlayerError(config) {
            Error.call(this);
            var data = {};
            try {
                if (typeof config.data === "string") {
                    var temp = JSON.parse(config.data);
                    data = !!temp && typeof temp === "object" ? temp : {};
                } else if (typeof config.data === "object") {
                    data = config.data;
                }
            } catch (parserError) {
                console.warn(parserError.toString(), "data is ", config.data);
                data.text = config.data;
            }
            this.status = "error";
            this.name = this.constructor.name;
            this.code = config.code;
            this.message = config.message;
            this.data = data;
            this.type = !!config.type ? config.type : null;
            this.httpCode = !!config.httpCode ? config.httpCode : null;
        };
        PlayerError.prototype.toString = function() {
            return this.message;
        };
        exports.default = PlayerError;
    },
    "./src/catchplay/core/plugins/core.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Core = function() {
            function Core() {
                _classCallCheck(this, Core);
            }
            _createClass(Core, [ {
                key: "build",
                value: function build() {
                    return Promise.reject(new _playerError2.default({
                        message: "plugin-player does not implement build() method",
                        code: "P000"
                    }));
                }
            }, {
                key: "setup",
                value: function setup() {
                    return Promise.reject(new _playerError2.default({
                        message: "plugin-player does not implement setup() method",
                        code: "P000"
                    }));
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    return Promise.reject(new _playerError2.default({
                        message: "plugin-player does not implement dispose() method",
                        code: "P000"
                    }));
                }
            } ]);
            return Core;
        }();
        exports.default = Core;
    },
    "./src/catchplay/core/plugins/dashjs-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _core = __webpack_require__("./src/catchplay/core/plugins/core.js");
        var _core2 = _interopRequireDefault(_core);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var DashjsPlayer = function(_Core) {
            _inherits(DashjsPlayer, _Core);
            function DashjsPlayer() {
                _classCallCheck(this, DashjsPlayer);
                var _this = _possibleConstructorReturn(this, (DashjsPlayer.__proto__ || Object.getPrototypeOf(DashjsPlayer)).call(this));
                if (typeof xhook === "object") {
                    _logger2.default.common("DashjsPlayer detect xhook and enabled");
                    xhook.enable();
                }
                return _this;
            }
            _createClass(DashjsPlayer, [ {
                key: "build",
                value: function build() {
                    var _this2 = this;
                    this.core = dashjs.MediaPlayer().create();
                    this.core.initialize();
                    this.core.attachView(this.videoElement);
                    this.core.setAutoPlay(false);
                    var emeData = {};
                    emeData[_dictionary2.default.DRM.WIDEVINE.KEY_SYSTEM] = {
                        serverURL: this.drmConfig.widevine.licenseUrl,
                        httpRequestHeaders: {
                            customdata: this.drmConfig.widevine.license
                        }
                    };
                    emeData[_dictionary2.default.DRM.PLAYREADY.KEY_SYSTEM] = {
                        serverURL: this.drmConfig.playready.licenseUrl,
                        httpRequestHeaders: {
                            customdata: this.drmConfig.playready.license
                        }
                    };
                    this.core.extend("RequestModifier", function() {
                        return {
                            modifyRequestHeader: function modifyRequestHeader(xhr) {
                                return xhr;
                            },
                            modifyRequestURL: function modifyRequestURL(url) {
                                return url + _this2.signQueryParam;
                            }
                        };
                    }, true);
                    this.core.setProtectionData(emeData);
                    this.core.getDebug().setLogToBrowserConsole(false);
                    this.core.on(dashjs.Protection.events.LICENSE_REQUEST_COMPLETE, function(event) {
                        if (typeof event.error !== "undefined") {
                            _logger2.default.error("dashjs DRM failed:", event.error);
                            _this2.errorHandler.dispatchErrorEvent(new _playerError2.default({
                                message: "DRM decrypt failed",
                                code: "P001"
                            }), _this2.containerDom);
                            _this2.dispose();
                        }
                    });
                    return _promisePolyfill2.default.resolve(this.name + " build successful.");
                }
            }, {
                key: "setup",
                value: function setup() {
                    this.core.attachSource(this.videoSrc);
                    return _promisePolyfill2.default.resolve(this.name + " setup successful.");
                }
            }, {
                key: "setFrontBuffer",
                value: function setFrontBuffer(seconds) {
                    seconds = parseInt(seconds);
                    if (isNaN(seconds) || seconds <= 0) {
                        return false;
                    }
                    this.core.setBufferTimeAtTopQualityLongForm(seconds);
                }
            }, {
                key: "setBackBuffer",
                value: function setBackBuffer(seconds) {
                    seconds = parseInt(seconds);
                    if (isNaN(seconds) || seconds <= 0) {
                        return false;
                    }
                    this.core.setBufferToKeep(seconds);
                }
            }, {
                key: "enableLog",
                value: function enableLog(isEnable) {
                    this.core.getDebug().setLogToBrowserConsole(isEnable);
                }
            }, {
                key: "changeQuality",
                value: function changeQuality(quality) {
                    _logger2.default.common("dashjs bitrate-list:", this.core.getBitrateInfoListFor("video"));
                    var bitrateInfoList = this.core.getBitrateInfoListFor("video");
                    var qualityList = [];
                    for (var key in bitrateInfoList) {
                        qualityList[key] = bitrateInfoList[key]["width"] + "X" + bitrateInfoList[key]["height"] + " @ " + bitrateInfoList[key]["bitrate"] / 1e3 + "Kbps";
                    }
                    _logger2.default.common("dashjs quality-list:", qualityList);
                    this.core.setAutoSwitchQualityFor("video", false);
                    this.core.setQualityFor("video", quality);
                }
            }, {
                key: "autoSwitchQuality",
                value: function autoSwitchQuality() {
                    this.core.setAutoSwitchQualityFor("video", true);
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    if (!!this.core) {
                        this.core.reset();
                    }
                    return _promisePolyfill2.default.resolve("DashPlayer dispose successful");
                }
            } ]);
            return DashjsPlayer;
        }(_core2.default);
        exports.default = DashjsPlayer;
    },
    "./src/catchplay/core/plugins/dependencies-loader.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = exports.defaultDependencies = exports.libs = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _defaultPlugin, _defaultPlugin2, _defaultPlugin3, _defaultPlugin4, _defaultPlugin5, _defaultPlugin6, _defaultPlugin7, _defaultPlugin8, _defaultPlugin9, _defaultPlugin10, _defaultPlugin11, _defaultPlugin12, _defaultPlugin13, _defaultPlugin14, _defaultPlugin15, _defaultPlugin16, _defaultPlugin17, _defaultPlugin18, _defaultPlugin19, _defaultPlugin20, _defaultPlugin21, _defaultPlugin22, _defaultPlugin23, _defaultDependencies;
        exports.loadHandle = loadHandle;
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _data = __webpack_require__("./src/analysis/experience/data.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var libs = exports.libs = {
            chromecast: {
                name: _dictionary2.default.PLAYER_PLUGIN.CHROMECAST_SENDER,
                url: "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",
                setup: null
            },
            dashjs: {
                name: _dictionary2.default.PLAYER_PLUGIN.DASHJS,
                url: "https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.9.1/dash.all.min.js",
                setup: null
            },
            hlsjs: {
                name: _dictionary2.default.PLAYER_PLUGIN.HLSJS,
                url: "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.9/hls.min.js",
                setup: null
            },
            shakaplayer: {
                name: _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER,
                url: "https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.4.6/shaka-player.compiled.js",
                setup: function setup() {
                    shaka.polyfill.installAll();
                    return _promisePolyfill2.default.resolve(_dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER + " is setup");
                }
            },
            xhook: {
                name: _dictionary2.default.PLAYER_PLUGIN.XHOOK,
                url: "https://cdnjs.cloudflare.com/ajax/libs/xhook/1.3.5/xhook.min.js",
                setup: function setup() {
                    var _this = this;
                    return new _promisePolyfill2.default(function(resolve) {
                        xhook.enable();
                        xhook.before(function(request) {
                            if (!request.url) {
                                return;
                            }
                            var urlPart = request.url.split("/");
                            var timestamp = Date.now();
                            var logTypes = [ _data.EXPERIENCE_LOG_TYPE_TIMELINE, _data.EXPERIENCE_LOG_TYPE_ACTION ];
                            logTypes.forEach(function(type) {
                                if (urlPart[8] == "video" && Object.keys(_this[type].network.throughputStarts).length === 0) {
                                    _this[type].network.hitUrl = request.url;
                                    _this[type].network.throughputStarts[request.url] = timestamp;
                                }
                            });
                        });
                        xhook.after(function(request, response) {
                            if (!request.url) {
                                return;
                            }
                            var urlPart = request.url.split("/");
                            var timestamp = Date.now();
                            var logTypes = [ _data.EXPERIENCE_LOG_TYPE_TIMELINE, _data.EXPERIENCE_LOG_TYPE_ACTION ];
                            logTypes.forEach(function(type) {
                                if (urlPart[8] == "video" && request.url === _this[type].network.hitUrl && Object.keys(_this[type].network.throughputEnds).length === 0) {
                                    _this[type].network.throughputEnds[request.url] = timestamp;
                                    if (response.data) {
                                        _this[type].network.throughputBytes[request.url] = response.data.byteLength;
                                    } else {
                                        _this[type].network.throughputBytes[request.url] = 0;
                                    }
                                }
                            });
                        });
                        resolve(_dictionary2.default.PLAYER_PLUGIN.XHOOK + " library is setup.");
                    });
                }
            }
        };
        function loadHandle(name, url) {
            function loadPromise() {
                return new _promisePolyfill2.default(function(resolve, reject) {
                    var tagId = "sdk-lib-" + name;
                    var oldScript = document.querySelector("#" + tagId);
                    if (!!oldScript) {
                        return _promisePolyfill2.default.resolve(name + " library has already existed.");
                    } else {
                        var newScript = document.createElement("script");
                        newScript.setAttribute("id", "#" + tagId);
                        newScript.type = "text/javascript";
                        document.querySelector("head").appendChild(newScript);
                        newScript.addEventListener("load", function() {
                            resolve(name + " library has been loaded.");
                        });
                        newScript.addEventListener("error", function() {
                            newScript.parentElement.removeChild(newScript);
                            reject(new PlayerError({
                                message: url + " script(" + name + ") not found.",
                                code: "P001"
                            }));
                        });
                        newScript.src = url;
                    }
                });
            }
            return new _promisePolyfill2.default(function(resolve, reject) {
                loadPromise().then(function(result) {
                    resolve(result);
                }).catch(function(err) {
                    _logger2.default.warning("the core library[" + name + "] load failed. try again(1).", err);
                    return loadPromise();
                }).then(function(result) {
                    resolve(result);
                }).catch(function(err) {
                    _logger2.default.warning("the core library[" + name + "] load failed. try again(2).", err);
                    return loadPromise();
                }).then(function(result) {
                    resolve(result);
                }).catch(function(err) {
                    _logger2.default.warning("the core library[" + name + "] load failed. try again(3).", err);
                    return loadPromise();
                }).then(function(result) {
                    resolve(result);
                }).catch(function(err) {
                    reject(new PlayerError({
                        message: "the core library[" + name + "] load failed. already retry 3 times. please check network. message: " + err.toString(),
                        code: "P001"
                    }));
                });
            });
        }
        var defaultDependencies = exports.defaultDependencies = (_defaultDependencies = {}, 
        _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.MAC_OS_SAFARI, {
            defaultPlugin: (_defaultPlugin = {}, _defineProperty(_defaultPlugin, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin),
            libraries: []
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.IOS_FACEBOOK, {
            defaultPlugin: (_defaultPlugin2 = {}, _defineProperty(_defaultPlugin2, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin2, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin2, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin2),
            libraries: []
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.IOS_MOBILE_SAFARI, {
            defaultPlugin: (_defaultPlugin3 = {}, _defineProperty(_defaultPlugin3, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin3, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin3, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin3),
            libraries: []
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.IOS_CHROME, {
            defaultPlugin: (_defaultPlugin4 = {}, _defineProperty(_defaultPlugin4, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin4, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin4, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin4),
            libraries: []
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.WINDOWS_CHROME, {
            defaultPlugin: (_defaultPlugin5 = {}, _defineProperty(_defaultPlugin5, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin5, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin5, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin5),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.MAC_OS_CHROME, {
            defaultPlugin: (_defaultPlugin6 = {}, _defineProperty(_defaultPlugin6, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin6, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin6, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin6),
            libraries: [ libs.shakaplayer, libs.hlsjs, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.UBUNTU_CHROME, {
            defaultPlugin: (_defaultPlugin7 = {}, _defineProperty(_defaultPlugin7, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin7, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin7, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin7),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.LINUX_CHROME, {
            defaultPlugin: (_defaultPlugin8 = {}, _defineProperty(_defaultPlugin8, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin8, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin8, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin8),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.ANDROID_FACEBOOK, {
            defaultPlugin: (_defaultPlugin9 = {}, _defineProperty(_defaultPlugin9, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin9, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin9, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin9),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.ANDROID_CHROME, {
            defaultPlugin: (_defaultPlugin10 = {}, _defineProperty(_defaultPlugin10, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin10, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin10, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin10),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.WINDOWS_FIREFOX, {
            defaultPlugin: (_defaultPlugin11 = {}, _defineProperty(_defaultPlugin11, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin11, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin11, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin11),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.MAC_OS_FIREFOX, {
            defaultPlugin: (_defaultPlugin12 = {}, _defineProperty(_defaultPlugin12, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin12, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin12, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin12),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.UBUNTU_FIREFOX, {
            defaultPlugin: (_defaultPlugin13 = {}, _defineProperty(_defaultPlugin13, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin13, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin13, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin13),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.LINUX_FIREFOX, {
            defaultPlugin: (_defaultPlugin14 = {}, _defineProperty(_defaultPlugin14, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin14, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin14, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin14),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.ANDROID_FIREFOX, {
            defaultPlugin: (_defaultPlugin15 = {}, _defineProperty(_defaultPlugin15, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin15, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin15, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin15),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.WINDOWS_EDGE, {
            defaultPlugin: (_defaultPlugin16 = {}, _defineProperty(_defaultPlugin16, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin16, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin16, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin16),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.LINUX_OPERA, {
            defaultPlugin: (_defaultPlugin17 = {}, _defineProperty(_defaultPlugin17, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin17, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin17, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin17),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.WINDOWS_OPERA, {
            defaultPlugin: (_defaultPlugin18 = {}, _defineProperty(_defaultPlugin18, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin18, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin18, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin18),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.MAC_OS_OPERA, {
            defaultPlugin: (_defaultPlugin19 = {}, _defineProperty(_defaultPlugin19, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin19, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin19, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin19),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.ANDROID_OPERA, {
            defaultPlugin: (_defaultPlugin20 = {}, _defineProperty(_defaultPlugin20, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin20, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin20, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin20),
            libraries: [ libs.shakaplayer, libs.xhook ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.WEBOS_CHROME, {
            defaultPlugin: (_defaultPlugin21 = {}, _defineProperty(_defaultPlugin21, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.SHAKA_PLAYER), 
            _defineProperty(_defaultPlugin21, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HLSJS), 
            _defineProperty(_defaultPlugin21, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin21),
            libraries: [ libs.shakaplayer ]
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.WEBOS_SAFARI, {
            defaultPlugin: (_defaultPlugin22 = {}, _defineProperty(_defaultPlugin22, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin22, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin22, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin22),
            libraries: []
        }), _defineProperty(_defaultDependencies, _dictionary2.default.PLATFORMS.ANDROID_UCBROWSER, {
            defaultPlugin: (_defaultPlugin23 = {}, _defineProperty(_defaultPlugin23, _dictionary2.default.STREAMING_TYPE.DASH, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin23, _dictionary2.default.STREAMING_TYPE.HLS, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defineProperty(_defaultPlugin23, _dictionary2.default.STREAMING_TYPE.MP4, _dictionary2.default.PLAYER_PLUGIN.HTML5), 
            _defaultPlugin23),
            libraries: []
        }), _defaultDependencies);
        var DependenciesLoader = function() {
            function DependenciesLoader(detector) {
                _classCallCheck(this, DependenciesLoader);
                var id = detector.getIdentity()["identity"];
                this.dependencies = defaultDependencies[id].libraries || [];
            }
            _createClass(DependenciesLoader, [ {
                key: "loadScript",
                value: function loadScript() {
                    var _this2 = this;
                    var binds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return new _promisePolyfill2.default(function(resolve, reject) {
                        var scriptPromises = _this2.dependencies.map(function(dependency) {
                            return loadHandle.call({
                                logger: _this2.logger
                            }, dependency.name, dependency.url);
                        });
                        _promisePolyfill2.default.all(scriptPromises).then(function(results) {
                            results.forEach(function(result) {
                                _logger2.default.common(result);
                            });
                            var setupPromises = _this2.dependencies.map(function(dependency) {
                                if (typeof dependency.setup === "function") {
                                    if (!!binds[dependency.name]) {
                                        return dependency.setup.call(binds[dependency.name]);
                                    } else {
                                        return dependency.setup();
                                    }
                                } else {
                                    return _promisePolyfill2.default.resolve("skip library setup. the library " + dependency.name + " no has setup callback.");
                                }
                            });
                            return _promisePolyfill2.default.all(setupPromises);
                        }).then(function(results) {
                            results.forEach(function(result) {
                                _logger2.default.common(result);
                            });
                            resolve("all libraries loaded and setup already");
                        }).catch(function(err) {
                            reject(new PlayerError({
                                message: err.message,
                                code: err.code
                            }));
                        });
                    });
                }
            } ]);
            return DependenciesLoader;
        }();
        exports.default = DependenciesLoader;
    },
    "./src/catchplay/core/plugins/hlsjs-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _core = __webpack_require__("./src/catchplay/core/plugins/core.js");
        var _core2 = _interopRequireDefault(_core);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var HlsjsPlayer = function(_Core) {
            _inherits(HlsjsPlayer, _Core);
            function HlsjsPlayer() {
                _classCallCheck(this, HlsjsPlayer);
                var _this = _possibleConstructorReturn(this, (HlsjsPlayer.__proto__ || Object.getPrototypeOf(HlsjsPlayer)).call(this));
                if (typeof xhook === "object") {
                    _logger2.default.common("HlsjsPlayer detect xhook and disabled");
                    xhook.disable();
                }
                return _this;
            }
            _createClass(HlsjsPlayer, [ {
                key: "build",
                value: function build() {
                    var _this2 = this;
                    this.core = new Hls({
                        debug: false,
                        enableWebVTT: true
                    });
                    this.core.on(Hls.Events.MEDIA_ATTACHED, function() {
                        _logger2.default.common(_this2.name + " media-source attached.");
                        _this2.core.loadSource(_this2.videoSrc);
                        _this2.core.on(Hls.Events.MANIFEST_PARSED, function() {
                            _logger2.default.common(_this2.name + " m3u8 manifest successfully loaded.");
                        });
                    });
                    return Promise.resolve(this.name + " build successful.");
                }
            }, {
                key: "setup",
                value: function setup() {
                    this.core.attachMedia(this.videoElement);
                    return Promise.resolve(this.name + " setup successful.");
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    var _this3 = this;
                    if (!this.core) {
                        return Promise.resolve("HlsjsPlayer skip dispose because the core does not exists");
                    }
                    return new Promise(function(resolve) {
                        try {
                            _this3.core.detachMedia();
                            resolve("HlsjsPlayer dispose successful");
                        } catch (err) {
                            _logger2.default.warning("HlsjsPlayer dispose failed.", err);
                            resolve("HlsjsPlayer dispose failed but dispose process will continue execute");
                        }
                    });
                }
            } ]);
            return HlsjsPlayer;
        }(_core2.default);
        exports.default = HlsjsPlayer;
    },
    "./src/catchplay/core/plugins/html5-native-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _core = __webpack_require__("./src/catchplay/core/plugins/core.js");
        var _core2 = _interopRequireDefault(_core);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Html5NativePlayer = function(_Core) {
            _inherits(Html5NativePlayer, _Core);
            function Html5NativePlayer() {
                _classCallCheck(this, Html5NativePlayer);
                var _this = _possibleConstructorReturn(this, (Html5NativePlayer.__proto__ || Object.getPrototypeOf(Html5NativePlayer)).call(this));
                if (typeof xhook === "object") {
                    _logger2.default.common("HlsjsPlayer detect xhook and disabled");
                    xhook.disable();
                }
                return _this;
            }
            _createClass(Html5NativePlayer, [ {
                key: "build",
                value: function build() {
                    return Promise.resolve(this.name + " skip to build. " + this.name + " use html5 video element.");
                }
            }, {
                key: "setup",
                value: function setup() {
                    _logger2.default.common(this.name + " video-config's start-seconds is: " + this.startSecond);
                    this.videoElement.src = this.videoSrc;
                    return Promise.resolve(this.name + " setup successful.");
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    return Promise.resolve(this.name + " skip to dispose. " + this.name + " use html5 video element. this process is executed in browser-player process");
                }
            } ]);
            return Html5NativePlayer;
        }(_core2.default);
        exports.default = Html5NativePlayer;
    },
    "./src/catchplay/core/plugins/shaka-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _core = __webpack_require__("./src/catchplay/core/plugins/core.js");
        var _core2 = _interopRequireDefault(_core);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ShakaPlayer = function(_Core) {
            _inherits(ShakaPlayer, _Core);
            function ShakaPlayer() {
                _classCallCheck(this, ShakaPlayer);
                var _this = _possibleConstructorReturn(this, (ShakaPlayer.__proto__ || Object.getPrototypeOf(ShakaPlayer)).call(this));
                if (typeof xhook === "object") {
                    _logger2.default.common("ShakaPlayer detect xhook and enabled");
                    xhook.enable();
                }
                return _this;
            }
            _createClass(ShakaPlayer, [ {
                key: "build",
                value: function build() {
                    var _this2 = this;
                    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
                    this.core = new shaka.Player(this.videoElement);
                    if (config === undefined) {
                        var _servers;
                        this.core.configure({
                            drm: {
                                servers: (_servers = {}, _defineProperty(_servers, _dictionary2.default.DRM.WIDEVINE.KEY_SYSTEM, _dictionary2.default.DRM.WIDEVINE.DEFAULT_LICENSE_URL), 
                                _defineProperty(_servers, _dictionary2.default.DRM.PLAYREADY.KEY_SYSTEM, _dictionary2.default.DRM.PLAYREADY.DEFAULT_LICENSE_URL), 
                                _servers)
                            }
                        });
                    } else {
                        this.core.configure(config);
                    }
                    this.core.getNetworkingEngine().registerRequestFilter(function(type, request) {
                        if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
                            request.headers["customdata"] = _this2.drmConfig.widevine.license;
                        }
                        request.uris[0] = request.uris[0] + _this2.signQueryParam;
                    });
                    this.shakaErrorHandler = function(event) {
                        var message = "ShakaPlayer failed. ";
                        var errorCode = "P004";
                        var errorType = _dictionary2.default.PLAYER_ERROR_TYPE.UNKNOWN;
                        if (event.detail && event.detail.category == shaka.util.Error.Category.DRM) {
                            message = message + " DRM decrypt failed.";
                            errorCode = "P001";
                            errorType = _dictionary2.default.PLAYER_ERROR_TYPE.PLAYER.DRM_EXECUTE_FAIL;
                        }
                        this.errorHandler.dispatchErrorEvent(new _playerError2.default({
                            message: message,
                            code: errorCode,
                            type: errorType,
                            data: event
                        }), this.containerDom);
                        this.dispose();
                    }.bind(this);
                    this.core.addEventListener("error", this.shakaErrorHandler);
                    return _promisePolyfill2.default.resolve(this.name + " build successful.");
                }
            }, {
                key: "setup",
                value: function setup() {
                    var _this3 = this;
                    return new _promisePolyfill2.default(function(resolve, reject) {
                        _this3.core.load(_this3.videoSrc).then(function() {
                            resolve(_this3.name + " setup successful");
                        }).catch(function(err) {
                            _logger2.default.error(_this3.name + " ShakaPlayer load failed. error:", err);
                            reject(_this3.name + " ShakaPlayer load failed");
                        });
                    });
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    var _this4 = this;
                    if (!this.core) {
                        return _promisePolyfill2.default.resolve("ShakaPlayer skip dispose because the core does not exists");
                    }
                    return new _promisePolyfill2.default(function(resolve) {
                        _this4.core.removeEventListener("error", _this4.shakaErrorHandler);
                        _this4.core.destroy().then(function(result) {
                            _logger2.default.common(result);
                            resolve("ShakaPlayer dispose successful");
                        }).catch(function(err) {
                            _logger2.default.error("ShakaPlayer dispose failed", err);
                            resolve("ShakaPlayer dispose failed but stop process will continue execute");
                        });
                    });
                }
            } ]);
            return ShakaPlayer;
        }(_core2.default);
        exports.default = ShakaPlayer;
    },
    "./src/catchplay/core/plugins/videojs-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _core = __webpack_require__("./src/catchplay/core/plugins/core.js");
        var _core2 = _interopRequireDefault(_core);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _promisePolyfill = __webpack_require__("./node_modules/promise-polyfill/Promise.js");
        var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var VideojsPlayer = function(_Core) {
            _inherits(VideojsPlayer, _Core);
            function VideojsPlayer() {
                _classCallCheck(this, VideojsPlayer);
                return _possibleConstructorReturn(this, (VideojsPlayer.__proto__ || Object.getPrototypeOf(VideojsPlayer)).call(this));
            }
            _createClass(VideojsPlayer, [ {
                key: "build",
                value: function build() {
                    return _promisePolyfill2.default.resolve(this.name + " skip build");
                }
            }, {
                key: "setup",
                value: function setup() {
                    return _promisePolyfill2.default.resolve(this.name + " skip setup");
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    return _promisePolyfill2.default.resolve(this.name + " skip dispose");
                }
            } ]);
            return VideojsPlayer;
        }(_core2.default);
        exports.default = VideojsPlayer;
    },
    "./src/common/api.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        var _data = __webpack_require__("./src/analysis/experience/data.js");
        var _httpRequest = __webpack_require__("./src/catchplay/core/http-request.js");
        var _httpRequest2 = _interopRequireDefault(_httpRequest);
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var api = {
            getPlayerType: function getPlayerType(playerConfig) {
                return new Promise(function(resolve) {
                    if (!!playerConfig.playerType) {
                        resolve("player type has been set by initialize parameter. using " + playerConfig.playerType + ".");
                    } else {
                        var params = {
                            function_id: 1,
                            territory: "",
                            device_type: "web",
                            movie_id: ""
                        };
                        if (!!playerConfig.accountId) {
                            params.account_id = playerConfig.accountId;
                        }
                        _httpRequest2.default.get(playerConfig.vcmsApiHost + "/api/controlpanel", {
                            params: params
                        }).then(function(response) {
                            var result = JSON.parse(response);
                            if (result.code !== 0) {
                                playerConfig.playerType = _dictionary2.default.PLAYER_TYPE.CATCHPLAY;
                                resolve("fetch player type failed response code is [" + result.code + "], using cpp player. ");
                            }
                            playerConfig.playerType = _dictionary2.default.PLAYER_TYPE.CATCHPLAY;
                            resolve("player type has been set by api response");
                        }).catch(function(err) {
                            playerConfig.playerType = _dictionary2.default.PLAYER_TYPE.CATCHPLAY;
                            resolve("fetch player type failed, using cpp player. " + err.toString());
                        });
                    }
                });
            },
            getDrmLicense: function getDrmLicense(videoConfig, playerConfig) {
                "use strict";
                if (videoConfig.isCustomPlayback) {
                    return Promise.resolve("skip to fetch drm license. because the custom playback is enabled");
                }
                if (videoConfig.watchType === _dictionary2.default.WATCH_TYPE.TRAILER) {
                    return Promise.resolve("skip to fetch video info. because the watch-type is " + videoConfig.watchType);
                }
                return new Promise(function(resolve, reject) {
                    var drmLicenseUrl = playerConfig.vcmsApiHost + "/api/v1/drm/license/buydrm";
                    var requestConfig = {
                        headers: {
                            authorization: "bearer " + videoConfig.accessToken,
                            "content-Type": "application/json",
                            "cache-control": "no-cache"
                        }
                    };
                    if (playerConfig.isForceAllowed()) {
                        requestConfig.headers["ASIAPLAY-TERRITORY"] = videoConfig.territory;
                    }
                    _httpRequest2.default.post(drmLicenseUrl, requestConfig).then(function(response) {
                        var result = JSON.parse(response);
                        videoConfig.drmConfig[_dictionary2.default.DRM.WIDEVINE.NAME].license = result.token;
                        videoConfig.drmConfig[_dictionary2.default.DRM.PLAYREADY.NAME].license = result.token;
                        videoConfig.drmConfig[_dictionary2.default.DRM.FAIRPLAY.NAME].license = result.token;
                        resolve("fetch DRM license successful");
                    }).catch(function(err) {
                        reject(new _playerError2.default({
                            type: _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS,
                            message: "fetch drm license api was failed. " + err.toString(),
                            code: "P001",
                            httpCode: err.httpCode,
                            data: err.data
                        }));
                    });
                });
            },
            getVideoInfo: function getVideoInfo(browserEnv, videoConfig, playerConfig) {
                "use strict";
                if (videoConfig.isCustomPlayback) {
                    return Promise.resolve("skip to fetch video info. because the custom playback is enabled");
                }
                if (videoConfig.watchType === _dictionary2.default.WATCH_TYPE.TRAILER) {
                    return Promise.resolve("skip to fetch video info. because the watch-type is " + videoConfig.watchType);
                }
                var fixedOsVersion = function fixedOsVersion(browserEnv) {
                    var osVersion = browserEnv.osVersion;
                    if (browserEnv.deviceType == _dictionary2.default.DEVICE_TYPE.IOS) {
                        osVersion = parseFloat(osVersion).toFixed(1);
                        if (osVersion === "NaN") {
                            return browserEnv.osVersion;
                        }
                        if (parseFloat(osVersion) >= _dictionary2.default.IOS_FAIRPLAY_SUPPORT_OS_VERSION) {
                            return _dictionary2.default.IOS_FAIRPLAY_SUPPORT_OS_VERSION;
                        }
                    }
                    return browserEnv.osVersion;
                };
                return new Promise(function(resolve, reject) {
                    var videoInfoUrl = playerConfig.vcmsApiHost + "/v2.1/streaming/video";
                    var requestConfig = {
                        headers: {
                            authorization: "bearer " + videoConfig.accessToken,
                            "content-type": "application/json",
                            "cache-control": "no-cache"
                        },
                        params: {
                            cpp_id: videoConfig.cppId,
                            type: videoConfig.watchType,
                            device_type: browserEnv.deviceType,
                            device_model: browserEnv.identity + "/default",
                            os_version: fixedOsVersion(browserEnv)
                        }
                    };
                    var streamingType = "hls";
                    switch (browserEnv.identity) {
                      case _dictionary2.default.PLATFORMS.MAC_OS_SAFARI:
                        streamingType = "hls";
                        break;

                      case _dictionary2.default.PLATFORMS.IOS_FACEBOOK:
                      case _dictionary2.default.PLATFORMS.IOS_MOBILE_SAFARI:
                        if (browserEnv.osVersion >= 11.2) {
                            streamingType = "hls";
                        } else if (browserEnv.osVersion >= 11 && browserEnv.osVersion <= 11.1) {
                            streamingType = "hls/aes128";
                        } else if (browserEnv.osVersion >= 10) {
                            streamingType = "hls/aes128";
                        } else {
                            streamingType = "hls/aes128";
                        }
                        break;

                      case _dictionary2.default.PLATFORMS.IOS_CHROME:
                        if (browserEnv.osVersion >= 11.2) {
                            streamingType = "hls";
                        } else if (browserEnv.osVersion >= 11 && browserEnv.osVersion <= 11.1) {
                            streamingType = "hls/aes128";
                        } else if (browserEnv.osVersion >= 10) {
                            streamingType = "hls/aes128";
                        } else {
                            streamingType = "hls/aes128";
                        }
                        break;

                      case _dictionary2.default.PLATFORMS.WINDOWS_CHROME:
                      case _dictionary2.default.PLATFORMS.MAC_OS_CHROME:
                      case _dictionary2.default.PLATFORMS.UBUNTU_CHROME:
                      case _dictionary2.default.PLATFORMS.LINUX_CHROME:
                        streamingType = "dash";
                        break;

                      case _dictionary2.default.PLATFORMS.ANDROID_FACEBOOK:
                      case _dictionary2.default.PLATFORMS.ANDROID_CHROME:
                        streamingType = "dash";
                        break;

                      case _dictionary2.default.PLATFORMS.WINDOWS_FIREFOX:
                      case _dictionary2.default.PLATFORMS.MAC_OS_FIREFOX:
                      case _dictionary2.default.PLATFORMS.UBUNTU_FIREFOX:
                      case _dictionary2.default.PLATFORMS.LINUX_FIREFOX:
                        streamingType = "dash";
                        break;

                      case _dictionary2.default.PLATFORMS.ANDROID_FIREFOX:
                        streamingType = "hls";
                        break;

                      case _dictionary2.default.PLATFORMS.WINDOWS_EDGE:
                        streamingType = "dash";
                        break;

                      case _dictionary2.default.PLATFORMS.WEBOS_CHROME:
                        streamingType = "dash";
                        break;

                      case _dictionary2.default.PLATFORMS.WEBOS_SAFARI:
                        streamingType = "hls/aes128";
                        break;

                      case _dictionary2.default.PLATFORMS.LINUX_OPERA:
                      case _dictionary2.default.PLATFORMS.WINDOWS_OPERA:
                      case _dictionary2.default.PLATFORMS.MAC_OS_OPERA:
                        streamingType = "hls/aes128";
                        break;

                      case _dictionary2.default.PLATFORMS.ANDROID_OPERA:
                        streamingType = "hls/aes128";
                        break;

                      default:
                        console.warn(browserEnv.identity + " browser player not support. default change to BasicPlayer");
                        break;
                    }
                    requestConfig.params.device_model = streamingType;
                    if (playerConfig.isForceAllowed()) {
                        requestConfig.headers["ASIAPLAY-TERRITORY"] = videoConfig.territory;
                    }
                    if (!!playerConfig.accountId) {
                        requestConfig.params.account_id = playerConfig.accountId;
                    }
                    _httpRequest2.default.get(videoInfoUrl, requestConfig).then(function(response) {
                        var result = JSON.parse(response);
                        _data.experience.cdn = result.message.cdn;
                        videoConfig.drmConfig.currentDrm = result.message.video_type;
                        videoConfig.setVideoSrc(result.message.video_info);
                        videoConfig.signQueryParam = "?" + result.message.sign_query_param;
                        var subtitles = result.message.subtitle_info;
                        var textTracks = [];
                        if (!!subtitles && subtitles.length > 0) {
                            textTracks = subtitles.map(function(subtitle) {
                                return {
                                    src: subtitle.src + videoConfig.signQueryParam,
                                    label: subtitle.language,
                                    language: subtitle.language,
                                    mime_type: "text/vtt"
                                };
                            });
                        }
                        videoConfig.setTextTracks(textTracks);
                        resolve("fetch video info successful");
                    }).catch(function(err) {
                        reject(new _playerError2.default({
                            type: _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS,
                            message: "fetch video api failed. " + err.toString(),
                            code: "P001",
                            httpCode: err.httpCode,
                            data: err.data
                        }));
                    });
                });
            },
            getVideoInfoNoSign: function getVideoInfoNoSign(browserEnv, videoConfig, playerConfig) {
                "use strict";
                if (videoConfig.isCustomPlayback) {
                    return Promise.resolve("skip to fetch video info. because the custom playback is enabled");
                }
                if (videoConfig.watchType === _dictionary2.default.WATCH_TYPE.TRAILER) {
                    return Promise.resolve("skip to fetch video info. because the watch-type is " + videoConfig.watchType);
                }
                var fixedOsVersion = function fixedOsVersion(browserEnv) {
                    var osVersion = browserEnv.osVersion;
                    if (browserEnv.deviceType == _dictionary2.default.DEVICE_TYPE.IOS) {
                        osVersion = parseFloat(osVersion).toFixed(1);
                        if (osVersion === "NaN") {
                            return browserEnv.osVersion;
                        }
                        if (parseFloat(osVersion) >= _dictionary2.default.IOS_FAIRPLAY_SUPPORT_OS_VERSION) {
                            return _dictionary2.default.IOS_FAIRPLAY_SUPPORT_OS_VERSION;
                        }
                    }
                    return browserEnv.osVersion;
                };
                return new Promise(function(resolve, reject) {
                    var videoInfoUrl = playerConfig.vcmsApiHost + "/api/v1/stream/cpp/video";
                    var requestConfig = {
                        headers: {
                            authorization: "bearer " + videoConfig.accessToken,
                            "content-type": "application/json",
                            "cache-control": "no-cache"
                        },
                        params: {
                            cpp_id: videoConfig.cppId,
                            type: videoConfig.watchType,
                            device_type: browserEnv.deviceType,
                            device_model: browserEnv.identity + "/default",
                            os_version: fixedOsVersion(browserEnv)
                        }
                    };
                    if (playerConfig.isForceAllowed()) {
                        requestConfig.headers["ASIAPLAY-TERRITORY"] = videoConfig.territory;
                    }
                    if (!!playerConfig.accountId) {
                        requestConfig.params.account_id = playerConfig.accountId;
                    }
                    _httpRequest2.default.get(videoInfoUrl, requestConfig).then(function(response) {
                        var result = JSON.parse(response);
                        _data.experience.cdn = result.message.cdn;
                        videoConfig.drmConfig.currentDrm = result.message.video_type;
                        videoConfig.setVideoSrc(result.message.video_info);
                        var subtitles = result.message.subtitle_info;
                        var textTracks = [];
                        if (!!subtitles && subtitles.length > 0) {
                            textTracks = subtitles.map(function(subtitle) {
                                return {
                                    src: subtitle.src,
                                    label: subtitle.language,
                                    language: subtitle.language,
                                    mime_type: "text/vtt"
                                };
                            });
                        }
                        videoConfig.setTextTracks(textTracks);
                        resolve("fetch video info successful");
                    }).catch(function(err) {
                        reject(new _playerError2.default({
                            type: _dictionary2.default.PLAYER_ERROR_TYPE.API.VCMS,
                            message: "fetch video api failed. " + err.toString(),
                            code: "P001",
                            httpCode: err.httpCode,
                            data: err.data
                        }));
                    });
                });
            },
            getReportId: function getReportId(videoConfig, playerConfig) {
                "use strict";
                return new Promise(function(resolve) {
                    var reportIdUrl = playerConfig.vcmsApiHost + "/api/loginfo";
                    var requestConfig = {
                        headers: {
                            authorization: "bearer " + videoConfig.accessToken,
                            "content-type": "application/json",
                            "cache-control": "no-cache"
                        }
                    };
                    _httpRequest2.default.get(reportIdUrl, requestConfig).then(function(response) {
                        var result = JSON.parse(response);
                        _logger2.default.common("[chromecast] get report-id successful. id:", result.report_id);
                        resolve(result.report_id);
                    }).catch(function(err) {
                        _logger2.default.warning("[chromecast] get report-id failed and set report-id is: unknown. error:", err);
                        resolve("unknown");
                    });
                });
            }
        };
        exports.default = api;
    },
    "./src/common/player-config.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var isForcePass = new WeakMap();
        var PlayerConfig = function() {
            function PlayerConfig(legacyParams) {
                _classCallCheck(this, PlayerConfig);
                this.error = {};
                this.originParams = legacyParams;
                if (!this.originParams) {
                    this.error["config"] = "the parameter should not be empty";
                    return;
                }
                if (!this.originParams.settings) {
                    this.error["config"] = "the settings property is missing";
                    return;
                }
                var newParams = this.exports();
                this.sdkVersion = _dictionary2.default.VERSION;
                this.playerType = newParams.playerType || _dictionary2.default.PLAYER_TYPE.CATCHPLAY;
                this.accountId = newParams.accountId;
                this.vcmsApiHost = newParams.vcmsApiHost;
                this.cmsApiURL = newParams.cmsApiURL;
                this.previewTime = newParams.previewTime || 300;
                this.debugMode = newParams.debugMode || 0;
                this.isEnabledExperienceLog = newParams.isEnabledExperienceLog;
                this.isEnabledWatchLog = newParams.isEnabledWatchLog;
                this.experienceLogConsumeSpeed = newParams.experienceLogConsumeSpeed || 10 * 1e3;
                this.chromecastReceiverAppId = newParams.chromecastReceiverAppId;
                this.deprecated = {
                    experienceLogInterval: !!newParams.experienceLogInterval ? newParams.experienceLogInterval * 1e3 : 60 * 1e3
                };
                isForcePass.set(this, newParams.isForcePass);
            }
            _createClass(PlayerConfig, [ {
                key: "validate",
                value: function validate() {
                    if (this.error.hasOwnProperty("config")) {
                        return false;
                    }
                    this.error = {};
                    var re = /^(http|https)?(\:)?\/\/(?!\.)([\w\-\.]+)(\w)$/i;
                    if (!re.test(this.vcmsApiHost) && this.isEnabledExperienceLog !== false) {
                        this.error["vcmsApiHost"] = "vcmsApiHost must be url regex";
                    }
                    if (!this.cmsApiURL && this.isEnabledWatchLog !== false) {
                        this.error["cmsApiURL"] = "cmsApiURL must be url regex";
                    }
                    if (!this.accountId || typeof this.accountId !== "string") {
                        this.error["accountId"] = "accountId is required and must be a string";
                    }
                    return Object.keys(this.error).length === 0;
                }
            }, {
                key: "isForceAllowed",
                value: function isForceAllowed() {
                    return isForcePass.get(this) === true;
                }
            }, {
                key: "exports",
                value: function exports() {
                    var _this = this;
                    var fetchHostUrl = function fetchHostUrl(attr, url) {
                        try {
                            var re = /(http|https)?(\:)?\/\/(?!\.)([\w\-\.]+)(\w)/i;
                            return url.match(re)[0];
                        } catch (err) {
                            _this.error["fetch-" + attr] = "url regex is invalid";
                            return "";
                        }
                    };
                    var fetchEnabledAnalysis = function fetchEnabledAnalysis(attr, settings) {
                        try {
                            if (settings.force) {
                                return settings.force[attr] !== false;
                            }
                            return true;
                        } catch (err) {
                            return true;
                        }
                    };
                    var verifyForceKey = function verifyForceKey(settings) {
                        try {
                            var forceKey = "YXNpYXBsYXktcHJvZHVjdC10ZWFtLWFwcGx5";
                            return settings.force && !!settings.force.forceKey && settings.force.forceKey === forceKey;
                        } catch (err) {
                            return false;
                        }
                    };
                    return {
                        playerType: this.originParams.settings.player_type,
                        accountId: this.originParams.settings.account_id,
                        vcmsApiHost: fetchHostUrl("vcmsApiHost", this.originParams.settings.video_info_url),
                        cmsApiURL: this.originParams.settings.watch_log_url,
                        previewTime: this.originParams.settings.preview_time,
                        debugMode: this.originParams.settings.debug_mode,
                        isEnabledExperienceLog: fetchEnabledAnalysis("isEnabledExperienceLog", this.originParams.settings),
                        isEnabledWatchLog: fetchEnabledAnalysis("isEnabledWatchLog", this.originParams.settings),
                        isForcePass: verifyForceKey(this.originParams.settings),
                        experienceLogInterval: this.originParams.settings.vcms_log_interval,
                        experienceLogConsumeSpeed: this.originParams.settings.experienceLogConsumeSpeed,
                        chromecastReceiverAppId: this.originParams.settings.chromecast_receiver_app_id
                    };
                }
            } ]);
            return PlayerConfig;
        }();
        exports.default = PlayerConfig;
    },
    "./src/common/sdk-player.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _playerError = __webpack_require__("./src/catchplay/core/player-error.js");
        var _playerError2 = _interopRequireDefault(_playerError);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var SDKPlayer = function SDKPlayer(config) {};
        SDKPlayer.prototype.initialize = function() {
            throw new _playerError2.default({
                message: "not implement initialize method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.getVideoElement = function() {
            throw new _playerError2.default({
                message: "not implement getVideoElement method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.play = function() {
            throw new _playerError2.default({
                message: "not implement play method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.pause = function() {
            throw new _playerError2.default({
                message: "not implement pause method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.seekTo = function(currentTime) {
            throw new _playerError2.default({
                message: "not implement seekToCurrentSecond method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.enterFullScreen = function() {
            throw new _playerError2.default({
                message: "not implement enterFullScreen method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.exitFullScreen = function() {
            throw new _playerError2.default({
                message: "not implement exitFullScreen method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.muted = function(isMute) {
            throw new _playerError2.default({
                message: "not implement muted method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.changeSpeedRate = function(value) {
            throw new _playerError2.default({
                message: "not implement changeSpeedRate method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.changeVolume = function(value) {
            throw new _playerError2.default({
                message: "not implement changeVolume method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.changeSubtitle = function(activeLanguage) {
            throw new _playerError2.default({
                message: "not implement changeSubtitle method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.enableSubtitle = function(isEnable) {
            throw new _playerError2.default({
                message: "not implement changeSubtitle method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.dispose = function() {
            throw new _playerError2.default({
                message: "not implement dispose method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.setFrontBuffer = function(seconds) {
            throw new _playerError2.default({
                message: "not implement setFrontBuffer method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.setBackBuffer = function(seconds) {
            throw new _playerError2.default({
                message: "not implement setBackBuffer method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.airPlay = function() {
            throw new _playerError2.default({
                message: "not implement airPlay method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.enableLog = function(isEnable) {
            throw new _playerError2.default({
                message: "not implement openLog method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.changeQuality = function(quality) {
            throw new _playerError2.default({
                message: "not implement changeQuality method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.autoSwitchQuality = function() {
            throw new _playerError2.default({
                message: "not implement autoSwitchQuality method",
                code: "P000"
            });
        };
        SDKPlayer.prototype.dumps = function() {
            throw new _playerError2.default({
                message: "not implement dumps method",
                code: "P000"
            });
        };
        exports.default = SDKPlayer;
    },
    "./src/common/utils.js": function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function formatFloat(num, pos) {
            var size = Math.pow(10, pos);
            return Math.round(num * size) / size;
        }
        function nowTimestampISOString() {
            var now = new Date();
            return now.toISOString().slice(0, -5) + "Z";
        }
        function isIncludesIn(arr, el) {
            try {
                return arr.indexOf(el) !== -1;
            } catch (err) {
                return false;
            }
        }
        exports.formatFloat = formatFloat;
        exports.nowTimestampISOString = nowTimestampISOString;
        exports.isIncludesIn = isIncludesIn;
    },
    "./src/common/video-config.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = exports.watchTypeWhitelist = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        var _defaultDrmConfig = __webpack_require__("./src/catchplay/core/eme/default-drm-config.js");
        var _defaultDrmConfig2 = _interopRequireDefault(_defaultDrmConfig);
        var _utils = __webpack_require__("./src/common/utils.js");
        var _logger = __webpack_require__("./src/catchplay/core/logger.js");
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var watchTypeWhitelist = exports.watchTypeWhitelist = [ _dictionary2.default.WATCH_TYPE.MOVIE, _dictionary2.default.WATCH_TYPE.EPISODE, _dictionary2.default.WATCH_TYPE.LIVE, _dictionary2.default.WATCH_TYPE.PREVIEW, _dictionary2.default.WATCH_TYPE.TRAILER ];
        var protectPlaybacks = [ _dictionary2.default.WATCH_TYPE.MOVIE, _dictionary2.default.WATCH_TYPE.EPISODE, _dictionary2.default.WATCH_TYPE.LIVE, _dictionary2.default.WATCH_TYPE.PREVIEW ];
        var videoSrc = new WeakMap();
        var videoTextTracks = new WeakMap();
        var VideoConfig = function() {
            function VideoConfig(legacyParams) {
                _classCallCheck(this, VideoConfig);
                this.error = {};
                this.originParams = legacyParams;
                var newParams = this.exports();
                this.isCustomPlayback = newParams.isCustomPlayback === true;
                this.videoCode = newParams.videoCode;
                this.videoId = newParams.videoId;
                this.cppId = newParams.cppId;
                this.watchType = newParams.watchType;
                this.accessToken = newParams.accessToken;
                this.playToken = newParams.playToken;
                this.orderId = newParams.orderId;
                this.title = newParams.title || "";
                this.thumbnailSrc = newParams.thumbnailSrc || "";
                this.trailerUrl = newParams.trailerUrl;
                this.territory = newParams.territory;
                this.warningCardDisplaySeconds = newParams.warningCardDisplaySeconds;
                this.ratingCardDisplaySeconds = newParams.ratingCardDisplaySeconds;
                this.signQueryParam = "?";
                this.watchLogger = {
                    deviceId: newParams.deviceId || "",
                    deviceName: newParams.deviceName || "",
                    deviceVersion: newParams.deviceVersion || ""
                };
                this.experienceLogger = {
                    drmSupport: newParams.drmSupport || "",
                    networkType: newParams.networkType || "",
                    ip: newParams.ip || "",
                    isp: newParams.isp || ""
                };
                this.isAutoPlay = newParams.isAutoPlay || true;
                this.startSecond = newParams.startSecond || 0;
                this.duration = 0;
                this.mimeType = newParams.mimeType;
                this.drmConfig = newParams.drmConfig;
                if (this.isCustomPlayback) {
                    this.setVideoSrc(newParams.videoSrc);
                } else if (this.watchType === _dictionary2.default.WATCH_TYPE.TRAILER) {
                    this.setVideoSrc(newParams.trailerUrl);
                }
                this.setTextTracks(newParams.textTracks);
            }
            _createClass(VideoConfig, [ {
                key: "validate",
                value: function validate() {
                    this.error = {};
                    var watchTypeWhitelistJoinedString = watchTypeWhitelist.join(",");
                    var protectPlaybacksJoinString = protectPlaybacks.join(",");
                    if (!(0, _utils.isIncludesIn)(watchTypeWhitelist, this.watchType)) {
                        this.error["watchType"] = "watchType must scope in [" + watchTypeWhitelistJoinedString + "]";
                    }
                    if ((0, _utils.isIncludesIn)(protectPlaybacks, this.watchType) && (!this.videoCode || typeof this.videoCode !== "string")) {
                        this.error["videoCode"] = "videoCode is required and must be a string in [" + protectPlaybacksJoinString + "] contexts";
                    }
                    if ((0, _utils.isIncludesIn)(protectPlaybacks, this.watchType) && (!this.videoId || typeof this.videoId !== "string")) {
                        this.error["videoId"] = "videoId is required and must be a string in [" + protectPlaybacksJoinString + "] contexts";
                    }
                    if ((0, _utils.isIncludesIn)(protectPlaybacks, this.watchType) && (!this.cppId || typeof this.cppId !== "string")) {
                        this.error["cppId"] = "videoId is required and must be a string in [" + protectPlaybacksJoinString + "] contexts";
                    }
                    if ((0, _utils.isIncludesIn)(protectPlaybacks, this.watchType) && (!this.accessToken || typeof this.accessToken !== "string")) {
                        this.error["accessToken"] = "accessToken is required and must be a string in [" + protectPlaybacksJoinString + "] contexts";
                    }
                    if ((0, _utils.isIncludesIn)(protectPlaybacks, this.watchType) && (!this.playToken || typeof this.playToken !== "string")) {
                        this.error["playToken"] = "playToken is required and must be a string in [" + protectPlaybacksJoinString + "] contexts";
                    }
                    if (this.watchType === _dictionary2.default.WATCH_TYPE.TRAILER && (!this.trailerUrl || typeof this.trailerUrl !== "string")) {
                        this.error["trailerUrl"] = "trailerUrl is required and must be a string in [" + protectPlaybacksJoinString + "] context";
                    }
                    return Object.keys(this.error).length === 0;
                }
            }, {
                key: "setVideoSrc",
                value: function setVideoSrc(src) {
                    videoSrc.set(this, src);
                    try {
                        var extension = src.split(".").slice(-1).pop();
                        switch (extension) {
                          case "mpd":
                            this.mimeType = _dictionary2.default.VIDEO_MIME_TYPE.DASH;
                            break;

                          case "m3u8":
                            this.mimeType = _dictionary2.default.VIDEO_MIME_TYPE.HLS;
                            break;

                          case "mp4":
                            this.mimeType = _dictionary2.default.VIDEO_MIME_TYPE.MP4;
                            break;

                          default:
                            this.mimeType = _dictionary2.default.VIDEO_MIME_TYPE.UNKNOWN;
                            break;
                        }
                    } catch (err) {
                        this.mimeType = _dictionary2.default.VIDEO_MIME_TYPE.UNKNOWN;
                    }
                }
            }, {
                key: "getVideoSrc",
                value: function getVideoSrc() {
                    return videoSrc.get(this);
                }
            }, {
                key: "setTextTracks",
                value: function setTextTracks(textTracks) {
                    if (Object.prototype.toString.call(textTracks) === "[object Array]") {
                        videoTextTracks.set(this, textTracks);
                    }
                }
            }, {
                key: "getTextTracks",
                value: function getTextTracks() {
                    var textTracks = videoTextTracks.get(this);
                    if (!textTracks || Object.prototype.toString.call(textTracks) !== "[object Array]") {
                        return [];
                    }
                    return textTracks;
                }
            }, {
                key: "exports",
                value: function exports() {
                    var fetchTerritory = function fetchTerritory(territory, videoCode) {
                        try {
                            if (!!territory) {
                                return territory;
                            }
                            var code = videoCode.split("-")[1];
                            if (code === "IN") {
                                code = "ID";
                            }
                            return code;
                        } catch (error) {
                            return "";
                        }
                    };
                    var overrideDrmConfig = function overrideDrmConfig(override) {
                        if (!override) {
                            return _defaultDrmConfig2.default;
                        }
                        var drmVendors = [ _dictionary2.default.DRM.WIDEVINE.NAME, _dictionary2.default.DRM.PLAYREADY.NAME, _dictionary2.default.DRM.FAIRPLAY.NAME ];
                        drmVendors.forEach(function(drmVendor) {
                            if (typeof override === "object" && override.hasOwnProperty(drmVendor)) {
                                var drmOverride = override[drmVendor];
                                var properties = [ "keySystem", "licenseUrl", "certificateUrl", "license" ];
                                properties.forEach(function(attr) {
                                    if (drmOverride.hasOwnProperty(attr)) {
                                        _defaultDrmConfig2.default[drmVendor][attr] = drmOverride[attr];
                                    }
                                });
                            }
                        });
                        return _defaultDrmConfig2.default;
                    };
                    var adjustPolicyCardDisplaySeconds = function adjustPolicyCardDisplaySeconds(seconds) {
                        seconds = parseInt(seconds);
                        if (isNaN(seconds)) {
                            seconds = 4;
                        }
                        return seconds;
                    };
                    var watchTypeTransfer = function watchTypeTransfer(watchType) {
                        if (watchType === _dictionary2.default.WATCH_TYPE.MASTER) {
                            return _dictionary2.default.WATCH_TYPE.MOVIE;
                        }
                        return watchType;
                    };
                    return {
                        isCustomPlayback: this.originParams.isCustomPlayback,
                        videoCode: this.originParams.videoCode,
                        videoId: this.originParams.videoId,
                        cppId: this.originParams.cppID,
                        startSecond: parseInt(this.originParams.startSecond),
                        watchType: watchTypeTransfer(this.originParams.watchType),
                        accessToken: this.originParams.accessToken,
                        playToken: this.originParams.playToken,
                        orderId: this.originParams.orderId,
                        title: this.originParams.title,
                        thumbnailSrc: this.originParams.thumbnailSrc,
                        trailerUrl: this.originParams.trailerURL,
                        territory: fetchTerritory(this.originParams.territory, this.originParams.videoCode),
                        deviceId: this.originParams.deviceId,
                        deviceName: this.originParams.deviceName,
                        deviceVersion: this.originParams.deviceVersion,
                        drmSupport: this.originParams.drmSupport,
                        ip: this.originParams.ip,
                        isp: this.originParams.isp,
                        networkType: this.originParams.networkType,
                        warningCardDisplaySeconds: adjustPolicyCardDisplaySeconds(this.originParams.warningCardDisplaySeconds),
                        ratingCardDisplaySeconds: adjustPolicyCardDisplaySeconds(this.originParams.warningCardDisplaySeconds),
                        isAutoPlay: this.originParams.isAutoPlay !== false,
                        videoSrc: this.originParams.videoURL,
                        textTracks: this.originParams.textTracks,
                        mimeType: this.mimeType,
                        drmConfig: overrideDrmConfig(this.originParams.drmConfig)
                    };
                }
            } ]);
            return VideoConfig;
        }();
        exports.default = VideoConfig;
    },
    "./src/index.js": function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.AsiaPlayChromecastSender = exports.AsiaPlayPlayer = exports.CatchPlayPlayBack = undefined;
        var _asiaplayChromecastSender = __webpack_require__("./src/asiaplay-chromecast-sender.js");
        var _asiaplayChromecastSender2 = _interopRequireDefault(_asiaplayChromecastSender);
        var _asiaplayPlayer = __webpack_require__("./src/asiaplay-player.js");
        var _asiaplayPlayer2 = _interopRequireDefault(_asiaplayPlayer);
        var _asiaplayDictionary = __webpack_require__("./src/asiaplay-dictionary.js");
        var _asiaplayDictionary2 = _interopRequireDefault(_asiaplayDictionary);
        var _dictionary = __webpack_require__("./src/catchplay/core/dictionary.js");
        var _dictionary2 = _interopRequireDefault(_dictionary);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        console.info("AsiaPlayPlayer SDK Version: " + _dictionary2.default.VERSION);
        if (typeof window.jQuery === "function") {
            var $ = window.jQuery;
            $.fn.AsiaPlayPlayer = function(options) {
                var element = $(this);
                if (element.data("AsiaPlayPlayer")) {
                    return;
                }
                var jQueryPlayer = new _asiaplayPlayer2.default(this, options);
                element.data("AsiaPlayPlayer", jQueryPlayer);
                return jQueryPlayer;
            };
            $.fn.CastPlayer = function(options) {
                var element = $(this);
                if (element.data("CastPlayer")) {
                    return;
                }
                var jQueryCastSender = new _asiaplayChromecastSender2.default(this, options);
                element.data("CastPlayer", jQueryCastSender);
                return jQueryCastSender;
            };
        }
        exports.CatchPlayPlayBack = _asiaplayDictionary2.default;
        exports.AsiaPlayPlayer = _asiaplayPlayer2.default;
        exports.AsiaPlayChromecastSender = _asiaplayChromecastSender2.default;
    }
});