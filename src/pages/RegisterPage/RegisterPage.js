import Title from '../../components/Title'
import Register from './components/Register'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
	const className = 'register'

	return (
		<div className={className}>
			<Title parentClassName={className}>Register</Title>
			<Register />
			<Link to='/login'>Log in</Link>
		</div>
	)
}

export default RegisterPage