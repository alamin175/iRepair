import img1 from '../../../assets/images/50983862563_83b949509a_o 1.png'
import img2 from '../../../assets/images/50984568211_9b17411214_o 1.png'
import img3 from '../../../assets/images/50984676197_b1a2104ea8_o 1.png'
import img4 from '../../../assets/images/50984676432_4df42503dd_o 1.png'
import { motion } from 'framer-motion'
import useScrollGrow from '../../../hooks/useScrollGrow'

const Team = () => {
	const { componentRef, style } = useScrollGrow()

	const hoverEffct = {
		scale: 1.05,
		type: 'easeinout',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	}
	return (
		<div className="bg-bgPrimary p-6 ">
			<div className="mb-14 p-6">
				<h1 className="text-5xl font-bold text-center">
					Meet our <span className="text-lime-400">Team</span>
				</h1>
				<p className="max-w-[60ch] mx-auto mt-4">
					All our technicians are fully qualified and licensed. Moreover,
					they are incredibly skillful and proficient in various aspects of
					computer repair.
				</p>
			</div>
			<motion.div
				ref={componentRef}
				style={style}
				className="grid grid-cols-4 w-11/12 mx-auto overflow-hidden mb-20"
			>
				<motion.img whileHover={hoverEffct} src={img1} alt="" />
				<motion.img whileHover={hoverEffct} src={img2} alt="" />
				<motion.img whileHover={hoverEffct} src={img3} alt="" />
				<motion.img whileHover={hoverEffct} src={img4} alt="" />
			</motion.div>
		</div>
	)
}

export default Team
