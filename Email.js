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
    $('#btnTellMeSubmit').on("click", bhme.sendTellMeEmail); 
       
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
 

bhme.sendTellMeEmail = function () {
    var subject = 'Inquiry%20Email%20from%20www.bolduchouse.org';
    var name = "No name supplied.";
    if ($('#tbTellMeName').val().length > 1) {
        name = encodeURIComponent($('#tbTellMeName').val());
    }
    var body = "Name:  " + name;
    var phone = "not filled out";
    if ($('#tbTellMePhone').val().length > 1) {
        phone = $('#tbTellMePhone').val();
    }
    body += "  Telephone: " + phone;

    body += "  I am interested but not ready to sign up.  Please tell me about:  ";

    var ckComService = "";
    if ($('#ckComService').is(':checked')) {
        ckComService = "Community service.";
    }
    body += "  " + ckComService;

    var ckScoutService = "";
    if ($('#ckScoutService').is(':checked')) {
        ckScoutService = "Scout service.";
    } 
    body += "  " + ckScoutService;

    var ckEagleScoutService= "";
    if ($('#ckEagleScoutService').is(':checked')) {
        ckEagleScoutService = "Eagle Scout service.";
    } 
    body += "  " + ckEagleScoutService;

    var ckNewsletter= "";
    if ($('#ckNewsletter').is(':checked')) {
        ckNewsletter = "The free children's monthly newsletter.";
    } 
    body += "  " + ckNewsletter;

    var ckArtContests= "";
    if ($('#ckArtContests').is(':checked')) {
        ckArtContests = "Art Contests.";
    } 
    body += "  " + ckArtContests;

    var ckClassInfo= "";
    if ($('#ckClassInfo').is(':checked')) {
        ckClassInfo = "Finding out more about our classes and programs.";
    } 
    body += "  " + ckClassInfo;

    var uri = 'mailto:info@bolduchouse.org';

    uri += '?subject=' + (subject);
    uri += '&body=' + body;
   
    $('#emailTellMeForm').attr("action", uri)
}
  