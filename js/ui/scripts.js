window.onload = load;

function load() {
    const receipt = new Receipt();
    const form = document.querySelector('form');
    form.addEventListener('submit', e => handleFormSubmission(e, receipt));
    form.addEventListener('reset', () => form.reset());

    const order = document.querySelector('.pizza-list');
    order.addEventListener('click', e => {
        document.querySelector('.selected').setAttribute('class', '');
        const id = e.target.id.split('-')[1];
        const ul = document.getElementById('pizza-' + id);
        ul.setAttribute('class', 'selected');
        const remove = document.querySelector('.remove-btn');
        remove.setAttribute('id', 'rm-' + id);
    });

    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => { 
        form.reset();
        document.querySelector('h1').scrollIntoView();
    });
    const rmBtn = document.querySelector('.remove-btn');
    rmBtn.addEventListener('click', e => handleRemove(e, receipt))
}

function handleFormSubmission(e, receipt) { 
    e.preventDefault();

    const size = document.querySelector('[name="size"]:checked').value;
    const sauce = [];
    document.querySelectorAll('[name="sauce"]:checked').forEach(elem => sauce.push(elem.value));
    const cheese = [];
    document.querySelectorAll('[name="cheese"]:checked').forEach(elem => cheese.push(elem.value));
    const veggies = [];
    document.querySelectorAll('[name="produce"]:checked').forEach(elem => veggies.push(elem.value));
    const protein = [];
    document.querySelectorAll('[name="protein"]:checked').forEach(elem => protein.push(elem.value));
    const qty = document.querySelector('[name="quantity"]').value;

    const pizza = new Pizza(size, sauce, cheese, veggies, protein);
    pizza.setPrice();
    receipt.addPizza(pizza, qty);

    const order = document.querySelector('.order');
    if (order.classList.contains('hidden'))
        order.classList.remove('hidden');
    order.scrollIntoView();
    generatePizzaList(receipt.pizzas);
    showTotal(receipt);
    setRemoveBtn(receipt)
}

function setRemoveBtn(receipt) {
    const pId = Object.keys(receipt.pizzas)[0];
    const remove = document.querySelector('.remove-btn');
    remove.setAttribute('id', 'rm-' + pId);
}

function generatePizzaList(pizzas) {
    const order = document.querySelector('.pizza-list');
    order.innerHTML = '';

    const orders = Object.keys(pizzas);
    for (const id of orders) {
        const options = pizzas[id].options;
        const qty = pizzas[id].qty;
        const ul = document.createElement('ul');

        const size = document.createElement('li');
        size.append(document.createTextNode(`${qty} ${PIZZA_ASPECTS['size'][options.size]} pizza${(qty > 1) ? 's' : ''}`));
        size.setAttribute('class', 'pizza-head');
        ul.append(size);
        for (const topping of Object.keys(options.toppings)) {
            if (!options.toppings[topping].length)
                continue;
            const li = document.createElement('li');
            let description = `${topping.substring(0,1).toUpperCase() + topping.substring(1)}: `;
            let list = '';
            let addComma = false;
            for (const itm of options.toppings[topping]) {
                if (!addComma)
                    addComma = true;
                else
                    list += ', ';
                list += PIZZA_ASPECTS[topping][itm];
            }
            description += list;
            li.append(document.createTextNode(description));
            li.id = topping + '-' + id;
            ul.append(li);
        }
        ul.id = 'pizza-' + id;
        if (id === orders[orders.length - 1])
            ul.setAttribute('class', 'selected');
        order.append(ul);
    }
}

function showTotal(receipt) {
    const total = receipt.getTotal();
    document.querySelector('.total').innerText = '$' + total;
}

function handleRemove(e, receipt) {
    const id = e.target.id.split('-')[1];
    const pizzaElem = document.getElementById('pizza-' + id);
    if (pizzaElem)
        pizzaElem.remove();
    
    receipt.removePizza(id);

    const order = document.querySelector('.order');
    if (!Object.keys(receipt.pizzas).length && !order.classList.contains('hidden'))
        order.classList.add('hidden');
    else {
        const orders = Object.keys(receipt.pizzas);
        const sId = orders[orders.length - 1];
        document.getElementById('pizza-' + sId).setAttribute('class', 'selected');
        showTotal(receipt);
        setRemoveBtn(receipt);
    }
}