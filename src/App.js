import React from 'react';
import './App.css';
import StudentsTable from './components/Table';
import Details from './components/Details';
import AddStudent from './components/AddStudent';
import NotFound from './components/NotFound';
import NavBar from './components/layout/AppBar';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Container maxWidth='sm'>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={StudentsTable} />
            <Route exact path='/add' component={AddStudent} />
            <Route exact path='/:id' component={Details} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
