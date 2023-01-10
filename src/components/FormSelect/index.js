import {
    Form, FormLabel, FormGroup
} from "react-bootstrap";

const FormSelect = ({label, onChange, value, disabled}) => (
    <FormGroup className={"mb-3"}>
        <FormLabel>{label}</FormLabel>
        <Form.Select
            onChange={onChange}
            isValid={value}
            value={value}
        >
            <option disabled selected>select category</option>
            <option
                value="FOOD"
                disabled={disabled}>FOOD
            </option>
            <option
                value="BEVERAGE"
                disabled={disabled}>BEVERAGE
            </option>
        </Form.Select>
    </FormGroup>
)

export default FormSelect;