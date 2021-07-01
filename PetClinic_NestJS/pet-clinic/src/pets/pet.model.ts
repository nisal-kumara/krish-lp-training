export interface Pet {
    id: string
    petName: string
    petType: PetType
    breed: PetBreed
    refrenceNo: number
}

export enum PetType {
    CAT = "CAT",
    DOG = "DOG",
    OTHER = "OTHER"
}

export enum PetBreed {
    GERMAN_SHEPHERD = "GERMAN_SHEPHERD",
    RETRIEVERS = "RETRIEVERS",
    PERSIAN = "PERSIAN",
    ROTTWEILERS = "ROTTWEILERS"
}