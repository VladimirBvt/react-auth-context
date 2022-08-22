import Title from '../../components/Title'
import Login from './components/Login/Login'
import { Link } from 'react-router-dom'

const LoginPage = () => {
	const className = 'login'

	return (
		<div className={className}>
			<Title parentClassName={className}>Login</Title>
			<Login />
			<Link to='/register'>Register</Link>
		</div>
	)
}

export default LoginPage