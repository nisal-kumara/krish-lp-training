class Tours {
    constructor(destination, vehicle) {
        this.destination = destination;
        this.vehicle = vehicle;
    }
}

class HotelBooking {
    constructor(roomType, nights, barAccess, gymAccess, tours, pets) {
        this.roomType = roomType;
        this.nights = nights;
        this.barAccess = barAccess;
        this.gymAccess = gymAccess;
        this.tours = tours;
        this.pets = pets;
    }
}

const hotel1 = new HotelBooking("Luxury");
console.log(hotel1);

const hotel2 = new HotelBooking("Luxury", undefined, undefined, undefined, new Tours("Sigiriya", "car"));
console.log(hotel2);