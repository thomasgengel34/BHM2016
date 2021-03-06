﻿/// <reference path="../jquery-1.10.2.js" />
/// <reference path="../jquery-ui-1.11.4.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="../respond.js" /> 
/// <reference path="../modernizr-2.6.2.js" />
/// <reference path="../default.js" />

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
    $('#btnRegisterSubmit').on("click", bhme.sendRegisterEmail);
    $('#btnVolunteerSubmit').on("click", bhme.sendVolunteerEmail);
    $('#btnGiverSubmit').on("click", bhme.sendDonationEmail);

    $('#btnZutsBdClubSubmit').on("click", bhme.sendZBDEmail);
    $('#ckTour').click(function () { $('#toggleTour').toggle(); });
}

bhme.sendSimpleEmail = function () {
    var subject = 'Simple%20Email%20from%20www.bolduchouse.org';
    var name = "No name supplied.";
    if ($('#tbSimpleName').val().length > 1) {
        name = encodeURIComponent($('#tbSimpleName').val());
    }
    var body = "Name:  " + name;
    var phone = "not filled out";
    if ($('#tbSimplePhone').val().length > 1) {
        phone = $('#tbSimplePhone').val();
    }
    body += "  Telephone: " + phone;

    var tbSimpleComments = encodeURIComponent($('#tbSimpleComments').val());

    body += "  Comments: " + tbSimpleComments;

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

    var ckEagleScoutService = "";
    if ($('#ckEagleScoutService').is(':checked')) {
        ckEagleScoutService = "Eagle Scout service.";
    }
    body += "  " + ckEagleScoutService;

    var ckNewsletter = "";
    if ($('#ckNewsletter').is(':checked')) {
        ckNewsletter = "The free children's monthly newsletter.";
    }
    body += "  " + ckNewsletter;

    var ckArtContests = "";
    if ($('#ckArtContests').is(':checked')) {
        ckArtContests = "Art Contests.";
    }
    body += "  " + ckArtContests;

    var ckClassInfo = "";
    if ($('#ckClassInfo').is(':checked')) {
        ckClassInfo = "Finding out more about our classes and programs.";
    }
    body += "  " + ckClassInfo;

    var uri = 'mailto:info@bolduchouse.org';

    uri += '?subject=' + (subject);
    uri += '&body=' + body;

    $('#emailTellMeForm').attr("action", uri)
}


bhme.sendRegisterEmail = function () {
    var subject = 'Registration%20Email%20from%20www.bolduchouse.org';
    var name = "No name supplied.";
    if ($('#tbRegisterName').val().length > 1) {
        name = encodeURIComponent($('#tbRegisterName').val());
    }
    var body = "Name:  " + name;
    var phone = "not filled out";
    if ($('#tbRegisterPhone').val().length > 1) {
        phone = $('#tbRegisterPhone').val();
    }
    body += "  Telephone: " + phone;

    if ($('#ckTour').is(':checked')) {
        body += "  Tour"
    }
    else {
        var eventName = "";
        if ($('#tbEventName').val().length > 1) {
            eventName = encodeURIComponent($('#tbEventName').val());
            body += "  Event : " + eventName;
        }
        if ($('#tbEventCoordinator').val().length > 1) {

            body += "  Event Coordinator : " + encodeURIComponent($('#tbEventCoordinator').val());
        }
    }

    var date = "   Date and time:  " + encodeURIComponent($('#tbDateTime').val());

    body += date;

    var where = "  Where:  " + $('[name="rbWhere"]:checked').val();
    body += where;

    var uri = 'mailto:participate@bolduchouse.org';
    uri += '?subject=' + (subject);
    uri += '&body=' + body;

    $('#registrationForm').attr("action", uri)
}

bhme.sendVolunteerEmail = function () {

    var subject = 'Volunteer%20Email%20from%20www.bolduchouse.org';
    var name = "No name supplied.";
    if ($('#tbVolunteerName').val().length > 1) {
        name = encodeURIComponent($('#tbVolunteerName').val());
    }
    var body = "Name:  " + name;
    var phone = "not filled out";
    if ($('#tbVolunteerPhone').val().length > 1) {
        phone = $('#tbVolunteerPhone').val();
    }
    body += "  Telephone: " + phone;


    var uri = 'mailto:participate@bolduchouse.org';
    uri += '?subject=' + (subject);
    uri += '&body=' + body;

    $('#volunteerForm').attr("action", uri);
}

bhme.sendDonationEmail = function () {
    var subject = 'Donation%20Email%20from%20www.bolduchouse.org';
    var name = "No name supplied.";
    if ($('#tbGiverName').val().length > 1) {
        name = encodeURIComponent($('#tbVolunteerName').val());
    }
    var body = "Name:  " + name;
    var phone = "not filled out";
    if ($('#tbGiverPhone').val().length > 1) {
        phone = $('#tbGiverPhone').val();
    }
    body += "  Telephone: " + phone;

    var tbGiverComments = encodeURIComponent($('#tbGiverComments').val());

    body += "  Comments: " + tbGiverComments;

    var uri = 'mailto:Robbie.pratte@bolduchouse.org';
    uri += '?subject=' + (subject);
    uri += '&body=' + body;

    $('#emailDonateForm').attr("action", uri);
}

bhme.sendZBDEmail = function () {
    var subject = 'IMPORTANT%20Zuts%20Birthday%20Club%20Email%20from%20www.bolduchouse.org!!!';
    var parentName = "No name supplied.";
    if ($('#tbParentName').val().length > 0) {
        parentName = encodeURIComponent($('#tbParentName').val());
    }
    var body = "Parent's Name:  " + parentName;
    var childName = "No name supplied.";
    if ($('#tbChildName').val().length > 0) {
        childName = encodeURIComponent($('#tbChildName').val());
    }
    body += "  Child's Name:  " + childName;
    var phone = "not filled out";
    if ($('#tbPhone').val().length > 1) {
        phone = $('#tbPhone').val();
    }
    body += "  Telephone: " + phone;
    var bday = encodeURIComponent($('#tbBirthday').val()); 
     var boyOrGirl = $("input[type='radio'][name='boyOrGirl']:checked").val()==null ? "": $("input[type='radio'][name='boyOrGirl']:checked").val();
    if (boyOrGirl.length > 0) {
        body += "  Boy Or Girl:  " + boyOrGirl ;
    } 
    if ($('#tbFavAnimal').val().length > 1) {
        body += "  fav. animal= " + encodeURIComponent($('#tbFavAnimal').val());
    }
    if ($('#tbFavColor').val().length > 1) {
        body += "  fav. color= " + encodeURIComponent($('#tbFavColor').val());
    }
    if ($('#tbFavSong').val().length > 1) {
        body += "  fav. song= " +  "'" + encodeURIComponent($('#tbFavSong').val()) + "'";
    }
    var mail = " Mailing Address:  "+encodeURIComponent($('#tbStreet').val()) + " " + encodeURIComponent($('#tbCity').val()) + " " + encodeURIComponent($('#tbState').val()) + " " + encodeURIComponent($('#tbCountry').val()) + " " + encodeURIComponent($('#tbPostalCode').val())

    body += mail;

       var uri = 'mailto:participate@bolduchouse.org'; 
    uri += '?subject=' + (subject);
    uri += '&body=' + body;
    $('#zbdpartyForm').attr("action", uri)
}