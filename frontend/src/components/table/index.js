/* eslint-disable array-callback-return */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    background: 'blue',
    color: 'white',
  },
});

export default function BasicTable({ thData, tbData }) {
  const classes = useStyles();

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
              <Button size="small" className={classes.button}>
                Details
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
