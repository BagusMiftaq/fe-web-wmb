import {StyledListGroup, StyledText} from "./styles";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import withPaginationList from "../../hoc/withPaginationList"
import {deleteTable, getTable} from "../../services/tableApi";
import TableItem from "./TableItem";
import useFetchMutation from "../../hooks/useFetchMutation";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, refetch}) => {
    const onNavigate = useNavigate();
    const {fetchMutation: delTable} = useFetchMutation(deleteTable, refetch);

    // console.log(data)

    const onDelete = (id)=> () => {
        const  isOk= window.confirm("Are U sure want to delete it?");
        if(isOk){
            delTable(id);
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

export default (withPaginationList(List, {
    label : "Table",
    navAdd : constants.ROUTES.ADD_TABLE,
    query: getTable
}));