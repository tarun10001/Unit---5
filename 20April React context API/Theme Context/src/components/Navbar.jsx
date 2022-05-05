import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
	const {
		theme,
		toggleTheme,
		themeModes: { dark, light },
	} = useContext(ThemeContext);

	return (
		<nav style={theme ? { ...dark } : { ...light }}>
			<button
				onClick={() => {
					toggleTheme();
				}}
			>
				{theme ? 'toggle light' : 'toggle dark'}
			</button>
		</nav>
	);
};

export default Navbar;
