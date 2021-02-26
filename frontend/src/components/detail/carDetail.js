import { Button, Container, makeStyles, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCar } from '../../hooks/useCar';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
  input: {
    margin: '1rem 0',
  },
});
export default function CarDetail({ id }) {
  const classes = useStyles();
  const history = useHistory();
  const { car, getCarById, deleteCar } = useCar();

  useEffect(() => {
    getCarById(id);
  }, [id, getCarById]);

  const handleDelete = () => {
    try {
      deleteCar(id);
      history.push('/cars');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className={classes.title}>
        <h1>Viewing Car with ID {id}</h1>
      </div>

      <form>
        <TextField
          required
          className={classes.input}
          id="brand"
          label="Brand"
          fullWidth
          autoComplete="off"
          autoFocus
          defaultValue={car.brand}
          value={car.brand}
        />
        <TextField
          required
          className={classes.input}
          label="Model"
          fullWidth
          autoComplete="off"
          defaultValue={car.model}
          value={car.model}
        />
        <TextField
          required
          className={classes.input}
          label="Year"
          fullWidth
          autoComplete="off"
          defaultValue={car.year}
          value={car.year}
        />
        <TextField
          required
          className={classes.input}
          label="Kilometers"
          fullWidth
          autoComplete="off"
          defaultValue={car.kms}
          value={car.kms}
        />
        <TextField
          required
          className={classes.input}
          label="Price"
          fullWidth
          autoComplete="off"
          defaultValue={car.price}
          value={car.passengers}
        />
        <TextField
          required
          className={classes.input}
          label="Amount of Passengers"
          fullWidth
          autoComplete="off"
          defaultValue={car.passengers}
          value={car.passengers}
        />
        <TextField
          required
          className={classes.input}
          label="Colors"
          fullWidth
          autoComplete="off"
          defaultValue={car.color}
          value={car.color}
        />
        <TextField
          required
          className={classes.input}
          label="Air_conditioning"
          fullWidth
          value={car.air_conditioning}
          autoComplete="off"
          defaultValue={car.air_conditioning}
        />

        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete Car
        </Button>
      </form>
    </Container>
  );
}
