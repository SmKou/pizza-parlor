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
    }
}