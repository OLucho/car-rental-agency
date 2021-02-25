import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import { useCar } from '../../hooks/useCar';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
  alert: {
    margin: '1rem 0',
  },
});
export default function DetailPage() {
  const { type, id } = useParams();
  const classes = useStyles();

  const [data, setData] = useState('');
  const { car, getCarById } = useCar();

  useEffect(() => {
    if (type === 'car') {
      getCarById(id);
      setData(car);
    }
  }, []);
  return (
    <>
      <Header />
      <div className={classes.title}>
        <h1>
          Viewing {type} with ID {id}
        </h1>
      </div>
    </>
  );
}
