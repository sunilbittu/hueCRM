import {Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {ApiEndpointTitlesEnum} from '../shared/enums/api-endpoint-titles.enum';
import {ApiParamsEnum} from '../shared/enums/api-params.enum';
import {ApiPathsEnum} from '../shared/enums/api-paths.enum';
import {UserDto} from './dto/user.dto';
import {UserInterface} from './interfaces/user.interface';
import {UserService} from './user.service';

@Controller(ApiPathsEnum.user)
@ApiUseTags(ApiEndpointTitlesEnum.user)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiOperation({title: ApiEndpointTitlesEnum.userPost})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
        async create(@Query() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Get()
    @ApiOperation({title: ApiEndpointTitlesEnum.userGet})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
        async findAll(): Promise<UserInterface[]> {
        return this.userService.findAll();
    }

    @Get(ApiPathsEnum.id)
    @ApiOperation({title: ApiEndpointTitlesEnum.userGetById})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
        async find(@Param(ApiParamsEnum.id) id: string) {
        return this.userService.find(id);
    }

    @Put(ApiPathsEnum.id)
    @ApiOperation({title: ApiEndpointTitlesEnum.userPut})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
        async update(@Param(ApiParamsEnum.id) id: string, @Query() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }

    @Delete(ApiPathsEnum.id)
    @ApiOperation({title: ApiEndpointTitlesEnum.userDelete})
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @UsePipes(new ValidationPipe({transform: true}))
        async delete(@Param(ApiParamsEnum.id) id: string, @Query() userDto: UserDto) {
        return this.userService.delete(id, userDto);
    }
}