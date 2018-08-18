import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropertyOnMap from './PropertyOnMap';


class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <PropertyOnMap />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App)
