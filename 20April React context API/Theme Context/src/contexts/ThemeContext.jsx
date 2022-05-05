import { createContext, useState } from 'react';
import { themeModes } from '../styles';
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(false);
	const toggleTheme = () => {
		setTheme(!theme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, themeModes }}>
			{children}
		</ThemeContext.Provider>
	);
};
