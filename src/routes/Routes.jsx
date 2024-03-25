import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../pages/About/About'
import Home from '../pages/Home/Home/Home'

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
		],
	},
])

export default router
