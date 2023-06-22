function Form(type, next) {}

class Form {
    constructor(type, next) {
        this.type = type;
        this.next = next;
    }

    setForm() {
        this.form = document.querySelector('#form-' + this.type)
    }

    handleSubmit(e, pizza, active) {
        e.preventDefault();
        const type = this.type;
        const items = document.querySelectorAll(`[name="${type}"]:checked`);
        pizza.clearTopping(type);
        for (const itm of items)
            pizza.addTopping(type, itm.value)
        return this.redirect(active);
    }

    redirect(active) {
        if (active)
            active.classList.remove('button-primary');
        document.getElementById('nav-' + this.next).classList.add('button-primary');
        window.location.href = `#pizza-${this.next}`;
        return document.getElementById('nav-' + this.next);
    }

    reset(pizza) {
        if (this.form !== undefined)
            this.form.reset();
        pizza.clearTopping(this.type);
    }
}

class PresetForm extends Form {
    constructor(next) {
        super('preset', next);
    }

    handleSubmit(e, receipt, active) {
        e.preventDefault();
        const preset = document.querySelector('[name="preset"]:checked').value;

        return this.redirect(active);
    }
}

class SizeForm extends Form {
    constructor(next) {
        super('size', next);
    }

    handleSubmit(e, pizza, active) {
        e.preventDefault();
        const size = document.querySelector('[name="size"]:checked').value;
        pizza.setSize(size);
        return this.redirect(active);
    }

    reset(pizza) {
        super.reset(pizza);
        document.querySelector('#size-sm').checked = true;
    }
}

class SauceForm extends Form {
    constructor(next) {
        super('sauce', next);
    }

    reset(pizza) {
        super.reset(pizza);
        document.querySelector('#sauce-mgh').checked = true;
    }
}

class CheeseForm extends Form {
    constructor(next) {
        super('cheese', next);
    }

    reset(pizza) {
        super.reset(pizza);
        document.querySelector('#cheese-moz').checked = true;
    }
}

class ProteinForm extends Form {
    constructor(next) {
        super('protein', next);
    }
}

module.exports = {
    Form,
    PresetForm,
    SizeForm,
    SauceForm,
    CheeseForm,
    ProteinForm
};