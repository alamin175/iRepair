import chipimg from '../../../../assets/images/chip 1.png'

const ChipReplace = () => {
	return (
		<div className="relative rounded-lg bg-bgPrimary w-full col-span-4">
			<div
				className="absolute rounded-lg inset-0 bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${chipimg})`, opacity: '0.3' }}
			></div>
			<div className="p-3">
				<h3 className="font-bold p-2 pb-0">Chip Replacement</h3>
				<p className="text-lg lg:text-3xl ml-4">
					There is no need to replace the motherboard for a tiny little
					dead chipset.
				</p>
			</div>
		</div>
	)
}

export default ChipReplace
