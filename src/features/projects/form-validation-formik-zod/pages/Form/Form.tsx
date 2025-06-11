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
                            <h3>Email</h3>
                            <input type='email' name='email' className={styles.input} placeholder='Enter Email' />
                        </div>
                        <div className={styles.field}>
                            <h3>Email</h3>
                            <input type='email' name='email' className={styles.input} placeholder='Enter Email' />
                        </div>
                        <div className={styles.field}>
                            <h3>Email</h3>
                            <input type='email' name='email' className={styles.input} placeholder='Enter Email' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;