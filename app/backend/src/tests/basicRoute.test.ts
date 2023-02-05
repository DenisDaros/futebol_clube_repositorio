import * as chai from 'chai'; //para fazer as requisiçoes 
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http')

chai.use(chaiHttp)

const { expect } = chai;

describe('testando a rota básica do "app"', () => {
    describe('GET/', () => {
it('deve retornar um status 200 com a mensagem "ok" na raiz do projeto', async () => {
    const httpResponse = await chai
    .request(app)
    .get('/')
    expect(httpResponse.status).to.equal(200)
    expect(httpResponse.body).to.deep.equal({ 'ok': true })
})
    })
})