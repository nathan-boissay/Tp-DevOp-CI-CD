import request from 'supertest';
import app from '../src/index.js';

describe('GET /api/status', () => {
  it('should return 200 OK and status JSON', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });
});
