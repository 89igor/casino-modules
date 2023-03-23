"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
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
const Version_1 = __importDefault(require("../../base/Version"));
const credential_1 = require("./v1/credential");
const service_1 = require("./v1/service");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Chat
     *
     * @param domain - The Twilio (Twilio.Chat) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for credentials resource */
    get credentials() {
        this._credentials = this._credentials || (0, credential_1.CredentialListInstance)(this);
        return this._credentials;
    }
    /** Getter for services resource */
    get services() {
        this._services = this._services || (0, service_1.ServiceListInstance)(this);
        return this._services;
    }
}
exports.default = V1;