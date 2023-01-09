import {
    Form, FormLabel, FormGroup
} from "react-bootstrap";

const FormSelect = ({label, onChange, value, disabled})=>(
    <FormGroup className={"mb-3"}>
        <FormLabel>{label}</FormLabel>
        <Form.Select
        onChange={onChange}
        isValid={value}>
            <option disabled selected>select status</option>
                <option
                    value={"Available"}
                    disabled={disabled}>Available</option>
            <option
                value={"Unavailable"}
                disabled={disabled}>Unavailable</option>
        </Form.Select>
    </FormGroup>
)

export default FormSelect;