import React, { useState, useEffect} from 'react';
import './App.css';
import VehicleList from './Components/VehicleList';
import faker from 'faker';
import AddNewVehicle from './Components/AddNewVehicle';

function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const randomVehicles = Array.from({ length: 10}, () => generateRandomVehicle());
    setVehicles(randomVehicles);
  }, []);

  const generateRandomVehicle = () => {
    return {
      id: faker.vehicle.vrm(),
      name: faker.vehicle.vehicle(),
      vin: faker.vehicle.vin(),
      color: faker.vehicle.color(),
    };
  };

  const addVehicle = (newVehicle) => {
setVehicles([...vehicles, newVehicle]);
  };
  return (
    <div className="App">
      <h1>Vehicle Storage</h1>
      <AddNewVehicle onAddVehicle={addVehicle} />
      <VehicleList vehicles={vehicles} />
    </div>
  );
}

export default App;
