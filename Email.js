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

}

bhme.sendSimpleEmail = function () {
    var subject = 'Simple%20Email%20from%20the%20Website';
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

    var tbSimpleComments = $('#tbSimpleComments').val();  

          body +=  "  Comments: " + tbSimpleComments;
           
        body += "   You may see some odd characters in some of the above.  For example, a last name with a space in it:  von Zuts  will appear as von Zuts . This is a security feature.  Due to some new security features in email providers, it is now difficult to impossible to format emails in code.  The webmaster regrets this.  ";
 

    var uri = 'mailto:thomasgengel34@yahoo.com';
    uri += '?subject=' + (subject);
    uri += '&body=' + body; 
    $('#lblResponse').text('Thank you.  Your email has been sent!');
    $('#emailForm').attr("action", uri) 
}

bhme.ClearFields = function () {
    // TODO: write this puppy and hook it up to the Clear button
}

