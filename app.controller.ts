import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { YourDto } from './dto';

// @ts-ignore
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    // @ts-ignore
    @Get()
    getData() {
        return this.appService.getData();
    }

    // @ts-ignore

    @Post()
    // @ts-ignore
    postData(@Body() data: YourDto) {
        return this.appService.postData(data);
    }
}
