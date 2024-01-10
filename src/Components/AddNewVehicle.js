import React, {useState} from "react";
import faker from "faker";

const AddNewVehicle = ({ onAddVehicle }) => {
	const [newVehicle, setNewVehicle] = useState({
		id: faker.vehicle.vrm(),
      name: faker.vehicle.vehicle(),
      vin: faker.vehicle.vin(),
      color: faker.vehicle.color(),
	});

	const handleChange = (e) => {
		const fakeId = faker.vehicle.vrm();
		const vehicleToAdd = {id: fakeId, ...newVehicle };
		onAddVehicle(vehicleToAdd);
		setNewVehicle({
	  id: faker.vehicle.vrm(),
      name: faker.vehicle.vehicle(),
      vin: faker.vehicle.vin(),
      color: faker.vehicle.color(),
		});
	};

	return (
		<div>
			<h2>Add New Vehicle</h2>
			<form>
				<label>
					id:
					<input
					type="text"
					name="id"
					value={newVehicle.id}
					onChange={handleChange}
					/>
				</label>
				<br/>
				<label>
					Name:
					<input 
					type="text"
					name="name"
					value={newVehicle.name}
					onChange={handleChange}
					/>
					</label>
					<label>
						VIN:
						<input
						type="text"
						name="vin"
						value={newVehicle.vin}
						onChange={handleChange}
						/>
					</label>
					<br/>
					<label>
						Color:
						<input
						type="text"
						name="color"
						value={newVehicle.color}
						onChange={handleChange}
						/>
					</label>
					<br/>
					<button type="button" onClick={handleChange}>
						Add Vehicle
					</button>
			</form>
		</div>
	);
};
export default AddNewVehicle;