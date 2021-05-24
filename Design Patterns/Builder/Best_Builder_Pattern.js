class Tours {
    constructor(destination, vehicle) {
        this.destination = destination;
        this.vehicle = vehicle;
    }
}

class HotelBooking {
    constructor(roomType, nights, { barAccess, gymAccess, tours, pets } = {}) {
        this.roomType = roomType;
        this.nights = nights;
        this.barAccess = barAccess;
        this.gymAccess = gymAccess;
        this.tours = tours;
        this.pets = pets;
    }
}

let hotel5 = new HotelBooking("Luxury", 3, { barAccess: true });
console.log(hotel5);

let hotel6 = new HotelBooking("Regular", 7, { barAccess: true, tours: new Tours("Kandy", "Car") });
console.log(hotel6);