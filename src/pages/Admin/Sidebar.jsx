import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard } from 'react-icons/md'

const Sidebar = () => {
	return (
		<nav className="flex flex-col h-screen bg-gray-100 ">
			<NavLink
				className={({ isActive }) =>
					`bg-gray-300 m-2 p-2 rounded-md  flex items-center gap-1 transition-all ${
						isActive ? 'bg-gray-500 text-white' : ''
					}`
				}
				to="/admin/dashboard"
			>
				<MdOutlineDashboard className="shrink-0" />
				<span className="truncate">Dashboard</span>
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					`bg-gray-300 m-2 p-2 rounded-md  flex items-center gap-1 transition-all ${
						isActive ? 'bg-gray-500 text-white' : ''
					}`
				}
				to="/admin/addService"
			>
				<MdOutlineDashboard className="shrink-0" />
				<span className="truncate">Add Service</span>
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					`bg-gray-300 m-2 p-2 rounded-md  flex items-center gap-1 transition-all ${
						isActive ? 'bg-gray-500 text-white' : ''
					}`
				}
				to="/admin/serviceList"
			>
				<MdOutlineDashboard className="shrink-0" />
				<span className="truncate">Service List</span>
			</NavLink>
		</nav>
	)
}

export default Sidebar
