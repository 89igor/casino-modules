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
const Version_1 = __importDefault(require("../../base/Version"));
const brandRegistration_1 = require("./v1/brandRegistration");
const deactivations_1 = require("./v1/deactivations");
const domainCerts_1 = require("./v1/domainCerts");
const domainConfig_1 = require("./v1/domainConfig");
const externalCampaign_1 = require("./v1/externalCampaign");
const service_1 = require("./v1/service");
const tollfreeVerification_1 = require("./v1/tollfreeVerification");
const usecase_1 = require("./v1/usecase");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Messaging
     *
     * @param domain - The Twilio (Twilio.Messaging) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for brandRegistrations resource */
    get brandRegistrations() {
        this._brandRegistrations =
            this._brandRegistrations || (0, brandRegistration_1.BrandRegistrationListInstance)(this);
        return this._brandRegistrations;
    }
    /** Getter for deactivations resource */
    get deactivations() {
        this._deactivations =
            this._deactivations || (0, deactivations_1.DeactivationsListInstance)(this);
        return this._deactivations;
    }
    /** Getter for domainCerts resource */
    get domainCerts() {
        this._domainCerts = this._domainCerts || (0, domainCerts_1.DomainCertsListInstance)(this);
        return this._domainCerts;
    }
    /** Getter for domainConfig resource */
    get domainConfig() {
        this._domainConfig = this._domainConfig || (0, domainConfig_1.DomainConfigListInstance)(this);
        return this._domainConfig;
    }
    /** Getter for externalCampaign resource */
    get externalCampaign() {
        this._externalCampaign =
            this._externalCampaign || (0, externalCampaign_1.ExternalCampaignListInstance)(this);
        return this._externalCampaign;
    }
    /** Getter for services resource */
    get services() {
        this._services = this._services || (0, service_1.ServiceListInstance)(this);
        return this._services;
    }
    /** Getter for tollfreeVerifications resource */
    get tollfreeVerifications() {
        this._tollfreeVerifications =
            this._tollfreeVerifications || (0, tollfreeVerification_1.TollfreeVerificationListInstance)(this);
        return this._tollfreeVerifications;
    }
    /** Getter for usecases resource */
    get usecases() {
        this._usecases = this._usecases || (0, usecase_1.UsecaseListInstance)(this);
        return this._usecases;
    }
}
exports.default = V1;
