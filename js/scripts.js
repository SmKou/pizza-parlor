const pizzaParlor = {
    activeSection: 'nav-preset',
    pizza: '',
    receipt: ''
}

function loadPizza() {
    if (!pizzaParlor.pizza)
        return false;
    const preset = pizzaParlor.pizza.preset;
    const size = pizzaParlor.pizza.size;
    const toppings = pizzaParlor.pizza.toppings;
    document.querySelector('#preset-' + preset).checked = true;
    document.querySelector('#size-' + size).checked = true;
    for (const topping of Object.keys(toppings)) 
        document.querySelectorAll('[name="' + topping + '"]').forEach(elem => {
            if (toppings[topping].includes(elem.value) && !elem.checked)
                elem.checked = true;
            else if (elem.checked && !toppings[topping].includes(elem.value))
                elem.checked = false;
        })
}

function submitTopping(type) {
    const items = document.querySelectorAll(`[name="${type}"]:checked`);
    pizzaParlor.pizza.clearTopping(type);
    for (const itm of items)
        pizzaParlor.pizza.addTopping(type, itm.value);
}

function changeActiveSection(id) {
    document.getElementById(pizzaParlor.activeSection).classList.remove('button-primary');
    pizzaParlor.activeSection = id;
    document.getElementById(id).classList.add('button-primary');
}

function loadApp() {
    const headerLinks = document.querySelectorAll('a.nav-btn');
    headerLinks.forEach(elem => {
        elem.addEventListener('click', e => {
            const id = e.target.id;
            changeActiveSection(id);           
        })
    })

    const formPreset = document.querySelector('form#form-preset');
    formPreset.addEventListener('submit', e => {
        e.preventDefault();
        const preset = document.querySelector('[name="preset"]:checked').value;
        pizzaParlor.pizza = declarePreset(preset);
        loadPizza();
        if (!pizzaParlor.receipt)
            pizzaParlor.receipt = new Receipt();
        pizzaParlor.receipt.addPizza(pizzaParlor.pizza);
        console.log(pizzaParlor.pizza);
        changeActiveSection('nav-size');
        window.location.href = '#pizza-size';
    });
    formPreset.addEventListener('reset', () => {
        pizzaParlor.pizza = declarePreset('cus');
        formPreset.reset();
        document.querySelector('#preset-cus').checked = true;
    })

    const formSize = document.querySelector('form#form-size');
    formSize.addEventListener('submit', e => {
        e.preventDefault();
        const size = document.querySelector('[name="size"]:checked').value;
        pizzaParlor.pizza.setSize(size);
        console.log(pizzaParlor.pizza);
        changeActiveSection('nav-sauce');
        window.location.href = '#pizza-sauce';
    });
    formSize.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('size');
        formSize.reset();
        document.querySelector('#size-sm').checked = true;
    });

    const formSauce = document.querySelector('form#form-sauce');
    formSauce.addEventListener('submit', e => {
        e.preventDefault();
        submitTopping('sauce');
        console.log(pizzaParlor.pizza);
        changeActiveSection('nav-cheese');
        window.location.href = '#pizza-cheese';
    });
    formSauce.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('sauce');
        formSauce.reset();
        document.querySelector('#sauce-mgh').checked = true;
    });

    const formCheese = document.querySelector('form#form-cheese');
    formCheese.addEventListener('submit', e => {
        e.preventDefault();
        submitTopping('cheese');
        console.log(pizzaParlor.pizza);
        changeActiveSection('nav-produce');
        window.location.href = '#pizza-produce';
    });
    formCheese.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('cheese');
        formCheese.reset();
        document.querySelector('#cheese-moz').checked = true;
    });

    const formProduce = document.querySelector('form#form-produce');
    formProduce.addEventListener('submit', e => { 
        e.preventDefault();
        submitTopping('produce');
        console.log(pizzaParlor.pizza);
        changeActiveSection('nav-protein');
        window.location.href = '#pizza-protein';
    });
    formProduce.addEventListener('reset', () => { 
        pizzaParlor.pizza.clearTopping('produce');
        formProduce.reset();
    });

    const formProtein = document.querySelector('form#form-protein');
    formProtein.addEventListener('submit', e => {
        e.preventDefault();
        submitTopping('protein');
        console.log(pizzaParlor.pizza);
        window.location.href = '#pizza-order';
     });
    formProtein.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('protein');
        formProtein.reset();
    });
    
    const formOrder = document.querySelector('form#form-order');
    const qty = document.querySelector('#pizza-qty');
    const addQty = document.querySelector('#add-qty');
    const rmQty = document.querySelector('#remove-qty');
    addQty.addEventListener('click', () => {
        
    })
    formOrder.addEventListener('submit', e => {
        e.preventDefault();
     });
    formOrder.addEventListener('reset', () => {
        formOrder.reset();
    })
}

window.onload = () => {
    loadApp();
}