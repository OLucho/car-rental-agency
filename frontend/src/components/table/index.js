/* eslint-disable array-callback-return */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'cadetblue',
    color: 'white',
  },
  anchor: {
    textDecoration: 'none',
    color: 'white',
  },
});

export default function BasicTable({ thData, tbData, type }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (type, id) => {
    console.log(type, id);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {thData.map((th) => (
              <TableCell key={th}>{th}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tbData.map((row) => (
            <TableRow>
              {row.map((el) => (
                <TableCell component="th" scope="row">
                  {el}
                </TableCell>
              ))}

              <div className={classes.button}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  Actions
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Button variant="contained" color="primary">
                      <Link to={`/${type}/${row[0]}`} className={classes.anchor}>
                        See Details
                      </Link>
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(type, row[0])}
                    >
                      Delete
                    </Button>
                  </MenuItem>
                </Menu>
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
