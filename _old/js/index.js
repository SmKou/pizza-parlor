import PizzaClasses from './js/bs/pizza';
import Receipt from './js/bs/receipt';
import FormClasses from './js/ui/form';

const receipt = new Receipt();
let activeElem = document.querySelector('#nav-preset');

const presetForm = new FormClasses.PresetForm('size');
presetForm.setForm();

const sizeForm = new FormClasses.SizeForm('sauce');
sizeForm.setForm();
sizeForm.form.addEventListener('submit', e =>
    activeElem = sizeForm.handleSubmit(e,
        receipt.pizzas[receipt.currentPizzaId],
        activeElem
    )
);
sizeForm.form.addEventListener('reset', e => 
    sizeForm.reset(
        receipt.pizzas[receipt.currentPizzaId]
    )
);

const sauceForm = new FormClasses.SauceForm('cheese');
sauceForm.setForm();
sauceForm.form.addEventListener('submit', e => 
    activeElem = sauceForm.handleSubmit(e,
        receipt.pizzas[receipt.currentPizzaId],
        activeElem
    )
);
sauceForm.form.addEventListener('reset', e =>
    sauceForm.reset(
        receipt.pizzas[receipt.currentPizzaId]
    )
);

const cheeseForm = new FormClasses.CheeseForm('produce');
cheeseForm.setForm();
cheeseForm.form.addEventListener('submit', e =>
    activeElem = cheeseForm.handleSubmit(e,
        receipt.pizzas[receipt.currentPizzaId],
        activeElem
    )
);
cheeseForm.form.addEventListener('reset', e =>
    cheeseForm.reset(
        receipt.pizzas[receipt.currentPizzaId]
    )
);

const produceForm = new FormClasses.Form('produce', 'protein');
produceForm.setForm();
produceForm.form.addEventListener('submit', e =>
    activeElem = produceForm.handleSubmit(e,
        receipt.pizzas[receipt.currentPizzaId],
        activeElem
    )
);
produceForm.form.addEventListener('reset', e =>
    produceForm.reset(
        receipt.pizzas[receipt.currentPizzaId]
    )
);

const proteinForm = new FormClasses.ProteinForm('qty');