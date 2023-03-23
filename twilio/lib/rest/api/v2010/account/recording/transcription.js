"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
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
exports.TranscriptionPage = exports.TranscriptionListInstance = exports.TranscriptionInstance = exports.TranscriptionContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class TranscriptionContextImpl {
    constructor(_version, accountSid, recordingSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(recordingSid)) {
            throw new Error("Parameter 'recordingSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, recordingSid, sid };
        this._uri = `/Accounts/${accountSid}/Recordings/${recordingSid}/Transcriptions/${sid}.json`;
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
        operationPromise = operationPromise.then((payload) => new TranscriptionInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.recordingSid, instance._solution.sid));
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
exports.TranscriptionContextImpl = TranscriptionContextImpl;
class TranscriptionInstance {
    constructor(_version, payload, accountSid, recordingSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.apiVersion = payload.api_version;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.duration = payload.duration;
        this.price = payload.price;
        this.priceUnit = payload.price_unit;
        this.recordingSid = payload.recording_sid;
        this.sid = payload.sid;
        this.status = payload.status;
        this.transcriptionText = payload.transcription_text;
        this.type = payload.type;
        this.uri = payload.uri;
        this._solution = { accountSid, recordingSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new TranscriptionContextImpl(this._version, this._solution.accountSid, this._solution.recordingSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a TranscriptionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a TranscriptionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TranscriptionInstance
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
            accountSid: this.accountSid,
            apiVersion: this.apiVersion,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            duration: this.duration,
            price: this.price,
            priceUnit: this.priceUnit,
            recordingSid: this.recordingSid,
            sid: this.sid,
            status: this.status,
            transcriptionText: this.transcriptionText,
            type: this.type,
            uri: this.uri,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TranscriptionInstance = TranscriptionInstance;
function TranscriptionListInstance(version, accountSid, recordingSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(recordingSid)) {
        throw new Error("Parameter 'recordingSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new TranscriptionContextImpl(version, accountSid, recordingSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid, recordingSid };
    instance._uri = `/Accounts/${accountSid}/Recordings/${recordingSid}/Transcriptions.json`;
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
        operationPromise = operationPromise.then((payload) => new TranscriptionPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new TranscriptionPage(instance._version, payload, instance._solution));
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
exports.TranscriptionListInstance = TranscriptionListInstance;
class TranscriptionPage extends Page_1.default {
    /**
     * Initialize the TranscriptionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of TranscriptionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new TranscriptionInstance(this._version, payload, this._solution.accountSid, this._solution.recordingSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TranscriptionPage = TranscriptionPage;
