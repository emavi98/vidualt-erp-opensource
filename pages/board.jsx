import { useSelector } from 'react-redux';
import FabAddNew from '../components/Buttons/FabAddNew';
import CrudTableModal from '../components/Modal/CrudTableModal';
import FeatureModal from '../components/Modal/FeatureModal';
import ModalConfirmation from '../components/Modal/ModalConfirmation';
import CustomersPage from '../components/Tabs/CustomersPage/CustomersPage';
import OrdersPage from '../components/Tabs/OrdersPage/OrdersPage';
import ProductsPage from '../components/Tabs/ProductsPage/ProductsPage';
import { Navbar } from '../components/Tabs/Dashboard/components/Navbar';
import { Sidebar } from '../components/Tabs/Dashboard/components/Sidebar';
import DashboardPage from '../components/Tabs/Dashboard/DashboardPage';

export default function board() {
	const { actualPage } = useSelector(state => state.storeData);

	const showFabAddNew = () => {
		switch (actualPage) {
			case 'dashboard':
				break;
			case 'customers':
				return <FabAddNew />;
			case 'products':
				return <FabAddNew />;
			case 'orders':
				return <FabAddNew />;

			default:
				break;
		}
	};

	const showContainer = () => {
		switch (actualPage) {
			case 'dashboard':
				return <DashboardPage />;
			case 'customers':
				return <CustomersPage />;
			case 'products':
				return <ProductsPage />;
			case 'orders':
				return <OrdersPage />;

			default:
				break;
		}
	};

	return (
		<>
			<Sidebar />
			<div className='ml-auto  mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
				<Navbar />
				<div className='p-2 pt-2 2xl:container'>
					<div className='flex flex-col  border-gray-300 rounded-xl'>
						{showContainer()}
					</div>
				</div>
			</div>

			<CrudTableModal />
			{showFabAddNew()}
			<ModalConfirmation />
			<FeatureModal />
		</>
	);
}
