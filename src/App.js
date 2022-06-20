import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppBody>
          <Switch>
            <Route exact path="/">
              {/* Chat */}
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div``;