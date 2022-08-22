import UserContext from '../../../../contexts/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../../../components/Form'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
	const {setIsLogin, isAuth, user} = useContext(UserContext)
	const navigate = useNavigate()

	const handleLoginSubmit = (event) => {
		event.preventDefault()

		const auth = getAuth()
		const email = event.currentTarget[0].value
		const password = event.currentTarget[1].value

		if (
			isAuth && 
			email === user.email &&
			password === user.password
		) {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					setIsLogin(true)
					navigate('/', {replace: true})
				})
				.catch((error) => console.error(error.message))
		} else {
			navigate('/register', {replace: true})
		}
	}

	return (
		<Form onFormSubmit={handleLoginSubmit}/>
	)
}

export default Login