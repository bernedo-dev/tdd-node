const handlers = require('./index');

describe('Endpoints', () => {
    describe('users', () => {
        describe('get', () => {
            it('return to user json', async ()=>{
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1 })
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                await handlers({axios}).get({}, res);
                expect(res.status.mock.calls).toEqual([
                    [200]
                ]);
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])
            });
        });

        describe('post', () => {
            it('creates a resource', async () => {
                const axios = {
                    post: jest.fn().mockResolvedValue({ data: 1 })
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                };
                const req = {
                    body: 'request body'
                };
                await handlers({axios}).post(req,res);
                expect(res.status.mock.calls).toEqual([
                    [201]
                ]);
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])
                expect(axios.post.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users', 'request body']
                ])
            });  
        });
    });
});