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

    $('#btnSubmit').on("click", bhme.sendEmail);

}

bhme.sendEmail = function () {
    var subject = 'Email%20from%20the%20Website'; 
    var firstName = encodeURIComponent($('#tbFirstName').val()); 
    var body = "Name:  " + firstName + " " + encodeURIComponent($('#tbLastName').val());
    var spacer = "  ";
    body += spacer + "  Email: " + ($('#tbEmail').val());
    body += spacer + "Parent Name:  " + encodeURIComponent($('#tbParentFirstName').val()) + " " + encodeURIComponent($('#tbParentLastName').val());
    body += spacer + "Parent Email: " + encodeURIComponent($('#tbParentEmail').val());

    var phone ="not filled out";
    if ($('#tbPhone').length>1){
        phone=encodeURIComponent($('#tbPhone').val());
    }  
    body += spacer + "Telephone: " + phone;
     
          var isMobile = "Mobile Phone checkbox is not checked.";
          if ($('#ckIsMobile').is(':checked')) {
              isMobile = "Mobile Phone checkbox is checked.";
          } 
          body +=spacer + isMobile;

          var isAdult= "Filled out by adult checkbox is not checked."; 
          if ($('#ckIsAdult').is(':checked')) {
              isAdult = "Filled out by adult checkbox is checked.";
          } 
          body += "  " + isAdult;

          var ckComService="";
          if ($('#ckComService').is(':checked')) {
              ckComService = "Community service checkbox is checked.";
          } 
          body += "  " + ckComService;

          var ckScoutService;
          if ($('#ckScoutService').is(':checked')) {
              ckScoutService = "Scout service checkbox is checked.";
          }
          else ckScoutService = "";
          body += "  " + ckScoutService;

          var ckEagleScoutService;
          if ($('#ckEagleScoutService').is(':checked')) {
              ckEagleScoutService = "Eagle Scout service checkbox is checked.";
          }
          else ckEagleScoutService = "";
          body += "  " + ckEagleScoutService;

          var ckNewsletter;
          if ($('#ckNewsletter').is(':checked')) {
              ckNewsletter = "Newsletter checkbox is checked.";
          }
          else ckNewsletter = "";
          body += "  " + ckNewsletter;

          var ckArtContests;
          if ($('#ckArtContests').is(':checked')) {
              ckArtContests = "Art Contests checkbox is checked.";
          }
          else ckArtContests = "";
          body += "  " + ckArtContests;

          var ckClassInfo;
          if ($('#ckClassInfo').is(':checked')) {
              ckClassInfo = "Class Info checkbox is checked.";
          }
          else ckClassInfo = "";
          body += "  " + ckClassInfo;

          var ckRegistering;
          if ($('#ckRegistering').is(':checked')) {
              ckRegistering = "Registering checkbox is checked.";
          }
          else ckRegistering = "";
          body += "  " + ckRegistering;

          var tbComments = $('#tbComments').val();
          if (tbComments.length < 1) {
              tbComments = "No Comments";
          }

          body += spacer+spacer+ "  Comments: " + tbComments;
          
          body += "yada yada yada.";
         //body += "   You may see some odd characters in some of the above.  For example, a last name with a space in it:  von Zuts  will appear as von Zuts . This is a security feature.  Due to some new security features in email providers, it is now difficult to impossible to format emails in code.  The webmaster regrets this.  ";

    //      //todo: put in a second check - if there is just personal info in the first column and no checkboxes or comments, don't send an email. Send back a nice message telling them we can't find anything checked or commented. 
 

    var uri = 'mailto:thomasgengel34@yahoo.com';
    uri += '?subject=' + (subject);
    uri += '&body=' + body;
    //      window.location.assign(uri);
    $('#lblResponse').text('Thank you.  Your email has been sent!');
    $('#emailForm').attr("action", uri)
    //   }
}

bhme.ClearFields = function () {
    // TODO: write this puppy and hook it up to the Clear button
}

