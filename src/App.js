import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import BeachInfo from './components/Forecast/BeachInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


const Content = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  font-family: 'Raleway', sans-serif;
`;
// test

class App extends Component {
  state = {
    Spot_Name: 'Cabo Frio',
    Beach_Name: 'Praia do Foguete',
     
  };


  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="wrapper">
            <Sidebar />
            <Content>
              <Navbar Beach_Name={this.state.Beach_Name} />
              <Switch>
                //<Route
                  //exact
                  //path="/"
                  //render={props => (
                    <Forecast
                      //{...props}
                      //change={this.change}
                      //value={this.state.Beach_Name}
                      //spotId={this.state.Spot_Name}
                    />
                  )}
                />
              </Switch>
            </Content>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
