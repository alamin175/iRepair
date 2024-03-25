import useScrollGrow from '../../../../hooks/useScrollGrow'
import { motion } from 'framer-motion'

const DataRecovery = () => {
	const { style, componentRef } = useScrollGrow()
	return (
		<motion.div
			ref={componentRef}
			style={style}
			className="lg:flex rounded-lg bg-bgPrimary h-full w-full col-span-8"
		>
			<div className="flex flex-col justify-between ">
				<h3 className="font-bold p-2 pb-0">Data Recovery</h3>
				<p className="text-lg lg:text-3xl ml-4">
					Lost your old memories ? Lost your project? Don’t worry, We will
					recover it for you
				</p>
				<div></div>
			</div>
		</motion.div>
	)
}

export default DataRecovery
