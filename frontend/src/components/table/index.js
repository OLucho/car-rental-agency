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

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {thData.map((th) => (
              <TableCell align="center" key={th}>
                {th}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tbData.map((item) => (
            <>
              <TableRow>
                {item.map((row) => (
                  <TableCell align="center">{row}</TableCell>
                ))}
                <>
                  <div>
                    <Button className={classes.button}>
                      <Link to={`/${type}/${item[0]}`} className={classes.anchor}>
                        See Details
                      </Link>
                    </Button>
                  </div>
                </>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
