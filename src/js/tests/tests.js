const components = {
    "Pizza": PizzaTests
}

function runTestSuite(component = undefined) {
    if (component === undefined || !components.hasOwnProperty(component))
        Object.keys(components).forEach(compKey => {
            const compTests = components[compKey];
            runTests(compTests);
        })
    else
        runTests(components[component])
}

function runTests(testSuite, funcName = undefined) {
    if (funcName !== undefined)
        runFuncTest(funcName, testSuite[funcName]);
    else
        Object.keys(testSuite).forEach(fn => runFuncTest(fn, testSuite[fn]))
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