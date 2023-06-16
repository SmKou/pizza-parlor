const tests = {
    // Constructor
    "Pizza.calculatorCost": {
        "1": {
            test: "If a pizza object is declared, its price should be 0.",
            input: {
                pizza: 'Pizza()',
            },
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
            input: {
                pizza: 'Pizza()',
                size: 'mm'
            },
            expected: 12.5,
            result: function () {
                const pizza = new Pizza();
                pizza.setSize(this.input.size);
                return pizza.price;
            }
        }
    },
    "Pizza.addTopping": {
        "1": {
            test: "If a produce topping is added to a pizza object, the price should be the size's base price.",
            input: {
                pizza: 'Pizza()',
                type: 'produce',
                produce: ['bp']
            },
            expected: 8,
            result: function () {
                const pizza = new Pizza();
                for (const itm of this.input.produce)
                    pizza.addTopping(this.input.type, itm);
                return pizza.price;
            }
        },
        "2": {
            test: "If four produce toppings are added to a pizza object, the price should be the size's base price plus one produce topping.",
            input: {
                pizza: 'Pizza()',
                type: 'produce',
                produce: ['bp', 'cp', 'bo', 'ro']
            },
            expected: 8.5,
            result: function () {
                const pizza = new Pizza();
                for (const itm of this.input.produce)
                    pizza.addTopping(this.input.type, itm);
                return pizza.price;
            }
        },
        "3": {
            test: "If a protein topping is added to a pizza object, the price should be the size's base price.",
            input: {
                pizza: 'Pizza()',
                type: 'protein',
                protein: ['pep']
            },
            expected: 8,
            result: function () {
                const pizza = new Pizza();
                for (const itm of this.input.protein)
                    pizza.addTopping(this.input.type, itm);
                return pizza.price;
            }
        },
        "4": {
            test: "If two protein toppings are added to a pizza object, the price should be the size's base price plus one protein topping.",
            input: {
                pizza: 'Pizza()',
                type: 'protein',
                protein: ['pep', 'hm']
            },
            expected: 9,
            result: function () {
                const pizza = new Pizza();
                for (const itm of this.input.protein)
                    pizza.addTopping(this.input.type, itm);
                return pizza.price;
            }
        },
        "5": {
            test: "If a cheese topping is added to a pizza object, the price should be the size's base price.",
            input: {
                pizza: 'Pizza()',
                type: 'cheese',
                protein: ['moz']
            },
            expected: 8,
            result: function () {
                const pizza = new Pizza();
                for (const itm of this.input.cheese)
                    pizza.addTopping(this.input.type, itm);
                return pizza.price;
            }
        },
        "6": {
            test: "If two cheese toppings are added to a pizza object, the price should be the size's base price plus one cheese topping.",
            input: {
                pizza: 'Pizza()',
                type: 'cheese',
                cheese: ['moz', 'prm']
            },
            expected: 8.75,
            result: function () {
                const pizza = new Pizza();
                for (const itm of this.input.cheese)
                    pizza.addTopping(this.input.type, itm);
                return pizza.price;
            }
        },
        "7": {
            test: "If four produce toppings, two protein toppings, and two cheese toppings are added to a pizza object, the price should be the size's base price plus one produce topping, protein topping, and cheese topping.",
            input: {
                pizza: 'Pizza()',
                toppings: {
                    produce: ['bp', 'cp', 'bo', 'ro'],
                    protein: ['pep', 'hm'],
                    cheese: ['moz', 'prm']
                }
            },
            expected: 10.25,
            result: function () {
                const pizza = new Pizza();
                for (const type of Object.keys(this.input.toppings))
                    for (const itm of Object.keys(this.input.toppings[type]))
                        pizza.addTopping(type, itm);
                return pizza.price;
            }
        }
    },
    "Pizza.removeTopping": {
        "1": {
            test: "If the sauce from a pizza object is removed, the sauce should be set to margherita.",
            input: {
                pizza: function () {
                    const pizza = new Pizza();
                    pizza.addTopping('sauce', 'pnk');
                    return pizza;
                },
                remove: {
                    type: 'sauce'
                }
            },
            expected: function () {
                const pizza = new Pizza();
                return pizza;
            },
            result: function () {
                const pizza = this.input.pizza();
                pizza.removeTopping('sauce');
                return pizza;
            }
        },
        "2": {
            test: ""
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