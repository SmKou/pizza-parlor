const tests = {
    "Pizza": {
        "1": {
            statement: "Should create a pizza object with size small, sauce margherita and cheese mozzarella",
            code: 'const pizza = new Pizza();',
            expected: function () {
                return {
                    size: 'sm',
                    toppings: {
                        sauce: ['mgh'],
                        cheese: ['moz'],
                        veggies: [],
                        protein: []
                    }
                }
            },
            result: function () {
                const pizza = new Pizza();
                return pizza;
            }
        }
    }
}

function runTests() {
    Object.keys(tests).forEach(fn => {
        console.log('Describe: ' + fn);
        Object.keys(tests[fn]).forEach(testCase => {
            const test = tests[fn][testCase];
            const expected = formatReturn(test.expected());
            const outcome = formatReturn(test.result());
            if (expected === outcome)
                console.log(`Test: ${test.statement}\ncode: ${test.code}\nstatus: ${expected === outcome}`);
            else
                console.log(`Test: ${test.statement}\ncode: ${test.code}\nstatus: failed\n\nExpected: ${expected}\nResult: ${outcome}`);
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
    return dataStr;
}