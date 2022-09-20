// Hooks
import { useEffect } from 'react';
import { useCrudTableStore } from '../../../hooks/useCrudTableStore';

// Components
import { TableData } from '../../Table/TableData';

export default function ProductsPage() {
	const { startLoadingTable } = useCrudTableStore();

	useEffect(() => {
		startLoadingTable('products');
	}, []);

	return (
		<>
			<TableData />
		</>
	);
}
