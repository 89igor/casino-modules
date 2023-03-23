"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Wireless
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
exports.RatePlanPage = exports.RatePlanListInstance = exports.RatePlanInstance = exports.RatePlanContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class RatePlanContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/RatePlans/${sid}`;
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
        operationPromise = operationPromise.then((payload) => new RatePlanInstance(operationVersion, payload, instance._solution.sid));
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
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new RatePlanInstance(operationVersion, payload, instance._solution.sid));
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
exports.RatePlanContextImpl = RatePlanContextImpl;
class RatePlanInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.uniqueName = payload.unique_name;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.dataEnabled = payload.data_enabled;
        this.dataMetering = payload.data_metering;
        this.dataLimit = deserialize.integer(payload.data_limit);
        this.messagingEnabled = payload.messaging_enabled;
        this.voiceEnabled = payload.voice_enabled;
        this.nationalRoamingEnabled = payload.national_roaming_enabled;
        this.nationalRoamingDataLimit = deserialize.integer(payload.national_roaming_data_limit);
        this.internationalRoaming = payload.international_roaming;
        this.internationalRoamingDataLimit = deserialize.integer(payload.international_roaming_data_limit);
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new RatePlanContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a RatePlanInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a RatePlanInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed RatePlanInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
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
            friendlyName: this.friendlyName,
            dataEnabled: this.dataEnabled,
            dataMetering: this.dataMetering,
            dataLimit: this.dataLimit,
            messagingEnabled: this.messagingEnabled,
            voiceEnabled: this.voiceEnabled,
            nationalRoamingEnabled: this.nationalRoamingEnabled,
            nationalRoamingDataLimit: this.nationalRoamingDataLimit,
            internationalRoaming: this.internationalRoaming,
            internationalRoamingDataLimit: this.internationalRoamingDataLimit,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.RatePlanInstance = RatePlanInstance;
function RatePlanListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new RatePlanContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/RatePlans`;
    instance.create = function create(params, callback) {
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
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["dataEnabled"] !== undefined)
            data["DataEnabled"] = serialize.bool(params["dataEnabled"]);
        if (params["dataLimit"] !== undefined)
            data["DataLimit"] = params["dataLimit"];
        if (params["dataMetering"] !== undefined)
            data["DataMetering"] = params["dataMetering"];
        if (params["messagingEnabled"] !== undefined)
            data["MessagingEnabled"] = serialize.bool(params["messagingEnabled"]);
        if (params["voiceEnabled"] !== undefined)
            data["VoiceEnabled"] = serialize.bool(params["voiceEnabled"]);
        if (params["nationalRoamingEnabled"] !== undefined)
            data["NationalRoamingEnabled"] = serialize.bool(params["nationalRoamingEnabled"]);
        if (params["internationalRoaming"] !== undefined)
            data["InternationalRoaming"] = serialize.map(params["internationalRoaming"], (e) => e);
        if (params["nationalRoamingDataLimit"] !== undefined)
            data["NationalRoamingDataLimit"] = params["nationalRoamingDataLimit"];
        if (params["internationalRoamingDataLimit"] !== undefined)
            data["InternationalRoamingDataLimit"] =
                params["internationalRoamingDataLimit"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new RatePlanInstance(operationVersion, payload));
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
        operationPromise = operationPromise.then((payload) => new RatePlanPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new RatePlanPage(instance._version, payload, instance._solution));
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
exports.RatePlanListInstance = RatePlanListInstance;
class RatePlanPage extends Page_1.default {
    /**
     * Initialize the RatePlanPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of RatePlanInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new RatePlanInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.RatePlanPage = RatePlanPage;
