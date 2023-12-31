function Receipt() {
    this.pizzas = {};
    this.assignId = 0;
}

Receipt.prototype.addPizza = function (pizza, qty = 1) {
    this.assignId++;
    this.pizzas[this.assignId] = {
        options: pizza,
        qty
    }
}

Receipt.prototype.removePizza = function (id) {
    if (!this.pizzas.hasOwnProperty(id))
        return false;
    delete this.pizzas[id];
    const keys = Object.keys(this.pizzas);
    const key = keys[keys.length - 1];
    this.currentId = Number(key);
    return true;
}

Receipt.prototype.getTotal = function () {
    if (!Object.keys(this.pizzas).length)
        return 0;
    let total = 0;
    for (const order of Object.values(this.pizzas)) {
        total += order.options.price * order.qty;
    }
    return total;
}