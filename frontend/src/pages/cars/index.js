/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Table from '../../components/table';
import { useCar } from '../../hooks/useCar';

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
  'created_at',
  'updated_at',
];
const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
});
export default function CarsPage() {
  const classes = useStyles();

  const { getAllCars, cars, setCars } = useCar();
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
      </div>
      {cars.length > 0 ? <Table thData={thRow} tbData={tbData} /> : <p>There are no cars</p>}
    </>
  );
}
