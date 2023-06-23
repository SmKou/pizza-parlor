function Receipt() {
    this.pizzas = {};
    this.assignId = 0;
    this.currentId = 0;
}

Receipt.prototype.addPizza = function (pizza) {
    this.assignId++;
    this.pizzas[this.assignId] = {
        pizza,
        qty: 1,
        ttl: pizza.price
    }
    this.currentId = this.assignId;
}

Receipt.prototype.addQuantity = function (id, qty) {
    if (this.pizzas.hasOwnProperty(id))
        this.pizzas[id].qty += qty;
    else
        return false;
}

Receipt.prototype.getPizza = function (id) {
    if (!this.pizzas.hasOwnProperty(id))
        return false;
    this.currentId = id;
    return this.pizzas[id].pizza;
}