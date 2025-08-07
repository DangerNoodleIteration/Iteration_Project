import request from 'supertest';

const server = 'http://localhost:3000';

describe('Route Test', () => {
  describe('/:length', () => {
    test('responds with 200 status and json content type', () => {
      return request(server)
        .get('/api/words/3')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    });
  });
});
