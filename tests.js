/// <reference path="jquery-1.10.2.js" />
/// <reference path="jquery-ui-1.11.4.js" />
/// <reference path="jquery.validate.js" />
/// <reference path="respond.js" />  
/// <reference path="modernizr-2.6.2.js" /> 
/// <reference path="require.js" />
"use strict";
var $ = jQuery.noConflict();
//   var Xray = require("x-ray");
var footerFirst = "<p>&copy;<span class=\"timeSpan\">2016</span> - The Bolduc House Museum. All rights reserved.</p>"; 

// Their sample test
QUnit.test("a basic test example", function (assert) {
    var value = "hello";
    assert.equal(value, "hello", "We expect value to be hello");
});

//****0 tests are utility: is QUnit ok type tests ******************
QUnit.test("01: A Hello World Test", function (assert) {
    var greeting = "Hello World";
    assert.equal(greeting, "Hello World", "Expect greeting of Hello World");
});
//****************************************************** 
QUnit.test("01: Verify title in default.html", function (assert) {
    assert.expect(1);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "default.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.response;
    actual = actual.toString();
    var pos1 = actual.search("<title");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The Bolduc House Museum";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******1-xx tests look at HTML*************************

//3   
QUnit.test("1-1 Verify page title , div brackets match and footer is correct in default.html", function (assert) {
    assert.expect(3);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Default.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The Bolduc House Museum";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Default.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
    //third test: 
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Default.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    var n = raw.search(footerFirst);
    assert.ok(n > 0, "first line of footer is correct");
});
//******************************************************

QUnit.test("1-2 Verify page title and divs match in About.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "About.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>About The Bolduc House Museum";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "About.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************

QUnit.test("1-3 Verify page title and divs match in Contact.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Contact.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The Bolduc House Museum";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Contact.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Opening Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//****************************************************** 
QUnit.test("1-4 Verify page title and divs match in Explore.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Explore.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>Explore The Bolduc House Museum";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "SiteMap.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Opening Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//****************************************************** 
QUnit.test("1-5 Verify page title and divs match in LindenHouse.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LindenHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The Linden House";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LindenHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
// Due to breaking changes between QUnit 1.0 and 2.0, these will all need to be rewritten. They all worked in 1.0. 
QUnit.test("1-6 Verify page title and divs match in LeMeilleurHouse.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LeMeilleurHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The LeMeilleur House";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LeMeilleurHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-7 Verify page title and divs match in JBValleHouse.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JBValleHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The J.B.Valle House";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "JBValleHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-8 Verify page title and divs match in FrancoisValleHouse.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "FrancoisValleHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The Francois Valle House";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "FrancoisValleHouse.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-9 Verify page title and divs match in BankBuilding.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "BankBuilding.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>The Bank Building";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "BankBuilding.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-10 Verify page title and divs match in BolducFamilyHistory.html", function (assert) {
    assert.expect(2);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "BolducFamilyHistory.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>Bolduc Family History";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "BolducFamilyHistory.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-11 Verify page title and divs match in OpeningDay.html", function (assert) {
    assert.expect(2);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "OpeningDay.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>Opening Day in 1958";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "OpeningDay.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//****************************************************** 
QUnit.test("1-12 Verify page title and matching divs in Kids.html", function (assert) {
    assert.expect(2);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Kids.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>Kids at The Bolduc House Museum";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Email.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-12 Verify page title and matching divs in Email.html", function (assert) {
    assert.expect(2);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Email.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>Email The Bolduc House Museum";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second QUnit.test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Email.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-13 Verify page title and matching divs in HandsOnHistoryRoom.html", function (assert) {
    assert.expect(2);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "HandsOnHistoryRoom.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>Hands On History Room";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "HandsOnHistoryRoom.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
QUnit.test("1-14 Verify page title and matching divs in Arrangements.html", function (assert) {
    assert.expect(2);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Arrangements.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    actual = xhr.responseText;
    actual = actual.toString();
    var pos1 = actual.search("<title>");
    var pos2 = actual.search("</title>");
    actual = actual.slice(pos1, pos2);
    var expected = "<title>Arrangements";
    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
    //second test:  
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Arrangements.html", false);
    xhr.timeout = 2000;
    xhr.ontimeout = function () {
        xml = "Request timed out";
    }
    xhr.send(null);
    var raw = xhr.responseText;
    actual = raw.toString();
    actual = actual.match(/<div/g);
    actual = actual.length;
    expected = raw.match(/<\/div>/g);
    expected = expected.length;
    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
////QUnit.test("x-xx Verify page title and matching divs in Email.html",  function(assert){
////    assert.expect(2);
////    var xhr = new XMLHttpRequest();
////    xhr.open("GET", "Email.html", false);
////    xhr.timeout = 2000;
////    xhr.ontimeout = function () {
////        xml = "Request timed out";
////    }
////    xhr.send(null);
////    actual = xhr.responseText;
////    actual = actual.toString();
////    var pos1 = actual.search("<title>");
////    var pos2 = actual.search("</title>");
////    actual = actual.slice(pos1, pos2);
////    var expected = "<title>Email The Bolduc House Museum";
////    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
////    //second test:  
////    var actual;
////    var xhr = new XMLHttpRequest();
////    xhr.open("GET", "Email.html", false);
////    xhr.timeout = 2000;
////    xhr.ontimeout = function () {
////        xml = "Request timed out";
////    }
////    xhr.send(null);
////    var raw = xhr.responseText;
////    actual = raw.toString();
////    actual = actual.match(/<div/g);
////    actual = actual.length;
////    expected = raw.match(/<\/div>/g);
////    expected = expected.length;
////    assert.equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
////});
////test("1-14 Verify page title is present on live site", 1, function(assert){
////    assert.expect(1);

////    var Xray = new Xray();
////    xray('http://www.bolduchouse.org','title').write()

////    var actual;
////    var xhr = new XMLHttpRequest();
////    xhr.open("GET", "", false);
////    xhr.timeout = 2000;
////    xhr.ontimeout = function () {
////        xml = "Request timed out"; 
////    }
////    xhr.send(null);
////    actual = xhr.response;
////    actual = actual.toString();
////    var pos1 = actual.search("<title");
////    var pos2 = actual.search("</title>");
////    actual = actual.slice(pos1, pos2);
////    var expected = "<title>The Bolduc House Museum";
////    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);

////});
////******************************************************
//// //4 won't work due to security issue
////test("Verify title in default.html ( online)", 1, function(assert){
////    assert.expect(1);
////    var actual;
////    var xhr = new XMLHttpRequest();
////    xhr.open("GET", "http://www.bolduchouse.org/Default.html", false);
////    xhr.timeout = 2000; 
////    xhr.ontimeout = function () {
////        xml = "Request timed out";
////    }
////    xhr.send(null);
////    actual = xhr.responseXML;  
////    var expected = 'Title=&quot;Home Page&quot;';
////    assert.equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
////});