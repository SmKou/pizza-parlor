function Receipt() {
    this.pizzas = [];
    this.total = 0;
    this.customer = '';
    this.address = '';
    this.status = false;
}

Receipt.prototype.addPizza = function (pizza) {
    this.total += pizza.price;
    this.pizzas = [...this.pizzas, pizza];
}

Receipt.prototype.removePizza = function (id) {
    if (id > -1 && id < this.pizzas.length)
        delete this.pizzas[id];
}

Receipt.prototype.addCustomer = function (name) {
    this.customer = name;
}

Receipt.prototype.addAddress = function (addr) {
    this.address = addr;
}

Receipt.prototype.received = function () {
    this.status = true;
}

const receipt = new Receipt();

/* NOT TESTED
<!--
    <form class="pizza-list">
        <div class="list"></div>
        <div class="form-mng">
            <input type="submit" id="submit-pizza-list" value="Place Order">
            <input type="reset" id="reset-pizza-list" value="Clear Order">
        </div>
    </form>
        <section class="receipt hidden">
            <h2>Receipt</h2>
            <div class="list"></div>
            <form class="customer">
                <div class="customer-name">
                    <label for="customer-name">
                        Name on Order:
                        <input type="text" id="customer-name" pattern="/\w+/i" required>
                    </label>
                </div>
                <div class="customer-addr">
                    <label for="customer-streetaddr">
                        <input type="text" id="customer-streetaddr" pattern="/\d+ (\w+)+, \w+ \d+/i" placeholder="4200 Martin Luther King Blvd Houston, TX 77204" required>
                    </label>
                </div>
                <div class="form-mng">
                    <input type="submit" id="submit-customer" value="Pay">
                    <input type="reset" id="reset-customer" value="Cancel">
                </div>
            </form>
        </section>
        <section class="confirmation hidden">
            <h2>Confirmation</h2>
            <div class="status"></div>
            <div class="confirm">
                <button class="button">Order Received</button>
            </div>
        </section>
    -->
*/