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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenListInstance = exports.AccessTokenInstance = exports.AccessTokenContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class AccessTokenContextImpl {
    constructor(_version, serviceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { serviceSid, sid };
        this._uri = `/Services/${serviceSid}/AccessTokens/${sid}`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new AccessTokenInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sid));
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
exports.AccessTokenContextImpl = AccessTokenContextImpl;
class AccessTokenInstance {
    constructor(_version, payload, serviceSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.entityIdentity = payload.entity_identity;
        this.factorType = payload.factor_type;
        this.factorFriendlyName = payload.factor_friendly_name;
        this.token = payload.token;
        this.url = payload.url;
        this.ttl = deserialize.integer(payload.ttl);
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this._solution = { serviceSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new AccessTokenContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a AccessTokenInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AccessTokenInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
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
            entityIdentity: this.entityIdentity,
            factorType: this.factorType,
            factorFriendlyName: this.factorFriendlyName,
            token: this.token,
            url: this.url,
            ttl: this.ttl,
            dateCreated: this.dateCreated,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AccessTokenInstance = AccessTokenInstance;
function AccessTokenListInstance(version, serviceSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new AccessTokenContextImpl(version, serviceSid, sid);
    };
    instance._version = version;
    instance._solution = { serviceSid };
    instance._uri = `/Services/${serviceSid}/AccessTokens`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["identity"] === null || params["identity"] === undefined) {
            throw new Error("Required parameter \"params['identity']\" missing.");
        }
        if (params["factorType"] === null || params["factorType"] === undefined) {
            throw new Error("Required parameter \"params['factorType']\" missing.");
        }
        let data = {};
        data["Identity"] = params["identity"];
        data["FactorType"] = params["factorType"];
        if (params["factorFriendlyName"] !== undefined)
            data["FactorFriendlyName"] = params["factorFriendlyName"];
        if (params["ttl"] !== undefined)
            data["Ttl"] = params["ttl"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new AccessTokenInstance(operationVersion, payload, instance._solution.serviceSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.AccessTokenListInstance = AccessTokenListInstance;
