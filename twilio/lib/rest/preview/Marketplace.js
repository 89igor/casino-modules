"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
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
const availableAddOn_1 = require("./marketplace/availableAddOn");
const installedAddOn_1 = require("./marketplace/installedAddOn");
class Marketplace extends Version_1.default {
    /**
     * Initialize the Marketplace version of Preview
     *
     * @param domain - The Twilio (Twilio.Preview) domain
     */
    constructor(domain) {
        super(domain, "marketplace");
    }
    /** Getter for availableAddOns resource */
    get availableAddOns() {
        this._availableAddOns =
            this._availableAddOns || (0, availableAddOn_1.AvailableAddOnListInstance)(this);
        return this._availableAddOns;
    }
    /** Getter for installedAddOns resource */
    get installedAddOns() {
        this._installedAddOns =
            this._installedAddOns || (0, installedAddOn_1.InstalledAddOnListInstance)(this);
        return this._installedAddOns;
    }
}
exports.default = Marketplace;