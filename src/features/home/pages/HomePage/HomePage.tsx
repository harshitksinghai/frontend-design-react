import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            HomePage:
            <br />
            <br />
            <Link to={'/projects/apply-job-card-grid'}>
                apply-job-card-grid
            </Link>
            <br />
            <Link to={'/projects/portfolio-mui-react'}>
                portfolio-mui-react
            </Link>
            <br />
            <Link to={'/projects/form-validation-formik-zod'}>
                form-validation-formik-zod
            </Link>
            
        </>
    )
}
export default HomePage;
