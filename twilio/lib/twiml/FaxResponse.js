"use strict";
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const TwiML_1 = __importDefault(require("./TwiML"));
class FaxResponse extends TwiML_1.default {
    /**
     * <Response> TwiML for Faxes
     */
    constructor() {
        super();
        this._propertyName = "response";
    }
    /**
     * Comments in <Response>
     *
     * @param comment - XML Comment
     */
    comment(comment) {
        return this.response.comment(comment);
    }
    /**
     * Comments after <Response>
     *
     * @param comment - XML Comment
     */
    commentAfter(comment) {
        return this.response.commentAfter(comment);
    }
    /**
     * Comments before <Response>
     *
     * @param comment - XML Comment
     */
    commentBefore(comment) {
        return this.response.commentBefore(comment);
    }
    /**
     * <Receive> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */
    receive(attributes) {
        return new FaxResponse.Receive(this.response.ele("Receive", attributes));
    }
}
(function (FaxResponse) {
    class Receive extends TwiML_1.default {
        /**
         * <Receive> TwiML Verb
         */
        constructor(receive) {
            super();
            this.receive = receive;
            this._propertyName = "receive";
        }
    }
    FaxResponse.Receive = Receive;
})(FaxResponse || (FaxResponse = {}));
module.exports = FaxResponse;
