import { useEffect } from 'react';
import { BlockCardInfo } from '../../Cards/BlockCardInfo';
import { useCrudTableStore } from '../../../hooks/useCrudTableStore';

export default function DashboardPage() {
	const { startLoadingTable } = useCrudTableStore();

	useEffect(() => {
		startLoadingTable('dashboard');
	}, []);

	return <BlockCardInfo />;
}
