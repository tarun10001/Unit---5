import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
	const {
		theme,
		themeModes: { dark, light },
	} = useContext(ThemeContext);
	return (
		<footer style={theme ? { ...dark } : { ...light }}>
			<p>Lorem ipsum dolor sit amet.</p>
			<p>copyright@footer.com</p>
		</footer>
	);
};

export default Footer;
