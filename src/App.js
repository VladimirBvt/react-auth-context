import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserPage from './pages/UserPage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<UserPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />}/>
		</Routes>
	)
}

export default App