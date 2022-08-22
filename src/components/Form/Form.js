import { useState } from 'react'

const Form = ({onFormSubmit}) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const className = 'form'

	return (
		<form 
			className={className}
			onSubmit={onFormSubmit}
		>
			<label className={`${className}__field`}>
				<input 
					type='email' 
					name='email'
					value={email}
					placeholder='Email'
					onChange={(event) => setEmail(event.target.value)}
				/>
			</label>

			<label className={`${className}__field`}>
				<input 
					type='password' 
					name='password'
					value={password}
					placeholder='Password'
					onChange={(event) => setPassword(event.target.value)}
				/>
			</label>
			
			<button
				className={`${className}__submit`}
				type='submit'
				disabled={!email.length || password.length < 6}
			>
				Submit
			</button>
		</form>
	)
}

export default Form