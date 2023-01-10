import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import React from "react";

const OrderItem = ({data}) => {
    return (
        <div style={{marginRight:"10px", height:"40px"}}>
            <Button className="font-weight-bold" variant={"outline-primary"}>{data?.title}</Button>
        </div>
    )
}

export default React.memo(OrderItem);