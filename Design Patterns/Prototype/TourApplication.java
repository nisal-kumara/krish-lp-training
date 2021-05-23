package com.Nisal.Prototype;

public class TourApplication {

    public static void main(String[] args) throws CloneNotSupportedException {

        TourReg tourReg = new TourReg();

        TourSigiriya tourSigiriya = (TourSigiriya) tourReg.getTours(TourType.TOUR_SIGIRIYA);
        System.out.println(tourSigiriya);

        tourSigiriya.setAccommodation(false);
        tourSigiriya.setPriceRange(15000);

        System.out.println(tourSigiriya);

        TourSigiriya tourSigiriya1 = (TourSigiriya) tourReg.getTours(TourType.TOUR_SIGIRIYA);
        System.out.println(tourSigiriya1);

    }
}
