class Tours {
    constructor(destination, vehicle) {
        this.destination = destination;
        this.vehicle = vehicle;
    }
}

class HotelBooking {
    constructor(roomType, nights) {
        this.roomType = roomType;
        this.nights = nights;
    }
}

class HotelBuilder {
    constructor(roomType, nights) {

        this.hBooking = new HotelBooking(roomType, nights);
    }

    setBarAccess(barAccess) {
        this.hBooking.barAccess = barAccess;
        return this;
    }

    setGymAccess(gymAccess) {
        this.hBooking.gymAccess = gymAccess;
        return this;
    }

    setTours(tours) {
        this.hBooking.tours = tours;
        return this;
    }

    setPets(pets) {
        this.hBooking.pets = pets;
        return this;
    }

    build() {
        return this.hBooking;
    }
}

let hotel3 = new HotelBuilder('Luxury', 5).setBarAccess(true).build();
console.log(hotel3);

let hotel4 = new HotelBuilder('Regular', 3).setBarAccess(true).setTours(new Tours("Hikkaduwa", "Car")).build();
console.log(hotel4);

