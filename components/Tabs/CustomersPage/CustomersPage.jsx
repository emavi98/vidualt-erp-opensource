// Hooks
import { useEffect } from 'react';
import { useCrudTableStore } from '../../../hooks/useCrudTableStore';

// Components
import { TableData } from '../../Table/TableData';

export default function CustomersPage() {
	const { startLoadingTable } = useCrudTableStore();

	useEffect(() => {
		startLoadingTable('customers');
	}, []);

	return (
		<>
			<TableData />
		</>
	);
}
