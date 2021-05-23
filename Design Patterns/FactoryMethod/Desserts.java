package FactoryDesignPattern;

public class Desserts extends RegularOders {

    public String name = "Desserts";
    public int price = 300;

    @Override
    public void printOrder() {
        System.out.printf("%-15s %10s %n", name, price);
    }

}
