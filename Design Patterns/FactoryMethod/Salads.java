package FactoryDesignPattern;

public class Salads extends RegularOders {

    public String name = "Salads";
    public int price = 550;

    @Override
    public void printOrder() {
        System.out.printf("%-15s %10s %n", name, price);
    }

}
