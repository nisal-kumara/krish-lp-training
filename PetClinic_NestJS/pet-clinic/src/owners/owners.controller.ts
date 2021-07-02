import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Owner } from 'src/schemas/Owner.schema';
import { OwnerCreateDto } from './Owner-DTOs/OwnerCreate.dto';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './Owner-DTOs/OwnerSearch.dto';
import { OwnerUpdateDto } from './Owner-DTOs/OwnerUpdate.dto';

@Controller('owners')
export class OwnersController {

    constructor(private ownersService: OwnersService) {

    }

    @Get()
    @UsePipes(ValidationPipe)
    async getAllOwners(@Query() param: OwnerSearchDto): Promise<Owner[]> {
        // return await this.ownersService.getAllOwners();
        if (Object.keys(param).length) {
            return this.ownersService.ownerSearch(param)
        } else {
            return this.ownersService.getAllOwners()
        }
    }

    @Post()
    //note -> video 03 -> 10:35
    @UsePipes(ValidationPipe)
    createOwner(@Body() ownerCreateDto: OwnerCreateDto): Promise<Owner> {
        return this.ownersService.createOwner(ownerCreateDto)
    }

    @Get("/:id")
    getOwnerById(@Param("id") id: string): Promise<Owner> {
        return this.ownersService.getOwnerById(id);
    }

    @Put("/:id/mobile")
    updateOwner(@Param("id") id: string, @Body() ownerUpdateDto: OwnerUpdateDto): Promise<Owner> {
        ownerUpdateDto.id = id;
        return this.ownersService.updateOwner(ownerUpdateDto);
    }

    @Delete("/:id")
    //note -> video 02 -> 38:00
    @HttpCode(204)
    async deleteOwner(@Param("id") id: string) {
        let deleteO = await this.ownersService.deleteOwner(id);
        if (!deleteO) {
            throw new NotFoundException('Owner Does Not Exist');
        }
    }
}
