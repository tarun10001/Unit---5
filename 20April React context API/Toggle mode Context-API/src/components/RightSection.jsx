import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import styled from 'styled-components';
import UserList from './UserList';

const RightSection = () => {
	const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
	return (
		<RightMain
			style={{
				backgroundColor: isDarkMode ? '#1e1e1e' : '#ececec',
			}}
		>
			<Top>
				<h1
					style={{
						color: isDarkMode ? 'white ' : 'black',
					}}
				>
					Users
				</h1>
				<button
					style={{
						border: 'none',
						padding: '0.3rem 0.7rem',
						cursor: 'pointer',
						backgroundColor: isDarkMode ? 'white' : 'black',
						color: isDarkMode ? 'black ' : 'white',
					}}
					onClick={() => {
						toggleDarkMode();
					}}
				>
					{isDarkMode ? 'light' : 'dark'}
				</button>
			</Top>
			<UserList />
		</RightMain>
	);
};

export default RightSection;

const RightMain = styled.div`
	width: 93%;
`;

const Top = styled.div`
	margin: 2% 0 0 3%;
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
