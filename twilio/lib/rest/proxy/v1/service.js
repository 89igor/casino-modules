"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePage = exports.ServiceListInstance = exports.ServiceInstance = exports.ServiceContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const phoneNumber_1 = require("./service/phoneNumber");
const session_1 = require("./service/session");
const shortCode_1 = require("./service/shortCode");
class ServiceContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Services/${sid}`;
    }
    get phoneNumbers() {
        this._phoneNumbers =
            this._phoneNumbers ||
                (0, phoneNumber_1.PhoneNumberListInstance)(this._version, this._solution.sid);
        return this._phoneNumbers;
    }
    get sessions() {
        this._sessions =
            this._sessions || (0, session_1.SessionListInstance)(this._version, this._solution.sid);
        return this._sessions;
    }
    get shortCodes() {
        this._shortCodes =
            this._shortCodes ||
                (0, shortCode_1.ShortCodeListInstance)(this._version, this._solution.sid);
        return this._shortCodes;
    }
    remove(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.remove({
            uri: instance._uri,
            method: "delete",
        });
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["uniqueName"] !== undefined)
            data["UniqueName"] = params["uniqueName"];
        if (params["defaultTtl"] !== undefined)
            data["DefaultTtl"] = params["defaultTtl"];
        if (params["callbackUrl"] !== undefined)
            data["CallbackUrl"] = params["callbackUrl"];
        if (params["geoMatchLevel"] !== undefined)
            data["GeoMatchLevel"] = params["geoMatchLevel"];
        if (params["numberSelectionBehavior"] !== undefined)
            data["NumberSelectionBehavior"] = params["numberSelectionBehavior"];
        if (params["interceptCallbackUrl"] !== undefined)
            data["InterceptCallbackUrl"] = params["interceptCallbackUrl"];
        if (params["outOfSessionCallbackUrl"] !== undefined)
            data["OutOfSessionCallbackUrl"] = params["outOfSessionCallbackUrl"];
        if (params["chatInstanceSid"] !== undefined)
            data["ChatInstanceSid"] = params["chatInstanceSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload, instance._solution.sid));
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
exports.ServiceContextImpl = ServiceContextImpl;
class ServiceInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.uniqueName = payload.unique_name;
        this.accountSid = payload.account_sid;
        this.chatInstanceSid = payload.chat_instance_sid;
        this.callbackUrl = payload.callback_url;
        this.defaultTtl = deserialize.integer(payload.default_ttl);
        this.numberSelectionBehavior = payload.number_selection_behavior;
        this.geoMatchLevel = payload.geo_match_level;
        this.interceptCallbackUrl = payload.intercept_callback_url;
        this.outOfSessionCallbackUrl = payload.out_of_session_callback_url;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ServiceContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a ServiceInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a ServiceInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ServiceInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the phoneNumbers.
     */
    phoneNumbers() {
        return this._proxy.phoneNumbers;
    }
    /**
     * Access the sessions.
     */
    sessions() {
        return this._proxy.sessions;
    }
    /**
     * Access the shortCodes.
     */
    shortCodes() {
        return this._proxy.shortCodes;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            uniqueName: this.uniqueName,
            accountSid: this.accountSid,
            chatInstanceSid: this.chatInstanceSid,
            callbackUrl: this.callbackUrl,
            defaultTtl: this.defaultTtl,
            numberSelectionBehavior: this.numberSelectionBehavior,
            geoMatchLevel: this.geoMatchLevel,
            interceptCallbackUrl: this.interceptCallbackUrl,
            outOfSessionCallbackUrl: this.outOfSessionCallbackUrl,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ServiceInstance = ServiceInstance;
function ServiceListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ServiceContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Services`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
            throw new Error("Required parameter \"params['uniqueName']\" missing.");
        }
        let data = {};
        data["UniqueName"] = params["uniqueName"];
        if (params["defaultTtl"] !== undefined)
            data["DefaultTtl"] = params["defaultTtl"];
        if (params["callbackUrl"] !== undefined)
            data["CallbackUrl"] = params["callbackUrl"];
        if (params["geoMatchLevel"] !== undefined)
            data["GeoMatchLevel"] = params["geoMatchLevel"];
        if (params["numberSelectionBehavior"] !== undefined)
            data["NumberSelectionBehavior"] = params["numberSelectionBehavior"];
        if (params["interceptCallbackUrl"] !== undefined)
            data["InterceptCallbackUrl"] = params["interceptCallbackUrl"];
        if (params["outOfSessionCallbackUrl"] !== undefined)
            data["OutOfSessionCallbackUrl"] = params["outOfSessionCallbackUrl"];
        if (params["chatInstanceSid"] !== undefined)
            data["ChatInstanceSid"] = params["chatInstanceSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.pageNumber !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServicePage(operationVersion, payload, instance._solution));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.each = instance._version.each;
    instance.list = instance._version.list;
    instance.getPage = function getPage(targetUrl, callback) {
        const operationPromise = instance._version._domain.twilio.request({
            method: "get",
            uri: targetUrl,
        });
        let pagePromise = operationPromise.then((payload) => new ServicePage(instance._version, payload, instance._solution));
        pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
        return pagePromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.ServiceListInstance = ServiceListInstance;
class ServicePage extends Page_1.default {
    /**
     * Initialize the ServicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ServiceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ServiceInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ServicePage = ServicePage;