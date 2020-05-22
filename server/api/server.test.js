const server = require('./server');
const supertest = require('supertest');
const Users = require ('../database/dbConfig');

let token;

beforeAll((done) => {
  supertest(server)
    .post('/api/auth/login')
    .send({
      username: 'user_1',
      password: 'password_1',
    })
    .end((err, response) => {
      token = response.body.token; 
      done();
    });
});

// beforeEach(async () => {
    
//     await db('users').truncate();
//   });


describe('server', () => {
    //test our enviroment's ability to run tests
    
    it('can run some tests', () => {
        expect(true).toBeTruthy();
    })

    //testing /
    describe('GET /', () => {
       it('should return status code 200 OK', () => {
           return (
                supertest(server)
                .get('/')
                .then(response => {
                expect(response.status).toBe(200);
             })
    
            );
       });

       it('should return a JSON object from the server route', async () => {
        const expectedBody = {api: 'This is Spartaaaa!'};
        const response = await supertest(server).get('/');
        expect(response.body).toEqual(expectedBody);
    });
    });


        


        // testing /api/jokes endpoint

        describe("GET /api/jokes", () => {
            it("should require authorization", () => {
              return supertest(server)
                .get("/api/jokes")
                .then(response => {
                    console.log(token);
                    expect(response.statusCode).toBe(400);
                });
            });
          });

          describe("GET /api/jokes", () => {
            it("should allow access when user is autheticated", () => {
              return supertest(server)
                .get("/api/jokes")
                .set('authorization', token)
                .then(response => {
                    console.log(token)
                    expect(response.statusCode).toBe(200);
                    expect()
                    
                });
            });
          });


        describe('GET /api/jokes', () => {
            it('should return an array with 20 elements', () => {
                return supertest(server)
                    .get('/api/jokes')
                    .set('authorization', token)
                    .then(response => {
                        expect(Array.isArray(response.body)).toBe(true)
                        expect(response.body).toHaveLength(20);
                    });
            });
        });


        //test /api/auth/login
        describe('Post /api/aut/login', () => {
            it('should return a status of 500 if no login info are provided ', () => {
                return (
                    supertest(server)
                    .post('/api/auth/login')
                    
                    .then(response => {
                        expect(response.statusCode).toBe(500);
                    })
                )
            });

            it('should return a status of 401 if the wrong login info are provided ', () => {
                return (
                    supertest(server)
                    .post('/api/auth/login')
                    
                    .then(response => {
                        expect(response.statusCode).toBe(500);
                    })
                )
            });
  
        });


            //test /api/auth/register
            it('should insert the provided user into the db', async () => {
                let user = await Users.add({ username: 'user_y', password: 'mypassword' });
                expect(user.username).toBe('user_y');
                expect(user.password).toBe('mypassword')
                
              });

              it('should return a status of 500 if a bad request is made', async() => { return (
                supertest(server)
                .post('/api/auth/register')
                
                .then(response => {
                    expect(response.statusCode).toBe(500);
                })
            )
              })








});


