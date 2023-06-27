import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoDbConfig } from 'config/database/mongo.config';
import { TestModule } from 'src/resources/test/test.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'frontend/dist'),
    }),
    MongooseModule.forRootAsync(getMongoDbConfig()),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
