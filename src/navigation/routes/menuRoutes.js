import MenuList from "../../pages/MenuList";
import {AddMenu} from "../../pages";
import constants from "../../constants";

const {ROUTES} = constants;

const menuRoutes = ({
    path: ROUTES.LIST_MENU,
    children : [
        {index : true, element:<MenuList/>},
        {path: ROUTES.ADD_MENU, element: <AddMenu/>},
    ]
})

export default menuRoutes;