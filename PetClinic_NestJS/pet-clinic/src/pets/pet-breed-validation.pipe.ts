import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { PetBreed } from './pet.model';

@Injectable()
export class PetBreedValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //must watch -> video 03 -> 18:00
    if (!(value.breed.toUpperCase() in PetBreed)) {
      throw new BadRequestException(`${value.breed} is Not a Valid Pet Breed`)
    }
    return value;
  }
}
