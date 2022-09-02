const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3002/api/gateway');

const newGateway = {
    "serialNumber": "some other serial number",
    "name": "human readable name",
    "ipv4": "192.168.1.3",
    "devices": [
        {
            "uid": 12345,
            "vendor": "lenovo",
            "date": new Date(),
            "status": "online"
        }
    ]
}

describe('Unit test',function(){
  
    it('should get all gateways', function(done) {
  
      server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        should(res.status).equal(200);
        should(res.body.error).equal(undefined);
        done();
      });
    });

    it('should add a new gateway', function(done) {

        server
        .post('/')
        .send(newGateway)
        .expect('Content-type', /json/)
        .expect(200)
        .end(function(err, res) {
          should(res.status).equal(200);
          should(res.body.error).equal(undefined);
          done();
        });
    });
  
  });