'use strict';

/**
 * The onRequest hook is called with every top-level request in a site. This happens both for requests to cached and non-cached pages.
 * For performance reasons the hook function should be kept short.
 *
 * @module  request/OnRequest
 */

var Status = require('dw/system/Status');

/**
 * The onRequest hook function.
 */
exports.onRequest = function () {
    var ShieldSquare = require('int_shieldsquare_core/cartridge/controllers/ShieldSquare.js');
    var Site = require('dw/system/Site').getCurrent();
    if(Site.getCustomPreferenceValue('enableshieldsquare')){
        ShieldSquare.buildRequest()
    }
    return new Status(Status.OK);
};
