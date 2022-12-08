const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/github');
const agent = request.agent(app);

describe('post routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET allows authenticated user to view all posts', async () => {
    await agent.get('/api/v1/github/callback?code=42');
    const res = await agent.get('/api/v1/posts');

    expect(res.status).toEqual(200);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      content: expect.any(String),
    });
  });
  it('#POST allows authenticated users to create posts', async () => {
    const mockPost = {
      title: 'Irish music rocks',
      content: 'Yall be trippin, nothing beats Irish music. High Kings 4ever, yo.',
    };

    await agent.get('/api/v1/github/callback?code=42');
    const res = await agent.post('/api/v1/posts').send(mockPost);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      title: 'Irish music rocks',
      content: 'Yall be trippin, nothing beats Irish music. High Kings 4ever, yo.',
    });
    
  });
  
  afterAll(() => {
    pool.end();
  });
});
