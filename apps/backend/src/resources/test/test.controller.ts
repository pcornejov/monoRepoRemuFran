import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { TestService } from 'src/resources/test/test.service';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get('testEndPoint')
    async requestAccess() {
        return await this.testService.test();
    }
}
