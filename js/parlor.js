function Receipt() {
    this.pizzas = {};
    this.currPizzaId = 0;
    this.total = 0;
    this.customer = new Customer();
}

Receipt.prototype.addPizza = function (pizza) {
    const id = this.currPizzaId;
    const price = this.calculateCost(pizza);
    const qty = 1;
    this.total += price;
    this.pizzas[id] = { pizza, price, qty };
    this.currPizzaId++;
}

Receipt.prototype.addQty = function (id, qty) {
    this.pizzas[id].qty += qty;
}

Receipt.prototype.removePizza = function (id) {
    if (this.pizzas.hasOwnProperty(id)) {
        this.total -= this.pizzas[id].price;
        delete this.pizzas[id];
        return true;
    }
    return false;
}

Receipt.prototype.removeQty = function (id, qty) {
    if (this.pizzas.hasOwnProperty(id))
        if (this.pizzas[id].qty - qty <= 0)
            this.removePizza(id);
        else
            this.pizzas[id].qty -= qty;
}

Receipt.prototype.addCustomer = function (name, addr) {
    this.customer = new Customer(name, addr);
}

Receipt.prototype.calculateCost = function (pizza) {
    const size = pizza.size;
    let total = 0;
    total += PIZZA_PRICES.size[size];
    for (const topping of Object.keys(pizza.toppings)) {
        const qty = pizza.toppings[topping].length - PIZZA_PRICES[topping].numFreeItms;
        if (qty > 0)
            total += qty * PIZZA_PRICES[topping].price;
    }
    return total;
}

function Customer(name, addr) {
    this.name = name;
    this.address = addr;
}