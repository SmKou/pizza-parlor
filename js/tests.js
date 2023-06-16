const tests = {
    // Business logic
    "functionName": {
        "no.": {
            test: "Description of test",
            input: [],
            expected: true,
            parent: null,
            result: function () { return functionName(...this.input) }
        }
    }
}

const functions = {
    "functionName": "func"
}

function listFunctions() {
    console.log(`Command for running tests:\n\trunTests('function_name|abbr', true|false)\ntrue: run tests\nfalse: describe tests\n\nList of functions:`);
    for (const func of Object.entries(functions)) {
        console.log(`${func[0]} or ${func[1]}`);
    }
}

function runTests(funcName, testsList = true) {
    if (!funcName.length)
        if (testsList)
            Object.keys(tests).forEach(fn => describeFuncTest(fn))
        else
            Object.keys(tests).forEach(fn => runFuncTest(fn))
    else {

        let fn = '';
        for (const [func, short] of Object.entries(functions))
            if (func === funcName || short === funcName)
                fn = func;
        if (!fn) {
            console.log(funcName + 'does not exist');
            return;
        }

        if (testsList)
            describeFuncTest(fn)
        else
            runFuncTest(fn)
    }
}

function runFuncTest(funcName) {
    Object.keys(tests[funcName]).forEach(testCase => {
        const test = tests[funcName][testCase];
        test.result.parent = test;
    })


    Object.keys(tests[funcName]).forEach(testCase => {
        const test = tests[funcName][testCase];
        const outcome = test.result.exec();
        console.log(`${funcName} Test ${testCase}
        expected: ${formatReturn(test.expected)}
        result: ${formatReturn(outcome)}`);
    })
}

function describeFuncTest(funcName) {
    console.log(`Describe: ${funcName}`);
    Object.keys(tests[funcName]).forEach(testCase => {
        const testObj = tests[funcName][testCase];
        console.log('Test ' + testCase, testObj.test);
        const iptName = Object.keys(testObj.input);
        const ipt = iptName.reduce((acc, val, i) => {
            if (i !== 0)
                acc += '\n\t';
            acc += `const ${val} = ${formatReturn(testObj.input[val])}`

        }, "");
        console.log('Code: ', `${ipt}\n\t${funcName}(${iptName.join(', ')})`);
        console.log('Expected output: ', testObj.expected);
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
        case 'object':
            if (data === null)
                dataStr = 'null';
            else if (Array.isArray(data))
                dataStr = (data.length) ? data.toString() : 'undefined';
            else
                dataStr = (Object.keys(data).length) ? JSON.stringify(data) : 'undefined'
            break;
        case 'number':
            dataStr = (data) ? data.toString() : '0';
            break;
        default:
            dataStr = 'undefined';
    }
    return dataStr;
}