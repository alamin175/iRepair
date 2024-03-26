import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../pages/About/About'
import Home from '../pages/Home/Home/Home'
import Services from '../pages/Home/Services/Services'
import Login from '../pages/Login/Login'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'about',
				element: <About></About>,
			},
			{
				path: 'services',
				element: <Services></Services>,
			},
			{
				path: 'login',
				element: <Login></Login>,
			},
		],
	},
])

export default router
