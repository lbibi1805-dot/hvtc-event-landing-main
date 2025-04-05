'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}

export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
	const pathname = usePathname();

	// Check if the href is a hash link (starts with #)
	const isHashLink = href.startsWith('#');
	// Construct the correct href: if not on homepage, prepend '/' to hash links
	const adjustedHref = isHashLink && pathname !== '/' ? `/${href}` : href;

	return (
		<Link href={adjustedHref} className={className} onClick={onClick}>
			{children}
		</Link>
	);
}