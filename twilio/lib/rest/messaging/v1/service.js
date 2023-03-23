"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
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
const alphaSender_1 = require("./service/alphaSender");
const phoneNumber_1 = require("./service/phoneNumber");
const shortCode_1 = require("./service/shortCode");
const usAppToPerson_1 = require("./service/usAppToPerson");
const usAppToPersonUsecase_1 = require("./service/usAppToPersonUsecase");
class ServiceContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Services/${sid}`;
    }
    get alphaSenders() {
        this._alphaSenders =
            this._alphaSenders ||
                (0, alphaSender_1.AlphaSenderListInstance)(this._version, this._solution.sid);
        return this._alphaSenders;
    }
    get phoneNumbers() {
        this._phoneNumbers =
            this._phoneNumbers ||
                (0, phoneNumber_1.PhoneNumberListInstance)(this._version, this._solution.sid);
        return this._phoneNumbers;
    }
    get shortCodes() {
        this._shortCodes =
            this._shortCodes ||
                (0, shortCode_1.ShortCodeListInstance)(this._version, this._solution.sid);
        return this._shortCodes;
    }
    get usAppToPerson() {
        this._usAppToPerson =
            this._usAppToPerson ||
                (0, usAppToPerson_1.UsAppToPersonListInstance)(this._version, this._solution.sid);
        return this._usAppToPerson;
    }
    get usAppToPersonUsecases() {
        this._usAppToPersonUsecases =
            this._usAppToPersonUsecases ||
                (0, usAppToPersonUsecase_1.UsAppToPersonUsecaseListInstance)(this._version, this._solution.sid);
        return this._usAppToPersonUsecases;
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
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["inboundRequestUrl"] !== undefined)
            data["InboundRequestUrl"] = params["inboundRequestUrl"];
        if (params["inboundMethod"] !== undefined)
            data["InboundMethod"] = params["inboundMethod"];
        if (params["fallbackUrl"] !== undefined)
            data["FallbackUrl"] = params["fallbackUrl"];
        if (params["fallbackMethod"] !== undefined)
            data["FallbackMethod"] = params["fallbackMethod"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["stickySender"] !== undefined)
            data["StickySender"] = serialize.bool(params["stickySender"]);
        if (params["mmsConverter"] !== undefined)
            data["MmsConverter"] = serialize.bool(params["mmsConverter"]);
        if (params["smartEncoding"] !== undefined)
            data["SmartEncoding"] = serialize.bool(params["smartEncoding"]);
        if (params["scanMessageContent"] !== undefined)
            data["ScanMessageContent"] = params["scanMessageContent"];
        if (params["fallbackToLongCode"] !== undefined)
            data["FallbackToLongCode"] = serialize.bool(params["fallbackToLongCode"]);
        if (params["areaCodeGeomatch"] !== undefined)
            data["AreaCodeGeomatch"] = serialize.bool(params["areaCodeGeomatch"]);
        if (params["validityPeriod"] !== undefined)
            data["ValidityPeriod"] = params["validityPeriod"];
        if (params["synchronousValidation"] !== undefined)
            data["SynchronousValidation"] = serialize.bool(params["synchronousValidation"]);
        if (params["usecase"] !== undefined)
            data["Usecase"] = params["usecase"];
        if (params["useInboundWebhookOnNumber"] !== undefined)
            data["UseInboundWebhookOnNumber"] = serialize.bool(params["useInboundWebhookOnNumber"]);
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
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.inboundRequestUrl = payload.inbound_request_url;
        this.inboundMethod = payload.inbound_method;
        this.fallbackUrl = payload.fallback_url;
        this.fallbackMethod = payload.fallback_method;
        this.statusCallback = payload.status_callback;
        this.stickySender = payload.sticky_sender;
        this.mmsConverter = payload.mms_converter;
        this.smartEncoding = payload.smart_encoding;
        this.scanMessageContent = payload.scan_message_content;
        this.fallbackToLongCode = payload.fallback_to_long_code;
        this.areaCodeGeomatch = payload.area_code_geomatch;
        this.synchronousValidation = payload.synchronous_validation;
        this.validityPeriod = deserialize.integer(payload.validity_period);
        this.url = payload.url;
        this.links = payload.links;
        this.usecase = payload.usecase;
        this.usAppToPersonRegistered = payload.us_app_to_person_registered;
        this.useInboundWebhookOnNumber = payload.use_inbound_webhook_on_number;
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
     * Access the alphaSenders.
     */
    alphaSenders() {
        return this._proxy.alphaSenders;
    }
    /**
     * Access the phoneNumbers.
     */
    phoneNumbers() {
        return this._proxy.phoneNumbers;
    }
    /**
     * Access the shortCodes.
     */
    shortCodes() {
        return this._proxy.shortCodes;
    }
    /**
     * Access the usAppToPerson.
     */
    usAppToPerson() {
        return this._proxy.usAppToPerson;
    }
    /**
     * Access the usAppToPersonUsecases.
     */
    usAppToPersonUsecases() {
        return this._proxy.usAppToPersonUsecases;
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
            friendlyName: this.friendlyName,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            inboundRequestUrl: this.inboundRequestUrl,
            inboundMethod: this.inboundMethod,
            fallbackUrl: this.fallbackUrl,
            fallbackMethod: this.fallbackMethod,
            statusCallback: this.statusCallback,
            stickySender: this.stickySender,
            mmsConverter: this.mmsConverter,
            smartEncoding: this.smartEncoding,
            scanMessageContent: this.scanMessageContent,
            fallbackToLongCode: this.fallbackToLongCode,
            areaCodeGeomatch: this.areaCodeGeomatch,
            synchronousValidation: this.synchronousValidation,
            validityPeriod: this.validityPeriod,
            url: this.url,
            links: this.links,
            usecase: this.usecase,
            usAppToPersonRegistered: this.usAppToPersonRegistered,
            useInboundWebhookOnNumber: this.useInboundWebhookOnNumber,
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
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        if (params["inboundRequestUrl"] !== undefined)
            data["InboundRequestUrl"] = params["inboundRequestUrl"];
        if (params["inboundMethod"] !== undefined)
            data["InboundMethod"] = params["inboundMethod"];
        if (params["fallbackUrl"] !== undefined)
            data["FallbackUrl"] = params["fallbackUrl"];
        if (params["fallbackMethod"] !== undefined)
            data["FallbackMethod"] = params["fallbackMethod"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["stickySender"] !== undefined)
            data["StickySender"] = serialize.bool(params["stickySender"]);
        if (params["mmsConverter"] !== undefined)
            data["MmsConverter"] = serialize.bool(params["mmsConverter"]);
        if (params["smartEncoding"] !== undefined)
            data["SmartEncoding"] = serialize.bool(params["smartEncoding"]);
        if (params["scanMessageContent"] !== undefined)
            data["ScanMessageContent"] = params["scanMessageContent"];
        if (params["fallbackToLongCode"] !== undefined)
            data["FallbackToLongCode"] = serialize.bool(params["fallbackToLongCode"]);
        if (params["areaCodeGeomatch"] !== undefined)
            data["AreaCodeGeomatch"] = serialize.bool(params["areaCodeGeomatch"]);
        if (params["validityPeriod"] !== undefined)
            data["ValidityPeriod"] = params["validityPeriod"];
        if (params["synchronousValidation"] !== undefined)
            data["SynchronousValidation"] = serialize.bool(params["synchronousValidation"]);
        if (params["usecase"] !== undefined)
            data["Usecase"] = params["usecase"];
        if (params["useInboundWebhookOnNumber"] !== undefined)
            data["UseInboundWebhookOnNumber"] = serialize.bool(params["useInboundWebhookOnNumber"]);
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
