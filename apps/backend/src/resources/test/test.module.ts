import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestController } from 'src/resources/test/test.controller';
import { TestRepository } from 'src/resources/test/test.repository';
import { Test, TestSchema } from 'src/resources/test/test.schema';
import { TestService } from 'src/resources/test/test.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Test.name, schema: TestSchema },
        ]),
    ],
    controllers: [TestController],
    providers: [TestService, TestRepository],
    exports: [TestService],
})
export class TestModule {}
