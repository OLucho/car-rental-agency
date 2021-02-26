import {
  Button,
  Container,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useReservation } from '../../hooks/useReservations';
import ReservationForm from '../form/reservationForm';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
  input: {
    margin: '1rem 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});
export default function ReservationDetail({ id }) {
  const classes = useStyles();
  const history = useHistory();
  const { reservation, getReservationById, deleteReservation, error } = useReservation();

  useEffect(() => {
    getReservationById(id);
  }, [id, getReservationById]);

  const handleDelete = () => {
    try {
      deleteReservation(id);
      history.push('/reservations');
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    history.push('/reservations');
  }

  return (
    <Container>
      <div className={classes.title}>
        <h1>Viewing Reservation with ID {id}</h1>
      </div>

      <form>
        <DialogContent>
          <TextField
            inputProps={{ readOnly: true }}
            autoFocus
            margin="dense"
            id="startDate"
            label="Starting Date"
            type="text"
            name="startDate"
            value={reservation.startDate}
            fullWidth
            required
          />
          <TextField
            inputProps={{ readOnly: true }}
            margin="dense"
            id="finishDate"
            required
            label="Finishing Date"
            type="text"
            value={reservation.finishDate}
            fullWidth
          />
          <TextField
            inputProps={{ readOnly: true }}
            margin="dense"
            id="pricePerDay"
            required
            label="Price Per Day"
            type="text"
            value={reservation.pricePerDay}
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
              />
              <FormControlLabel
                value="CASH"
                control={<Radio color="primary" name="paymentMethod" id="paymentMethod" />}
                label="Cash"
                labelPlacement="start"
                name="paymentMethod"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>

        <div className={classes.buttons}>
          <ReservationForm reservationToUpdate={reservation} />
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Delete Reservation
          </Button>
        </div>
      </form>
    </Container>
  );
}
