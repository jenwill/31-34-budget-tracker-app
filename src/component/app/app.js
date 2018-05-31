import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>Jennifer&#39;s Budget Tracker</h1>
              <p><em>$$$$$$$$$$</em></p>
            </header>
            <Route
              exact
              path="/"
              component={Landing}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
