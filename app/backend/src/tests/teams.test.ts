import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Teams from '../database/models/Team';
import { allTeams } from './mocks/team.mock.test'; 

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota "teams"', () => {
    describe('GET/', () => {
  it('retornando todos os times', async () => {
    sinon
      .stub(Teams, "findAll")
      .resolves(allTeams as Teams[]);

    const { body } = await chai.
    request(app)
    .get('/teams');

    expect(body).to.deep.equal(allTeams);
  });

  it('retornando apenas um time', async () => {
    sinon
      .stub(Teams, "findOne")
      .resolves(allTeams[0] as Teams);

    const { body } = await chai.
    request(app)
    .get('/teams/1');

    expect(body).to.deep.equal(allTeams[0]);
  });
})
});