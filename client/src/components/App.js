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
        <PropertyOnMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxnqidveDd6la-deaxAMAOuZAe5tbTys4"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App)
