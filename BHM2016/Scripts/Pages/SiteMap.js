/// <reference path="../jquery-1.10.2.js" />
$('.future').each(function () { return this.innerText = this.innerText + "**" });

$('.soon').each(function () { return this.innerText = this.innerText + "*" });

$('.up').on('click', function () { 
     var pg = this.attributes.getNamedItem("data-link").value;
    var link;
    if (pg=="shop") {
        link="http://shop.bolduchouse.org";
    }
    else {
        var link = "http://www.bolduchouse.org/" + pg + ".aspx";
    }
     window.location = link;
 });
 