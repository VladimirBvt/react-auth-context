import {ReactComponent as LogoIcon} from './assets/logo.svg'

const Logo = ({parentClassName}) => {
	const className = parentClassName
		? `${parentClassName}__logo`
		: 'logo'

	const handleLogoClick = () => console.log('handleLogoClick')

	return (
		<button 
			type='button' 
			className={className}
			onClick={handleLogoClick}
		>
			<LogoIcon />
		</button>
	)
}

export default Logo