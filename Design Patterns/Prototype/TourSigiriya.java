package com.Nisal.Prototype;

public class TourSigiriya extends Tours {

    private String destination;
    private boolean accommodation;

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public boolean isAccommodation() {
        return accommodation;
    }

    public void setAccommodation(boolean accommodation) {
        this.accommodation = accommodation;
    }

    @Override
    public String toString() {
        return "TourSigiriya{" +
                "destination='" + destination + '\'' +
                ", accommodation=" + accommodation +
                '}';
    }
}
