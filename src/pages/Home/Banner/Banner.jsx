import Container from '../../../components/Container/Container'
import macbook from '../../../assets/images/macbook-exposed 1.png'
import { motion } from 'framer-motion'

const intro = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		y: 10,
		transition: {
			duration: 0.5,
			staggerChildren: 0.5,
			delayChildren: 1,
		},
	},
}

const introChildren = {
	hidden: { opacity: 0, y: -200 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			type: 'spring',
			bounce: 0.5,
		},
	},
}

const laptop = {
	initial: { y: 0, scale: 5 },
	animate: {
		opacity: 1,
		y: 20,
		scale: 1,
		transition: {
			duration: 1,
			y: {
				duration: 2,
				repeat: Infinity,
				repeatType: 'reverse',
				ease: 'easeInOut',
			},
		},
	},
}

const Banner = () => {
	return (
		<div className="overflow-hidden">
			<Container>
				<div className="mt-10 lg:mt-0 grid md:grid-cols-2 h-screen place-content-center items-center ">
					<motion.div variants={intro} initial="hidden" animate="visible">
						<motion.h1
							variants={introChildren}
							className="text-5xl md:text-7xl  bgPrimary font-extrabold"
						>
							{' '}
							<span className="text-textPrimary">Don't Worry</span>
							<br />
							<span> We'll fix it</span>
						</motion.h1>
						<motion.p
							variants={introChildren}
							className="max-w-[50ch] mt-6"
						>
							Welcome to <span className="font-bold">iRepair</span> ,
							your one-stop place for all kinds of{' '}
							<span className="font-bold">Macbook repairs</span> and
							diagnostics.
						</motion.p>
					</motion.div>
					<motion.div
						variants={laptop}
						initial="initial"
						animate="animate"
					>
						<img className="mt-6" src={macbook} alt="" />
					</motion.div>
				</div>
			</Container>
		</div>
	)
}

export default Banner
