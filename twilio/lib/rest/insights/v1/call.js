"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallListInstance = exports.CallInstance = exports.CallContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const annotation_1 = require("./call/annotation");
const callSummary_1 = require("./call/callSummary");
const event_1 = require("./call/event");
const metric_1 = require("./call/metric");
class CallContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Voice/${sid}`;
    }
    get annotation() {
        this._annotation =
            this._annotation ||
                (0, annotation_1.AnnotationListInstance)(this._version, this._solution.sid);
        return this._annotation;
    }
    get summary() {
        this._summary =
            this._summary ||
                (0, callSummary_1.CallSummaryListInstance)(this._version, this._solution.sid);
        return this._summary;
    }
    get events() {
        this._events =
            this._events || (0, event_1.EventListInstance)(this._version, this._solution.sid);
        return this._events;
    }
    get metrics() {
        this._metrics =
            this._metrics || (0, metric_1.MetricListInstance)(this._version, this._solution.sid);
        return this._metrics;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new CallInstance(operationVersion, payload, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return this._solution;
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.CallContextImpl = CallContextImpl;
class CallInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context || new CallContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a CallInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CallInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Access the annotation.
     */
    annotation() {
        return this._proxy.annotation;
    }
    /**
     * Access the summary.
     */
    summary() {
        return this._proxy.summary;
    }
    /**
     * Access the events.
     */
    events() {
        return this._proxy.events;
    }
    /**
     * Access the metrics.
     */
    metrics() {
        return this._proxy.metrics;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.CallInstance = CallInstance;
function CallListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new CallContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.CallListInstance = CallListInstance;
