import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Teams from '../database/models/Team';
import { away, home } from './mocks/away.mock.test'; 
import { Itable } from '../types/index';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota "leaderboard"', () => {
    describe('GET/', () => {
        
  it('retornando todos os times da casa', async () => {
    const { body, status } = await chai.
    request(app)
    .get('/leaderboard/home');

    expect(status).to.be.equal(200); 
    expect(body).to.deep.equal(home);
  });

  it('retornando apenas os times de fora', async () => {
 
    const { body, status } = await chai.
    request(app)
    .get('/leaderboard/away');

    expect(status).to.be.equal(200); 
    expect(body).to.deep.equal(away);
  });
})
});