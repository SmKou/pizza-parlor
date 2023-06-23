const PizzaTests = {
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
        },
        "change-size-input": {
            statement: "Should create a pizza object with different size",
            code: 'const size = "mm";\n      const pizza = new Pizza(size);',
            expected: 'mm',
            result: () => {
                const size = "mm";
                const pizza = new Pizza(size);
                return pizza.size;
            }
        },
        "no-change-invalid-size": {
            statement: "Should create a pizza object with the default size",
            code: 'const size = "ns";\n      const pizza = new Pizza(size);',
            expected: 'sm',
            result: () => {
                const size = "ns";
                const pizza = new Pizza(size);
                return pizza.size;
            }
        },
        "change-sauce-not-size": {
            statement: "Should create a pizza object with default size and different sauce",
            code: 'const size = "";\n      const sauce = ["pnk", "bbq"];\n      const pizza = new Pizza(size, sauce);',
            expected: {
                size: 'sm',
                sauce: ['pnk', 'bbq']
            },
            result: () => {
                const size = "";
                const sauce = ["pnk", "bbq"];
                const pizza = new Pizza(size, sauce);
                return {
                    size: pizza.size,
                    sauce: pizza.toppings.sauce
                };
            }
        },
        "check-object-all-exists": {
            statement: "Should create a pizza object with set size and toppings",
            code: 'const size = "lg";\n      const sauce = ["bbq"];\n      const cheese = ["ft"];\n      const veggies = ["ro"];\n      const protein = ["pep"];\n      const pizza = new Pizza(size, sauce, cheese, veggies, protein)',
            expected: {
                size: 'lg',
                toppings: {
                    sauce: ['bbq'],
                    cheese: ['ft'],
                    veggies: ['ro'],
                    protein: ['pep']
                }
            },
            result: () => {
                const size = "lg";
                const sauce = ["bbq"];
                const cheese = ["ft"];
                const veggies = ["ro"];
                const protein = ["pep"];
                const pizza = new Pizza(size, sauce, cheese, veggies, protein);
                return {
                    size: pizza.size,
                    toppings: pizza.toppings
                }
            }
        },
        "check-invalid-not-added": {
            statement: "Should create pizza object with only valid size and toppings",
            code: 'const size = "ms";\n      const sauce = ["pnk", "hot"];\n      const cheese = ["rcc", "ft"];\n      const veggies = ["bsl", "hot", "ro"];\n      const protein = ["bcn"];\n      const pizza = new Pizza(size, sauce, cheese, veggies, protein);',
            expected: {
                size: 'sm',
                toppings: {
                    sauce: ['pnk'],
                    cheese: ['ft'],
                    veggies: ['bsl', 'ro'],
                    protein: []
                }
            },
            result: () => {
                const size = "ms";
                const sauce = ["pnk", "hot"];
                const cheese = ["rcc", "ft"];
                const veggies = ["bsl", "hot", "ro"];
                const protein = ["bcn"];
                const pizza = new Pizza(size, sauce, cheese, veggies, protein);
                return {
                    size: pizza.size,
                    toppings: pizza.toppings
                }
            }
        }
    },
    "Pizza.setPrice()": {
        "change-default-price": {
            statement: "Should set price to cost of small pizza with one sauce and one cheese (the default)",
            code: 'const pizza = new Pizza();\n      pizza.setPrice();',
            expected: 8,
            result: () => {
                const pizza = new Pizza();
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-size": {
            statement: "Should set price to cost with different size",
            code: 'const size = "mm";\n      const pizza = new Pizza(size);\n      pizza.setPrice();',
            expected: 12,
            result: () => {
                const size = "mm";
                const pizza = new Pizza(size);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-sauce": {
            statement: "Should set price to cost with additional sauce",
            code: 'const size = "";\n      const sauce = ["mgh", "pnk"];\n      const pizza = new Pizza(size, sauce);\n      pizza.setPrice();',
            expected: 8.25,
            result: () => {
                const size = "";
                const sauce = ["mgh", "pnk"];
                const pizza = new Pizza(size, sauce);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-cheese": {
            statement: "Should set price to cost with additional cheese",
            code: 'const size = "";\n      const sauce = [];\n      const cheese = ["mgh", "rct"];\n      const pizza = new Pizza(size, sauce, cheese);\n      pizza.setPrice();',
            expected: 8.75,
            result: () => {
                const size = "";
                const sauce = [];
                const cheese = ["mgh", "rct"];
                const pizza = new Pizza(size, sauce, cheese);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-veggies": {
            statement: "Should set price to cost with additional veggies",
            code: 'const size = "sm";\n      const sauce = ["mgh"];\n      const cheese = ["moz"];\n      const veggies = ["bsl", "jlp", "ro", "glc"];\n      const pizza = new Pizza(size, sauce, cheese, veggies);\n      pizza.setPrice();',
            expected: 8.5,
            result: () => {
                const size = "sm";
                const sauce = ["mgh"];
                const cheese = ["moz"];
                const veggies = ["bsl", "jlp", "ro", "glc"];
                const pizza = new Pizza(size, sauce, cheese, veggies);
                pizza.setPrice();
                return pizza.price;
            }
        },
        "change-price-by-protein": {
            statement: "Should set price to cost with additional protein",
            code: 'const size = "sm";\n      const sauce = ["mgh"];\n      const cheese = ["moz"];\n      const veggies = [];\n      const protein = ["eg", "bs"];\n      const pizza = new Pizza(size, sauce, cheese, veggies, protein);\n      pizza.setPrice();',
            expected: 9,
            result: () => {
                const size = "sm";
                const sauce = ["mgh"];
                const cheese = ["moz"];
                const veggies = [];
                const protein = ["eg", "bs"];
                const pizza = new Pizza(size, sauce, cheese, veggies, protein);
                pizza.setPrice();
                return pizza.price;
            }
        }
    }
}