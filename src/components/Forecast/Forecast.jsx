import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BeachInfo from './BeachInfo';

const Content = styled.div`
  height: auto;
  margin: 0;
  .card {
    box-shadow: 0 0 5px 0 #000;
  }
  .charts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 1010px) {
    .charts {
      flex-direction: column;
    }
    .charts > * {
      width: 100%;
    }
  }

  label {
    font-size: 1.5em;
    color: #2fbc1a;
  }
`;

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Dados sobre o pico (dummy data)
      Data: 4,
      City: 'Cabo Frio',
      Beach_Name: '',
      Beach_Name: '',    
      weather: '',
      temperature: 0,
      Wave_Type: '',

      //ratings data
      Quality_Conditions: 0,
      Wave_Primary_Direction: '',
      Wave_Secundary_Direction: '',

      //swell data
      Wave_Min_Height: 0,
      Wave_Max_Height: 0,
      LevelSTR: 0,

    };
  }

  fetchData(Beach_Name) {
    let forecastNumber = 0;
    axios
      .get(
        '../../../alerta-personalizado.json'
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          Data: res.data.Data,
          City: res.data.City,
          Beach_Name: res.data.Beach_Name,
          Beach_Name: res.data.Beach_Name,
          Wave_Type: res.data.Wave_Type,

          //ratings data
          Quality_Conditions: res.data[forecastNumber].Quality_Conditions,

          Wave_Primary_Direction: res.data[forecastNumber].Wave_Primary_Direction,
          Wave_Secundary_Direction: res.data[forecastNumber].Wave_Secundary_Direction,
          //swell data
          Wave_Min_Height: res.data[forecastNumber].Wave_Min_Height,

          Wave_Max_Height: res.data[forecastNumber].Wave_Max_Height,
          LevelSTR: res.data[forecastNumber].LevelSTR

        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchData(this.props.Beach_Name);
  }

  //change spot
  componentDidUpdate(prevProps) {
    if (this.props.Beach_Name !== prevProps.Beach_Name) {
      this.fetchData(this.props.Beach_Name);
    }
  }

  render() {
    const {

      Data,
      City,
      Beach_Name,
      Spot_Name,
      Wave_Type,
      Quality_Conditions,
      Wave_Primary_Direction,
      Wave_Secundary_Direction,
      Wave_Min_Height,
      Wave_Max_Height,
      LevelSTR
    } = this.state;
    return (
      <Content className="container">
        <div className="row mb-3">
          <div className="form-group col-lg-4 col-sm-12 mt-3">
            <label htmlFor="exampleFormControlSelect1">Select your spot</label>
            <select
              className="form-control container"
              id="exampleFormControlSelect1"
              onChange={this.props.change}
              value={this.props.value}
            >
              <option value="Praia do peró">Cabo Frio</option>
              <option value="Praia do Foguete">Cabo Frio</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <BeachInfo
              Data={Data}
              City={City}
              Beach_Name={Beach_Name}
              Spot_Name={Spot_Name}
              Wave_Type={Wave_Type}
              Quality_Conditions={Quality_Conditions}
              Wave_Min_Height={Wave_Min_Height}
              Wave_Max_Height={Wave_Max_Height}
              Wave_Primary_Direction={Wave_Primary_Direction}
              Wave_Secondary_Direction={Wave_Secundary_Direction}
              LevelSTR={LevelSTR}
            />
          </div>
        </div>
      </Content>
    );
  }
}

export default Forecast;
