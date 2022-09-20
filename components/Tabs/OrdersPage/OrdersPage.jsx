// Hooks
import { useEffect } from 'react';
import { useCrudTableStore } from '../../../hooks/useCrudTableStore';

// Components
import { TableData } from '../../Table/TableData';

export default function OrdersPage() {
	const { startLoadingTable } = useCrudTableStore();

	useEffect(() => {
		startLoadingTable('orders');
	}, []);

	return (
		<>
			<TableData />
		</>
	);
}
