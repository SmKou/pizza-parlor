function loadPizza(pizza) {
    calculateCost(pizza);
    const size = pizza.size;
    const preset = pizza.preset;
    const toppings = pizza.toppings;
    document.querySelectorAll('[name="size"]').forEach(elem => {
        if (elem.value === size && !elem.checked)
            elem.checked = true;
    });
    if (preset) {
        document.querySelectorAll('[name="preset"]').forEach(elem => {
            if (elem.value === preset && !elem.checked)
                elem.checked = true;
        })
    }
    for (const topping of Object.keys(toppings)) {
        if (topping === 'sauce')
            document.querySelector(`sauce-${toppings[topping]}`).checked = true;
        else
            document.querySelectorAll(`[name="${topping}"]`).forEach(elem => {
                if (toppings[topping].includes(elem.value) && !elem.checked)
                    elem.checked = true;
                else if (elem.checked && !toppings[topping].includes(elem.value))
                    elem.checked = false;
            })
    }
}

function addToReceipt(topping, itm, pizza, id) {
    const receipt = document.querySelector('.receipt');
    const li = document.createElement('li');
    const type = document.createElement('span');
    type.appendChild(document.createTextNode())
}

function removeFromReceipt(topping, itm, pizza, id) {
    const receipt = document.querySelector('.receipt');
}

window.onload = () => {
    let activeSection = '#pizza-size';
    const receipt = new Receipt();
    let pizza = new Pizza();

    const pizzaDetails = document.querySelectorAll('h3.button');
    pizzaDetails.forEach(elem => {
        elem.addEventListener('click', e => {
            document.querySelector(activeSection).classList.add('hidden');
            const id = '#pizza-' + e.target.id.split('-')[0];
            activeSection = id;
            document.querySelector(activeSection).classList.remove('hidden');
        })
    });

    const pizzaDefaults = document.querySelectorAll('.pizza [type="radio"]');
    pizzaDefaults.forEach(elem => {
        elem.addEventListener('change', (e) => {
            const prop = e.target.name;
            const itm = e.target.value;
            switch (prop) {
                case 'size':
                    pizza.setSize(itm);
                    break;
                case 'preset':
                    pizza.setPreset(itm);
                    break;
                case 'sauce':
                    pizza.addTopping(prop, itm);
                    break;
            }
            calculateCost(pizza);
            console.log(pizza);
        })
    });

    const pizzaOptions = document.querySelectorAll('.pizza [type="checkbox"]');
    pizzaOptions.forEach(elem => {
        elem.addEventListener('change', (e) => {
            const type = e.target.name;
            const itm = e.target.value;
            if (e.checked)
                pizza.addTopping(type, itm);
            else
                pizza.removeTopping(type, itm);
            calculateCost(pizza);
            console.log(pizza);
        })
    });

    const form = document.querySelector('form#pizza');
    form.addEventListener('submit', () => {
        receipt.addPizza(pizza);
        pizza = new Pizza();
    })
}