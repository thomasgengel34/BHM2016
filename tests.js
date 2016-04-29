//****0 tests are utility: is Qunit ok type tests ******************
test("00: A Hello World Test", 1, function () {
    equal(greeting, "Hello World", "Expect greeting of Hello World");
});
//******************************************************
test("01: Verify title in default.html", 1, function () {
    expect(1); 
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
    equal(actual,expected,'Expected value: ' +expected + '  Actual value:  ' + actual);
});
//******1-xx tests look at HTML*************************
//3   
test("1-1 Verify page title and div brackets match in default.html", 1, function () {
    expect(2);
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
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
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
    equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
test("1-2 Verify page title in About.html", 1, function () {
    expect(1);
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
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-3 Verify page title and divs match in Contact.html", 1, function () {
    expect(2);
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
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
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
    expected = raw.match(/<\/div>/g) ;
    expected = expected.length;
    equal(actual, expected, 'Opening Divs: ' +actual + '  Closing Divs:  ' + expected);
});
//******************************************************
test("1-4 Verify page title and divs match in Explore.html", 1, function () {
    expect(2);
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
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
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
    equal(actual, expected, 'Opening Divs: ' + actual + '  Closing Divs:  ' + expected);
});
//******************************************************
test("1-5 Verify page title in LindenHouse.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tThe Linden House - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-6 Verify page title in LindenHouse.html", 1, function () {
    expect(1);
    var actual;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "BolducHouse.html", false);
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
    var expected = "<title>\r\n\tThe Louis Bolduc House - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-6 Verify page title in LeMeilleurHouse.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tLeMeilleur House - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-7 Verify page title in JBValleHouse.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tJ.B.Valle House - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-8 Verify page title in FrancoisValleHouse.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tFrancois Valle House - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-9 Verify page title in BankBuilding.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tThe Bank Building - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-10 Verify page title in BolducFamilyHistory.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tBolduc Family History - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-11 Verify page title in OpeningDay.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tOpening Day - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
});
//******************************************************
test("1-11 Verify page title in Kids.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tKids - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
}); 
//******************************************************
test("1-12 Verify page title and matching divs in Email.html", 1, function () {
    expect(1);
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
    var expected = "<title>\r\n\tEmail - The Bolduc House Museum\r\n";
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
}); 
////second test: not working in javascript
//var actual;
// var raw = actual;
//actual = raw.toString();
//actual = actual.match(/<div/g);
//actual = actual.length;
//expected = raw.match(/<\/div>/g);
//expected = expected.length;
//equal(actual, expected, 'Open Divs: ' + actual + '  Closing Divs:  ' + expected);
//******************************************************
// //4 won't work due to security issue
//test("Verify title in default.html ( online)", 1, function () {
//    expect(1);
//    var actual;
//    var xhr = new XMLHttpRequest();
//    xhr.open("GET", "http://www.bolduchouse.org/Default.html", false);
//    xhr.timeout = 2000; 
//    xhr.ontimeout = function () {
//        xml = "Request timed out";
//    }
//    xhr.send(null);
//    actual = xhr.responseXML;  
//    var expected = 'Title=&quot;Home Page&quot;';
//    equal(actual, expected, 'Expected value: ' + expected + '  Actual value:  ' + actual);
//});