import { corsConfig } from 'config/cors/cors.config';

describe('CORS config', () => {
  it('should have cors configuration', () => {
    expect(corsConfig).toHaveProperty('origin');
  });
});
