import batteryimg from '../../../../assets/images/trackpad 1.png'
const BatteryReplacement = () => {
	return (
		<div className="flex rounded-lg bg-bgPrimary w-full col-span-12">
			<div className="flex flex-col justify-between ">
				<h3 className="font-bold p-2 pb-0">Battery Replacement</h3>
				<p className="text-lg lg:text-3xl ml-4">
					Get back to 100% battery health. With 6 month replacement
					warranty.{' '}
				</p>
				<div></div>
			</div>
			<img className="w-2/5 rounded-lg" src={batteryimg} alt="" />
		</div>
	)
}

export default BatteryReplacement
