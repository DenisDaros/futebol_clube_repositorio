import * as chai from 'chai'; //para fazer as requisiçoes 
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http')

import { userLogin, userPasswordIncorrect } from './mocks/login.mock.test';

chai.use(chaiHttp)

const { expect } = chai;

describe('testando a rota "login"', () => {
    describe('POST/', () => {
it('deve retornar um status 400 com a mensagem "All fields must be filled"', async () => {
    const httpResponse = await chai
    .request(app)
    .post('/login')
    .send({})
    expect(httpResponse.status).to.equal(400)
    expect(httpResponse.body).to.deep.equal({
        "message": "All fields must be filled"
      })
})

it('deve retornar um status 200', async () => {
    const httpResponse = await chai
    .request(app)
    .post('/login')
    .send(userLogin)
    expect(httpResponse.status).to.equal(200)
    expect(httpResponse.body).to.have.all.keys(['token'])
})

it('deve retornar um status 401 com a mensagem "Incorrect email or password"', async () => {
    const httpResponse = await chai
    .request(app)
    .post('/login')
    .send(userPasswordIncorrect)
    expect(httpResponse.status).to.equal(401)
    expect(httpResponse.body).to.deep.equal({
        "message": "Incorrect email or password"
      })
})

    })
})