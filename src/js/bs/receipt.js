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