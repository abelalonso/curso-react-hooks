import React, { useState } from 'react';
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core';

import styles from './styles'

export default () => {
  const [searchText, setsearchText] = useState ('')
  const classes = styles();
  const handleSearchTextChange = (event) => {
    setsearchText(event.targetvalue)
  }

  const handleCleanTextClick = (event) => {}
  const handleSearchTextClick = (event) => {}

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          className={classes.texfieldSearch}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
        ></TextField>
        <Grid className={classes.buttonsContainer}>
          <Button
            variant="contained"
            onClick={handleCleanTextClick}
          >Limpiar</Button>
          <Button
            variant="contained"
            className={classes.searchButton}
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
          >Buscar</Button>
        </Grid>
      </Card>
    </Container>
  )
}