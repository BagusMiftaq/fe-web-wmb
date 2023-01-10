import constants from "../../constants";
import {Navigate, Outlet} from "react-router-dom";
import {NavBar} from "../../components";
import {getToken} from "../../utils/token";

const {ROUTES} = constants;
const ProtectedRoutes = () => {
    const token = getToken();
    if(!token){
        return <Navigate to={ROUTES.LOGIN} replace/>
    }

    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default ProtectedRoutes;