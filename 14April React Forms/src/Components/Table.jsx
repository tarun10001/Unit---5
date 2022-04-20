import axios from "axios";
import { useEffect, useState } from "react";


export const Table = () => {

	const [item, setItem] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	// const getData = () => {
	// 	axios.get("http://localhost:8080/data").then((res) => 
	// 	{setItem(res.data)});
	// }


    


	return (
		<div>
			<table className="table">
				<thead>

					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Address</th>
						<th>Department</th>
						<th>salary</th>
						<th>Marital status</th>
					</tr>

				</thead>

<tbody>
	{item.map((d) => {

		return (
			<tr>
				<td classNam="name">{d.name}</td>
				<td classNam="age">{d.age}</td>
				<td classNam="address">{d.address}</td>
				<td classNam="department">{d.department}</td>
				<td classNam="salary">{d.salary}</td>
				<td classNam="marital_status">{d.marital_status}</td>
			</tr>
		);
	})}
</tbody>

			</table>
		</div>
	)
}
