function loadPizza(pizza) {
    if (!pizzaParlor.pizza)
        return false;
    const preset = pizza.preset;
    const size = pizza.size;
    const toppings = pizza.toppings;
    document.querySelector('#preset-' + preset).checked = true;
    document.querySelector('#size-' + size).checked = true;
    for (const topping of Object.keys(toppings))
        document.querySelectorAll('[name="' + topping + '"]').forEach(elem => {
            if (toppings[topping].includes(elem.value) && !elem.checked)
                elem.checked = true;
            else if (elem.checked && !toppings[topping].includes(elem.value))
                elem.checked = false;
        });
}

function submitTopping(type, pizza) {
    const items = document.querySelectorAll(`[name="${type}"]:checked`);
    pizza.clearTopping(type);
    for (const itm of items)
        pizza.addTopping(type, itm.value);
}

function submit(pizza, type, nav, href) {
    if (type === 'size') {
        const size = document.querySelector('[name="size"]:checked').value;
        pizza.setSize(size);
    }
    else
        submitTopping(type, pizza);
    
    if (nav)
        changeActiveSection(nav);
    else
        unselect();
    
    window.location.href = href;
}

function listPizzas(pizzas) {
    const ul = document.createElement('ul');
    for (const id of Object.keys(pizzas)) {
        const li = document.createElement('li');
        li.id = 'pizza-' + id;
        const pizzaType = document.createElement('span');
        pizzaType.append(
            document.createTextNode(pizzas[id].pizza.name)
        );
        li.append(pizzaType);
        const pizzaQty = document.createElement('span');
        pizzaQty.append(
            document.createTextNode(pizzas[id].qty)
        );
        li.append(pizzaQty);
        ul.appendChild(li);
    }
    document.querySelector('.order').appendChild(ul);
    document.querySelector('.total-sum').innerText = receipt.total;
}

function remove(id, receipt) {
    document.querySelector('.pizza').innerHTML = '';
    document.querySelector('.pizza-details').classList.add('hidden');
    document.querySelector('#pizza-' + id).remove();
    if (Object.keys(receipt.pizzas).length === 0) {
        receipt.currentId = 0;
        changeActiveSection('nav-preset');
        window.location.href = '#pizza-preset';
        return {
            activeSection: 'nav-preset',
            pizza: '',
            id: 0
        }
    }
}