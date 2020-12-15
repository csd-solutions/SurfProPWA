import React from 'react';

const BeachInfo = ({ Beach_Name, Spot_Name, Wave_Type, Wave_Primary_Direction, Wave_Secondary_Direction, LevelSTR }) => {
  return (
    <div className="card ">
      <div className="card-body">
        <h3 className="card-title">Informações sobre o pico</h3>
        <div className="d-flex justify-content-between">
          <h4 className="text-muted">{Beach_Name}</h4>
          <h5 className="text-muted">{Spot_Name}</h5>
          <h5 className="text-muted">Tipo de onda : {Wave_Type}</h5>
          <h5 className="text-muted"> Descrição do dia : {Wave_Primary_Direction}</h5>
          <h5 className="text-muted"> Temperatura {Wave_Secondary_Direction}</h5>
          <h5 className="text-muted">{LevelSTR}</h5>
        </div>
      </div>
    </div>
  );
};

export default BeachInfo;
