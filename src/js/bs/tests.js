const tests = {
    "Pizza()": {
        "check-object-exists": {
            statement: "Should create a pizza object with size small, sauce margherita and cheese mozzarella, and price 0",
            code: 'const pizza = new Pizza();',
            expected: {
                size: 'sm',
                price: 0,
                toppings: {
                    sauce: ['mgh'],
                    cheese: ['moz'],
                    veggies: [],
                    protein: []
                }
            },
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
            expected: 'mm',
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
            expected: 'sm',
            result: () => {
                const pizza = new Pizza();
                const size = "ns";
                pizza.setSize(size);
                return pizza.size;
            }
        }
    },
    "Pizza.addTopping()": {
        "change-valid-sauce-item": {
            statement: "Should change toppings to include sauce item in sauce topping",
            code: 'const pizza = new Pizza();\n\tconst type = "sauce";\n\tconst item = "pnk";\n\tpizza.addTopping(type, item);',
            expected: ['mgh', 'pnk'],
            result: () => {
                const pizza = new Pizza();
                const type = "sauce";
                const item = "pnk";
                pizza.addTopping(type, item);
                return pizza.toppings[type];
            }
        },
        "change-valid-cheese-item": {
            statement: "Should change toppings to include cheese item in cheese topping",
            code: 'const pizza = new Pizza();\n\tconst type = "cheese";\n\tconst item = "rct";\n\tpizza.addTopping(type, item);',
            expected: ['moz', 'rct'],
            result: () => {
                const pizza = new Pizza();
                const type = "cheese";
                const item = "rct";
                pizza.addTopping(type, item);
                return pizza.toppings[type];
            }
        },
        "change-valid-veggies-item": {
            statement: "Should change toppings to include beggie item in veggie topping",
            code: 'const pizza = new Pizza();\n\tconst type = "veggies";\n\tconst item = "bsl";\n\tpizza.addTopping(type, item);',
            expected: ['bsl'],
            result: () => {
                const pizza = new Pizza();
                const type = "veggies";
                const item = "bsl";
                pizza.addTopping(type, item);
                return pizza.toppings[type];
            }
        },
        "change-valid-protein-item": {
            statement: "Should change toppings to include protein item in protein topping",
            code: 'const pizza = new Pizza();\n\tconst type = "protein";\n\tconst item = "eg";\n\tpizza.addTopping(type, item);',
            expected: ['eg'],
            result: () => {
                const pizza = new Pizza();
                const type = "protein";
                const item = "eg";
                pizza.addTopping(type, item);
                return pizza.toppings[type];
            }
        },
        "no-change-invalid-type": {
            statement: "Should not change toppings if topping type not an option",
            code: 'const pizza = new Pizza();\n\tconst type = "fish";\n\tconst item = "hm";\n\tpizza.addTopping(type, item);',
            expected: false,
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
            expected: false,
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
            expected: false,
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
            expected: false,
            result: () => {
                const pizza = new Pizza();
                const type = "sauce";
                const item = "mgh";
                return pizza.addTopping(type, item);
            }
        }
    },
    "Pizza.setPrice()": {
        "change-default-price": {
            statement: "Should set price to cost of small pizza with one sauce and one cheese (the default)",
            code: 'const pizza = new Pizza();\n\tpizza.setPrice();',
            expected: 8,
            result: () => {
                const pizza = new Pizza();
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-size": {
            statement: "Should set price to cost with different size",
            code: 'const pizza = new Pizza();\n\tconst size = "mm";\n\tpizza.setSize(size);\n\tpizza.setPrice();',
            expected: 12,
            result: () => {
                const pizza = new Pizza();
                const size = "mm";
                pizza.setSize(size);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-sauce": {
            statement: "Should set price to cost with additional sauce",
            code: 'const pizza = new Pizza();\n\tconst type = "sauce";\n\tconst item = "pnk";\n\tpizza.addTopping(type, item);\n\tpizza.setPrice();',
            expected: 8.25,
            result: () => {
                const pizza = new Pizza();
                const type = "sauce";
                const item = "pnk";
                pizza.addTopping(type, item);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-cheese": {
            statement: "Should set price to cost with additional cheese",
            code: 'const pizza = new Pizza();\n\tconst type = "cheese";\n\tconst item = "rct";\n\tpizza.addTopping(type, item);\n\tpizza.setPrice();',
            expected: 8.75,
            result: () => {
                const pizza = new Pizza();
                const type = "cheese";
                const item = "rct";
                pizza.addTopping(type, item);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-veggies": {
            statement: "Should set price to cost with additional veggies",
            code: 'const pizza = new Pizza();\n\tconst type = "veggies";\n\tconst items = ["bsl", "jlp", "ro"];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);\n\tpizza.setPrice();',
            expected: 8.5,
            result: () => {
                const pizza = new Pizza();
                const type = "veggies";
                const items = ["bsl", "jlp", "ro"];
                for (const itm of items)
                    pizza.addTopping(type, itm);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-protein": {
            statement: "Should set price to cost with additional protein",
            code: 'const pizza = new Pizza();\n\tconst type = "protein";\n\tconst items = ["eg", "bs"];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);\n\tpizza.setPrice();',
            expected: 9,
            result: () => {
                const pizza = new Pizza();
                const type = "protein";
                const items = ["eg", "bs"];
                for (const itm of items)
                    pizza.addTopping(type, itm);
                pizza.setPrice();
                return pizza.price;
            }
        }
    }
}

function runTests(funcName = undefined) {
    if (funcName !== undefined)
        runFuncTest(funcName, tests[funcName]);
    else
        Object.keys(tests).forEach(fn => runFuncTest(fn, tests[fn]))
}

function runFuncTest(fn, testCases) {
    console.log('Describe: ' + fn);
    Object.keys(testCases).forEach(testCase => {
        const test = testCases[testCase];
        const expected = formatReturn(test.expected);
        const outcome = formatReturn(test.result());
        if (expected === outcome)
            console.log(`Test: ${test.statement}\ncode: ${test.code}\nstatus: passed`);
        else
            console.log(`Test: ${test.statement}\ncode: ${test.code}\nstatus: failed\n\nExpected: ${expected}\nResult: ${outcome}`);
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