import useAddMenu from "./useAddMenu";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {FormSelect, FormText, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {addMenu} from "../../services/menuApi";
import useFetchMutation from "../../hooks/useFetchMutation";

const FORM_LIST = [
    {id: "title", label: "Menu Name", type: "text", placeholder: "Enter Menu Name"},
    {id: "price", label: "Price", type: "number", placeholder: "Enter Price"},
]

const AddMenu = () =>{
    const {getter, setter} = useAddMenu();
    const onNavigate = useNavigate();
    const {fetchMutation, loading} = useFetchMutation(addMenu,()=>onNavigate(constants.ROUTES.LIST_MENU));

    console.log(getter.category)

    const handleSubmit = () =>{
        const payload = new FormData();
        payload.append("title", getter.title);
        payload.append("price", getter.price);
        payload.append("category", getter.category);

        fetchMutation(payload)
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
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable || loading}>
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

export default AddMenu;