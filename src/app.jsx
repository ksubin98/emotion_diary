import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyCalendar from './components/Mycalendar';
import MainDiary from './components/mainDiary';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={['/', '/home']}>
            <MyCalendar />
          </Route>
          <Route path="/MainDiary"> 
            <MainDiary />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
