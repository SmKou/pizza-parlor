const pizzaParlor = {
    activeSection: 'nav-preset',
    pizza: '',
    receipt: '',
    id: 0
}

function changeActiveSection(id) {
    if (pizzaParlor.activeSection)
        document.getElementById(pizzaParlor.activeSection).classList.remove('button-primary');
    pizzaParlor.activeSection = id;
    document.getElementById(id).classList.add('button-primary');
}

function unselect() {
    document.getElementById(pizzaParlor.activeSection).classList.remove('button-primary');
    pizzaParlor.activeSection = '';
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

        
        const id = (pizzaParlor.id) ? pizzaParlor.id : 0;

        if (!pizzaParlor.id || (pizzaParlor.id && preset !== pizzaParlor.pizza.preset)) {
            pizzaParlor.pizza = declarePreset(preset);
            loadPizza();
        }
        if (!pizzaParlor.receipt)
            pizzaParlor.receipt = new Receipt();
        if (pizzaParlor.id) 
            pizzaParlor.receipt.pizzas[id].pizza = pizzaParlor.pizza;
        else {
            pizzaParlor.receipt.addPizza(pizzaParlor.pizza);
            pizzaParlor.id = receipt.currentId;
        }

        changeActiveSection('nav-size');
        window.location.href = '#pizza-size';
    });
    formPreset.addEventListener('reset', () => {
        pizzaParlor.pizza = declarePreset('cus');
        if (pizzaParlor.id)
            receipt.pizzas[pizzaParlor.id].pizza = pizzaParlor.pizza;
        formPreset.reset();
        document.querySelector('#preset-cus').checked = true;
    })

    const formSize = document.querySelector('form#form-size');
    formSize.addEventListener('submit', e => {
        e.preventDefault();
        submit(pizzaParlor.pizza, 'size', 'nav-sauce', '#pizza-sauce');
    });
    formSize.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('size');
        formSize.reset();
        document.querySelector('#size-sm').checked = true;
    });

    const formSauce = document.querySelector('form#form-sauce');
    formSauce.addEventListener('submit', e => {
        e.preventDefault();
        submit(pizzaParlor.pizza, 'sauce', 'nav-cheese', '#pizza-cheese');
    });
    formSauce.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('sauce');
        formSauce.reset();
        document.querySelector('#sauce-mgh').checked = true;
    });

    const formCheese = document.querySelector('form#form-cheese');
    formCheese.addEventListener('submit', e => {
        e.preventDefault();
        submit(pizzaParlor.pizza, 'cheese', 'nav-produce', '#pizza-produce');
    });
    formCheese.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('cheese');
        formCheese.reset();
        document.querySelector('#cheese-moz').checked = true;
    });

    const formProduce = document.querySelector('form#form-produce');
    formProduce.addEventListener('submit', e => { 
        e.preventDefault();
        submit(pizzaParlor.pizza, 'produce', 'nav-protein', '#pizza-protein');
    });
    formProduce.addEventListener('reset', () => { 
        pizzaParlor.pizza.clearTopping('produce');
        formProduce.reset();
    });

    const formProtein = document.querySelector('form#form-protein');
    formProtein.addEventListener('submit', e => {
        e.preventDefault();
        submit(pizzaParlor.pizza, 'protein', '', '#pizza-order');
        listPizzas(pizzaParlor.receipt.pizzas);
     });
    formProtein.addEventListener('reset', () => {
        pizzaParlor.pizza.clearTopping('protein');
        formProtein.reset();
    });
    
    const formOrder = document.querySelector('form#form-order');
    const order = document.querySelector('.order');
    order.addEventListener('click', e => {
        const id = e.target.id.split('-')[1];
        const pizza = receipt.pizzas[id].pizza;
        const ul = document.createElement('ul');

        const pizzaPreset = document.createElement('li');
        pizzaPreset.classList.add('order-preset');
        pizzaPreset.append(document.createTextNode(pizza.name));
        ul.appendChild(pizzaPreset);

        const pizzaSize = document.createElement('li');
        pizzaSize.append(document.createTextNode(PIZZA_ASPECTS['size'][pizza.size]));
        ul.appendChild(pizzaSize);

        for (const topping of Object.keys(pizza.toppings)) {
            const itms = pizza.toppings[topping];
            let desc = topping.substring(0, 1).toUpperCase() + topping.substring(1) + ': ';
            desc = itms.reduce((acc, val, i) => {
                if (i === 0)
                    acc += val.substring(0, 1).toUpperCase() + val.substring(1);
                else
                    acc += ', ' + val;
            }, desc);
            const li = document.createElement('li');
            li.append(document.createTextNode(desc));
            ul.appendChild(li);
        }

        document.querySelector('.pizza-details').classList.remove('hidden');
        const pizzaDetails = document.querySelector('.pizza');
        pizzaDetails.innerHTML = '';
        pizzaDetails.appendChild(ul);

        document.querySelector('.mod-btn').setAttribute('id', 'mod-' + id);
        document.querySelector('.remove-btn').setAttribute('id', 'rm-' + id);
        document.querySelector('.add-qty').setAttribute('id', 'add-' + id);
        document.querySelector('.minus-qty').setAttribute('id', 'minus-' + id)
    })
    const modPizza = document.querySelector('.mod-btn');
    modPizza.addEventListener('click', e => {
        const id = e.target.id.split('-')[1];
        pizzaParlor.pizza = receipt.pizzas[id].pizza;
        loadPizza();
        pizzaParlor.id = id;
        changeActiveSection('nav-preset');
        window.location.href = '#pizza-preset';
    });
    const rmPizza = document.querySelector('.remove-btn');
    rmPizza.addEventListener('click', e => {
        const id = e.target.id.split('-')[1];
        pizzaParlor.receipt.removePizza(id);
        const p = remove(id, receipt);
        if (p !== undefined) {
            const receipt = pizzaParlor.receipt;
            pizzaParlor = { ...p, receipt };
        }
    })
    const qty = document.querySelector('#pizza-qty');
    const addQty = document.querySelector('.add-qty');
    addQty.addEventListener('click', e => {
        const id = e.target.id.split('-')[1];
        receipt.addQty(id, qty.value);
        receipt.calculateTotal();
        document.querySelector('.total-sum').innerText = receipt.total;
    })
    const minusQty = document.querySelector('.minus-qty');
    minusQty.addEventListener('click', e => {
        const id = e.target.id.split('-')[1];
        if (receipt.removeQty(id, qty.value)) {
            const p = remove(id, receipt);
            if (p !== undefined) {
                const receipt = pizzaParlor.receipt;
                pizzaParlor = { ...p, receipt };
            }
        }
    });
    const addPizza = document.querySelector('#add-pizza');
    addPizza.addEventListener('click', () => {

    })
    formOrder.addEventListener('submit', e => {
        e.preventDefault();
     });
    formOrder.addEventListener('reset', () => {
        formOrder.reset();
    });

    const formCustomer = document.querySelector('form#form-customer');
    formCustomer.addEventListener('submit', () => {
        const receipt = pizzaParlor.receipt;
        const name = document.querySelector('#customer-name').value;
        const addr = document.querySelector('#customer-addr').value;
        receipt.addCustomer(name, addr);
        document.querySelector('.c-name').innerText = receipt.customer.name;
        document.querySelector('.c-addr').innerText = receipt.customer.addr;
        document.querySelector('.status').classList.remove('hidden');
    });
    formCustomer.addEventListener('reset', () => {
        formCustomer.reset();
        const status = document.querySelector('.status');
        if (!status.classList.contains('hidden'))
            status.classList.add('hidden');
    })
}

window.onload = () => {
    loadApp();
}