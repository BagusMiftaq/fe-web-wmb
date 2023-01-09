import {
    Form, FormLabel, FormGroup
} from "react-bootstrap";

const FormSelect = ({label, onChange, value, disabled})=>(
    <FormGroup className={"mb-3"}>
        <FormLabel>{label}</FormLabel>
        <Form.Select
        onChange={onChange}
        isValid={value}>
            <option disabled selected>select category</option>
                <option
                    value={"food"}
                    selected={"food"===value}
                    disabled={disabled}>Food</option>
            <option
                value={"beverage"}
                selected={"beverage"===value}
                disabled={disabled}>Beverage</option>
        </Form.Select>
    </FormGroup>
)

export default FormSelect;