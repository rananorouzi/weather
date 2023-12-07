function it(desc, fn) {
    try {
        fn();
        console.log(desc);
    } catch (error) {
        console.log(desc);
        console.error(error);
    }
}
function assertEqual(x, y) {
    if (x === y) {
        return;
    } else {
        throw new Error();
    }
}

function assertTrue(x) {
    assertEqual(x, true);
}

function assertFalse(x) {
    assertEqual(x, false);
}


it('Test callback on httpGetAsync', function() {
    var myObject = new Object();

    var result = httpGetAsync('https://api.open-meteo.com/v1/forecast' , myObject, '');

    assertFalse(result);
});

it('Test params on httpGetAsync', function() {
    var result = httpGetAsync('https://api.open-meteo.com/v1/forecast', undefined, function(){});

    assertFalse(result);
});

it('Test URL on httpGetAsync', function() {
    var result = httpGetAsync(123, '', function(){});

    assertFalse(result);
});

it('Test httpGetAsync with all valid parameters', function() {
    var myObject = new Object();

    var result = httpGetAsync('https://api.open-meteo.com/v1/forecast', myObject, function(){});

    assertTrue(result);
});

it('Test params on formatParams', function() {

    var result = formatParams('param=val');

    assertEqual('',result);
});
it('Test formatParams with all valid parameters', function() {
    var myObject = {key:'val'};

    var result = formatParams(myObject);
    assertEqual('?key=val',result);
});


it('Test params on formatDateToMonthDay', function() {

    var result = formatDateToMonthDay('');

    assertEqual('',result);
});
it('Test formatDateToMonthDay with all valid parameters', function() {

    var result = formatDateToMonthDay(13980506134521);

    assertEqual('9 January - 11:00',result);
});

