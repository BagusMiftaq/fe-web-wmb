import {StyledListGroup, StyledText} from "./styles";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import withPaginationList from "../../hoc/withPaginationList"
import {deleteTable} from "../../store/action/tableAction";
import TableItem from "./TableItem";

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
            dispatch(deleteTable(id))
        }
    }

    return (
        <>
            <StyledListGroup>
                {data?.map((item) => (
                    <TableItem
                        data={item}
                        key={item?.tableNum}
                        onDelete={onDelete(item.tableNum)}
                    />
                ))}
            </StyledListGroup>
        </>
    )
}

const mapStateToProps = state => ({
    listData : state.tables.tableList,
    pagination: state.tables.pagination
})

export default connect(mapStateToProps, null) (withPaginationList(List, {
    label : "Table",
    navAdd : constants.ROUTES.ADD_TABLE
}));