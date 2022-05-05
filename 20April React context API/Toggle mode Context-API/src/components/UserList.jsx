import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import styled from 'styled-components';
import UserDetail from './UserDetail';

const UserList = () => {
	const [users, setUsers] = useState([]);
	const { isDarkMode } = useContext(ThemeContext);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const { data } = await axios(
			'https://reqres.in/api/users?page=1&per_page=3'
		);
		setUsers(data.data);
	};
	return (
		<Users
			style={{
				backgroundColor: isDarkMode ? '#4d4d4d' : '#f6f6f6',
			}}
		>
			{users.map(user => (
				<UserDetail key={user.id} user={user} />
			))}
		</Users>
	);
};

export default UserList;

const Users = styled.div`
	width: 45%;
	margin: 1rem 0 0 2rem;
	padding: 1rem;
`;
