const router = require("express").Router();
const Car = require("../models/car.model");

router.route("/cars").get((req, res) => {
  //get the brand car from the query string(url)
  const { brand } = req.query;

  Car.find()
    .sort({ brand: 1 })
    .then((cars) => {
      let response = cars;
      if (brand) {
        response = cars.filter(
          (car) => car.brand.toLowerCase().includes(brand.toLowerCase())
        );
      }
      res.json(response);
    }) // return in json format the cars from the db
    .catch((err) => res.status(400).json("Error: " + err)); //return status 400 if error
});

module.exports = router;
