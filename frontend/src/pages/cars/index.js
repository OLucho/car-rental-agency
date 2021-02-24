/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import Header from '../../components/header';
import Table from '../../components/table';
import { useCar } from '../../hooks/useCar';
import CarForm from '../../components/form/carForm';

const thRow = [
  'id',
  'brand',
  'model',
  'year',
  'kms',
  'color',
  'passengers',
  'price',
  'image',
  'air_conditioning',
];
const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
  alert: {
    margin: '1rem 0',
  },
});

export default function CarsPage() {
  const classes = useStyles();

  const { getAllCars, cars, car: newCar } = useCar();
  useEffect(() => {
    getAllCars();
  }, [getAllCars]);

  const tbData = cars.map((car) => Object.values(car));
  return (
    <>
      <Header />
      <div className={classes.title}>
        <h1>Cars Management</h1>
        <h3>There are {cars.length} cars</h3>
        {newCar && (
          <Alert className={classes.alert} severity="success">
            New car has been created correctly with id: {newCar.id}
          </Alert>
        )}
        <CarForm />
      </div>
      {cars.length > 0 ? <Table thData={thRow} tbData={tbData} /> : <p>There are no cars</p>}
    </>
  );
}
