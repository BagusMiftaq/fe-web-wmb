import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import React from "react";

const TableItem = ({data, onDelete}) => {
    console.log(data)
    return(
        <StyledListItem action>
            <Col>
                <h3 className="font-weight-bold">{data?.tableNum}</h3>
                <p className={data?.status ==="AVAILABLE" ? "text-success": "text-danger"}>{(data?.status)}</p>
            </Col>
                <ButtonGroup>
                    <Button variant="outline-danger" style={{width: "100px"}} onClick={onDelete}>Delete</Button>
                </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(TableItem);