import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import React from "react";
import {motion} from "framer-motion";

const MenuItem = ({data, onDelete}) => {
    return(
        <motion.div
        initial={
            {
                x : 100,
                y:200
            }
        }
            animate={{
                x: 0,
                y:0
            }}>
            <StyledListItem action >
                <Col>
                    <h3 className="font-weight-bold">{data?.title}</h3>
                    <p>Rp. {Number(data?.price).toLocaleString("id-ID")}</p>
                </Col>
                <ButtonGroup>
                    <Button variant="outline-danger" style={{width: "100px"}} onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </StyledListItem>
        </motion.div>
    )
}

export default React.memo(MenuItem);