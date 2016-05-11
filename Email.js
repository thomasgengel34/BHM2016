/// <reference path="../jquery-1.10.2.js" />
/// <reference path="../jquery-ui-1.11.4.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="../respond.js" /> 
/// <reference path="../modernizr-2.6.2.js" />
"use strict";
var bhme = {};

window.onload = function () {
    $("#ckSquirrel").change(function () {
        $(".zufeed").toggle("slow");
    });
    $("#ckCats").click(function () {
        $("#pCats").toggle("explode");
    });

    $('#btnSimpleSubmit').on("click", bhme.sendSimpleEmail);
    $('#btnSimpleClear').on("click", bhme.clearSimpleEmail);
       
}

bhme.sendSimpleEmail = function () {
    var subject = 'Simple%20Email%20from%20www.bolduchouse.org';
    var name = "No name supplied.";
    if ($('#tbSimpleName').val().length>1) {
       name = encodeURIComponent($('#tbSimpleName').val());
    } 
    var body = "Name:  " + name;   
    var phone ="not filled out";
    if ($('#tbSimplePhone').val().length>1){
        phone= $('#tbSimplePhone').val();
    }  
    body +=  "  Telephone: " + phone; 

    var tbSimpleComments = encodeURIComponent($('#tbSimpleComments').val());  

          body +=  "  Comments: " + tbSimpleComments; 

          var uri = 'mailto:Robbie.pratte@bolduchouse.org';
    uri += '?subject=' + (subject);
    uri += '&body=' + body; 
    $('#lblResponse').text('Thank you.  Your email has been sent!');
    $('#emailForm').attr("action", uri) 
}

bhme.clearSimpleEmail = function () {
    $('#tbSimpleName').val("");
    $('#tbSimplePhone').val("");
    $('#tbSimpleComments').val("");
}

