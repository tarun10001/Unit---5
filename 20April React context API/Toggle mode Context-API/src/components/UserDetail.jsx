import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import styled from 'styled-components';

const UserDetail = ({ user }) => {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<Card
			style={{
				color: isDarkMode ? 'white' : 'black',
			}}
		>
			<CardLeft>
				<img src={user.avatar} alt={user.first_name} />
			</CardLeft>
			<CardRight>
				<p>
					<strong>First Name: </strong>
					{user.first_name}
				</p>
				<p>
					<strong>Last Name: </strong>
					{user.last_name}
				</p>
				<p>
					<strong>Email: </strong>
					{user.email}
				</p>
			</CardRight>
		</Card>
	);
};

export default UserDetail;

const Card = styled.div`
	width: 90%;
	padding: 1.3rem;
	display: flex;
`;

const CardRight = styled.div`
	width: 70%;
	padding: 0.4rem;
	display: flex;
	flex-direction: column;
`;

const CardLeft = styled.div`
	width: 20%;
	padding: 0.4rem;
	display: flex;
	& img {
		border-radius: 50%;
		margin: 0 0 0 1rem;
		width: 70%;
	}
`;
