package FactoryDesignPattern;

public class FamilyCombo extends Combos {
    @Override
    protected void comboDetails() {
        regularOrders.add(new Meals());
        regularOrders.add(new Beverages());
        regularOrders.add(new Desserts());
    }
}
