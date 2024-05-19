import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Admin/Sidebar'

const AdminLayout = () => {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-3 ">
				<Sidebar />
			</div>
			<div className="col-span-9">
				<Outlet />
			</div>
		</div>
	)
}

export default AdminLayout
