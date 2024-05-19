import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className="h-12 fixed w-full flex justify-between px-5 items-center ">
			<NavLink to="/">
				<h1 className="text-2xl font-bold">iRepair</h1>
			</NavLink>

			<ul className="flex space-x-5 font-semibold">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/services">Services</NavLink>
				<NavLink to="/admin/dashboard">Dashboard</NavLink>
				<button className="btn">
					<NavLink to="/login">Login</NavLink>
				</button>
			</ul>
		</header>
	)
}

export default Navbar
