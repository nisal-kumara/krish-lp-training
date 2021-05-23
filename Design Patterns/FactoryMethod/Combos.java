package FactoryDesignPattern;

import java.util.ArrayList;
import java.util.List;

public abstract class Combos {

    protected List<RegularOders> regularOrders = new ArrayList<>();

    public  Combos(){
        comboDetails();
    }

    protected abstract void comboDetails();

    public void printOrder(){
        System.out.printf("%-15s %10s %n","Type", "Price");
        for(int i = 1; i < regularOrders.size(); i++){
            regularOrders.get(i).printOrder();
        }
        System.out.println("___________________________ \n");
    }
}
