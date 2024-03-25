import storageimg from '../../../../assets/images/harddrivecable 1.png'
const StorageReplacement = () => {
	return (
		<div className="flex rounded-lg bg-bgPrimary w-full col-span-12">
			<div className="flex flex-col justify-between ">
				<h3 className="font-bold p-2 pb-0">Storage Replacement</h3>
				<p className="text-lg lg:text-3xl ml-4">
					Get rid of your slow HDD, upgrade to super fast SSD with ease
				</p>
				<div></div>
			</div>
			<img className="w-2/5 rounded-lg" src={storageimg} alt="" />
		</div>
	)
}

export default StorageReplacement
