const tests = {
    // Constructor
    "Pizza.calculatorCost": {
        "1": {
            test: "If a pizza object is declared, its price should be 0.",
            code: `const pizza = new Pizza();\n\tpizza.calculateCost();`,
            expected: 0,
            parent: null,
            result: function () {
                const pizza = new Pizza();
                pizza.calculateCost();
                return pizza.price;
            }
        }
    },
    "Pizza.setSize": {
        "1": {
            test: "If the size on a pizza object is set, its price should be the base price for the size plus sauce based on the size.",
            code: `const pizza = new Pizza();\n\tconst size = 'mm'\n\tpizza.setSize(size);`,
            expected: 12.5,
            result: function () {
                const pizza = new Pizza();
                const size = 'mm';
                pizza.setSize(size);
                return pizza.price;
            }
        }
    },
    "Pizza.addTopping": {
        "1": {
            test: "If a produce topping is added to a pizza object, the price should be the size's base price.",
            code: `const pizza = new Pizza();\n\tconst type = 'produce';\n\tconst items = ['bp];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);`,
            expected: 8,
            result: function () {
                const pizza = new Pizza();
                const type = 'produce';
                const items = ['bp'];
                for (const itm of items)
                    pizza.addTopping(type, itm);
                return pizza.price;
            }
        },
        "2": {
            test: "If four produce toppings are added to a pizza object, the price should be the size's base price plus one produce topping.",
            code: `const pizza = new Pizza();\n\tconst type = 'produce';\n\tconst items = ['bp', 'cp', 'bo', 'ro'];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);`,
            expected: 8.5,
            result: function () {
                const pizza = new Pizza();
                const type = 'produce';
                const produce = ['bp', 'cp', 'bo', 'ro'];
                for (const itm of produce)
                    pizza.addTopping(type, itm);
                return pizza.price;
            }
        },
        "3": {
            test: "If a protein topping is added to a pizza object, the price should be the size's base price.",
            code: `const pizza = new Pizza();\n\tconst type = 'protein';\n\tconst items = ['pep'];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);`,
            expected: 8,
            result: function () {
                const pizza = new Pizza();
                const type = 'protein';
                const items = ['pep'];
                for (const itm of items)
                    pizza.addTopping(type, itm);
                return pizza.price;
            }
        },
        "4": {
            test: "If two protein toppings are added to a pizza object, the price should be the size's base price plus one protein topping.",
            code: `const pizza = new Pizza();\n\tconst type = 'protein';\n\tconst items = ['pep', 'hm'];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);`,
            expected: 9,
            result: function () {
                const pizza = new Pizza();
                const type = 'protein';
                const items = ['pep', 'hm'];
                for (const itm of items)
                    pizza.addTopping(type, itm);
                return pizza.price;
            }
        },
        "5": {
            test: "If a cheese topping is added to a pizza object, the price should be the size's base price.",
            code: `const pizza = new Pizza();\n\tconst type = 'cheese';\n\tconst items = ['moz'];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);`,
            expected: 8,
            result: function () {
                const pizza = new Pizza();
                const type = 'cheese';
                const items = ['moz'];
                for (const itm of items)
                    pizza.addTopping(type, itm);
                return pizza.price;
            }
        },
        "6": {
            test: "If two cheese toppings are added to a pizza object, the price should be the size's base price plus one cheese topping.",
            code: `const pizza = new Pizza();\n\tconst type = 'cheese';\n\tconst items = ['moz', 'prm'];\n\tfor (const itm of items)\n\t\tpizza.addTopping(type, itm);`,
            expected: 8.75,
            result: function () {
                const pizza = new Pizza();
                const type = 'cheese';
                const items = ['moz', 'prm'];
                for (const itm of items)
                    pizza.addTopping(type, itm);
                return pizza.price;
            }
        },
        "7": {
            test: "If four produce toppings, two protein toppings, and two cheese toppings are added to a pizza object, the price should be the size's base price plus one produce topping, protein topping, and cheese topping.",
            code: `const pizza = new Pizza();\n\tconst toppings = {\n\t\tproduce: ['bp', 'cp', 'bo', 'ro'],\n\t\tprotein: ['pep', 'hm'],\n\t\tcheese: ['moz', 'prm']\n\t};\n\tfor (const itm of items)\n\t\tfor (const type of Object.keys(toppings))\n\t\tfor (const itm of toppings[type])\n\t\t\tpizza.addTopping(type, itm);`,
            expected: 10.25,
            result: function () {
                const pizza = new Pizza();
                const toppings = {
                    produce: ['bp', 'cp', 'bo', 'ro'],
                    protein: ['pep', 'hm'],
                    cheese: ['moz', 'prm']
                };
                for (const type of Object.keys(toppings))
                    for (const itm of toppings[type])
                        pizza.addTopping(type, itm);
                return pizza.price;
            }
        }
    },
    "Pizza.removeTopping": {
        "1": {
            test: "If the sauce from a pizza object is removed, the sauce should be set to margherita.",
            code: `const pizza = new Pizza();\n\tconst type = 'sauce';\n\tpizza.addTopping('sauce', 'pnk');\n\tpizza.removeTopping(type);`,
            expected: JSON.stringify(new Pizza()),
            result: function () {
                const pizza = new Pizza();
                const type = 'sauce';
                pizza.addTopping('sauce', 'pnk');
                pizza.removeTopping(type);
                return JSON.stringify(pizza);
            }
        },
        "2": {
            test: "If a produce topping is removed from four produce toppings, a protein topping from two protein toppings, and a cheese topping from two cheese toppings of a pizza object, the price should be the size's base price.",
            code: `const pizza = new Pizza();\n\tconst toppings = {\n\t\tproduce: ['bp', 'cp', 'bo', 'ro'],\n\t\tprotein: ['pep', 'hm'],\n\t\tcheese: ['moz', 'prm']\n\t};\n\tconst remove = {\n\t\tproduce: ['bp'],\n\t\tprotein: ['hm'],\n\t\tcheese: ['prm']\n\t};\n\tfor (const type of Object.keys(toppings))\n\t\tfor (const itm of toppings[type])\n\t\t\tpizza.addTopping(type, itm);\n\tfor (const type of Object.keys(remove))\n\t\tfor (const itm of remove[type])\n\t\t\tpizza.removeTopping(type, itm);`,
            expected: 8,
            result: function () {
                const pizza = new Pizza();
                const toppings = {
                    produce: ['bp', 'cp', 'bo', 'ro'],
                    protein: ['pep', 'hm'],
                    cheese: ['moz', 'prm']
                };
                const remove = {
                    produce: ['bp'],
                    protein: ['hm'],
                    cheese: ['prm']
                };
                for (const type of Object.keys(toppings))
                    for (const itm of toppings[type])
                        pizza.addTopping(type, itm);
                for (const type of Object.keys(remove))
                    for (const itm of remove[type])
                        pizza.removeTopping(type, itm);
                return pizza.price;
            }
        }
    }
}

const functions = {
    "Pizza.calculateCost": "pcc",
    "Pizza.setSize": "pss",
    "Pizza.addTopping": "pat",
    "Pizza.removeTopping": "prt",

}

function listFunctions() {
    console.log(`Command for running tests:\n\trunTests('function_name|abbr', true|false)\ntrue: run tests\nfalse: describe tests\n\nList of functions:`);
    for (const func of Object.entries(functions)) {
        console.log(`${func[0]} or ${func[1]}`);
    }
}

function runTests(funcName = '', testsList = true) {
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
    // Object.keys(tests[funcName]).forEach(testCase => {
    //     const test = tests[funcName][testCase];
    //     test.result.parent = test;
    // })

    Object.keys(tests[funcName]).forEach(testCase => {
        const test = tests[funcName][testCase];
        const expected = formatReturn(test.expected);
        const outcome = formatReturn(test.result());
        console.log(`${funcName} Test ${testCase}
        expected: ${expected}
        result: ${outcome}`);
    })
}

function describeFuncTest(funcName) {
    console.log(`Describe: ${funcName}`);
    Object.keys(tests[funcName]).forEach(testCase => {
        const testObj = tests[funcName][testCase];
        console.log('Test ' + testCase, testObj.test);
        console.log('Code: ', testObj.code);
        console.log('Expected output: ', formatReturn(testObj.expected));
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
        default:
            dataStr = 'undefined';
    }
    return dataStr;
}