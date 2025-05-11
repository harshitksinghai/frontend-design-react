import { capitalizeFirstLetter } from '../../../utils/helperFunctions';
import styles from './JobPaper.module.css';

interface JobPaperProps {
    tag: string;
}
const JobPaper: React.FC<JobPaperProps> = ({tag}) => {

    return (
        <>
            <div className={styles.paper}>
                {capitalizeFirstLetter(tag)}
            </div>
        </>
    )
}
export default JobPaper;