import { useEffect, useState } from 'react'
import UserContext from '../contexts/UserContext'

const UserProvider = ({children}) => {

	const [isAuth, setIsAuth] = useState(() => (
		localStorage.getItem('isAuth') === 'true'
	))

	const [isLogin, setIsLogin] = useState(() => (
		localStorage.getItem('isLogin') === 'true'
	))

	const [user, setUser] = useState(() => (
		JSON.parse(localStorage.getItem('user')) ?? null
	))

	useEffect(() => localStorage.setItem('isAuth', isAuth), [isAuth])

	useEffect(() => localStorage.setItem('isLogin', isLogin), [isLogin])

	useEffect(() => localStorage.setItem('user', JSON.stringify(user)), [user])

	const value = {
		isAuth,
		setIsAuth,
		isLogin,
		setIsLogin,
		user,
		setUser
	}
	
	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider