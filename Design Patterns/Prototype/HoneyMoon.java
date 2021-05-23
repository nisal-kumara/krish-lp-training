package com.Nisal.Prototype;

public class HoneyMoon extends Tours {

    private String hotel;
    private boolean meals;

    public String getHotel() {
        return hotel;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public boolean isMeals() {
        return meals;
    }

    public void setMeals(boolean meals) {
        this.meals = meals;
    }

    @Override
    public String toString() {
        return "HoneyMoon{" +
                "hotel='" + hotel + '\'' +
                ", meals=" + meals +
                '}';
    }
}
