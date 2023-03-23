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
exports.MessagePage = exports.MessageListInstance = exports.MessageInstance = exports.MessageContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const feedback_1 = require("./message/feedback");
const media_1 = require("./message/media");
class MessageContextImpl {
    constructor(_version, accountSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, sid };
        this._uri = `/Accounts/${accountSid}/Messages/${sid}.json`;
    }
    get feedback() {
        this._feedback =
            this._feedback ||
                (0, feedback_1.FeedbackListInstance)(this._version, this._solution.accountSid, this._solution.sid);
        return this._feedback;
    }
    get media() {
        this._media =
            this._media ||
                (0, media_1.MediaListInstance)(this._version, this._solution.accountSid, this._solution.sid);
        return this._media;
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
        operationPromise = operationPromise.then((payload) => new MessageInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
        if (params["body"] !== undefined)
            data["Body"] = params["body"];
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new MessageInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
exports.MessageContextImpl = MessageContextImpl;
class MessageInstance {
    constructor(_version, payload, accountSid, sid) {
        this._version = _version;
        this.body = payload.body;
        this.numSegments = payload.num_segments;
        this.direction = payload.direction;
        this.from = payload.from;
        this.to = payload.to;
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.price = payload.price;
        this.errorMessage = payload.error_message;
        this.uri = payload.uri;
        this.accountSid = payload.account_sid;
        this.numMedia = payload.num_media;
        this.status = payload.status;
        this.messagingServiceSid = payload.messaging_service_sid;
        this.sid = payload.sid;
        this.dateSent = deserialize.rfc2822DateTime(payload.date_sent);
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.errorCode = deserialize.integer(payload.error_code);
        this.priceUnit = payload.price_unit;
        this.apiVersion = payload.api_version;
        this.subresourceUris = payload.subresource_uris;
        this._solution = { accountSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new MessageContextImpl(this._version, this._solution.accountSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a MessageInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the feedback.
     */
    feedback() {
        return this._proxy.feedback;
    }
    /**
     * Access the media.
     */
    media() {
        return this._proxy.media;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            body: this.body,
            numSegments: this.numSegments,
            direction: this.direction,
            from: this.from,
            to: this.to,
            dateUpdated: this.dateUpdated,
            price: this.price,
            errorMessage: this.errorMessage,
            uri: this.uri,
            accountSid: this.accountSid,
            numMedia: this.numMedia,
            status: this.status,
            messagingServiceSid: this.messagingServiceSid,
            sid: this.sid,
            dateSent: this.dateSent,
            dateCreated: this.dateCreated,
            errorCode: this.errorCode,
            priceUnit: this.priceUnit,
            apiVersion: this.apiVersion,
            subresourceUris: this.subresourceUris,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MessageInstance = MessageInstance;
function MessageListInstance(version, accountSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new MessageContextImpl(version, accountSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/Accounts/${accountSid}/Messages.json`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["to"] === null || params["to"] === undefined) {
            throw new Error("Required parameter \"params['to']\" missing.");
        }
        let data = {};
        data["To"] = params["to"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["applicationSid"] !== undefined)
            data["ApplicationSid"] = params["applicationSid"];
        if (params["maxPrice"] !== undefined)
            data["MaxPrice"] = params["maxPrice"];
        if (params["provideFeedback"] !== undefined)
            data["ProvideFeedback"] = serialize.bool(params["provideFeedback"]);
        if (params["attempt"] !== undefined)
            data["Attempt"] = params["attempt"];
        if (params["validityPeriod"] !== undefined)
            data["ValidityPeriod"] = params["validityPeriod"];
        if (params["forceDelivery"] !== undefined)
            data["ForceDelivery"] = serialize.bool(params["forceDelivery"]);
        if (params["contentRetention"] !== undefined)
            data["ContentRetention"] = params["contentRetention"];
        if (params["addressRetention"] !== undefined)
            data["AddressRetention"] = params["addressRetention"];
        if (params["smartEncoded"] !== undefined)
            data["SmartEncoded"] = serialize.bool(params["smartEncoded"]);
        if (params["persistentAction"] !== undefined)
            data["PersistentAction"] = serialize.map(params["persistentAction"], (e) => e);
        if (params["shortenUrls"] !== undefined)
            data["ShortenUrls"] = serialize.bool(params["shortenUrls"]);
        if (params["scheduleType"] !== undefined)
            data["ScheduleType"] = params["scheduleType"];
        if (params["sendAt"] !== undefined)
            data["SendAt"] = serialize.iso8601DateTime(params["sendAt"]);
        if (params["sendAsMms"] !== undefined)
            data["SendAsMms"] = serialize.bool(params["sendAsMms"]);
        if (params["contentSid"] !== undefined)
            data["ContentSid"] = params["contentSid"];
        if (params["contentVariables"] !== undefined)
            data["ContentVariables"] = params["contentVariables"];
        if (params["from"] !== undefined)
            data["From"] = params["from"];
        if (params["messagingServiceSid"] !== undefined)
            data["MessagingServiceSid"] = params["messagingServiceSid"];
        if (params["body"] !== undefined)
            data["Body"] = params["body"];
        if (params["mediaUrl"] !== undefined)
            data["MediaUrl"] = serialize.map(params["mediaUrl"], (e) => e);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new MessageInstance(operationVersion, payload, instance._solution.accountSid));
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
        if (params["to"] !== undefined)
            data["To"] = params["to"];
        if (params["from"] !== undefined)
            data["From"] = params["from"];
        if (params["dateSent"] !== undefined)
            data["DateSent"] = serialize.iso8601DateTime(params["dateSent"]);
        if (params["dateSentBefore"] !== undefined)
            data["DateSent<"] = serialize.iso8601DateTime(params["dateSentBefore"]);
        if (params["dateSentAfter"] !== undefined)
            data["DateSent>"] = serialize.iso8601DateTime(params["dateSentAfter"]);
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
        operationPromise = operationPromise.then((payload) => new MessagePage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new MessagePage(instance._version, payload, instance._solution));
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
exports.MessageListInstance = MessageListInstance;
class MessagePage extends Page_1.default {
    /**
     * Initialize the MessagePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of MessageInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new MessageInstance(this._version, payload, this._solution.accountSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MessagePage = MessagePage;
