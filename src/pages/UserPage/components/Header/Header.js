import Logo from './components/Logo'
import Logout from './components/Logout'

const Header = () => {
	const className = 'header'

	return (
		<header className={className}>
			<div className={`${className}__wrapper`}>
				<Logo parentClassName={className} />
				<Logout parentClassName={className} />
			</div>
		</header>
	)
}

export default Header