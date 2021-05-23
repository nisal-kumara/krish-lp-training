package FactoryDesignPattern;

public class LiteCombo extends Combos {
    @Override
    protected void comboDetails() {
        regularOrders.add(new Meals());
        regularOrders.add(new Beverages());

    }
}
