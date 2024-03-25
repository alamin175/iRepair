import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className="h-12 fixed w-full flex justify-between px-5 items-center ">
			<h1 className="text-2xl font-bold">iRepair</h1>

			<ul className="flex space-x-5">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/services">Services</NavLink>
				<button className="btn bg-orange-600">
					<NavLink to="/services">Login</NavLink>
				</button>
			</ul>
		</header>
	)
}

export default Navbar
