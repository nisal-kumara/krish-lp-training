package com.Nisal.Prototype;

import java.util.HashMap;
import java.util.Map;

public class TourReg {

    private Map<TourType, Tours> tour = new HashMap<>();

    public TourReg() {
        this.initializingTours();
    }

    public Tours getTours(TourType tourType) throws CloneNotSupportedException {

        Tours tours = (Tours) tour.get(tourType).clone();
        return tours;
    }

    private void initializingTours(){

        HoneyMoon honeyMoon = new HoneyMoon();
        honeyMoon.setHotel("Taj");
        honeyMoon.setMeals(true);
        honeyMoon.setNights(5);
        honeyMoon.setPriceRange(400000);
        honeyMoon.setVehicle("Car");

        TourSigiriya tourSigiriya = new TourSigiriya();
        tourSigiriya.setAccommodation(true);
        tourSigiriya.setDestination("Sigiriya");
        tourSigiriya.setNights(2);
        tourSigiriya.setPriceRange(25000);
        tourSigiriya.setVehicle("Bus");

        tour.put(TourType.HONEYMOON, honeyMoon);
        tour.put(TourType.TOUR_SIGIRIYA, tourSigiriya);
    }
}
