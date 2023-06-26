function Receipt() {
    this.pizzas = {};
    this.assignId = 0;
    this.currentId = 0;
}

Receipt.prototype.addPizza = function (pizza) {
    this.assignId++;
    this.pizzas[this.assignId] = {
        options: pizza,
        qty: 1
    }
    this.currentId = this.assignId;
}

Receipt.prototype.setQuantity = function (id, qty) {
    if (this.pizzas.hasOwnProperty(id))
        this.pizzas[id].qty = qty;
    else
        return false;
}

Receipt.prototype.getPizza = function (id) {
    if (!this.pizzas.hasOwnProperty(id))
        return false;
    this.currentId = id;
    return this.pizzas[id].options;
}

Receipt.prototype.removePizza = function (id) {
    if (!this.pizzas.hasOwnProperty(id))
        return false;
}

Receipt.prototype.getTotal = function () {
    if (!Object.keys(this.pizzas).length)
        return 0;
    let total = 0;
    for (const order of Object.values(this.pizzas))
        total += order.options.price * order.qty;
    return total;
}