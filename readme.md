# React Hooks: Guía inicial utilizando Redux y Material.UI

1. [Contenido](#content)


<a name=content></a>


## 1. Contenido

- React Js: Hooks
- React-Redux(7.1.0): useSelector/useDispatch
- Redux Saga
- Material UI
- Consumir API (Axios)
- Deploy en Heroku

## 2. Creación del proyecto

### Esqueleto
Utilizaremos el siguiente repositorio como base:
https://github.com/code-starters/react-redux-saga-router-skeleton

Debemos actualizar las dependencias obsoletas del *package.json*.

### Eliminar archivos innecesarios
Eliminamos del esqueleto del proyecto el código que no necesitamos:
- Eliminamos el componente User.
- Eliminamos el contenido del archivo actionTypes dentro de consts.
- Dentro de la carpeta redux/actions eliominamos el archivo demoActions.
- Vaciamos el contenido de redux/api/index.js.
- Eliminamos de redux/saga los archivos demoSaga.js y watcher.js
- Eliminamos watchDemo del redux/saga/index.js para evitar conflictos.
~~~
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([]);
}

~~~
- El index.js de pages/Home lo dejamos vacío.
~~~
import React from 'react';

export default () => (<div>Home</div>)
~~~

### Instalación de Material-UI

Instalamos la librería mediante el comando

```npm install @material-ui/core```

Cargamos la fuente por defecto en el index.html de la carpeta public

```<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />```

### Creación del Home Component
Creamos el template con los distintos elementos que tendrá la página:
~~~
  return (
    <Container>
      <Card>
        <Grid container>
          <Grid>
            <Typography>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
        ></TextField>
        <Grid>
          <Button variant="container" onClick={handleCleanTextClick}>Limpiar</Button>
          <Button variant="container" color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
        </Grid>
      </Card>
    </Container>
  )
~~~

Declaramos las constantes para las funciones de los botones que definiremos más adelante:
~~~
  const handleCleanTextClick = (event) => {}
  const handleSearchTextClick = (event) => {}
~~~

### Aplicación de estilos

Añadimos las clases necesarias a los elementos del template que lo necesitan:
~~~
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
          <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
          <Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
        </Grid>
      </Card>
    </Container>
  )
~~~

Creamos un nuevo archivo que contendrá los estilos de Home Component: *styles.js*.
~~~
import { makeStyles } from '@material-ui/core';

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center'
}

export default makeStyles ({
  container: {
    height: '100vh',
    flexDirection: "column",
    ...centeredStyleObj
  },
  cardContainer: {
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: "2rem",
    ...centeredStyleObj
  },
  title: {
    fontSize: "4rem"
  },
  titleGridContainer: {
    ...centeredStyleObj
  },
  textFieldSarch: {
    width: '90%'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  buttonsContainer: {
    marginTop: '.5rem'
  }
});
~~~

Este archivo deberá importarse en el componente para que las clases se apliquen correctamente:

~~~
...

import styles from './styles'

export default () => {
  const [searchText, setsearchText] = useState ('')
  const classes = styles();

...
~~~