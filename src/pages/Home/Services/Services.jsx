import Container from '../../../components/Container/Container'
import BatteryReplacement from './BatteryReplacement/BatteryReplacement'
import ChipReplace from './ChipReplace/ChipReplace'
import DataRecovery from './DataRecovery/DataRecovery'
import ExtraServices from './ExtraServices/ExtraServices'
import StorageReplacement from './StorageReplacement/StorageReplacement'

const Services = () => {
	return (
		<Container className="my-44">
			<div className="text-center ">
				<h1 className="text-5xl font-bold mb-6">
					<span className="text-lime-400 ">Services</span> that we provide.
				</h1>
				<p className="max-w-[80ch] mx-auto">
					We provide various computer repair services and solutions for our
					new and regular customers. Feel free to find out more below.
				</p>
			</div>
			<div className="grid px-3 lg:px-16 mt-20 gap-10 items-center grid-cols-12">
				<BatteryReplacement></BatteryReplacement>
				<ChipReplace></ChipReplace>
				<DataRecovery></DataRecovery>
				<StorageReplacement></StorageReplacement>
				<ExtraServices></ExtraServices>
			</div>
		</Container>
	)
}

export default Services
