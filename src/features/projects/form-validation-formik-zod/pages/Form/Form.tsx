import styles from './Form.module.css'

const Form = () => {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.title}>
                        <h1>Form Validation</h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.field}>
                            <h3>First Name</h3>
                            <input type='text' className={styles.input} placeholder='Enter First Name' />
                        </div>
                        <div className={styles.field}>
                            <h3>Middle Name</h3>
                            <input type='text' className={styles.input} placeholder='Enter Middle Name' />
                        </div>
                        <div className={styles.field}>
                            <h3>Last Name</h3>
                            <input type='text' className={styles.input} placeholder='Enter Last Name' />
                        </div>
                        <div className={`${styles.field} ${styles.emailField}`}>
                            <h3>Email</h3>
                            <input type='email' className={styles.input} placeholder='Enter Email' />
                        </div>
                        <button className={styles.submit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;