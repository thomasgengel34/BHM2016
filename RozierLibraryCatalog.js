/// <reference path="jquery-2.2.3.min.js" />
/// <reference path="jquery-2.2.3.intellisense.js" />
$ = jQuery.noConflict();
var rlc = {};

rlc.catalog = [];

$(document).ready(function () { 
    $.ajax({
        type: "GET",
        url: "RozierLibrary.csv",
        dataType: "text",
        success: function (data) { 
            rlc.catalog = csvToArray(data);
            var tableRows = display(rlc.catalog); 
            $('#IndexTableBody').append(tableRows);
        },
        error: function (err) {
          //  alert("Sorry there was an error: " + err);
        }

    });
});
$('#btnRestore').click(Restore);
$('#btnAuthorAsc').click(sortAuthorAsc);
$('#btnAuthorDesc').click(sortAuthorDesc);
$('#btnTitleAsc').click(sortTitleAsc);
$('#btnTitleDesc').click(sortTitleDesc);
$('#btnYearAsc').click(sortByYearAsc);
$('#btnYearDesc').click(sortByYearDesc);

function Restore() { 
    $.ajax({
        type: "GET",
        url: "RozierLibrary.csv",
        dataType: "text",
        success: function (data) {
            rlc.catalog = csvToArray(data); 
            redisplay();
        },
        error: function (err) {
         //   alert("Sorry there was an error: " + err);
        }
    }); 
};

function sortAuthorAsc() {
    rlc.catalog.sort(function (a, b) {
        var x = a.Author.toLowerCase(), y = b.Author.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    redisplay();
};

function sortAuthorDesc() {
    rlc.catalog.sort(function (a, b) {
        var x = a.Author.toLowerCase(), y = b.Author.toLowerCase();
        return x < y ? 1 : x > y ? -1 : 0;
    });
    redisplay();
};

function sortTitleAsc() {
    rlc.catalog.sort(function (a, b) {
        var x = a.Title.toLowerCase(), y = b.Title.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    }); 
    redisplay();
};

function sortTitleDesc() {
    rlc.catalog.sort(function (a, b) {
        var x = a.Title.toLowerCase(), y = b.Title.toLowerCase();
        return x < y ? 1 : x > y ? -1 : 0;
    });
    redisplay();
};


function sortByYearAsc() {
    rlc.catalog.sort(function (a, b) {
        if (a.Copyright_Year == "NO DATE") {
            return -1;
        }
        if (b.Copyright_Year == "NO DATE") {
            return 1;
        }
        return a.Copyright_Year - b.Copyright_Year;
        return 0;
    });
    redisplay();
};

function sortByYearDesc() {
    rlc.catalog.sort(function (a, b) {
        if (a.Copyright_Year == "NO DATE") {
            return 1;
        }
        if (b.Copyright_Year == "NO DATE") {
            return -1;
        }
        return b.Copyright_Year - a.Copyright_Year;
        return 0;
    });
    redisplay();
}; 

function csvToArray(csvString) {

    // The array we're going to build
    var csvArray = [];
    // Break it into rows to start
    var csvRows = csvString.split(/\n/);

    // Take off the first line to get the headers, then split that into an array
    var csvHeaders = csvRows.shift().split(',');

    // Loop through remaining rows
    for (var rowIndex = 0; rowIndex < csvRows.length; ++rowIndex) {
        var rowArray = csvRows[rowIndex].split(',');

        // Create a new row object to store our data.
        var rowObject = csvArray[rowIndex] = {};

        // Then iterate through the remaining properties and use the headers as keys
        for (var propIndex = 0; propIndex < rowArray.length; ++propIndex) {
            // Grab the value from the row array we're looping through...
            var propValue = rowArray[propIndex];
            // ...also grab the relevant header (the RegExp in both of these removes quotes)
            var propLabel = csvHeaders[propIndex];

            rowObject[propLabel] = propValue;
        }
    }
    
    return csvArray;
}

function display(orderArray) {
    var tableRows = "";
    for (i = 0; i < orderArray.length; i++) {
        tableRows += "<tr>"; // Open Row
        var author = orderArray[i].Author; 
        var title = orderArray[i].Title; 
        var year = orderArray[i].Copyright_Year; 
        tableRows += "<td>" + author  + "</td>";
        tableRows += "<td>" + title  + "</td>";
        tableRows += "<td>" + year  + "</td>"; 
        tableRows += "</tr>"; // Close Row
    }
    // remove the qq substitution for comma in the csv file
    tableRows = tableRows.replace(/q{2}/g, ',');
    return tableRows; 
}

function redisplay() {
    var tableRows = display(rlc.catalog); 
    $('#IndexTableBody').empty();
    $('#IndexTableBody').append(tableRows); 
    $('#IndexTableBody').prepend(' <div id=\"notify\" class=\"alert alert-success\">'   +
  '<\/div>');
    setTimeout(RemoveThis, 750); 
    function RemoveThis(){
      $('#notify').remove(); 
    }
}
 