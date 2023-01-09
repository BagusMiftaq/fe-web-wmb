import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";

const FormText = ({
                      label, type, placeholder, value, onChange, disabled
                  }) => {
    let props;
    switch (type){
        case "textarea":
            props = { as: type }
        case "number":
            props= {as :type}
        case "password":
            props = {as: type}
        case "email":
            props = {as: type}
        default:
            props = { type }
            break;
    }

    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <FormControl
                {...props}
                placeholder={placeholder}
                onChange={onChange}
                isValid={!!value}
                disabled={disabled}
                value={value}
            />
        </FormGroup>
    )
}

export default FormText;
