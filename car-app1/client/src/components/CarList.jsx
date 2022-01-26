import React, { useState, useEffect } from "react";
import axios from "axios";
import Car from "./CarCard";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


//maneira d passar classes em material ui// 
const classes = {
  select: {
    marginTop: 20,
    marginBottom: 20,
  },
  search: {
    marginBottom: 20,
  },
};

export default function CarList() {
  const [selectedBrand, setBrand] = useState("");
  const [filter, setFilter] = useState("");
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]); //servidor 
  const [allCars, setAllCars] = useState([]); // p n ir ao servidor 

  const getCars = async (brand) => {
    try {
      let url = "/cars";
      if (brand) {
        url += `?brand=${brand}`;
      }
      const response = await axios.get(url);
      setCars(response.data);
      setAllCars(response.data);
      setBrands([...new Set(response.data.map((car) => car.brand))]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setBrand(event.target.value);
    getCars(event.target.value);
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getCars(undefined);
  }, []);

  return (
    <Container maxWidth="m">
      <FormControl fullWidth style={classes.select}>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedBrand}
          label="Brand"
          onChange={handleChange}
        >
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="filled-search"
        label="Filter by model"
        type="search"
        variant="filled"
        value={filter}
        onChange={(event) => {
          const { value } = event.target;
          setFilter(value);
          setCars(
            allCars.filter((car) =>
              car.model.toLowerCase().includes(event.target.value.toLowerCase())
            )
          );
        }}
        fullWidth
        style={classes.search}
      />
      //* mapping the cars from the server//**** 
      <Grid container spacing={2}>
      
        {cars.map((car) => (
          <Grid key={car._id} item xs={6}>
            <Car key={car._id} car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
