import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Button = ({ children }) => {
	const {
		theme,
		themeModes: { dark, light },
	} = useContext(ThemeContext);
	return <button style={theme ? { ...dark } : { ...light }}>{children}</button>;
};

export default Button;
