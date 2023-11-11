import { TodoForm } from '~/components/todo_form/todo-form';

import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                ToDo App with Next.js and CSS Modules
            </h1>

            {/* <TodoForm /> */}
        </main>
    );
}
