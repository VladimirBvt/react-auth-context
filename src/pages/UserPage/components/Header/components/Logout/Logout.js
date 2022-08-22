import UserContext from '../../../../../../contexts/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as LogoIcon} from './assets/logout.svg'

const Logout = ({parentClassName}) => {
	const {setIsLogin} = useContext(UserContext)
	const navigate = useNavigate()

	const handleLogoutClick = () => {
		setIsLogin(false)
		navigate('/login', {replace: true})
	}

	const className = parentClassName
		? `${parentClassName}__logout`
		: 'logout'

	return (
		<button
			type='button'
			className={className}
			onClick={handleLogoutClick}
		>
			<LogoIcon />
		</button>
	)
}

export default Logout