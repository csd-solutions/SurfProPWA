import React from "react";

class Forecast extends React.Component {
  state = {
    Quality_Conditions: undefined,
    city: undefined,
    Spot_Name: undefined,
    ID_Pico_Certo: undefined,
    Wave_Primary_Direction: undefined,
    Wave_Primary_Direction: undefined,
    Wave_Min_Height: undefined,
    Wave_Max_Height: undefined,
    Water_Temperature: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const ID_Pico_Certo = e.target.elements.ID_Pico_Certo.value;
    const Spot = e.target.elements.Spot_Name.value;
    const api_call = await fetch('http://demo6039565.mockable.io/PrevisaoOPC');
    const data = await api_call.json();
    console.logo(data)
    if (ID_Pico_Certo && Spot) {
      this.setState({
        Quality_Conditions: data.Quality_Conditions,
        city: data.city,
        Spot_Name: data.Spot_Name,
        ID_Pico_Certo: data.ID_Pico_Certo,
        Wave_Type: data.Wave_Type,
        Wave_Primary_Direction: data.Wave_Primary_Direction,
        Wave_Primary_Direction: data.Wave_Primary_Direction,
        Wave_Min_Height: data.Wave_Min_Height,
        Wave_Max_Height: data.Wave_Max_Height,
        Water_Temperature: data.Water_Temperature,        
        error: ""
      });
    } else {
      this.setState({
        Quality_Conditions: undefined,
        city: undefined,
        Spot_Name: undefined,
        ID_Pico_Certo: undefined,
        Wave_Primary_Direction: undefined,
        Wave_Primary_Direction: undefined,
        Wave_Min_Height: undefined,
        Wave_Max_Height: undefined,
        Water_Temperature: undefined,
        error: "Please enter the values."
      });
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
