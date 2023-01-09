import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import React from "react";

const OrderItem = ({data, onDelete}) => {
    return(
        <StyledListItem action>
            <Col>
                <h4 className="font-weight-bold">{data?.title}</h4>
                <p>Rp. {(data?.price)}</p>
            </Col>
        </StyledListItem>
    )
}

export default React.memo(OrderItem);