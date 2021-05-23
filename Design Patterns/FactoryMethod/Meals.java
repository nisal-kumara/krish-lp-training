package FactoryDesignPattern;

public class Meals extends RegularOders {

    public String name = "Meals";
    public int price = 950;

    @Override
    public void printOrder() {
        System.out.printf("%-15s %10s %n", name, price);
    }
}
