function Pizza() {
    this.size = 'sm';
    this.toppings = {
        sauce: ['mgh'],
        cheese: ['moz'],
        veggies: [],
        protein: []
    }
}

Pizza.prototype.setSize = function (size) {
    if (['sm', 'mm', 'lg'].includes(size))
        this.size = size;
}