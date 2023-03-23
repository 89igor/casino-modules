"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
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
exports.MessagingConfigurationPage = exports.MessagingConfigurationListInstance = exports.MessagingConfigurationInstance = exports.MessagingConfigurationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class MessagingConfigurationContextImpl {
    constructor(_version, serviceSid, country) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(country)) {
            throw new Error("Parameter 'country' is not valid.");
        }
        this._solution = { serviceSid, country };
        this._uri = `/Services/${serviceSid}/MessagingConfigurations/${country}`;
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
        operationPromise = operationPromise.then((payload) => new MessagingConfigurationInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.country));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["messagingServiceSid"] === null ||
            params["messagingServiceSid"] === undefined) {
            throw new Error("Required parameter \"params['messagingServiceSid']\" missing.");
        }
        let data = {};
        data["MessagingServiceSid"] = params["messagingServiceSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new MessagingConfigurationInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.country));
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
exports.MessagingConfigurationContextImpl = MessagingConfigurationContextImpl;
class MessagingConfigurationInstance {
    constructor(_version, payload, serviceSid, country) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.country = payload.country;
        this.messagingServiceSid = payload.messaging_service_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this._solution = { serviceSid, country: country || this.country };
    }
    get _proxy() {
        this._context =
            this._context ||
                new MessagingConfigurationContextImpl(this._version, this._solution.serviceSid, this._solution.country);
        return this._context;
    }
    /**
     * Remove a MessagingConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a MessagingConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessagingConfigurationInstance
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
            accountSid: this.accountSid,
            serviceSid: this.serviceSid,
            country: this.country,
            messagingServiceSid: this.messagingServiceSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MessagingConfigurationInstance = MessagingConfigurationInstance;
function MessagingConfigurationListInstance(version, serviceSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    const instance = ((country) => instance.get(country));
    instance.get = function get(country) {
        return new MessagingConfigurationContextImpl(version, serviceSid, country);
    };
    instance._version = version;
    instance._solution = { serviceSid };
    instance._uri = `/Services/${serviceSid}/MessagingConfigurations`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["country"] === null || params["country"] === undefined) {
            throw new Error("Required parameter \"params['country']\" missing.");
        }
        if (params["messagingServiceSid"] === null ||
            params["messagingServiceSid"] === undefined) {
            throw new Error("Required parameter \"params['messagingServiceSid']\" missing.");
        }
        let data = {};
        data["Country"] = params["country"];
        data["MessagingServiceSid"] = params["messagingServiceSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new MessagingConfigurationInstance(operationVersion, payload, instance._solution.serviceSid));
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
        operationPromise = operationPromise.then((payload) => new MessagingConfigurationPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new MessagingConfigurationPage(instance._version, payload, instance._solution));
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
exports.MessagingConfigurationListInstance = MessagingConfigurationListInstance;
class MessagingConfigurationPage extends Page_1.default {
    /**
     * Initialize the MessagingConfigurationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of MessagingConfigurationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new MessagingConfigurationInstance(this._version, payload, this._solution.serviceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MessagingConfigurationPage = MessagingConfigurationPage;