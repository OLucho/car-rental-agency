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
  'ID',
  'Brand',
  'Model',
  'Year',
  'Kms',
  'Color',
  'Amount Of Passengers',
  'price',
  'image',
  'Has Air Conditioning?',
];
const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
  alert: {
    margin: '1rem 0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function CarsPage() {
  const classes = useStyles();

  const { getAllCars, cars, status, setStatus } = useCar();
  useEffect(() => {
    getAllCars();
  }, [getAllCars, setStatus, status]);

  const tbData = cars.map((car) => Object.values(car));
  return (
    <>
      <Header />
      <div className={classes.title}>
        <h1>Cars Management</h1>
        <h3>There are {cars.length} cars</h3>
        {status && (
          <Alert className={classes.alert} severity="success">
            {status}
          </Alert>
        )}
        <CarForm />
      </div>
      {cars.length > 0 && <Table thData={thRow} tbData={tbData} type="car" />}
    </>
  );
}
