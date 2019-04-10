const express = require('express'),
	router = express.Router();

const dinosaurs = require('../dinosaurs');
const dinolist = dinosaurs.dinosaurs;

router.get('/', (req, res, next) => {
  res.status(200).json(dinosaurs);
});

router.get('/:id', (req, res, next) => {
	let id = req.params.id;
	let foundDino;
	for(let dino of dinolist){
		if (dino.id === id) {
			foundDino = dino;
		}
	}
	if(!foundDino){
		foundDino = {error: "failed to find dino"}
	}
  res.status(200).json(foundDino);
});

module.exports = router;