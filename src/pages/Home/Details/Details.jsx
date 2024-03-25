import { useRef } from 'react'
import image from '../../../assets/images/macbook 1.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const Details = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0, 1', '1.2 1'],
	})

	const xvalue = useTransform(scrollYProgress, [0, 0.8], [-200, 1])
	const xvalue2 = useTransform(scrollYProgress, [0, 0.8], [200, 1])

	return (
		<div className="my-24 grid lg:grid-cols-2 overflow-hidden gap-8 items-center justify-center">
			<motion.div
				ref={ref}
				// variants={imgIntro}
				// initial="initial"
				// animate="animate"
				style={{ x: xvalue }}
			>
				<img src={image} alt="" />
			</motion.div>
			<motion.div
				ref={ref}
				style={{ x: xvalue2 }}
				className="mx-3 lg:mx-0 lg:mr-8"
			>
				<h1 className="text-4xl font-bold mb-20">Who we are</h1>
				<p>
					At <span className="font-bold">iRepair</span>, we love MacBooks
					as much as you do. That’s why we offer fast, reliable, and
					affordable repair services for all kinds of MacBooks. Whether you
					need a screen replacement, a battery upgrade, or a software fix,
					we have the skills and experience to get your MacBook back to its
					best. We serve both individuals and businesses in{' '}
					<span className="font-bold">Bangladesh</span>, and we guarantee
					your satisfaction. Don’t let a broken MacBook ruin your day.
					Contact iRepair today and let us take care of it.
				</p>
				<div className="flex justify-between mx-10 mt-6">
					<div>
						<p className="text-7xl text-lime-400">98%</p>
						<p className="text-textPrimary">Successful repairs</p>
					</div>
					<div>
						<p className=" text-7xl text-lime-400">2k+ </p>
						<p className="text-textPrimary">Successful repairs</p>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Details
