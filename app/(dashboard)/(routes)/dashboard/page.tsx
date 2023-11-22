import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
	return (
		<div>
			<UserButton afterSignOutUrl='/' />
			dashboard (protected)
		</div>
	)
}
