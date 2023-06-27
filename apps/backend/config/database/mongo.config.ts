import { MongooseModuleOptions } from '@nestjs/mongoose';

export function getMongoDbConfig(): MongooseModuleOptions {
  return {
    useFactory: () => ({
      uri: 'mongodb+srv://pablocornejov:MCM7raxFgDuvhnuc@cluster0.5vjycrh.mongodb.net/?retryWrites=true&w=majority',
      retryAttempts: 1,
      retryDelay: 1,
    }),
  };
}
