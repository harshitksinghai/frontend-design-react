import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            HomePage:
            <br />

            <Link to={'/projects/apply-job-card-grid'}>
                apply-job-card-grid
            </Link>
        </>
    )
}
export default HomePage;