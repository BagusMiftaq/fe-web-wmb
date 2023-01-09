import constants from "../../constants";
import Order from "../../pages/Order";

const {ROUTES} = constants;

const orderRoutes = ({
    path: ROUTES.TRANSACTION_LIST,
    children : [
        {index : true, element:<Order/>},
    ]
})

export default orderRoutes;