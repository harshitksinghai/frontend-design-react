import { z } from 'zod'
import styles from './Form.module.css'
import { formFieldValidations } from './formValidation'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import CustomPhoneInput from '../../components/PhoneInput'

const Form = () => {

    const formSchema = z.object({
        fname: formFieldValidations.fname,
        mname: formFieldValidations.mname,
        lname: formFieldValidations.lname,
        dob: formFieldValidations.dob,
        phNo: formFieldValidations.phNo,
        email: formFieldValidations.email,
        password: formFieldValidations.password,
        confirmPassword: formFieldValidations.confirmPassword
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: "Password and Confirm Password do not match"
    })

    const initialValues = {
        fname: '',
        mname: '',
        lname: '',
        dob: '',
        phNo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: toFormikValidationSchema(formSchema, {
            errorMap: (issue, ctx) => {
                // This preserves the original error message
                return { message: issue.message || ctx.defaultError };
            },
        }),
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            // formik.resetForm();
        }
    })

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.title}>
                        <h1>Form Validation</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.content}>
                            <div className={`${styles.field} ${styles.nameField}`}>
                                <h3>First Name*</h3>
                                <input
                                    type='text'
                                    name='fname'
                                    className={styles.input}
                                    placeholder='Enter First Name'
                                    value={formik.values.fname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.fname && formik.errors.fname && (
                                    <div className={styles.errorText}>{formik.errors.fname}</div>
                                )}
                            </div>
                            <div className={`${styles.field} ${styles.nameField}`}>
                                <h3>Middle Name</h3>
                                <input
                                    type='text'
                                    name='mname'
                                    className={styles.input}
                                    placeholder='Enter Middle Name'
                                    value={formik.values.mname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.mname && formik.errors.mname && (
                                    <div className={styles.errorText}>{formik.errors.mname}</div>
                                )}
                            </div>
                            <div className={`${styles.field} ${styles.nameField}`}>
                                <h3>Last Name*</h3>
                                <input
                                    type='text'
                                    name='lname'
                                    className={styles.input}
                                    placeholder='Enter Last Name'
                                    value={formik.values.lname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.lname && formik.errors.lname && (
                                    <div className={styles.errorText}>{formik.errors.lname}</div>
                                )}
                            </div>

                            <div className={`${styles.field} ${styles.dobField}`}>
                                <h3>Date of Birth*</h3>
                                <input
                                    type='date'
                                    name='dob'
                                    className={styles.input}
                                    placeholder='Enter Date of Birth'
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.dob && formik.errors.dob && (
                                    <div className={styles.errorText}>{formik.errors.dob}</div>
                                )}
                            </div>
                            <div className={`${styles.field} ${styles.phField}`}>
                                <h3>Phone No.*</h3>
                                <CustomPhoneInput
                                    name="phNo"
                                    value={formik.values.phNo}
                                    onChange={(value) => formik.setFieldValue('phNo', value)}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.phNo}
                                    touched={formik.touched.phNo}
                                />
                            </div>
                            <div className={`${styles.field} ${styles.emailField}`}>
                                <h3>Email*</h3>
                                <input
                                    type='email'
                                    name='email'
                                    className={styles.input}
                                    placeholder='Enter Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className={styles.errorText}>{formik.errors.email}</div>
                                )}
                            </div>
                            <div className={`${styles.field} ${styles.passField}`}>
                                <h3>Password*</h3>
                                <input
                                    type='password'
                                    name='password'
                                    className={styles.input}
                                    placeholder='Enter Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className={styles.errorText}>{formik.errors.password}</div>
                                )}
                            </div>
                            <div className={`${styles.field} ${styles.passField}`}>
                                <h3>Confirm Password*</h3>
                                <input
                                    type='password'
                                    name='confirmPassword'
                                    className={styles.input}
                                    placeholder='Re-Enter Password'
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                    <div className={styles.errorText}>{formik.errors.confirmPassword}</div>
                                )}
                            </div>
                            <button 
                                type="submit" 
                                className={styles.submit}
                                disabled={formik.isSubmitting}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Form