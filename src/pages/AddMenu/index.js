import useAddMenu from "./useAddMenu";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {FormSelect, FormText, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {addMenu} from "../../store/action/menuAction";

const FORM_LIST = [
    {id: "title", label: "Menu Name", type: "text", placeholder: "Enter Menu Name"},
    {id: "price", label: "Price", type: "number", placeholder: "Enter Price"},
    {id: "description", label: "Description", type: "textarea", placeholder: "Enter Description"}
]

const AddMenu = ({addMenu}) =>{
    const {getter, setter} = useAddMenu();
    const dispacth = useDispatch();
    const onNavigate = useNavigate();

    const handleSubmit = () =>{
        addMenu(getter);
        console.log(getter);
        onNavigate(constants.ROUTES.LIST_MENU)
    }

    return(
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormText
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                )) }
                <FormSelect
                    label={"Category"}
                    placeholder={"Select category"}
                    onChange={setter.category}
                    value={getter.category}
                />
                <ButtonGroup>
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => onNavigate(constants.ROUTES.LIST_MENU)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addMenu : menu => dispatch(addMenu(menu))
})

export default connect(null, mapDispatchToProps) (AddMenu);