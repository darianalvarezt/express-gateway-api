const express = require('express');

const Gateway = require('../modules/gateway/model/gateway.model');

const router = express.Router()

//Post Gateway
router.post('/', async (req, res) => {
    const gateway = new Gateway({
        serialNumber: req.body.serialNumber,
        name: req.body.name,
        ipv4: req.body.ipv4,
        devices: req.body.devices
    })

    try{
        const dataToSave = await gateway.save()
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get all Gateways
router.get('/', async (req, res) => {
    try{
        const gateways = await Gateway.find()
        res.json(gateways)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get Gateway by ID
router.get('/:id', async(req, res) => {
    try{
        const gateway = await Gateway.findById(req.params.id);
        res.json(gateway)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update Gateway by ID
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true, runValidators: true };

        const result = await Gateway.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete Gateway by ID
router.delete('/', async (req, res) => {
    try {
        const data = await Gateway.deleteMany({
            _id: {
              $in: req.body.ids
            }
          })
        res.send(`Documents ${data} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;