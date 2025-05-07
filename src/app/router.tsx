import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../features/home/pages/HomePage/HomePage";
import ApplyJobPage from "../features/projects/apply-job-card-grid-react_07-05-25/pages/ApplyJobPage/ApplyJobPage";

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
        //   {
        //     path: '/product/:productId',
        //     element: <ProductPage />
        //   },
        ],
      },
])