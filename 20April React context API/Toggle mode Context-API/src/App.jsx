import styled from 'styled-components';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import './App.css';

const App = () => {
	return (
		<Main>
			<LeftSection />
			<RightSection />
		</Main>
	);
};

export default App;

const Main = styled.div`
	display: flex;
`;
