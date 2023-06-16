function Receipt() {
    this.pizzas = [];
    this.total = 0;
    this.customer = '';
    this.address = '';
    this.status = false;
}

Receipt.prototype.addPizza = function (pizza) {
    this.total += pizza.price;
    this.pizzas = [...this.pizzas, pizza];
}

Receipt.prototype.removePizza = function (id) {
    if (id > -1 && id < this.pizzas.length)
        delete this.pizzas[id];
}

Receipt.prototype.addCustomer = function (name) {
    this.customer = name;
}

Receipt.prototype.addAddress = function (addr) {
    this.address = addr;
}

Receipt.prototype.received = function () {
    this.status = true;
}

const receipt = new Receipt();