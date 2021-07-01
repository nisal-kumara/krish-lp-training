import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';

@Controller('owners')
export class OwnersController {

    constructor(private ownersService: OwnersService) {

    }

    @Get()
    getAllOwners(@Query() param: OwnerSearchDto) {
        //note -> video 02 -> 12:30
        if (Object.keys(param).length) {
            return this.ownersService.ownerSearch(param);
        } else {
            return this.ownersService.getAllOwners();
        }
    }

    @Post()
    createOwner(@Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('email') email: string,
        @Body('mobile') mobile: number,
        @Body('refrenceNo') refrenceNo: number,) {

        return this.ownersService.createOwner(firstName, lastName, email, mobile, refrenceNo)

    }

    @Get("/:id")
    getOwnerById(@Param("id") id: string) {
        return this.ownersService.getOwnerById(id);
    }

    @Put("/:id/mobile")
    updateOwner(@Param("id") id: string, @Body() ownerUpdateDto: OwnerUpdateDto) {
        ownerUpdateDto.id = id;
        return this.ownersService.updateOwner(ownerUpdateDto);
    }

    @Delete("/:id")
    //note -> video 02 -> 38:00
    @HttpCode(204)
    deleteOwner(@Param("id") id: string) {
        if (!this.ownersService.deleteOwner(id)) {
            throw new NotFoundException('Owner Does Not Exist');
        }
    }
}
