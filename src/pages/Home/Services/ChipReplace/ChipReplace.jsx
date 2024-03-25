import chipimg from '../../../../assets/images/chip 1.png'
import useScrollGrow from '../../../../hooks/useScrollGrow'
import { motion } from 'framer-motion'

const ChipReplace = () => {
	const { componentRef, style } = useScrollGrow()

	return (
		<motion.div
			ref={componentRef}
			style={style}
			className="relative rounded-lg bg-bgPrimary w-full col-span-4"
		>
			<div
				className="absolute rounded-lg inset-0 bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${chipimg})`, opacity: '0.3' }}
			></div>
			<div className="p-2">
				<h3 className="font-bold p-2 pb-0">Chip Replacement</h3>
				<p className="text-lg lg:text-3xl ml-4">
					There is no need to replace the motherboard for a tiny little
					dead chipset.
				</p>
			</div>
		</motion.div>
	)
}

export default ChipReplace
