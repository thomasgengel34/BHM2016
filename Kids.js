/// <reference path="../jquery-1.10.2.js" />
/// <reference path="../jquery-ui-1.11.4.js" />

/// <reference path="../modernizr-2.6.2.js" />

window.onload = function () {  
    $("#ckSquirrel").change(function () {
        $(".zufeed").toggle("slow");
    });
    $("#ckCats").click(function() {
  $( "#pCats" ).toggle( "explode" );
});
}