import './firebase'
import './scss/index.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserProvider from './providers/UserProvider'

const $root = document.querySelector('#root')
const root = createRoot($root)

root.render(
	<BrowserRouter>
		<UserProvider>
			<App />
		</UserProvider>
	</BrowserRouter>
)