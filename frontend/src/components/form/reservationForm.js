import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { Alert } from '@material-ui/lab';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { useReservation } from '../../hooks/useReservations';
import AlertError from '../error';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

export default function ReservationForm() {
  const initialState = {
    firstName: '',
    lastName: '',
    nationality: '',
    address: '',
    phoneNumber: '',
    dni: '',
    email: '',
  };
  const [open, setOpen] = useState(false);
  const [reservation, setReservation] = useState(initialState);
  const { createReservation, error, setError } = useReservation();

  const handleClickOpen = () => {
    setError(false);
    setReservation(initialState);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateReservation = (e) => {
    e.preventDefault();
    createReservation(reservation);
    if (!error) {
      handleClose();
    }
  };

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create New Reservation!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Reservation</DialogTitle>

        {!error ? (
          <Alert severity="warning" style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Dates must have this format "YYYY/MM/DD" ex: "2021/03/15"
          </Alert>
        ) : (
          <AlertError error={error} />
        )}

        <form onSubmit={handleCreateReservation}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="startDate"
              label="Starting Date"
              type="text"
              name="startDate"
              value={reservation.startDate}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="finishDate"
              required
              label="Finishing Date"
              type="text"
              value={reservation.finishDate}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              fullWidth
            />
            <TextField
              margin="dense"
              id="pricePerDay"
              required
              label="Price Per Day"
              type="text"
              value={reservation.pricePerDay}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              fullWidth
            />

            <FormControl component="fieldset">
              <FormLabel component="legend">Payment Method</FormLabel>
              <RadioGroup row aria-label="position" id="paymentMethod">
                <FormControlLabel
                  value="CREDIT_CARD"
                  id="paymentMethod"
                  control={<Radio color="primary" id="paymentMethod" />}
                  label="Credit Card"
                  labelPlacement="start"
                  name="paymentMethod"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="CASH"
                  control={
                    <Radio
                      color="primary"
                      name="paymentMethod"
                      id="paymentMethod"
                      onChange={(e) => handleChange(e)}
                    />
                  }
                  label="Cash"
                  labelPlacement="start"
                  name="paymentMethod"
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="secondary">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
