const components = {
    "Pizza": PizzaTests,
    "Receipt": ReceiptTests
}

function consoleInterface() {
    let options = "";
    let addLine = false;
    let addComma = false;
    for (const component of Object.keys(components)) {
        if (addLine)
            options += '\n';
        else
            addLine = true;
        options += component + ': ';
        for (const describe of Object.keys(components[component])) {
            if (addComma)
                options += ', ';
            else
                addComma = true;
            options += describe;
        }
        addComma = false;
    }
    console.log(`To run tests, call the function, runTestSuite() in the console.\nrunTestSuite() can take up to two arguments: component, function_name (or name for describes). The following list shows "component: ...function_names". Providing only a component will return all the tests on all the describes of that component, whereas providing a component and a function_name will return just the tests for that describe in the component.\n${options}\nDon't forget quotations.`);
}

function runTestSuite(component = undefined, fn = undefined) {
    if ((component === undefined
        || !components.hasOwnProperty(component)))
        Object.keys(components)
            .forEach(component => {
                const compTests = components[component];
                Object
                    .keys(compTests)
                    .forEach(fn => runFuncTest(
                        fn,
                        compTests[fn]
                    ))
            })
    else if (component !== undefined && fn === undefined)
        Object
            .keys(components[component])
            .forEach(fn => runFuncTest(
                fn,
                components[component][fn]
            ))
    else if (component !== undefined && fn !== undefined)
        runFuncTest(
            fn,
            components[component][fn]
        );
    else
        console.log('Invalid test request');
}

function runFuncTest(fn, testCases) {
    console.log('Describe: ' + fn);
    let counter = 1;
    Object.keys(testCases).forEach(testCase => {
        const test = testCases[testCase];
        const expected = formatReturn(test.expected);
        const outcome = formatReturn(test.result());
        if (expected === outcome)
            console.log(`Test ${counter}: ${test.statement}\ncode: ${test.code}\nstatus: passed`);
        else
            console.log(`Test ${counter}: ${test.statement}\ncode: ${test.code}\nstatus: failed\n\nExpected: ${expected}\nResult: ${outcome}`);
        counter++;
    })
}

function formatReturn(data) {
    let dataStr = '';
    switch (typeof data) {
        case 'boolean':
            dataStr = (data) ? 'true' : 'false';
            break;
        case 'string':
            dataStr = (data) ? data : '\"\"';
            break;
        case 'number':
            dataStr = (data) ? data.toString() : '0';
            break;
        case 'object':
            if (Array.isArray(data))
                dataStr = (data.length) ? data.toString() : '[]';
            else
                dataStr = (Object.keys(data).length) ? JSON.stringify(data) : '{}';
            break;
        default:
            dataStr = 'undefined';
    }
    return dataStr;
}