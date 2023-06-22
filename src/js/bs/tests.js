const tests = {
    "Pizza": {
        "1": {
            statement: "Should create a pizza object",
            code: '',
            expected: '',
            result: function () {}
        }
    }
}

function runTests() {
    Object.keys(tests).forEach(fn => {
        console.log('Describe: ' + fn);
        Object.keys(tests[fn]).forEach(testCase => {
            const test = tests[fn][testCase];
            const expected = formatReturn(test.expected);
            const outcome = formatReturn(test.result());
            console.log(`${funcName} Test: ${test.statement}
                code: ${test.code}
                status: ${expected === outcome}`)
        })
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
}