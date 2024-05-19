import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../pages/About/About'
import Home from '../pages/Home/Home/Home'
import Services from '../pages/Home/Services/Services'
import Login from '../pages/Login/Login'
import AdminLayout from '../layout/AdminLayout'
import Dashboard from '../pages/Admin/Dashboard'
import AddService from '../pages/Admin/AddService'
import ServiceList from '../pages/Admin/ServiceList'

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
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'addService',
				element: <AddService />,
			},
			{
				path: 'serviceList',
				element: <ServiceList />,
			},
		],
	},
])

export default router
