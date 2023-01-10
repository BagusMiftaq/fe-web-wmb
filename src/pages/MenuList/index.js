import {StyledListGroup, StyledText} from "./styles";
import MenuItem from "./MenuItem";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import withPaginationList from "../../hoc/withPaginationList"
import {deleteMenu} from "../../services/menuApi";
import useFetchMutation from "../../hooks/useFetchMutation";
import {getMenu} from "../../services/menuApi";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, refetch}) => {

    const onNavigate = useNavigate();
    const {fetchMutation: delMenu} = useFetchMutation(deleteMenu, refetch);


    // console.log(data)

    const onDelete = (id)=> () => {
        const  isOk= window.confirm("Are U sure want to delete it?");
        if(isOk){
            delMenu(id);
        }
    }

    return (
        <>
            <StyledListGroup>
                {data?.map((item) => (
                    <MenuItem
                        data={item}
                        key={item?.menuId}
                        onDelete={onDelete(item.menuId)}
                    />
                ))}
            </StyledListGroup>
        </>
    )
}

export default (withPaginationList(List, {
    label : "Menu",
    navAdd : constants.ROUTES.ADD_MENU,
    query: getMenu
}));