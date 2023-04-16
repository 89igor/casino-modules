"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
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
exports.ConversationPage = exports.ConversationListInstance = exports.ConversationInstance = exports.ConversationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const message_1 = require("./conversation/message");
const participant_1 = require("./conversation/participant");
const webhook_1 = require("./conversation/webhook");
class ConversationContextImpl {
    constructor(_version, chatServiceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(chatServiceSid)) {
            throw new Error("Parameter 'chatServiceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { chatServiceSid, sid };
        this._uri = `/Services/${chatServiceSid}/Conversations/${sid}`;
    }
    get messages() {
        this._messages =
            this._messages ||
                (0, message_1.MessageListInstance)(this._version, this._solution.chatServiceSid, this._solution.sid);
        return this._messages;
    }
    get participants() {
        this._participants =
            this._participants ||
                (0, participant_1.ParticipantListInstance)(this._version, this._solution.chatServiceSid, this._solution.sid);
        return this._participants;
    }
    get webhooks() {
        this._webhooks =
            this._webhooks ||
                (0, webhook_1.WebhookListInstance)(this._version, this._solution.chatServiceSid, this._solution.sid);
        return this._webhooks;
    }
    remove(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        const headers = {};
        if (params["xTwilioWebhookEnabled"] !== undefined)
            headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.remove({
            uri: instance._uri,
            method: "delete",
            params: data,
            headers,
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
        operationPromise = operationPromise.then((payload) => new ConversationInstance(operationVersion, payload, instance._solution.chatServiceSid, instance._solution.sid));
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
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["dateCreated"] !== undefined)
            data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
        if (params["dateUpdated"] !== undefined)
            data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
        if (params["attributes"] !== undefined)
            data["Attributes"] = params["attributes"];
        if (params["messagingServiceSid"] !== undefined)
            data["MessagingServiceSid"] = params["messagingServiceSid"];
        if (params["state"] !== undefined)
            data["State"] = params["state"];
        if (params["timers.inactive"] !== undefined)
            data["Timers.Inactive"] = params["timers.inactive"];
        if (params["timers.closed"] !== undefined)
            data["Timers.Closed"] = params["timers.closed"];
        if (params["uniqueName"] !== undefined)
            data["UniqueName"] = params["uniqueName"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        if (params["xTwilioWebhookEnabled"] !== undefined)
            headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ConversationInstance(operationVersion, payload, instance._solution.chatServiceSid, instance._solution.sid));
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
exports.ConversationContextImpl = ConversationContextImpl;
class ConversationInstance {
    constructor(_version, payload, chatServiceSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.chatServiceSid = payload.chat_service_sid;
        this.messagingServiceSid = payload.messaging_service_sid;
        this.sid = payload.sid;
        this.friendlyName = payload.friendly_name;
        this.uniqueName = payload.unique_name;
        this.attributes = payload.attributes;
        this.state = payload.state;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.timers = payload.timers;
        this.url = payload.url;
        this.links = payload.links;
        this.bindings = payload.bindings;
        this._solution = { chatServiceSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ConversationContextImpl(this._version, this._solution.chatServiceSid, this._solution.sid);
        return this._context;
    }
    remove(params, callback) {
        return this._proxy.remove(params, callback);
    }
    /**
     * Fetch a ConversationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConversationInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the messages.
     */
    messages() {
        return this._proxy.messages;
    }
    /**
     * Access the participants.
     */
    participants() {
        return this._proxy.participants;
    }
    /**
     * Access the webhooks.
     */
    webhooks() {
        return this._proxy.webhooks;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            chatServiceSid: this.chatServiceSid,
            messagingServiceSid: this.messagingServiceSid,
            sid: this.sid,
            friendlyName: this.friendlyName,
            uniqueName: this.uniqueName,
            attributes: this.attributes,
            state: this.state,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            timers: this.timers,
            url: this.url,
            links: this.links,
            bindings: this.bindings,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ConversationInstance = ConversationInstance;
function ConversationListInstance(version, chatServiceSid) {
    if (!(0, utility_1.isValidPathParam)(chatServiceSid)) {
        throw new Error("Parameter 'chatServiceSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ConversationContextImpl(version, chatServiceSid, sid);
    };
    instance._version = version;
    instance._solution = { chatServiceSid };
    instance._uri = `/Services/${chatServiceSid}/Conversations`;
    instance.create = function create(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["uniqueName"] !== undefined)
            data["UniqueName"] = params["uniqueName"];
        if (params["attributes"] !== undefined)
            data["Attributes"] = params["attributes"];
        if (params["messagingServiceSid"] !== undefined)
            data["MessagingServiceSid"] = params["messagingServiceSid"];
        if (params["dateCreated"] !== undefined)
            data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
        if (params["dateUpdated"] !== undefined)
            data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
        if (params["state"] !== undefined)
            data["State"] = params["state"];
        if (params["timers.inactive"] !== undefined)
            data["Timers.Inactive"] = params["timers.inactive"];
        if (params["timers.closed"] !== undefined)
            data["Timers.Closed"] = params["timers.closed"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        if (params["xTwilioWebhookEnabled"] !== undefined)
            headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ConversationInstance(operationVersion, payload, instance._solution.chatServiceSid));
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
        if (params["startDate"] !== undefined)
            data["StartDate"] = params["startDate"];
        if (params["endDate"] !== undefined)
            data["EndDate"] = params["endDate"];
        if (params["state"] !== undefined)
            data["State"] = params["state"];
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
        operationPromise = operationPromise.then((payload) => new ConversationPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new ConversationPage(instance._version, payload, instance._solution));
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
exports.ConversationListInstance = ConversationListInstance;
class ConversationPage extends Page_1.default {
    /**
     * Initialize the ConversationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ConversationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ConversationInstance(this._version, payload, this._solution.chatServiceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ConversationPage = ConversationPage;
