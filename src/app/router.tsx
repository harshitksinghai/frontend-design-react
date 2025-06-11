import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../features/home/pages/HomePage/HomePage";
import ApplyJobPage from "../features/projects/apply-job-card-grid-react_07-05-25/pages/ApplyJobPage/ApplyJobPage";
import PortfolioHomePage from "../features/projects/mui-portfolio-react/pages/PortfolioHomePage";
import Form from "../features/projects/form-validation-formik-zod/pages/Form/Form";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/projects/apply-job-card-grid',
            element: <ApplyJobPage />
          },
          {
            path: '/projects/portfolio-mui-react',
            element: <PortfolioHomePage />
          },
          {
            path: '/projects/form-validation-formik-zod',
            element: <Form />
          },
        //   {
        //     path: '/product/:productId',
        //     element: <ProductPage />
        //   },
        ],
      },
])