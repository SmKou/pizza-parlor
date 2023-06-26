const ReceiptTests = {
    "Receipt()": {
        "check-object-exists": {
            statement: "Should create a receipt object",
            code: 'const receipt = new Receipt();',
            expected: { pizzas: {}, assignId: 0 },
            result: () => {
                const receipt = new Receipt();
                return receipt;
            }
        }
    },
    "Receipt.addPizza()": {
        "check-receipt-updated": {
            statement: "Should increment assignId and add pizza to pizzas with quantity and total",
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
                        qty: 1
                    }
                },
                assignId: 1
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
    "Receipt.setQuantity()": {
        "change-only-pizza": {
            statement: "Should change quantity of only pizza in receipt",
            code: 'const id = 1;\n      const qty = 2;\n      const pizza = new Pizza();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.addQuantity(id, qty);',
            expected: 2,
            result: () => {
                const id = 1;
                const qty = 2;
                const pizza = new Pizza();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                receipt.setQuantity(id, qty);
                return receipt.pizzas[id].qty;
            }
        },
        "error-invalid-id": {
            statement: "Should not add quantity to only pizza if id is invalid",
            code: 'const id = 0;\n      const qty = 2;\n      const pizza = new Pizza();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.addQuantity(id, qty);',
            expected: {
                qty: 1,
                resp: false
            },
            result: () => {
                const id = 2;
                const qty = 2;
                const pizza = new Pizza();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                const resp = receipt.setQuantity(id, qty);
                return {
                    qty: receipt.pizzas[1].qty,
                    resp
                };
            }
        },
        "change-pizza-by-id": {
            statement: "Should add quantity to specified pizza",
            code: 'const id = 2;\n      const qty = 2;\n      const pizza1 = new Pizza();\n      const pizza2 = new Pizza();\n      const pizza3 = new Pizza();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza1);\n      receipt.addPizza(pizza2)\n      receipt.addPizza(pizza3)\n      receipt.addQuantity(id, qty);',
            expected: {
                qty1: 1,
                qty2: 2,
                qty3: 1
            },
            result: () => {
                const id = 2;
                const qty = 2;
                const pizza1 = new Pizza();
                const pizza2 = new Pizza();
                const pizza3 = new Pizza();
                const receipt = new Receipt();
                receipt.addPizza(pizza1);
                receipt.addPizza(pizza2);
                receipt.addPizza(pizza3);
                receipt.setQuantity(id, qty);
                return {
                    qty1: receipt.pizzas[1].qty,
                    qty2: receipt.pizzas[2].qty,
                    qty3: receipt.pizzas[3].qty
                }
            }
        }
    },
    "Receipt.removePizza()": {
        "no-change-invalid-id": {
            statement: "Should return false for invalid id",
            code: 'const id = 2;\n      const pizza = new Pizza();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.removePizza(id);',
            expected: {
                length: 1,
                resp: false
            },
            result: () => {
                const id = 2;
                const pizza = new Pizza();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                const resp = receipt.removePizza(id);
                return {
                    length: Object.keys(receipt.pizzas).length,
                    resp
                }
            }
        },
        "change-by-id": {
            statement: "Should delete designated pizza from receipt and return true",
            code: 'const id = 1;\n      const pizza = new Pizza();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.removePizza(id);',
            expected: {
                length: 0,
                resp: true
            },
            result: () => {
                const id = 1;
                const pizza = new Pizza();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                const resp = receipt.removePizza(id);
                return {
                    length: Object.keys(receipt.pizzas).length,
                    resp
                }
            }
        }
    },
    "Receipt.getTotal()": {
        "empty-returns-zero": {
            statement: "Should return 0 if no pizzas on receipt",
            code: 'const receipt = new Receipt();\n      receipt.getTotal();',
            expected: 0,
            result: () => {
                const receipt = new Receipt();
                return receipt.getTotal();
            }
        },
        "check-one-pizza": {
            statement: "Should return price of a single pizza",
            code: 'const pizza = new Pizza();\n      pizza.setPrice();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.getTotal();',
            expected: 8,
            result: () => {
                const pizza = new Pizza();
                pizza.setPrice();
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                return receipt.getTotal();
            }
        },
        "check-one-type-qty-two": {
            statement: "Should return doubled price for quantity of two",
            code: 'const pizza = new Pizza();\n      pizza.setPrice();\n      const id = 1;\n      const qty = 2;\n      const receipt = new Receipt();\n      receipt.addPizza(pizza);\n      receipt.addQuantity(id, qty);\n      receipt.getTotal();',
            expected: 16,
            result: () => {
                const pizza = new Pizza();
                pizza.setPrice();
                const id = 1;
                const qty = 2;
                const receipt = new Receipt();
                receipt.addPizza(pizza);
                receipt.setQuantity(id, qty);
                return receipt.getTotal();
            }
        },
        "check-two-types": {
            statement: "Should return price of two pizzas of different size",
            code: 'const pizza1 = new Pizza();\n      pizza1.setPrice();\n      const pizza2 = new Pizza("mm");\n      pizza2.setPrice();\n      const receipt = new Receipt();\n      receipt.addPizza(pizza1);\n      receipt.addPizza(pizza2);\n      receipt.getTotal();',
            expected: 20,
            result: () => {
                const pizza1 = new Pizza();
                pizza1.setPrice();
                const pizza2 = new Pizza("mm");
                pizza2.setPrice();
                const receipt = new Receipt();
                receipt.addPizza(pizza1);
                receipt.addPizza(pizza2);
                return receipt.getTotal();
            }
        }
    }
}