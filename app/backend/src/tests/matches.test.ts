import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Match from '../database/models/Match';
import { keysMatch, createMatch, saveMatch, keysMatchFalse, keysMatchTrue } from './mocks/matches.mock.test';
import { token, userLogin } from './mocks/login.mock.test';
import { Imatch } from '../types/index';
import { request } from 'http';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota "matches"', () => {
    describe('GET/', async () => {
        afterEach(sinon.restore);

it('deve retornar um status 200 com as propriedades corretas', async () => {
    sinon
    .stub(Match, "findAll")
    .resolves(keysMatch as unknown as Match[]);

    const { body, status } = await chai
    .request(app)
    .get('/matches')
    expect(status).to.equal(200)
    expect(body).to.deep.equal(keysMatch)
})

it('deve retornar um status 200 com as propriedades corretas', async () => {
    sinon
    .stub(Match, "findAll")
    .resolves(keysMatchTrue as unknown as Match[]);

    const { body, status } = await chai
    .request(app)
    .get('/matches?inProgress=true')
    expect(status).to.be.equal(200)
    expect(body).to.deep.equal(keysMatchTrue)

})

it('deve retornar um status 200 com as propriedades corretas', async () => {
    sinon
    .stub(Match, "findAll")
    .resolves(keysMatchFalse as unknown as Match[]);

    const { body, status } = await chai
    .request(app)
    .get('/matches?inProgress=false')
    expect(status).to.be.equal(200)
    expect(body).to.deep.equal(keysMatchFalse)

})

it('deve retornar um status 401 com a mensagem "Token must be a valid token"', async () => {
    sinon
    .stub(Match, "create")
    .resolves(createMatch as unknown as Match); 

    const { body, status } = await chai
    .request(app) 
    .post('/matches') 
    .send(saveMatch) 
    .set('authorization', token); 

    expect(status).to.be.equal(401);  
    expect(body).to.be.deep.equal({
        "message": "Token must be a valid token"
      });
  });

  it('deve retornar um status 201 com o objeto criado', async () => {

    const result = await chai.request(app).post('/login').send(userLogin);

    const tokenvalid = result.body.token;
 
    sinon
    .stub(Match, "create")
    .resolves(createMatch as unknown as Match); 

    const { body, status } = await chai
    .request(app) 
    .post('/matches') 
    .send(saveMatch) 
    .set('authorization', tokenvalid); 

    expect(status).to.be.equal(201);  
    expect(body).to.be.deep.equal(createMatch);
  });

    })
})