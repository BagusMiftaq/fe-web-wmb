import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import React from "react";

const MenuItem = ({data, onDelete}) => {
    return(
        <StyledListItem action>
            <Col>
                <h3 className="font-weight-bold">{data?.title}</h3>
                <p>Rp. {(data?.price)}</p>
            </Col>
                <ButtonGroup>
                    <Button variant="outline-danger" style={{width: "100px"}} onClick={onDelete}>Delete</Button>
                </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(MenuItem);