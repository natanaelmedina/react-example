/* eslint-disable react-hooks/exhaustive-deps */
import React, { } from "react";
import { Routes, Route } from "react-router-dom";
import { Dimmer } from "semantic-ui-react";

//Redux
import { connect } from "react-redux";

//component
import Contact from "./components/Contact";


import './App.css';

function App({ isLoading, isError }) {

  return (
    <Dimmer.Dimmable dimmed={isLoading || isError}>
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Dimmer.Dimmable>
  );
}

function mapStateToProps({ }) {
  return {
 
  };
}

export default connect(mapStateToProps)(App);

