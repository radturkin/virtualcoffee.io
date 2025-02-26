import styles from '../styles/main.css';
import { Outlet } from '@remix-run/react';
import Root from '~/components/layouts/Root';

export { CatchBoundary } from '~/components/content/NotFoundCatch';

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
	return (
		<Root>
			<Outlet />
		</Root>
	);
}
