package FactoryDesignPattern;

public class HotMealApplication {
    public static void main(String[] args) {

        Combos combos1 = ComboCreator.createComobos(ComboCode.FAMILY);
        combos1.printOrder();

        Combos combos2 = ComboCreator.createComobos(ComboCode.MEGA);
        combos2.printOrder();
    }
}
