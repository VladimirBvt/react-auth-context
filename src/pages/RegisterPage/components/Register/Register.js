import UserContext from '../../../../contexts/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import Form from '../../../../components/Form'

const Register = () => {

	const {setIsAuth, setUser} = useContext(UserContext)
	const navigate = useNavigate()

	const handleRegisterSubmit = (event) => {
		event.preventDefault()
		
		const auth = getAuth()
		const email = event.currentTarget[0].value
		const password = event.currentTarget[1].value

		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				setIsAuth(true)
				setUser({email, password})
				navigate('/', {replace: true})
			})
			.catch((error) => console.error(error.message))
	}

	return (
		<Form onFormSubmit={handleRegisterSubmit} />
	)
}

export default Register