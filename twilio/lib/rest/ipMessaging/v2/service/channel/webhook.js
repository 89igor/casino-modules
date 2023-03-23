"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
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
exports.WebhookPage = exports.WebhookListInstance = exports.WebhookInstance = exports.WebhookContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class WebhookContextImpl {
    constructor(_version, serviceSid, channelSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(channelSid)) {
            throw new Error("Parameter 'channelSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { serviceSid, channelSid, sid };
        this._uri = `/Services/${serviceSid}/Channels/${channelSid}/Webhooks/${sid}`;
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
        operationPromise = operationPromise.then((payload) => new WebhookInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.channelSid, instance._solution.sid));
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
        if (params["configuration.url"] !== undefined)
            data["Configuration.Url"] = params["configuration.url"];
        if (params["configuration.method"] !== undefined)
            data["Configuration.Method"] = params["configuration.method"];
        if (params["configuration.filters"] !== undefined)
            data["Configuration.Filters"] = serialize.map(params["configuration.filters"], (e) => e);
        if (params["configuration.triggers"] !== undefined)
            data["Configuration.Triggers"] = serialize.map(params["configuration.triggers"], (e) => e);
        if (params["configuration.flowSid"] !== undefined)
            data["Configuration.FlowSid"] = params["configuration.flowSid"];
        if (params["configuration.retryCount"] !== undefined)
            data["Configuration.RetryCount"] = params["configuration.retryCount"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new WebhookInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.channelSid, instance._solution.sid));
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
exports.WebhookContextImpl = WebhookContextImpl;
class WebhookInstance {
    constructor(_version, payload, serviceSid, channelSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.channelSid = payload.channel_sid;
        this.type = payload.type;
        this.url = payload.url;
        this.configuration = payload.configuration;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this._solution = { serviceSid, channelSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new WebhookContextImpl(this._version, this._solution.serviceSid, this._solution.channelSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a WebhookInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a WebhookInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed WebhookInstance
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
            accountSid: this.accountSid,
            serviceSid: this.serviceSid,
            channelSid: this.channelSid,
            type: this.type,
            url: this.url,
            configuration: this.configuration,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.WebhookInstance = WebhookInstance;
function WebhookListInstance(version, serviceSid, channelSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(channelSid)) {
        throw new Error("Parameter 'channelSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new WebhookContextImpl(version, serviceSid, channelSid, sid);
    };
    instance._version = version;
    instance._solution = { serviceSid, channelSid };
    instance._uri = `/Services/${serviceSid}/Channels/${channelSid}/Webhooks`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["type"] === null || params["type"] === undefined) {
            throw new Error("Required parameter \"params['type']\" missing.");
        }
        let data = {};
        data["Type"] = params["type"];
        if (params["configuration.url"] !== undefined)
            data["Configuration.Url"] = params["configuration.url"];
        if (params["configuration.method"] !== undefined)
            data["Configuration.Method"] = params["configuration.method"];
        if (params["configuration.filters"] !== undefined)
            data["Configuration.Filters"] = serialize.map(params["configuration.filters"], (e) => e);
        if (params["configuration.triggers"] !== undefined)
            data["Configuration.Triggers"] = serialize.map(params["configuration.triggers"], (e) => e);
        if (params["configuration.flowSid"] !== undefined)
            data["Configuration.FlowSid"] = params["configuration.flowSid"];
        if (params["configuration.retryCount"] !== undefined)
            data["Configuration.RetryCount"] = params["configuration.retryCount"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new WebhookInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.channelSid));
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
        operationPromise = operationPromise.then((payload) => new WebhookPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new WebhookPage(instance._version, payload, instance._solution));
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
exports.WebhookListInstance = WebhookListInstance;
class WebhookPage extends Page_1.default {
    /**
     * Initialize the WebhookPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of WebhookInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new WebhookInstance(this._version, payload, this._solution.serviceSid, this._solution.channelSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.WebhookPage = WebhookPage;
