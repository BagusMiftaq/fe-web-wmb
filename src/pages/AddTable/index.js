import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {FormSelect, FormText, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import useAddTable from "./useAddTable";
import {addTable} from "../../store/action/tableAction";
import FormSelectTable from "../../components/FormSelectTable";

const AddMenu = ({addTable}) =>{
    const {getter, setter} = useAddTable();
    const dispacth = useDispatch();
    const onNavigate = useNavigate();

    const handleSubmit = () =>{
        addTable(getter);
        console.log(getter);
        onNavigate(constants.ROUTES.LIST_TABLE)
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
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
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

const mapDispatchToProps = (dispatch) => ({
    addTable : table => dispatch(addTable(table))
})

export default connect(null, mapDispatchToProps) (AddMenu);