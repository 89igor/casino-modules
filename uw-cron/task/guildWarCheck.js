/**
 * Created by Administrator on 2015/3/10.
 */
var guildWarBiz = require("uw-guild-war").guildWarBiz;
var c_prop = require("uw-data").c_prop;
var uwClient = require("uw-db").uwClient;
var logger = require("uw-log").getLogger("uw-logger",__filename);

var exports = module.exports;

exports.run = function(){
   /* guildWarBiz.dayCheckOpen(uwClient,function(err){
        if(err)  logger.error(err);
    });*/
};

exports.runOnce = function(){

};