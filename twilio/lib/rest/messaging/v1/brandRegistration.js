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
exports.BrandRegistrationPage = exports.BrandRegistrationListInstance = exports.BrandRegistrationInstance = exports.BrandRegistrationContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const brandRegistrationOtp_1 = require("./brandRegistration/brandRegistrationOtp");
const brandVetting_1 = require("./brandRegistration/brandVetting");
class BrandRegistrationContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/a2p/BrandRegistrations/${sid}`;
    }
    get brandRegistrationOtps() {
        this._brandRegistrationOtps =
            this._brandRegistrationOtps ||
                (0, brandRegistrationOtp_1.BrandRegistrationOtpListInstance)(this._version, this._solution.sid);
        return this._brandRegistrationOtps;
    }
    get brandVettings() {
        this._brandVettings =
            this._brandVettings ||
                (0, brandVetting_1.BrandVettingListInstance)(this._version, this._solution.sid);
        return this._brandVettings;
    }
    fetch(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new BrandRegistrationInstance(operationVersion, payload, instance._solution.sid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(callback) {
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
        });
        operationPromise = operationPromise.then((payload) => new BrandRegistrationInstance(operationVersion, payload, instance._solution.sid));
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
exports.BrandRegistrationContextImpl = BrandRegistrationContextImpl;
class BrandRegistrationInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.customerProfileBundleSid = payload.customer_profile_bundle_sid;
        this.a2pProfileBundleSid = payload.a2p_profile_bundle_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.brandType = payload.brand_type;
        this.status = payload.status;
        this.tcrId = payload.tcr_id;
        this.failureReason = payload.failure_reason;
        this.url = payload.url;
        this.brandScore = deserialize.integer(payload.brand_score);
        this.brandFeedback = payload.brand_feedback;
        this.identityStatus = payload.identity_status;
        this.russell3000 = payload.russell_3000;
        this.governmentEntity = payload.government_entity;
        this.taxExemptStatus = payload.tax_exempt_status;
        this.skipAutomaticSecVet = payload.skip_automatic_sec_vet;
        this.mock = payload.mock;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new BrandRegistrationContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a BrandRegistrationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BrandRegistrationInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Update a BrandRegistrationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BrandRegistrationInstance
     */
    update(callback) {
        return this._proxy.update(callback);
    }
    /**
     * Access the brandRegistrationOtps.
     */
    brandRegistrationOtps() {
        return this._proxy.brandRegistrationOtps;
    }
    /**
     * Access the brandVettings.
     */
    brandVettings() {
        return this._proxy.brandVettings;
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
            customerProfileBundleSid: this.customerProfileBundleSid,
            a2pProfileBundleSid: this.a2pProfileBundleSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            brandType: this.brandType,
            status: this.status,
            tcrId: this.tcrId,
            failureReason: this.failureReason,
            url: this.url,
            brandScore: this.brandScore,
            brandFeedback: this.brandFeedback,
            identityStatus: this.identityStatus,
            russell3000: this.russell3000,
            governmentEntity: this.governmentEntity,
            taxExemptStatus: this.taxExemptStatus,
            skipAutomaticSecVet: this.skipAutomaticSecVet,
            mock: this.mock,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.BrandRegistrationInstance = BrandRegistrationInstance;
function BrandRegistrationListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new BrandRegistrationContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/a2p/BrandRegistrations`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["customerProfileBundleSid"] === null ||
            params["customerProfileBundleSid"] === undefined) {
            throw new Error("Required parameter \"params['customerProfileBundleSid']\" missing.");
        }
        if (params["a2PProfileBundleSid"] === null ||
            params["a2PProfileBundleSid"] === undefined) {
            throw new Error("Required parameter \"params['a2PProfileBundleSid']\" missing.");
        }
        let data = {};
        data["CustomerProfileBundleSid"] = params["customerProfileBundleSid"];
        data["A2PProfileBundleSid"] = params["a2PProfileBundleSid"];
        if (params["brandType"] !== undefined)
            data["BrandType"] = params["brandType"];
        if (params["mock"] !== undefined)
            data["Mock"] = serialize.bool(params["mock"]);
        if (params["skipAutomaticSecVet"] !== undefined)
            data["SkipAutomaticSecVet"] = serialize.bool(params["skipAutomaticSecVet"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new BrandRegistrationInstance(operationVersion, payload));
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
        operationPromise = operationPromise.then((payload) => new BrandRegistrationPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new BrandRegistrationPage(instance._version, payload, instance._solution));
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
exports.BrandRegistrationListInstance = BrandRegistrationListInstance;
class BrandRegistrationPage extends Page_1.default {
    /**
     * Initialize the BrandRegistrationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of BrandRegistrationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new BrandRegistrationInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.BrandRegistrationPage = BrandRegistrationPage;
