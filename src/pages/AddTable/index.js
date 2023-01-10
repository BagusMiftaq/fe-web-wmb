import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {FormSelect, FormText, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import useAddTable from "./useAddTable";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addTable} from "../../services/tableApi";

const AddTable = () =>{
    const {getter, setter} = useAddTable();
    const onNavigate = useNavigate();
    const {fetchMutation, loading} = useFetchMutation(addTable,()=>onNavigate(constants.ROUTES.LIST_TABLE))

    const handleSubmit = () =>{
        const payload = new FormData();
        payload.append("tableNum", getter.tableNum);
        payload.append("status", getter.tableStatus);

        fetchMutation(payload);
    }

    return(
        <StyledContainer>
            <StyledTitle>Add Table</StyledTitle>
            <Form>
                    <FormText
                        label={"Table Number"}
                        type={"text"}
                        value={getter["tableNum"]}
                        onChange={setter["tableNum"]}
                        placeholder={"Enter Table Number"}
                        key={"tableNum"}
                    />
                <ButtonGroup>
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable || loading}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => onNavigate(constants.ROUTES.LIST_TABLE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddTable;