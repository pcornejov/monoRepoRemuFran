import { getMongoDbConfig } from 'config/database/mongo.config';

describe('Mongo config', () => {
  describe('getMongoDbConfig', () => {
    it('should have mongo configuration', () => {
      expect(getMongoDbConfig()).toHaveProperty('useFactory');
      expect(getMongoDbConfig()).toHaveProperty('inject');
    });
  });
});
