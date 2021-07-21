import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes';
import Create from './pages/Create';
import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors';
import Layout from './component/Layout';
import EmpTable from './pages/EmpTable';
import Add from './pages/Add';
import Edit from './pages/Edit';
import View from './pages/View';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontweightLight: 400,
    fontweightLight: 500,
    fontweightLight: 600,
    fontweightLight: 700,
  }
})

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/table'>
              <EmpTable />
            </Route>
            <Route exact path='/add'>
              <Add />
            </Route>
            <Route exact path='/edit'>
              <Edit />
            </Route>
            <Route exact path='/view'>
              <View />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;
