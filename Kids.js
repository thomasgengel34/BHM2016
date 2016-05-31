 /// <reference path="../jquery-1.10.2.js" />
/// <reference path="../jquery-ui-1.11.4.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="../respond.js" /> 
/// <reference path="../modernizr-2.6.2.js" />
/// <reference path="../default.js" />
"use strict";
var bhmKids= {};

window.onload = function () {
    $("#KidsQuizTab").click(function () {
      //  $("#KidsQuizTab :checkbox").removeAttr("checked");
    });
    //  $("li.right input[type='checkbox']").change(function () { 
    $("li.right").click(function () { 
          $( this ).toggleClass('rightAnswer');  
    }); 
}
  