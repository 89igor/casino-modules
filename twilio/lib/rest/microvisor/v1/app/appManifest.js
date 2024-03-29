"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Microvisor
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppManifestListInstance = exports.AppManifestInstance = exports.AppManifestContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class AppManifestContextImpl {
    constructor(_version, appSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(appSid)) {
            throw new Error("Parameter 'appSid' is not valid.");
        }
        this._solution = { appSid };
        this._uri = `/Apps/${appSid}/Manifest`;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new AppManifestInstance(operationVersion, payload, instance._solution.appSid));
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
exports.AppManifestContextImpl = AppManifestContextImpl;
class AppManifestInstance {
    constructor(_version, payload, appSid) {
        this._version = _version;
        this.appSid = payload.app_sid;
        this.hash = payload.hash;
        this.encodedBytes = payload.encoded_bytes;
        this.url = payload.url;
        this._solution = { appSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new AppManifestContextImpl(this._version, this._solution.appSid);
        return this._context;
    }
    /**
     * Fetch a AppManifestInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AppManifestInstance
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
            appSid: this.appSid,
            hash: this.hash,
            encodedBytes: this.encodedBytes,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AppManifestInstance = AppManifestInstance;
function AppManifestListInstance(version, appSid) {
    if (!(0, utility_1.isValidPathParam)(appSid)) {
        throw new Error("Parameter 'appSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new AppManifestContextImpl(version, appSid);
    };
    instance._version = version;
    instance._solution = { appSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.AppManifestListInstance = AppManifestListInstance;
