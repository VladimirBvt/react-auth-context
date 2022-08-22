import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import { Navigate } from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'

const UserPage = () => {
	const { isAuth, isLogin } = useContext(UserContext)

	if (!isAuth) return <Navigate to='/register' replace />

	if (!isLogin) return <Navigate to='/login' replace />

	return (
		<>
			<Header />
			<Section />
		</>
	)
}

export default UserPage