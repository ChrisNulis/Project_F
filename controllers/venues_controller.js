const express = require('express')
const venues = express.Router()
const Venues = require('../models/venues.js')
const venuesSeed = require('../models/venues_seed.js')

venues.get('/', (req, res) => {
  Venues.find({}, (err, foundVenues) => {
    res.json(foundVenues)
  })
})

venues.post('/', (req, res) => {
  Venues.create(req.body, (err, createVenues) => {
    Venues.find({}, (err, foundVenues) => {
      res.json(foundVenues)
    })
  })
})

venues.get('/seed', (req, res) => {
  Venues.insertMany(venueSeed, (err, manyVenues) => {
    res.redirect('/place')
  })
})

venues.put('/:id', (req, res) => {
  Venues.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedVenues) => {
      if (err) {
        res.send(err)
      } else {
        Venues.find({}, (err, foundVenues) => {
          res.json(foundVenues)
        })
      }
    }
  )
})

venues.delete('/:id', (req, res) => {
  Venues.findByIdAndRemove(req.params.id, (err, deletedVenues) => {
    Venues.find({}, (err, foundVenues) => {
      res.json(foundVenues)
    })
  })
})


module.exports = venues
