"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
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
exports.CompositionHookPage = exports.CompositionHookListInstance = exports.CompositionHookInstance = exports.CompositionHookContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class CompositionHookContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/CompositionHooks/${sid}`;
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
        operationPromise = operationPromise.then((payload) => new CompositionHookInstance(operationVersion, payload, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        if (params["enabled"] !== undefined)
            data["Enabled"] = serialize.bool(params["enabled"]);
        if (params["videoLayout"] !== undefined)
            data["VideoLayout"] = serialize.object(params["videoLayout"]);
        if (params["audioSources"] !== undefined)
            data["AudioSources"] = serialize.map(params["audioSources"], (e) => e);
        if (params["audioSourcesExcluded"] !== undefined)
            data["AudioSourcesExcluded"] = serialize.map(params["audioSourcesExcluded"], (e) => e);
        if (params["trim"] !== undefined)
            data["Trim"] = serialize.bool(params["trim"]);
        if (params["format"] !== undefined)
            data["Format"] = params["format"];
        if (params["resolution"] !== undefined)
            data["Resolution"] = params["resolution"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new CompositionHookInstance(operationVersion, payload, instance._solution.sid));
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
exports.CompositionHookContextImpl = CompositionHookContextImpl;
class CompositionHookInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.enabled = payload.enabled;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.sid = payload.sid;
        this.audioSources = payload.audio_sources;
        this.audioSourcesExcluded = payload.audio_sources_excluded;
        this.videoLayout = payload.video_layout;
        this.resolution = payload.resolution;
        this.trim = payload.trim;
        this.format = payload.format;
        this.statusCallback = payload.status_callback;
        this.statusCallbackMethod = payload.status_callback_method;
        this.url = payload.url;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new CompositionHookContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a CompositionHookInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a CompositionHookInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CompositionHookInstance
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
            friendlyName: this.friendlyName,
            enabled: this.enabled,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            sid: this.sid,
            audioSources: this.audioSources,
            audioSourcesExcluded: this.audioSourcesExcluded,
            videoLayout: this.videoLayout,
            resolution: this.resolution,
            trim: this.trim,
            format: this.format,
            statusCallback: this.statusCallback,
            statusCallbackMethod: this.statusCallbackMethod,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.CompositionHookInstance = CompositionHookInstance;
function CompositionHookListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new CompositionHookContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/CompositionHooks`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        if (params["enabled"] !== undefined)
            data["Enabled"] = serialize.bool(params["enabled"]);
        if (params["videoLayout"] !== undefined)
            data["VideoLayout"] = serialize.object(params["videoLayout"]);
        if (params["audioSources"] !== undefined)
            data["AudioSources"] = serialize.map(params["audioSources"], (e) => e);
        if (params["audioSourcesExcluded"] !== undefined)
            data["AudioSourcesExcluded"] = serialize.map(params["audioSourcesExcluded"], (e) => e);
        if (params["resolution"] !== undefined)
            data["Resolution"] = params["resolution"];
        if (params["format"] !== undefined)
            data["Format"] = params["format"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        if (params["trim"] !== undefined)
            data["Trim"] = serialize.bool(params["trim"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new CompositionHookInstance(operationVersion, payload));
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
        if (params["enabled"] !== undefined)
            data["Enabled"] = serialize.bool(params["enabled"]);
        if (params["dateCreatedAfter"] !== undefined)
            data["DateCreatedAfter"] = serialize.iso8601DateTime(params["dateCreatedAfter"]);
        if (params["dateCreatedBefore"] !== undefined)
            data["DateCreatedBefore"] = serialize.iso8601DateTime(params["dateCreatedBefore"]);
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
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
        operationPromise = operationPromise.then((payload) => new CompositionHookPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new CompositionHookPage(instance._version, payload, instance._solution));
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
exports.CompositionHookListInstance = CompositionHookListInstance;
class CompositionHookPage extends Page_1.default {
    /**
     * Initialize the CompositionHookPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of CompositionHookInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new CompositionHookInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.CompositionHookPage = CompositionHookPage;
