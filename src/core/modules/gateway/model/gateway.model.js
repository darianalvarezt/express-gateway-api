const mongoose = require('mongoose')
const net = require('net');

function arrayLimit(val) {
    return val.length <= 10;
  }

const deviceSchema = new mongoose.Schema({
    uid: {
        required: true,
        type: Number,
        unique: true
    },
    vendor: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: Date,
    },
    status: {
        required: true,
        enum : ['online','offline'],
        type: String,
    },
})

const gatewaySchema = new mongoose.Schema({
    serialNumber: {
        required: true,
        type: String,
        unique: true,
    },
    name: {
        required: true,
        type: String,
    },
    ipv4: {
        required: true,
        type: String,
        validate: {
            validator: function(v) {
              return net.isIPv4(v);
            },
            message: props => `${props.value} is not a valid address!`
          },
    },
    devices: {
        type: [deviceSchema],
        validate: [arrayLimit, 'exceeds the limit of 10']
    },
})

const Gateway = mongoose.model('Gateway', gatewaySchema)
module.exports = Gateway