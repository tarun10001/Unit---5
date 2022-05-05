import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from './Button';
const Form = () => {
	const {
		theme,
		themeModes: { dark, light },
	} = useContext(ThemeContext);
	return (
		<form style={theme ? { ...dark } : { ...light }}>
			<input type='text' placeholder='email' />
			<input type='text' placeholder='password' />
			<Button>login</Button>
		</form>
	);
};

export default Form;
