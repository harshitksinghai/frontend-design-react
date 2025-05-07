import ApplyJobCard from '../../components/ApplyJobCard/ApplyJobCard';
import { jobData } from '../../data/jobData';
import styles from './ApplyJobPage.module.css'

const ApplyJobPage = () => {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.gridContainer}>

                    {/*   {jobData.map((job) => {
                    return (
                        <div key={job.jobId}>
                            <ApplyJobCard job={job} />
                        </div>
                    )
                })} */}
                    <ApplyJobCard job={jobData[0]} />
                </div>
            </div>
        </>
    )
}
export default ApplyJobPage;