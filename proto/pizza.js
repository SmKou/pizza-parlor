const PIZZA_ASPECTS = {
    size: {
        'sm': 'Small',
        'mm': 'Medium',
        'lg': 'Large'
    },
    sauce: {
        'mgh': 'Margherita',
        'afo': 'Alfredo'
    },
    produce: {
        'bp': 'bell pepper',
        'bsl': 'basil',
        'jlp': 'jalapeño peppers',
        'msh': 'mushrooms',
        'bo': 'black olives',
        'ro': 'red onions'
    },
    protein: {
        'pep': 'Pepperoni',
        'ssg': 'Sausage'
    },
    cheese: {
        'moz': 'Mozzarella',
        'prm': 'Parmesan'
    }
}

const PIZZA_PRICES = {
    size: {
        'sm': 8,
        'mm': 12,
        'lg': 17
    },
    sauce: {
        numFreeItms: 1,
        addOne: 0.5
    },
    produce: {
        numFreeItms: 3,
        addOne: 0.5
    },
    protein: {
        numFreeItms: 1,
        addOne: 1
    },
    cheese: {
        numFreeItms: 1,
        addOne: 0.75
    }
}

function Receipt() {
    this.pizzas = {};
    this.currentId = 0;
    this.total = 0;
    this.status = false;
}

Receipt.prototype.addPizza = function (pizza) {
    this.currentId += 1;
    this.pizzas[currentId] = pizza;
}

Receipt.prototype.removePizza = function (id) {
    if (this.pizzas.hasOwnProperty(id)) {
        delete this.pizzas[id];
        return true;
    }
    return false;
}

function calculateCost(pizza) {
    const size = pizza.size;
    let total = 0;
    total += PIZZA_PRICES.size[size];
    for (const topping of Object.keys(pizza.toppings)) {
        const qty = pizza.toppings[topping].length - PIZZA_PRICES[topping].numFreeItms;
        if (qtu > 0)
            total += qty * PIZZA_PRICES[topping].price;
    }
    return total;
}

function Customer() {
    this.name = '';
    this.address = '';
}

class Pizza {
    constructor() {
        this.size = 'sm';
        this.preset = 'cus';
        this.toppings = {
            sauce: ['mgh'],
            produce: [],
            protein: [],
            cheese: ['moz']
        };
    }

    setSize(s) {
        if (['sm', 'mm', 'lg'].includes(s))
            this.size = s;
    }

    addTopping(type, itm) {
        const topping = this.toppings[type];
        if (!topping.includes(itm))
            topping.push(itm);
    }

    clearTopping(type) {
        switch (type) {
            case 'size':
                this.size = 'sm';
            case 'sauce':
                this.toppings[type] = ['mgh'];
            case 'cheese':
                this.toppings[type] = ['moz'];
            default:
                this.toppings[type] = [];
        }
    }
}

class MargheritaPizza extends Pizza {
    constructor() {
        super();
        this.preset = 'mgh';
        this.toppings.produce = ['bsl'];
        this.name = 'Margherita Pizza';
    }
}

class SupremePizza extends Pizza {
    constructor() {
        super();
        this.preset = 'sup';
        this.toppings.produce = ['bp', 'bo', 'ro', 'msh'];
        this.toppings.protein = ['pep', 'ssg'];
    }
}

function declarePreset(psc) {
    let pizza = {};
    switch (psc) {
        case 'mgh':
            pizza = new MargheritaPizza();
            break;
        case 'sup':
            pizza = new SupremePizza();
            break;
        default:
            pizza = new Pizza();
    }
    return pizza;
}