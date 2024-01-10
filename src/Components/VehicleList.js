import React from "react";
import faker from 'faker';

const VehicleList = ({ vehicles }) => {
	return (
		<div>
			<h2>All Vehicles</h2>
			<ul>
				{vehicles.map((vehicle) => (

					<li key={vehicle} >
						ID: {vehicle.id},
						<br/>
						 Name: {vehicle.name},
						 <br/>
						 VIN: {vehicle.vin},
						 <br/>
						  Color: {vehicle.color},

					</li>
				))}
			</ul>
			</div>
		
	);
};
export default VehicleList;