import styles from './todo-form.module.css';

export const TodoForm = () => {
    return (
        <form className={styles.form_container}>
            TodoForm
            <input name='todo-input' id='todo-input' />
            <button className={styles.submit_button}>Add</button>
        </form>
    );
};
