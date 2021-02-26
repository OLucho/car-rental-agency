import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { Alert } from '@material-ui/lab';
import Header from '../../components/header';
import Table from '../../components/table';
import { useCar } from '../../hooks/useCar';
import CarForm from '../../components/form/carForm';
import AlertError from '../../components/error/alertError';

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

export default function ClientsPage() {
  const classes = useStyles();

  const { getAllCars, clients, status, setStatus, error } = useClient();

  useEffect(() => {
    getAllCars();
  }, [getAllCars, setStatus, status]);

  const tbData = clients.map((car) => Object.values(car));
  return (
    <>
      <Header />
      <div className={classes.title}>
        <h1>Clients Management</h1>
        <h3>There are {clients.length} clients</h3>
        {status && (
          <Alert className={classes.alert} severity="success">
            {status}
          </Alert>
        )}
        {error && <AlertError error={error} />}
        <CarForm />
      </div>
      {clients.length > 0 && <Table thData={thRow} tbData={tbData} type="car" />}
    </>
  );
}
