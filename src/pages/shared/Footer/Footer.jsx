import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'

import './footer.css'

const Footer = () => {
	return (
		<div className="main p-10">
			<h1 className="text-3xl text-gray-500 md:text-5xl font-bold text-center m-10">
				Contact with us
			</h1>
			<div className="text-5xl m-10 flex justify-center gap-10">
				<a
					className="hover:text-blue-500"
					href="https://www.facebook.com/profile.php?id=100024270469893"
					target="blank"
				>
					<FaFacebook />
				</a>
				<a
					className="hover:text-gray-500"
					href="https://github.com/alamin175"
					target="blank"
				>
					<FaGithub />
				</a>
				<a
					className="hover:text-blue-500"
					href="https://twitter.com/al_amin175"
					target="blank"
				>
					<FaTwitter />
				</a>
			</div>
		</div>
	)
}

export default Footer
