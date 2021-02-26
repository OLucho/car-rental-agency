import { Button, Container, makeStyles, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useClient } from '../../hooks/useClient';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
  input: {
    margin: '1rem 0',
  },
});
export default function ClientDetail({ id }) {
  const classes = useStyles();
  const history = useHistory();
  const { client, getClientById, deleteClient } = useClient();

  useEffect(() => {
    getClientById(id);
  }, [id, getClientById]);

  const handleDelete = () => {
    try {
      deleteClient(id);
      history.push('/clients');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div className={classes.title}>
        <h1>Viewing Client with ID {id}</h1>
      </div>

      <form>
        <TextField
          required
          className={classes.input}
          id="first-name"
          label="First Name"
          fullWidth
          autoComplete="off"
          autoFocus
          defaultValue={client.firstName}
          value={client.firstName}
        />
        <TextField
          required
          className={classes.input}
          label="Last Name"
          fullWidth
          autoComplete="off"
          defaultValue={client.lastName}
          value={client.lastName}
        />
        <TextField
          required
          className={classes.input}
          label="Nationality"
          fullWidth
          autoComplete="off"
          defaultValue={client.nationality}
          value={client.nationality}
        />
        <TextField
          required
          className={classes.input}
          label="Address"
          fullWidth
          autoComplete="off"
          defaultValue={client.address}
          value={client.address}
        />
        <TextField
          required
          className={classes.input}
          label="Phone number"
          fullWidth
          autoComplete="off"
          defaultValue={client.phoneNumber}
          value={client.phoneNumber}
        />
        <TextField
          required
          className={classes.input}
          label="Email"
          fullWidth
          autoComplete="off"
          defaultValue={client.email}
          value={client.email}
        />

        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete Client
        </Button>
      </form>
    </Container>
  );
}
