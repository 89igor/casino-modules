"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobListInstance = exports.JobInstance = exports.JobContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class JobContextImpl {
    constructor(_version, jobSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(jobSid)) {
            throw new Error("Parameter 'jobSid' is not valid.");
        }
        this._solution = { jobSid };
        this._uri = `/Exports/Jobs/${jobSid}`;
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
        operationPromise = operationPromise.then((payload) => new JobInstance(operationVersion, payload, instance._solution.jobSid));
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
exports.JobContextImpl = JobContextImpl;
class JobInstance {
    constructor(_version, payload, jobSid) {
        this._version = _version;
        this.resourceType = payload.resource_type;
        this.friendlyName = payload.friendly_name;
        this.details = payload.details;
        this.startDay = payload.start_day;
        this.endDay = payload.end_day;
        this.jobSid = payload.job_sid;
        this.webhookUrl = payload.webhook_url;
        this.webhookMethod = payload.webhook_method;
        this.email = payload.email;
        this.url = payload.url;
        this.jobQueuePosition = payload.job_queue_position;
        this.estimatedCompletionTime = payload.estimated_completion_time;
        this._solution = { jobSid: jobSid || this.jobSid };
    }
    get _proxy() {
        this._context =
            this._context || new JobContextImpl(this._version, this._solution.jobSid);
        return this._context;
    }
    /**
     * Remove a JobInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a JobInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed JobInstance
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
            resourceType: this.resourceType,
            friendlyName: this.friendlyName,
            details: this.details,
            startDay: this.startDay,
            endDay: this.endDay,
            jobSid: this.jobSid,
            webhookUrl: this.webhookUrl,
            webhookMethod: this.webhookMethod,
            email: this.email,
            url: this.url,
            jobQueuePosition: this.jobQueuePosition,
            estimatedCompletionTime: this.estimatedCompletionTime,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.JobInstance = JobInstance;
function JobListInstance(version) {
    const instance = ((jobSid) => instance.get(jobSid));
    instance.get = function get(jobSid) {
        return new JobContextImpl(version, jobSid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.JobListInstance = JobListInstance;