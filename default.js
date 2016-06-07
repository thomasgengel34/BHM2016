/// <reference path="jquery-1.10.2.js" />
/// <reference path="jquery-ui-1.11.4.js" />
/// <reference path="jquery.validate.js" />
/// <reference path="respond.js" />  
/// <reference path="modernizr-2.6.2.js" />
"use strict";

//leave for testing
var greeting = 'Hello World';

var bhmDefault = {};

window.onload = function () {
    bhmDefault.Year = new Date().getFullYear();
    $('.timeSpan').text(bhmDefault.Year);
}