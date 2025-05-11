import { Job } from '../../types/jobTypes';
import { capitalizeFirstLetter, capitalizeWords, getTimeAgo } from '../../utils/helperFunctions';
import JobPaper from '../ui/JobPaper/JobPaper';
import styles from './ApplyJobCard.module.css'

interface ApplyJobCardProps {
    job: Job;
}
const ApplyJobCard: React.FC<ApplyJobCardProps> = ({ job }) => {
    const rateString = (type: string): string => {
        switch(capitalizeFirstLetter(type)){
            case 'Full-time':
                return `$${job.jobPay}k`;
            case 'Part-time':
                return `$${job.jobPay}/hr`;
            case 'Contract':
                return `$${job.jobPay}/hr`;
            default:
                return '';
        }
    }
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.header}>

                </div>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <span className={styles.secondary}>{capitalizeWords(job.companyName)}</span>
                        <span className={styles.secondarySupport}>{getTimeAgo(job.jobPostDate)}</span>
                    </div>
                    <span className={styles.title}>{capitalizeWords(job.jobTitle)}</span>
                    <div className={styles.row}>
                        <JobPaper tag={job.jobType} />
                        <JobPaper tag={job.jobTag} />
                    </div>
                </div>


                <hr className={styles.divider} />
                <div className={styles.footer}>
                    <div className={styles.payLoc}>
                        <span className={styles.secondary}>{rateString(job.jobType)}</span>
                        <p className={styles.secondarySupport}>{capitalizeWords(job.jobCity)}, {job.jobStateCode}</p>
                    </div>
                    <button className={styles.button}>Apply Now</button>

                </div>
            </div>
        </>
    )
}
export default ApplyJobCard;