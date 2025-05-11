import ApplyJobCard from '../../components/ApplyJobCard/ApplyJobCard';
import { jobData } from '../../data/jobData';
import styles from './ApplyJobPage.module.css'

const ApplyJobPage = () => {
    return (
        <>
            <div className={styles.pageContainer}>
            <div className={styles.applyJobSection}>
                <div className={styles.applyJobWrapper}>
                <div className={styles.applyJobContainer}>
                      {jobData.map((job) => {
                    return (
                        <div key={job.jobId}>
                            <ApplyJobCard job={job} />
                        </div>
                    )
                })}
                </div>
                </div>

                </div>

            </div>
        </>
    )
}
export default ApplyJobPage;
