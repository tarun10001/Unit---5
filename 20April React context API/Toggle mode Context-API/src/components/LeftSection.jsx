import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import styled from 'styled-components';

const LeftSection = () => {
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<LeftNav
			style={{
				backgroundColor: isDarkMode ? '#000' : '#fff',
			}}
		>
			<div className='pic'>
				<img
					src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
					alt='profile picture'
				/>
			</div>
		</LeftNav>
	);
};

export default LeftSection;

const LeftNav = styled.div`
	width: 7%;
	height: 100vh;
	text-align: center;
	display: flex;
	flex-direction: column;
	& .pic > img {
		width: 70%;
		margin-top: 1rem;
		border-radius: 50%;
	}
`;
