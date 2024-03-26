import useScrollGrow from '../../../../hooks/useScrollGrow'
import { motion } from 'framer-motion'

const ExtraServices = () => {
	const { componentRef, style } = useScrollGrow()

	return (
		<>
			<motion.div
				ref={componentRef}
				style={style}
				className="flex p-4 rounded-lg bg-bgPrimary h-full w-full col-span-12 lg:col-span-4"
			>
				<div className="flex flex-col  ">
					<h1 className="font-bold pb-0 text-6xl">
						Same Day <span className="text-[#00E0B0]">Delivery</span>
					</h1>
				</div>
				<div></div>
				<div></div>
			</motion.div>
			<motion.div
				ref={componentRef}
				style={style}
				className="flex p-4 rounded-lg bg-bgPrimary h-full w-full col-span-12 lg:col-span-4"
			>
				<div className="flex flex-col  ">
					<h1 className="font-bold pb-0 text-6xl">
						<span className="text-[#00E0B0]">Free</span>
						<br />
						Diagno <br />
						<span>stics</span>
					</h1>
				</div>
				<div></div>
				<div></div>
			</motion.div>
			<motion.div
				ref={componentRef}
				style={style}
				className="flex  p-4 rounded-lg bg-bgPrimary h-full w-full col-span-12 lg:col-span-4"
			>
				<motion.div
					ref={componentRef}
					style={style}
					className="flex flex-col  "
				>
					<h1 className="font-bold pb-0 text-6xl">
						Remote <span className="text-[#00E0B0]">Support</span> Service
					</h1>
				</motion.div>
				<div></div>
				<div></div>
			</motion.div>
		</>
	)
}

export default ExtraServices
