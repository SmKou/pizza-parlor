const ReceiptTests = {
    "Receipt()": {
        "check-object-exists": {
            statement: "Should create a receipt object",
            code: 'const receipt = new Receipt();',
            expected: { pizzas: {}, assignId: 0, currentId: 0 },
            result: () => {
                const receipt = new Receipt();
                return receipt;
            }
        }
    },
    "Receipt.addPizza()": {
        "check-receipt-updated": {
            statement: "Should increment assignId and currentId and add pizza to pizzas with quantity and total",
            code: 'const pizza = new Pizza();\n      pizza.setPrice();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);',
            expected: {
                pizzas: {
                    "1": {
                        pizza: {
                            size: 'sm',
                            price: 8,
                            toppings: {
                                sauce: ['mgh'],
                                cheese: ['moz'],
                                veggies: [],
                                protein: []
                            }
                        },
                        qty: 1,
                        ttl: 8
                    }
                },
                assignId: 1,
                currentId: 1
            },
            result: () => {
                const pizza = new Pizza();
                pizza.setPrice();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                return receipt;
            }
        }
    },
    "Receipt.addQuantity()": {
        "change-only-pizza": {
            statement: "Should increase quantity of only pizza in receipt",
            code: 'const id = 1;\n      const qty = 1;\n      const pizza = new Pizza();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.addQuantity(id, qty);',
            expected: 2,
            result: () => {
                const id = 1;
                const qty = 1;
                const pizza = new Pizza();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                receipt.addQuantity(id, qty);
                return receipt.pizzas[id].qty;
            }
        },
        "error-invalid-id": {
            statement: "Should not add quantity to only pizza if id is invalid",
            code: 'const id = 0;\n      const qty = 1;\n      const pizza = new Pizza();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.addQuantity(id, qty);',
            expected: {
                qty: 1,
                resp: false
            },
            result: () => {
                const id = 2;
                const qty = 1;
                const pizza = new Pizza();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                const resp = receipt.addQuantity(id, qty);
                return {
                    qty: receipt.pizzas[1].qty,
                    resp
                };
            }
        }
    }
}