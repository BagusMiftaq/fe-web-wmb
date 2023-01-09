import {Dashboard, PageNotFound} from "../pages"
import constants from "../constants";
import {createBrowserRouter} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import authRoutes from "./routes/authRoutes";
import menuRoutes from "./routes/menuRoutes";
import tableRoutes from "./routes/tableRoutes";
import orderRoutes from "./routes/orderRoutes";

const {ROUTES} = constants;

const navigationConfigs = createBrowserRouter([
    {path: "*", element:<PageNotFound/>},
    {
        path: ROUTES.DASHBOARD,
        element: <ProtectedRoutes/>,
        children: [
            {index:true, element:<Dashboard/>}, menuRoutes, tableRoutes, orderRoutes
        ]
    },
    authRoutes,
])

export default navigationConfigs;