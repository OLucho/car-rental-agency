import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { Alert } from '@material-ui/lab';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { useCar } from '../../hooks/useCar';
import AlertError from '../error';

export default function CarForm() {
  const initialState = {
    brand: '',
    model: '',
    year: '',
    kms: '',
    color: '',
    passengers: '',
    price: '',
    image: 'In construction',
    air_conditioning: '',
  };
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState(initialState);
  const { createCar, error, setError } = useCar();

  const handleClickOpen = () => {
    setCar(initialState);
    setOpen(true);
    setError(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateCar = () => {
    createCar(car);
    if (error) {
      handleClose();
    }
  };

  const handleChange = (e) => {
    setCar({ ...car, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create New Car!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Car</DialogTitle>

        {!error ? (
          <Alert severity="warning">All inputs are required</Alert>
        ) : (
          <AlertError error={error} />
        )}

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="brand"
            label="Brand"
            type="text"
            name="brand"
            value={car.brand}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="model"
            required
            label="Model"
            type="text"
            value={car.model}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
          />
          <TextField
            margin="dense"
            id="year"
            required
            label="Year"
            type="number"
            min="0"
            value={car.year}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
          />{' '}
          <TextField
            margin="dense"
            id="kms"
            required
            label="Kms"
            type="text"
            value={car.kms}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
          />{' '}
          <TextField
            margin="dense"
            id="price"
            required
            label="Price"
            type="number"
            min="0"
            value={car.price}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
          />{' '}
          <TextField
            margin="dense"
            id="passengers"
            required
            label="Amount of passengers"
            type="number"
            min="0"
            value={car.passengers}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
          />{' '}
          <TextField
            margin="dense"
            id="color"
            required
            label="Colors"
            type="text"
            value={car.color}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
          />
          <TextField
            margin="dense"
            id="air_conditioning"
            required
            label="Has Air Conditioning?"
            type="text"
            value={car.air_conditioning}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateCar} color="secondary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
