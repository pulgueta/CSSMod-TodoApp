import Link from 'next/link';

import { navLinks } from '~/constants/links';

import styles from './navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navbar_container}>
            <Link href='/'>
                <h1>ACME</h1>
            </Link>
            <ul className={styles.navbar_list}>
                {navLinks.map(({ label, path }) => (
                    <li key={path} className={styles.navbar_list_item}>
                        <Link href={path}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
