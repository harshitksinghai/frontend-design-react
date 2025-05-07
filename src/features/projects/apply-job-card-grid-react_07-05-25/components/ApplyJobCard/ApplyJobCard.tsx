import { Job } from '../../types/jobTypes';
import styles from './ApplyJobCard.module.css'

interface ApplyJobCardProps {
    job: Job;
}
const ApplyJobCard: React.FC<ApplyJobCardProps> = ({job}) => {
    return (
        <>
            <div className={styles.cardContainer}>
                {job.companyName}
            </div>
        </>
    )
}
export default ApplyJobCard;