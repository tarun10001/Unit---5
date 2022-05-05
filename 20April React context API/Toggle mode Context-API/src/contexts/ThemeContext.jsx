import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};
	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
