import {StyledListGroup, StyledText} from "./styles";
import MenuItem from "./MenuItem";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {Button} from "react-bootstrap";
import withPaginationList from "../../hoc/withPaginationList"
import {deleteMenu} from "../../store/action/menuAction";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data}) => {

    const dispatch = useDispatch();
    const onNavigate = useNavigate();

    console.log(data)

    const onDelete = (id)=> () => {
        const  isOk= window.confirm("Are U sure want to delete it?");
        if(isOk){
            dispatch(deleteMenu(id))
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

const mapStateToProps = state => ({
    listData : state.menus.menuList,
    pagination: state.menus.pagination
})

export default connect(mapStateToProps, null) (withPaginationList(List, {
    label : "Menu",
    navAdd : constants.ROUTES.ADD_MENU
}));