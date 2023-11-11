import Link from 'next/link';

import styles from './not-found.module.css';

const NotFound = () => {
    return (
        <section className={styles.viewport}>
            <h1>This app doesn&apos;t have that resource...</h1>
            <Link
                href='/'
                className={styles.go_back_button}
                aria-label='Go back to the main page'
            >
                Go back
            </Link>
        </section>
    );
};
export default NotFound;
