class Pizza {
    constructor() {
        this.size = 'sm';
        this.preset = 'cus';
        this.name = 'Custom pizza';
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

    addTopping(type, item) {
        const topping = this.toppings[type];
        if (!topping.includes(item))
            topping.push(item);
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

function declarePreset(psc) {
    let pizza = {};
    switch (psc) {
        case 'mgh':
            pizza = new MargheritaPizza();
            break;
        case 'sup':
            pizza = new SupremePizza();
            break;
        case 'ch':
            pizza = new FiveCheesePizza();
            break;
        case 'sa':
            pizza = new SpinachArtichokePizza();
            break;
        case 'wt':
            pizza = new WhitePizza();
            break;
        case 'grk':
            pizza = new GreekPizza();
            break;
        case 'bf':
            pizza = new BreakfastPizza();
            break;
        case 'cap':
            pizza = new CapresePizza();
            break;
        case 'hwn':
            pizza = new HawaiianPizza();
            break;
        case 'jlp':
            pizza = new JalapeñoPizza();
            break;
        default:
            pizza = new Pizza();
    }
    return pizza;
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
        this.name = 'Supreme Pizza';
    }
}

class FiveCheesePizza extends Pizza {
    constructor() {
        super();
        this.preset = 'ch';
        this.toppings.cheese = ['moz', 'prm', 'rmo', 'ago', 'ft'];
        this.name = 'Five Cheese Pizza';
    }
}

class SpinachArtichokePizza extends Pizza {
    constructor() {
        super();
        this.preset = 'sa';
        this.toppings.cheese = ['moz', 'prm'];
        this.toppings.produce = ['art', 'sp', 'glc'];
        this.name = 'Spinach and Artichoke Pizza';
    }
}

class WhitePizza extends Pizza {
    constructor() {
        super();
        this.preset = 'wt';
        this.toppings.sauce = ['afo'];
        this.toppings.cheese = ['moz', 'prm', 'rct'];
        this.toppings.produce = ['glc'];
        this.name = 'White Pizza'
    }
}

class GreekPizza extends Pizza {
    constructor() {
        super();
        this.preset = 'grk';
        this.toppings.cheese = ['ft'];
        this.toppings.produce = ['sp', 'bo', 'tto', 'ro'];
        this.name = 'Greek Pizza';
    }
}

class BreakfastPizza extends Pizza {
    constructor() {
        super();
        this.preset = 'bf';
        this.toppings.produce = ['bp', 'ro', 'tto'];
        this.toppings.protein = ['eg'];
        this.name = 'Breakfast Pizza';
    }
}

class CapresePizza extends Pizza {
    constructor() {
        super();
        this.preset = 'cap';
        this.toppings.produce = ['bsl', 'tto'];
        this.name = 'Caprese Pizza';
    }
}

class HawaiianPizza extends Pizza {
    constructor() {
        super();
        this.preset = 'hwn';
        this.toppings.sauce = ['bbq'];
        this.toppings.produce = ['pin'];
        this.toppings.protein = ['hm'];
        this.name = 'Hawaiian Pizza';
    }
}

class JalapeñoPizza extends Pizza {
    constructor() {
        super();
        this.preset = 'jlp';
        this.toppings.sauce = ['bbq'];
        this.toppings.produce = ['zuc', 'sc', 'ro', 'jlp'];
        this.name = 'Jalapeño Pizza'
    }
}