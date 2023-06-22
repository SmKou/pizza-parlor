const tests = {
    "Pizza()": {
        "check-object-exists": {
            statement: "Should create a pizza object with size small, sauce margherita and cheese mozzarella",
            code: 'const pizza = new Pizza();',
            expected: () => ({
                size: 'sm',
                toppings: {
                    sauce: ['mgh'],
                    cheese: ['moz'],
                    veggies: [],
                    protein: []
                }
            }),
            result: () => {
                const pizza = new Pizza();
                return pizza;
            }
        }
    },
    "Pizza.setSize()": {
        "change-valid-size": {
            statement: "Should change size property of pizza object",
            code: 'const pizza = new Pizza();\n\tconst size = "mm";\n\tpizza.setSize(size);',
            expected: () => 'mm',
            result: () => {
                const pizza = new Pizza();
                const size = 'mm';
                pizza.setSize(size);
                return pizza.size;
            }
        },
        "no-change-invalid-size": {
            statement: "Should not change size property of size object if input not a valid size",
            code: 'const pizza = new Pizza();\n\tconst size = "ns";\n\tpizza.setSize(size);',
            expected: () => 'sm',
            result: () => {
                const pizza = new Pizza();
                const size = "ns";
                pizza.setSize(size);
                return pizza.size;
            }
        }
    },
    "Pizza.addTopping()": {
        "change-valid-type-item": {
            statement: "Should change toppings to include item in topping type",
            code: 'const pizza = new Pizza();\n\tconst type = "sauce";\n\tconst item = "pnk";\n\tpizza.addTopping(type, item);',
            expected: () => ['mgh', 'pnk'],
            result: () => {
                const pizza = new Pizza();
                const type = "sauce";
                const item = "pnk";
                pizza.addTopping(type, item);
                return pizza.toppings[type];
            }
        },
        "no-change-invalid-type": {
            statement: "Should not change toppings if topping type not an option",
            code: 'const pizza = new Pizza();\n\tconst type = "fish";\n\tconst item = "hm";\n\tpizza.addTopping(type, item);',
            expected: () => false,
            result: () => {
                const pizza = new Pizza();
                const type = "fish";
                const item = "hm";
                return pizza.addTopping(type, item);
            }
        },
        "no-change-invalid-item": {
            statement: "Should not change toppings if item not an option",
            code: 'const pizza = new Pizza();\n\tconst type = "sauce";\n\tconst item = "y";\n\tpizza.addTopping(type, item);',
            expected: () => false,
            result: () => {
                const pizza = new Pizza();
                const type = "sauce";
                const item = "y";
                return pizza.addTopping(type, item);
            }
        },
        "no-change-wrong-type": {
            statement: "Should not change toppings if item not an option of topping type",
            code: 'const pizza = new Pizza();\n\tconst type = "sauce";\n\tconst item = "y";\n\tpizza.addTopping(type, item);',
            expected: () => false,
            result: () => {
                const pizza = new Pizza();
                const type = "sauce";
                const item = "y";
                return pizza.addTopping(type, item);
            }
        },
        "no-change-existing-item": {
            statement: "Should not change toppings if item already listed",
            code: 'const pizza = new Pizza();\n\tconst type = "sauce";\n\tconst item = "mgh";\n\tpizza.addTopping(type, item);',
            expected: () => false,
            result: () => {
                const pizza = new Pizza();
                const type = "sauce";
                const item = "mgh";
                return pizza.addTopping(type, item);
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
                console.log(`Test: ${test.statement}\ncode: ${test.code}\nstatus: passed`);
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